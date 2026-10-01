"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Thin accent bar showing reading progress. */
export function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-mu-accent via-violet-400 to-mu-peach"
    />
  );
}

export type Segment = { t: string; em?: boolean };

/** Headline whose words rise into place one after another. */
export function Words({
  segments,
  className = "",
  delay = 0,
  as: Tag = "h2",
  emClass = "text-mu-accent",
}: {
  segments: Segment[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  emClass?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = segments.flatMap((s) => s.t.split(" ").filter(Boolean).map((w) => ({ w, em: s.em })));
  const MotionTag = motion[Tag] as typeof motion.h2;

  return (
    <MotionTag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {words.map((x, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block ${x.em ? `font-[family-name:var(--font-mu-serif)] font-normal italic ${emClass}` : ""}`}
            initial={reduce ? false : { y: "110%", opacity: 0 }}
            animate={inView || reduce ? { y: 0, opacity: 1 } : undefined}
            transition={{ duration: 0.7, delay: delay / 1000 + i * 0.055, ease }}
          >
            {x.w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </MotionTag>
  );
}

/** Number that counts up when scrolled into view. */
export function CountUp({ to, prefix = "", suffix = "", className = "" }: { to: number; prefix?: string; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.6, ease, onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

/** Cycles through phrases with a typing effect. */
export function Typewriter({ words, className = "" }: { words: string[]; className?: string }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [text, setText] = useState(reduce ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const full = words[i];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setText(full.slice(0, text.length + 1));
          if (text.length + 1 === full.length) setTimeout(() => setDeleting(true), 1400);
        } else {
          setText(full.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setI((i + 1) % words.length);
          }
        }
      },
      deleting ? 32 : 70,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, reduce]);

  return (
    <span className={className} aria-label={words.join(", ")}>
      <span aria-hidden>{text}</span>
      <motion.span aria-hidden className="ml-0.5 inline-block h-[1.05em] w-[3px] translate-y-[0.18em] bg-mu-accent" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />
    </span>
  );
}

/** Endless horizontal ticker of tech logos. */
export function Marquee({ items }: { items: { name: string; icon: string }[] }) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]" aria-label="Technologies I work with">
      <motion.ul
        className="flex w-max gap-4 py-2"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 38, ease: "linear", repeat: Infinity }}
      >
        {row.map((s, i) => (
          <li key={i} className="flex items-center gap-3 rounded-full border border-mu-line bg-white px-5 py-3 text-base font-semibold text-mu-ink" aria-hidden={i >= items.length}>
            <Image src={s.icon} alt="" width={24} height={24} unoptimized className="h-6 w-6" />
            {s.name}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

/** Subtle 3D tilt that follows the pointer. */
export function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 200, damping: 20 });

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 7);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 7);
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

/** Gently bobbing badge. */
export function Float({ children, className = "", delay = 0, amount = 10 }: { children: React.ReactNode; className?: string; delay?: number; amount?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      animate={reduce ? undefined : { y: [0, -amount, 0] }}
      transition={{ duration: 4.5, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Image that drifts slightly as you scroll. */
export function Parallax({ children, className = "", distance = 40 }: { children: React.ReactNode; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

/** Timeline wrapper with a line that draws as you scroll. */
export function Timeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  return (
    <ol ref={ref} className="relative mt-14 space-y-6 pl-6 sm:pl-10">
      <span className="absolute bottom-0 left-0 top-0 w-px bg-mu-line" aria-hidden />
      <motion.span className="absolute bottom-0 left-0 top-0 w-px origin-top bg-mu-accent" style={{ scaleY }} aria-hidden />
      {children}
    </ol>
  );
}

/** Lines that appear one by one, like output in a terminal. */
export function TerminalLines({ lines }: { lines: { k?: string; v: string; cmd?: boolean }[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="space-y-2 font-mono text-[0.95rem] leading-relaxed sm:text-base">
      {lines.map((l, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.25 + i * 0.28, ease }}
        >
          {l.cmd ? (
            <span><span className="text-emerald-400">~</span> <span className="text-mu-lilac">$</span> <span className="text-white">{l.v}</span></span>
          ) : (
            <span className="text-white/90">
              <span className="text-mu-peach">{l.k}</span>
              <span className="text-white/40">: </span>
              {l.v}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/** Chat bubbles that play in sequence once visible. */
export function ChatDemo() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const step = (n: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14, scale: 0.97 },
    animate: inView || reduce ? { opacity: 1, y: 0, scale: 1 } : undefined,
    transition: { duration: 0.5, delay: reduce ? 0 : n, ease },
  });
  return (
    <div ref={ref} className="space-y-3" role="img" aria-label="Example conversation: a visitor asks an AI assistant about Vasudev's availability and it answers using the portfolio's MCP server">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">Illustrative example</p>
      <motion.div className="flex justify-end" {...step(0.2)}>
        <p className="max-w-[85%] rounded-2xl rounded-br-md bg-mu-accent px-5 py-3 text-base text-white">Is Vasudev available for a call this week?</p>
      </motion.div>
      <motion.div className="flex items-center gap-2 text-sm text-mu-lilac" {...step(1.1)}>
        <motion.span className="grid h-6 w-6 place-items-center rounded-full bg-white/10" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>✦</motion.span>
        <code className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[0.82rem]">check_slots()</code>
        <span className="text-white/50">→ 3 open slots</span>
      </motion.div>
      <motion.div {...step(2.1)}>
        <p className="max-w-[92%] rounded-2xl rounded-bl-md bg-white/10 px-5 py-3 text-base text-white/90">
          Yes — he&rsquo;s open to new work. I can see a few open slots this week. Want me to book one?
        </p>
      </motion.div>
    </div>
  );
}
