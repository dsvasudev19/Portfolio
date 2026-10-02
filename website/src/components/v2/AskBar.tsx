"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { openAssistant } from "./assistant/AssistantWidget";
import { askQuestions } from "./ChatPreview";

/** Hero shortcut: shows sample questions and jumps to the chat with one selected. */
export function AskBar() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % askQuestions.length), 3200);
    return () => clearInterval(t);
  }, [reduce]);


  return (
    <div className="mt-9 max-w-md">
      <button
        type="button"
        onClick={() => openAssistant(askQuestions[i])}
        aria-label={`Ask an AI about me. Try: ${askQuestions[i]}`}
        aria-haspopup="dialog"
        className="group flex w-full items-center gap-3 rounded-full border border-mu-line bg-white p-2 pr-2.5 shadow-[0_18px_40px_-24px_rgba(79,70,229,0.55)] transition duration-300 hover:border-mu-accent/50 hover:shadow-[0_22px_44px_-22px_rgba(79,70,229,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mu-accent"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-mu-accent to-violet-500 text-white" aria-hidden>
          <motion.span animate={reduce ? undefined : { rotate: [0, 18, -18, 0] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5 }}>✦</motion.span>
        </span>
        <span className="relative h-6 min-w-0 flex-1 overflow-hidden text-left" aria-hidden>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={i}
              className="absolute inset-0 truncate text-base text-mu-muted"
              initial={reduce ? false : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: -16, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {askQuestions[i]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mu-ink text-white transition duration-300 group-hover:bg-mu-accent" aria-hidden>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </span>
      </button>
      <p className="mt-3 pl-4 text-sm text-mu-muted">Skip the reading. Ask an AI that knows my work.</p>
    </div>
  );
}
