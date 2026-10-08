"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { site } from "@/data/site";
import { Words } from "./motion";
import { container, eyebrow } from "./ui";

const shortTitle = (t: string) => t.replace(/\s*\(.*\)/, "");
const featured = projects.filter((p) => p.featured && p.slug);

/** What each project is, in a few words. */
const category: Record<string, string> = {
  elevatehub: "AI · Education platform",
  "core-platform": "AI · Workforce & projects",
  "mcp-connector": "AI · Developer tooling",
  digischool: "SaaS · School management",
  "kupa-co-investing": "FinTech · Investing",
  projexpert: "Web app · Project management",
};

/** Soft coloured glow behind each dark cover. */
const glows = ["bg-mu-accent/60", "bg-violet-500/55", "bg-sky-500/50", "bg-mu-peach/45", "bg-emerald-400/40", "bg-mu-lilac/50"];

function Cover({ p, i }: { p: Project; i: number }) {
  const cat = category[p.slug ?? ""] ?? "Software project";
  if (p.coverType === "image" && p.thumbnail) {
    return (
      <div className="relative h-full min-h-[12rem] overflow-hidden bg-gradient-to-br from-mu-lilac/70 via-mu-accent-soft to-mu-sky/70">
        <div className="absolute inset-5 overflow-hidden rounded-xl bg-white shadow-[0_24px_50px_-20px_rgba(14,20,36,0.45)] ring-1 ring-mu-ink/10 transition duration-700 group-hover:-translate-y-1 sm:inset-7">
          <div className="flex h-6 items-center gap-1.5 border-b border-mu-line bg-mu-bg px-3" aria-hidden>
            <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          </div>
          <div className="relative h-[calc(100%-1.5rem)]">
            <Image src={p.thumbnail} alt={`${p.title} screenshot`} fill sizes="(min-width: 1024px) 22rem, 85vw" unoptimized={p.thumbnail.startsWith("http")} className="object-cover object-top" />
          </div>
        </div>
        <span className="absolute left-5 top-2 hidden text-[0.7rem] font-bold uppercase tracking-[0.14em] text-mu-ink/50 sm:left-7 sm:block">{cat}</span>
      </div>
    );
  }
  return (
    <div className="relative flex h-full min-h-[12rem] flex-col justify-between overflow-hidden bg-mu-navy p-6 text-white sm:p-8" aria-hidden>
      <div className={`absolute -right-16 -top-20 h-64 w-64 rounded-full blur-3xl transition duration-700 group-hover:scale-125 ${glows[i % glows.length]}`} />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:linear-gradient(135deg,#000,transparent_70%)]" />
      <span className="relative text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white/55">{cat}</span>
      <div className="relative">
        <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/10 text-2xl font-bold backdrop-blur">{shortTitle(p.title).charAt(0)}</span>
        <p className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-[1.7rem]">{shortTitle(p.title)}</p>
      </div>
    </div>
  );
}

function Card({ p, i, className }: { p: Project; i: number; className: string }) {
  const num = String(i + 1).padStart(2, "0");
  return (
    <Link href={`/projects/${p.slug}`} className={`group block shrink-0 rounded-[1.75rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mu-accent ${className}`}>
      <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-mu-line bg-white shadow-[0_2px_0_rgba(14,20,36,0.03)] transition duration-500 group-hover:border-mu-accent/30 group-hover:shadow-[0_40px_70px_-40px_rgba(79,70,229,0.5)] lg:flex-row">
        <div className="min-h-[12rem] flex-1 lg:w-[46%] lg:flex-none">
          <Cover p={p} i={i} />
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-8 lg:flex-none lg:w-[54%]">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-mu-muted">{num} / {String(featured.length).padStart(2, "0")}</p>
          <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-mu-ink sm:text-[1.75rem]">{shortTitle(p.title)}</h3>
          <p className="mt-3 line-clamp-4 text-base leading-relaxed text-mu-body">{p.description}</p>

          <dl className="mt-5 border-t border-mu-line pt-4 text-sm">
            <dt className="text-xs font-bold uppercase tracking-[0.12em] text-mu-muted">Built with</dt>
            <dd className="mt-1.5 font-medium text-mu-ink">{p.tags.slice(0, 4).join(" · ")}</dd>
          </dl>

          <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-mu-accent">
            Read the case study <span aria-hidden className="transition group-hover:translate-x-1.5">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}

/** Closing card: points to the full body of work. */
function MoreCard({ className }: { className: string }) {
  return (
    <a href={site.social.github} target="_blank" rel="noopener noreferrer" className={`group relative flex shrink-0 flex-col justify-between overflow-hidden rounded-[1.75rem] bg-mu-navy p-8 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mu-accent ${className}`}>
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-mu-accent/50 blur-3xl transition duration-700 group-hover:scale-125" aria-hidden />
      <p className="relative text-xs font-bold uppercase tracking-[0.14em] text-white/55">And more</p>
      <div className="relative">
        <p className="text-3xl font-semibold leading-tight tracking-tight">More projects and code on GitHub</p>
        <span className="mt-6 inline-flex items-center gap-2 font-semibold text-mu-lilac">
          Visit my GitHub <span aria-hidden className="transition group-hover:translate-x-1.5">↗</span>
        </span>
      </div>
    </a>
  );
}

function Heading() {
  return (
    <>
      <span className={eyebrow}>Projects</span>
      <Words
        delay={80}
        className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-mu-ink sm:text-4xl lg:text-5xl"
        segments={[{ t: "Selected work," }, { t: "built to last.", em: true }]}
      />
    </>
  );
}

/** Desktop: the section pins while vertical scroll slides the cards sideways. */
function Pinned() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);
  const [height, setHeight] = useState<number | null>(null);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const measure = () => {
      const t = trackRef.current;
      if (!t) return;
      const dist = Math.max(0, t.scrollWidth - window.innerWidth);
      setMaxX(dist);
      setHeight(dist + window.innerHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 110, damping: 26, restDelta: 0.0005 });
  const x = useTransform(smooth, [0, 1], [0, -maxX]);
  useMotionValueEvent(scrollYProgress, "change", (v) => setCurrent(Math.min(featured.length, Math.floor(v * (featured.length + 0.4)) + 1)));

  return (
    <div ref={sectionRef} style={{ height: height ?? `${featured.length * 70}vh` }} className="relative hidden lg:block">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pb-10 pt-28">
        <div className={`${container} flex w-full items-end justify-between gap-8`}>
          <div>
            <Heading />
          </div>
          <p className="shrink-0 pb-1 font-mono text-lg font-bold text-mu-ink" aria-live="polite">
            {String(current).padStart(2, "0")}<span className="text-mu-muted"> / {String(featured.length).padStart(2, "0")}</span>
          </p>
        </div>

        <div className="flex flex-1 items-center">
          <motion.div ref={trackRef} style={{ x }} className="flex w-max items-stretch gap-8 pl-[max(3rem,calc((100vw-1200px)/2+3rem))] pr-[8vw]">
            {featured.map((p, i) => (
              <Card key={p.slug} p={p} i={i} className="h-[min(30rem,calc(100vh-22rem))] min-h-[22rem] w-[min(62vw,50rem)]" />
            ))}
            <MoreCard className="h-[min(30rem,calc(100vh-22rem))] min-h-[22rem] w-[min(30vw,24rem)]" />
          </motion.div>
        </div>

        <div className={`${container} w-full`}>
          <div className="h-1 overflow-hidden rounded-full bg-mu-line">
            <motion.div className="h-full origin-left rounded-full bg-mu-accent" style={{ scaleX: smooth }} />
          </div>
          <p className="mt-3 text-sm text-mu-muted">Keep scrolling to browse the projects</p>
        </div>
      </div>
    </div>
  );
}

/** Touch / small screens / reduced motion: a plain swipeable carousel. */
function Swipe() {
  return (
    <div>
      <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {featured.map((p, i) => (
          <li key={p.slug} className="flex snap-center">
            <Card p={p} i={i} className="h-full w-[85vw] max-w-[26rem] sm:w-[26rem]" />
          </li>
        ))}
        <li className="flex snap-center">
          <MoreCard className="w-[70vw] max-w-[18rem]" />
        </li>
      </ul>
      <p className="mt-2 text-center text-sm text-mu-muted">Swipe to see more →</p>
    </div>
  );
}

export function Work() {
  const reduce = useReducedMotion();
  return (
    <section id="work" className="bg-mu-bg">
      <div className={`${container} pt-20 ${reduce ? "pb-20" : "pb-16 lg:hidden"}`}>
        <Heading />
        <div className="mt-10">
          <Swipe />
        </div>
      </div>
      {!reduce && <Pinned />}
    </section>
  );
}
