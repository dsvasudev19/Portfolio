"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";

const qa = [
  {
    q: "What have you built?",
    lookup: "Looking through my projects…",
    a: "I've built AI-powered platforms like ElevateHub (a learning platform) and CORE (a workforce and project platform), plus a co-investing platform at Kupa Inc, mobile apps and microservice systems.",
  },
  {
    q: "What do you work with?",
    lookup: "Checking my skills…",
    a: "Mostly Java with Spring Boot and Node.js with TypeScript behind the scenes, React and Next.js for the screens you see, and AI tools like Claude, MCP and LangGraph.",
  },
  {
    q: "Are you available for work?",
    lookup: "Checking my availability…",
    a: "Yes — I'm open to select engagements. Send me a note through the contact form or by email and we can set up a call.",
  },
];

export const askQuestions = qa.map((x) => x.q);

const ease = [0.22, 1, 0.36, 1] as const;
type Phase = "typing" | "thinking" | "answering" | "done";

export function ChatPreview() {
  const reduce = useReducedMotion();
  const boxRef = useRef<HTMLDivElement>(null);
  const started = useInView(boxRef, { once: true, margin: "-120px" });
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [typed, setTyped] = useState(0);
  const [words, setWords] = useState(0);
  const [auto, setAuto] = useState(true);

  const cur = qa[idx];
  const answerWords = cur.a.split(" ");

  useEffect(() => {
    if (!started || reduce) return;
    if (phase === "typing") {
      const t = setInterval(() => {
        setTyped((n) => {
          if (n + 1 >= cur.q.length) {
            clearInterval(t);
            setTimeout(() => setPhase("thinking"), 350);
          }
          return n + 1;
        });
      }, 38);
      return () => clearInterval(t);
    }
    if (phase === "thinking") {
      const t = setTimeout(() => setPhase("answering"), 1200);
      return () => clearTimeout(t);
    }
    if (phase === "answering") {
      const t = setInterval(() => {
        setWords((n) => {
          if (n + 1 >= answerWords.length) {
            clearInterval(t);
            setPhase("done");
          }
          return n + 1;
        });
      }, 55);
      return () => clearInterval(t);
    }
    if (phase === "done" && auto) {
      const t = setTimeout(() => {
        setIdx((i) => (i + 1) % qa.length);
        setTyped(0);
        setWords(0);
        setPhase("typing");
      }, 4200);
      return () => clearTimeout(t);
    }
  }, [started, reduce, phase, idx, auto, cur.q.length, answerWords.length]);

  function choose(i: number) {
    setAuto(false);
    setIdx(i);
    setTyped(0);
    setWords(0);
    setPhase("typing");
  }

  const showQ = reduce ? cur.q : cur.q.slice(0, typed);
  const qVisible = reduce || typed > 0;
  const thinking = !reduce && phase === "thinking";
  const aVisible = reduce || phase === "answering" || phase === "done";
  const aText = reduce ? cur.a : answerWords.slice(0, words).join(" ");

  return (
    <div ref={boxRef} className="mx-auto mt-14 max-w-3xl">
      <div className="overflow-hidden rounded-[2rem] border border-mu-line bg-white shadow-[0_40px_80px_-40px_rgba(79,70,229,0.45)]">
        <div className="flex items-center gap-3 border-b border-mu-line px-5 py-4 sm:px-7">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-mu-accent to-violet-500 text-lg text-white" aria-hidden>✦</span>
          <div>
            <p className="font-bold leading-tight text-mu-ink">AI assistant</p>
            <p className="flex items-center gap-1.5 text-sm text-mu-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden /> Knows Vasudev&rsquo;s work
            </p>
          </div>
        </div>

        <div className="min-h-[19rem] space-y-5 px-5 py-7 sm:px-8 sm:py-9" aria-live="polite">
          <div className="flex min-h-[3.25rem] justify-end">
            {qVisible && (
              <p className="max-w-[85%] rounded-3xl rounded-br-lg bg-mu-accent px-5 py-3.5 text-lg text-white">
                {showQ}
                {!reduce && phase === "typing" && <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-1 animate-pulse bg-white" aria-hidden />}
              </p>
            )}
          </div>

          <AnimatePresence mode="wait">
            {thinking && (
              <motion.div key="think" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease }} className="flex items-center gap-3 text-base text-mu-muted">
                <motion.span className="grid h-7 w-7 place-items-center rounded-full bg-mu-accent-soft text-mu-accent" animate={{ rotate: 360 }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} aria-hidden>✦</motion.span>
                {cur.lookup}
              </motion.div>
            )}
            {aVisible && (
              <motion.div key="answer" initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease }} className="flex gap-3">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-mu-accent to-violet-500 text-sm text-white" aria-hidden>✦</span>
                <p className="max-w-[88%] rounded-3xl rounded-bl-lg bg-mu-bg px-5 py-3.5 text-lg leading-relaxed text-mu-ink">{aText}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="border-t border-mu-line bg-mu-bg/60 px-5 py-4 sm:px-7" aria-hidden>
          <div className="flex items-center justify-between rounded-full border border-mu-line bg-white px-5 py-3 text-mu-muted">
            <span>Ask me anything…</span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-mu-ink text-white">↑</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3" role="group" aria-label="Try a question">
        {qa.map((x, i) => (
          <button
            key={x.q}
            type="button"
            onClick={() => choose(i)}
            aria-pressed={i === idx}
            className={`rounded-full border px-5 py-2.5 text-base font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mu-accent ${
              i === idx ? "border-mu-accent bg-mu-accent text-white" : "border-mu-line bg-white text-mu-ink hover:border-mu-accent hover:text-mu-accent"
            }`}
          >
            {x.q}
          </button>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-mu-muted">Preview of a conversation. Connect it to Claude to ask your own questions.</p>
    </div>
  );
}
