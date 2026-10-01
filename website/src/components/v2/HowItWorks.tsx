"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Types a string out once `start` becomes true. */
function useTyped(text: string, start: boolean, reduce: boolean | null) {
  const [n, setN] = useState(reduce ? text.length : 0);
  useEffect(() => {
    if (!start || reduce) return;
    const t = setInterval(() => setN((v) => (v < text.length ? v + 1 : v)), 55);
    return () => clearInterval(t);
  }, [start, reduce, text]);
  return { shown: text.slice(0, n), done: n >= text.length };
}

function IdeaArt({ on }: { on: boolean }) {
  const reduce = useReducedMotion();
  const { shown, done } = useTyped("An app so customers can book my salon online…", on, reduce);
  return (
    <div className="relative flex h-full flex-col justify-center gap-3 px-6">
      <motion.svg
        viewBox="0 0 24 24"
        className="absolute right-5 top-5 h-9 w-9 text-amber-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        animate={on && !reduce ? { scale: [1, 1.18, 1], rotate: [0, -6, 6, 0] } : undefined}
        transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1 }}
      >
        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
      </motion.svg>
      <p className="max-w-[78%] rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-[0.95rem] leading-snug text-mu-ink shadow-md">
        {shown}
        {!done && <span className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 animate-pulse bg-mu-accent" aria-hidden />}
      </p>
      <motion.p
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={done || reduce ? { opacity: 1, y: 0, scale: 1 } : undefined}
        transition={{ duration: 0.45, ease }}
        className="ml-auto rounded-2xl rounded-br-sm bg-mu-accent px-4 py-2.5 text-[0.95rem] font-medium text-white shadow-md"
      >
        Got it. Let&rsquo;s build it ✓
      </motion.p>
    </div>
  );
}

function BuildArt({ on }: { on: boolean }) {
  const reduce = useReducedMotion();
  const pop = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14, scale: 0.9 },
    animate: on || reduce ? { opacity: 1, y: 0, scale: 1 } : undefined,
    transition: { duration: 0.5, delay: 0.15 + i * 0.18, ease },
  });
  return (
    <div className="flex h-full items-center px-6">
      <div className="w-full overflow-hidden rounded-xl bg-white shadow-md">
        <div className="flex items-center gap-1.5 border-b border-mu-line px-3 py-2" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-red-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <span className="ml-2 h-2 w-24 rounded-full bg-mu-bg" />
        </div>
        <div className="space-y-2.5 p-3.5" aria-hidden>
          <motion.div {...pop(0)} className="h-3 w-2/5 rounded-full bg-mu-accent" />
          <motion.div {...pop(1)} className="h-11 rounded-lg bg-gradient-to-r from-mu-lilac to-mu-sky" />
          <div className="grid grid-cols-3 gap-2">
            {[2, 3, 4].map((i) => (
              <motion.div key={i} {...pop(i)} className="h-9 rounded-lg bg-mu-peach/70" />
            ))}
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-mu-line">
            <motion.div
              className="h-full rounded-full bg-emerald-500"
              initial={{ width: 0 }}
              animate={on && !reduce ? { width: ["0%", "100%"] } : reduce ? { width: "100%" } : undefined}
              transition={{ duration: 2.6, delay: 0.6, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function LaunchArt({ on }: { on: boolean }) {
  const reduce = useReducedMotion();
  const stars = [
    { x: "18%", d: 0 },
    { x: "30%", d: 0.7 },
    { x: "70%", d: 0.3 },
    { x: "82%", d: 1.1 },
    { x: "56%", d: 1.6 },
  ];
  return (
    <div className="relative h-full overflow-hidden">
      {stars.map((s, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-white"
          style={{ left: s.x }}
          animate={on && !reduce ? { y: [0, -150], opacity: [0, 1, 0] } : undefined}
          transition={{ duration: 2.4, delay: s.d, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
      <motion.svg
        viewBox="0 0 64 64"
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-[55%]"
        aria-hidden
        initial={reduce ? false : { y: 70, opacity: 0 }}
        animate={on || reduce ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: 0.9, ease }}
      >
        <motion.g animate={on && !reduce ? { y: [0, -6, 0] } : undefined} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}>
          <path d="M20 34l-8 10 10-2zM44 34l8 10-10-2z" fill="#4f46e5" />
          <path d="M32 6c8 6 12 16 12 28l-6 8H26l-6-8C20 22 24 12 32 6z" fill="#fff" stroke="#0e1424" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="32" cy="24" r="5" fill="#d3e8ff" stroke="#0e1424" strokeWidth="2" />
          <motion.path d="M28 44h8l-4 13z" fill="#fb923c" style={{ originY: 0 }} animate={on && !reduce ? { scaleY: [1, 1.45, 1] } : undefined} transition={{ duration: 0.45, repeat: Infinity }} />
        </motion.g>
      </motion.svg>
      <motion.span
        initial={reduce ? false : { scale: 0, opacity: 0 }}
        animate={on || reduce ? { scale: 1, opacity: 1 } : undefined}
        transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.9 }}
        className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-emerald-700 shadow-md"
      >
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Live
      </motion.span>
    </div>
  );
}

const steps = [
  { title: "You tell me your idea", text: "Explain what you need in plain words. No technical language required.", bg: "from-mu-peach to-amber-100", Art: IdeaArt },
  { title: "I build it", text: "I design and build your website, app or AI tool, and show you progress along the way.", bg: "from-mu-lilac to-mu-sky", Art: BuildArt },
  { title: "You launch", text: "When you're happy, it goes live. I stay around to keep it running smoothly.", bg: "from-mu-mint to-mu-sky", Art: LaunchArt },
];

function Step({ i, title, text, bg, Art }: (typeof steps)[number] & { i: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const on = useInView(ref, { once: true, margin: "0px 0px -30% 0px" });
  const reduce = useReducedMotion();
  return (
    <li ref={ref} className="relative flex flex-col items-center text-center">
      <motion.span
        initial={reduce ? false : { scale: 0.6, backgroundColor: "#e4e2da", color: "#667085" }}
        animate={on || reduce ? { scale: 1, backgroundColor: "#4f46e5", color: "#ffffff" } : undefined}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        className="relative z-10 grid h-16 w-16 place-items-center rounded-full text-2xl font-bold shadow-[0_12px_30px_-10px_rgba(79,70,229,0.6)] ring-8 ring-mu-bg"
      >
        {i + 1}
      </motion.span>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={on || reduce ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, delay: 0.2, ease }}
        className="mt-8 w-full"
      >
        <div className={`h-52 overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${bg}`} role="img" aria-label={`Illustration for step ${i + 1}: ${title}`}>
          <Art on={on} />
        </div>
        <h3 className="mt-7 text-2xl font-semibold tracking-tight text-mu-ink">{title}</h3>
        <p className="mx-auto mt-3 max-w-xs text-lg text-mu-body">{text}</p>
      </motion.div>
    </li>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <ol ref={ref} className="relative mt-20 grid gap-16 md:grid-cols-3 md:gap-8 lg:gap-12">
      <span className="absolute left-[16.67%] right-[16.67%] top-8 hidden h-0.5 bg-mu-line md:block" aria-hidden />
      <motion.span className="absolute left-[16.67%] right-[16.67%] top-8 hidden h-0.5 origin-left bg-mu-accent md:block" style={{ scaleX }} aria-hidden />
      {steps.map((s, i) => (
        <Step key={s.title} i={i} {...s} />
      ))}
    </ol>
  );
}
