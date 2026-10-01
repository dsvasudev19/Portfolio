import { experience, site, skillGroups } from "@/data/site";
import { projects } from "@/data/projects";

/**
 * ── BACKEND SEAM ─────────────────────────────────────────────
 * The assistant UI calls ONLY this function. Today it answers from a small
 * rule-based preview built on the site's own data. When the LangChain /
 * LangGraph service exists, replace the body with a request to it, e.g.
 *
 *   const res = await fetch("/api/assistant", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({ question, history }),
 *   });
 *   return (await res.json()).answer;
 *
 * (For true token streaming, return a ReadableStream and let the widget
 * consume it — the widget already renders text incrementally.)
 */
export type ChatTurn = { role: "user" | "assistant"; text: string };

export const suggestions = [
  "What has Vasudev built?",
  "What does he work with?",
  "Is he available for work?",
  "Tell me about his AI work",
  "How can I contact him?",
];

const has = (q: string, ...words: string[]) => words.some((w) => q.includes(w));

export async function askAssistant(question: string, _history: ChatTurn[] = []): Promise<string> {
  void _history;
  const q = question.toLowerCase();

  if (has(q, "contact", "email", "reach", "phone", "call", "book", "meeting", "hire")) {
    return `The easiest way is email: ${site.contact.email}. You can also call or WhatsApp ${site.contact.phone}, or use the contact form at the bottom of this page. He's based in ${site.contact.location}.`;
  }
  if (has(q, "available", "availability", "open to", "free", "freelance")) {
    return "Yes — he's open to select engagements, including full-time roles, contract work and interesting side projects. Use the contact form or email and he'll reply personally.";
  }
  if (has(q, "ai", "agent", "mcp", "langchain", "langgraph", "rag", "llm", "claude")) {
    const ai = skillGroups.find((g) => g.key === "agentic")?.items.slice(0, 6).join(", ");
    return `AI is a big focus. He builds AI agents and MCP servers that let assistants use real data and take real actions. Tools include ${ai}. This very assistant is part of that work.`;
  }
  if (has(q, "built", "project", "portfolio", "made", "work on", "products")) {
    const names = projects
      .filter((p) => p.featured)
      .slice(0, 4)
      .map((p) => p.title.replace(/\s*\(.*\)/, ""))
      .join(", ");
    return `Highlights include ${names}. They range from an AI-powered learning platform to a startup management system and a co-investing platform. Scroll to "Things I've built" to see them all.`;
  }
  if (has(q, "stack", "tech", "skill", "language", "use", "work with", "tools", "java", "react", "docker", "devops")) {
    return "Mostly Java with Spring Boot and Node.js with TypeScript behind the scenes, React and Next.js for the screens, Docker and GitHub Actions for reliable releases — plus AI tooling like LangChain, LangGraph, MCP and RAG.";
  }
  if (has(q, "experience", "company", "companies", "job", "career", "where")) {
    const cos = experience.map((e) => `${e.company} (${e.title})`).join(", ");
    return `He has worked at ${cos}, across FinTech, EdTech and SaaS.`;
  }
  if (has(q, "who", "about", "yourself", "vasudev")) {
    return "Vasudev is a full-stack engineer in Hyderabad who builds websites, apps and AI tools — from the first idea to launch — and explains things in plain words.";
  }
  return "I'm running in preview mode, so I can only answer a few common questions for now — try asking about his projects, tools, AI work, availability or how to contact him.";
}
