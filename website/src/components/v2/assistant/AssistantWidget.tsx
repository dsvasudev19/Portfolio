"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { askAssistant, suggestions, type ChatTurn } from "./askAssistant";

type Msg = { id: number; role: "user" | "assistant"; text: string; step?: number };

const steps = ["Understanding your question", "Searching Vasudev's profile", "Writing the answer"];
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const ease = [0.22, 1, 0.36, 1] as const;

/** Open the assistant from anywhere: openAssistant("What has Vasudev built?") */
export function openAssistant(question?: string) {
  window.dispatchEvent(new CustomEvent("assistant:open", { detail: { question } }));
}

export function AssistantWidget() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [nudge, setNudge] = useState(false);
  const idRef = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  const send = useCallback(
    async (text: string) => {
      const q = text.trim();
      if (!q || busy) return;
      setBusy(true);
      setInput("");
      const history: ChatTurn[] = msgs.filter((m) => m.text).map((m) => ({ role: m.role, text: m.text }));
      const uid = ++idRef.current;
      const aid = ++idRef.current;
      setMsgs((m) => [...m, { id: uid, role: "user", text: q }, { id: aid, role: "assistant", text: "", step: 0 }]);

      const reply = askAssistant(q, history);
      for (let s = 1; s < steps.length; s++) {
        await sleep(reduce ? 0 : 650);
        if (!alive.current) return;
        setMsgs((m) => m.map((x) => (x.id === aid ? { ...x, step: s } : x)));
      }
      let answer: string;
      try {
        answer = await reply;
      } catch {
        answer = "Sorry, something went wrong. Please try again, or email Vasudev directly.";
      }
      await sleep(reduce ? 0 : 350);

      const words = answer.split(" ");
      for (let i = 1; i <= words.length; i++) {
        if (!alive.current) return;
        const chunk = words.slice(0, i).join(" ");
        setMsgs((m) => m.map((x) => (x.id === aid ? { ...x, text: chunk, step: undefined } : x)));
        if (!reduce) await sleep(32);
      }
      setBusy(false);
    },
    [busy, msgs, reduce],
  );

  const sendRef = useRef(send);
  useEffect(() => {
    sendRef.current = send;
  }, [send]);

  // Open from anywhere on the page (hero bar, buttons, …).
  useEffect(() => {
    const onOpen = (e: Event) => {
      const q = (e as CustomEvent<{ question?: string }>).detail?.question;
      setOpen(true);
      setNudge(false);
      if (q) setTimeout(() => sendRef.current(q), 450);
    };
    window.addEventListener("assistant:open", onOpen);
    return () => window.removeEventListener("assistant:open", onOpen);
  }, []);

  // Gentle nudge once, after a few seconds.
  useEffect(() => {
    const seen = (() => {
      try {
        return sessionStorage.getItem("assistant-nudged");
      } catch {
        return "1";
      }
    })();
    if (seen) return;
    const t = setTimeout(() => {
      setNudge(true);
      try {
        sessionStorage.setItem("assistant-nudged", "1");
      } catch {}
    }, 7000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  }, [msgs, reduce]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.section
            role="dialog"
            aria-label="Ask an AI about Vasudev"
            id="assistant-panel"
            onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
            initial={reduce ? false : { opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.35, ease }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-24 right-3 z-[70] flex h-[min(38rem,calc(100dvh-7.5rem))] w-[min(26rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 shadow-[0_40px_90px_-30px_rgba(79,70,229,0.55)] ring-1 ring-mu-ink/5 backdrop-blur-2xl sm:right-6"
          >
            {/* soft colour that blends the glass into the page */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-mu-lilac/70 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-mu-peach/60 blur-3xl" aria-hidden />

            <header className="relative flex items-center gap-3 border-b border-white/60 px-5 py-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-mu-accent to-violet-500 text-lg text-white shadow-md" aria-hidden>✦</span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold leading-tight text-mu-ink">Vasudev&rsquo;s AI assistant</p>
                <p className="flex items-center gap-1.5 text-sm text-mu-muted">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden /> Online · Preview
                </p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant" className="grid h-9 w-9 place-items-center rounded-full text-mu-body transition hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-mu-accent">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </header>

            <div ref={listRef} className="relative flex-1 space-y-4 overflow-y-auto px-5 py-5" aria-live="polite">
              <div className="flex gap-2.5">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-mu-accent to-violet-500 text-xs text-white" aria-hidden>✦</span>
                <p className="rounded-2xl rounded-tl-md border border-white/80 bg-white/85 px-4 py-3 text-[0.97rem] leading-relaxed text-mu-ink shadow-sm">
                  Hi! Skip the reading &mdash; ask me anything about Vasudev&rsquo;s work, skills or availability.
                </p>
              </div>

              {msgs.length === 0 && (
                <div className="flex flex-wrap gap-2 pl-9">
                  {suggestions.map((s, i) => (
                    <motion.button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.07, ease }}
                      className="rounded-full border border-mu-accent/25 bg-white/80 px-3.5 py-2 text-left text-sm font-semibold text-mu-accent transition hover:border-mu-accent hover:bg-mu-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mu-accent"
                    >
                      {s}
                    </motion.button>
                  ))}
                </div>
              )}

              {msgs.map((m) =>
                m.role === "user" ? (
                  <motion.div key={m.id} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end">
                    <p className="max-w-[85%] rounded-2xl rounded-br-md bg-mu-accent px-4 py-3 text-[0.97rem] leading-relaxed text-white shadow-md">{m.text}</p>
                  </motion.div>
                ) : (
                  <motion.div key={m.id} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2.5">
                    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-mu-accent to-violet-500 text-xs text-white" aria-hidden>✦</span>
                    {m.step !== undefined ? (
                      <ul className="space-y-1.5 rounded-2xl rounded-tl-md border border-white/80 bg-white/85 px-4 py-3 text-sm shadow-sm" aria-label="Assistant is working">
                        {steps.map((s, i) => (
                          <li key={s} className={`flex items-center gap-2 transition-opacity ${i <= m.step! ? "opacity-100" : "opacity-30"}`}>
                            {i < m.step! ? (
                              <span className="text-emerald-600" aria-hidden>✓</span>
                            ) : i === m.step ? (
                              <motion.span className="inline-block h-2.5 w-2.5 rounded-full bg-mu-accent" animate={reduce ? undefined : { scale: [1, 1.5, 1] }} transition={{ duration: 0.9, repeat: Infinity }} aria-hidden />
                            ) : (
                              <span className="inline-block h-2.5 w-2.5 rounded-full bg-mu-line" aria-hidden />
                            )}
                            <span className="text-mu-body">{s}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="rounded-2xl rounded-tl-md border border-white/80 bg-white/85 px-4 py-3 text-[0.97rem] leading-relaxed text-mu-ink shadow-sm">{m.text}</p>
                    )}
                  </motion.div>
                ),
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="relative border-t border-white/60 px-4 pb-4 pt-3"
            >
              <div className="flex items-center gap-2 rounded-full border border-mu-line bg-white/90 p-1.5 pl-5 focus-within:border-mu-accent focus-within:ring-4 focus-within:ring-mu-accent/15">
                <label htmlFor="assistant-input" className="sr-only">Your question</label>
                <input
                  id="assistant-input"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about Vasudev…"
                  autoComplete="off"
                  className="min-w-0 flex-1 bg-transparent text-base text-mu-ink placeholder:text-mu-muted focus:outline-none"
                />
                <button type="submit" disabled={busy || !input.trim()} aria-label="Send question" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mu-ink text-white transition hover:bg-mu-accent disabled:cursor-not-allowed disabled:opacity-40">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 19V5M6 11l6-6 6 6" /></svg>
                </button>
              </div>
              <p className="mt-2 text-center text-xs text-mu-muted">Preview mode · AI can make mistakes. Email Vasudev for anything important.</p>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-3 z-[70] flex flex-col items-end gap-3 sm:right-6">
        <AnimatePresence>
          {nudge && !open && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6 }}
              className="relative max-w-[15rem] rounded-2xl rounded-br-md border border-mu-line bg-white px-4 py-3 pr-9 text-sm font-semibold text-mu-ink shadow-xl"
            >
              Skip the reading — ask me anything ✦
              <button type="button" onClick={() => setNudge(false)} aria-label="Dismiss" className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full text-mu-muted hover:bg-mu-bg">×</button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => {
            setOpen((o) => !o);
            setNudge(false);
          }}
          aria-expanded={open}
          aria-controls="assistant-panel"
          className="group relative flex items-center gap-3 rounded-full bg-mu-ink py-2.5 pl-2.5 pr-6 text-base font-bold text-white shadow-[0_20px_40px_-12px_rgba(14,20,36,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-mu-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mu-accent"
        >
          {!open && !reduce && <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-mu-accent/40 [animation-duration:2.8s]" aria-hidden />}
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-mu-accent to-violet-500 text-lg transition group-hover:rotate-12" aria-hidden>{open ? "×" : "✦"}</span>
          {open ? "Close" : "Ask AI"}
        </button>
      </div>
    </>
  );
}
