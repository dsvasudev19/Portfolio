/**
 * Live assistant client: talks to the LangChain / LangGraph agent that runs on the
 * MCP connector server (POST {NEXT_PUBLIC_ASSISTANT_URL}/api/agent/chat, Server-Sent Events).
 *
 * Set NEXT_PUBLIC_ASSISTANT_URL to the connector's base URL (no trailing path). If it is not
 * set, or the server can't be reached, the widget says so honestly — there is no canned fallback.
 */

export const ASSISTANT_URL = (process.env.NEXT_PUBLIC_ASSISTANT_URL ?? "").trim().replace(/\/$/, "");
export const assistantIsLive = ASSISTANT_URL.length > 0;

/** The backend can't be reached or isn't configured — fall back to preview answers. */
export class AssistantUnavailable extends Error {}
/** The backend answered with a message meant for the visitor (rate limit, too long, …). */
export class AssistantMessageError extends Error {}

export type LiveTurn = { role: "user" | "assistant"; content: string };

export type StreamHandlers = {
  /** A tool started / finished. `label` is human-friendly ("Searching his projects"). */
  onStep: (label: string, status: "start" | "end") => void;
  onToken: (text: string) => void;
  /** Text streamed so far was a pre-tool aside — discard it. */
  onReset: () => void;
};

type ServerEvent =
  | { event: "step"; data: { label: string; status: "start" | "end" } }
  | { event: "token"; data: { text: string } }
  | { event: "reset"; data: Record<string, never> }
  | { event: "done"; data: { answer: string } }
  | { event: "error"; data: { code: string; message: string } };

function parseBlock(block: string): ServerEvent | null {
  let event = "";
  let data = "";
  for (const line of block.split("\n")) {
    if (line.startsWith("event:")) event = line.slice(6).trim();
    else if (line.startsWith("data:")) data += line.slice(5).trim();
  }
  if (!event || !data) return null;
  try {
    return { event, data: JSON.parse(data) } as ServerEvent;
  } catch {
    return null;
  }
}

/** Streams the answer; resolves with the final answer text. */
export async function streamAssistant(
  question: string,
  history: LiveTurn[],
  handlers: StreamHandlers,
  signal?: AbortSignal,
): Promise<string> {
  let res: Response;
  try {
    res = await fetch(`${ASSISTANT_URL}/api/agent/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "text/event-stream" },
      body: JSON.stringify({ message: question, history }),
      signal,
    });
  } catch (err) {
    if ((err as { name?: string })?.name === "AbortError") throw err;
    throw new AssistantUnavailable("Could not reach the assistant");
  }

  if (!res.ok) {
    const body = (await res.json().catch(() => null)) as { message?: string } | null;
    // Visitor-facing problems: show the server's message.
    if ([400, 403, 422, 429].includes(res.status) && body?.message) throw new AssistantMessageError(body.message);
    throw new AssistantUnavailable(`Assistant returned ${res.status}`);
  }
  if (!res.body) throw new AssistantUnavailable("No response stream");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let final = "";
  let streamed = "";
  let finished = false;

  const handle = (ev: ServerEvent) => {
    switch (ev.event) {
      case "step":
        handlers.onStep(ev.data.label, ev.data.status);
        break;
      case "token":
        streamed += ev.data.text;
        handlers.onToken(ev.data.text);
        break;
      case "reset":
        streamed = "";
        handlers.onReset();
        break;
      case "done":
        final = ev.data.answer;
        finished = true;
        break;
      case "error":
        throw new AssistantMessageError(ev.data.message);
    }
  };

  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const blocks = buffer.split("\n\n");
    buffer = blocks.pop() ?? "";
    for (const block of blocks) {
      const ev = parseBlock(block);
      if (ev) handle(ev);
    }
  }
  const tail = parseBlock(buffer);
  if (tail) handle(tail);

  // The server always ends a complete answer with a "done" event. If the connection dropped before it,
  // never present the partial text as if it were the full answer.
  if (!finished) {
    if (!streamed.trim()) throw new AssistantUnavailable("Stream ended without an answer");
    return `${streamed.trimEnd()}\n\n(The connection was interrupted before the answer finished. Please ask again.)`;
  }
  return final || streamed;
}
