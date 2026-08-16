"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/data/site";
import { Marquee } from "./Marquee";

const icons = {
  github: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-1.125-.195-2.805-.78-2.805-3.495 0-.78.285-1.41.735-1.905-.075-.195-.33-.975.075-2.025 0 0 .6-.195 1.98.735.57-.165 1.185-.255 1.8-.255.615 0 1.23.09 1.8.255 1.38-.945 1.98-.735 1.98-.735.405 1.05.15 1.83.075 2.025.465.495.735 1.125.735 1.905 0 2.715-1.68 3.3-2.805 3.495.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  whatsapp: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.001 2c-5.523 0-10 4.477-10 10 0 1.821.487 3.53 1.338 5.003L2 22l5.15-1.312A9.958 9.958 0 0012.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.083a8.05 8.05 0 01-4.099-1.121l-.294-.174-3.055.779.816-2.978-.191-.306a8.05 8.05 0 01-1.24-4.283c0-4.454 3.627-8.081 8.081-8.081 4.454 0 8.081 3.627 8.081 8.081-.001 4.454-3.628 8.083-8.099 8.083z" />
    </svg>
  ),
  email: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const socials = [
  { href: site.social.github, label: "GitHub", icon: icons.github },
  { href: site.social.linkedin, label: "LinkedIn", icon: icons.linkedin },
  { href: site.social.whatsapp, label: "WhatsApp", icon: icons.whatsapp },
  { href: site.social.email, label: "Email", icon: icons.email },
];

const ticker = [
  "Full Stack Engineering",
  "Agentic AI & MCP Servers",
  "System Design (HLD + LLD)",
  "FinTech · EdTech · SaaS",
  "Java / Spring Boot",
  "Node.js / TypeScript",
];

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 60, rotate: 1 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.75, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

function TypewriterLine() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = site.roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 65);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 35);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % site.roles.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <p className="mt-5 font-mono text-base font-semibold sm:text-lg">
      <span className="text-muted">$ open_to </span>
      {text}
      <span className="ml-0.5 inline-block h-5 w-[3px] translate-y-0.5 animate-blink bg-ink align-middle" />
    </p>
  );
}

function StatNumber({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(match ? `0${match[2]}` : value);

  useEffect(() => {
    if (!inView || !match) return;
    const target = parseInt(match[1], 10);
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(`${Math.round(v)}${match[2]}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <p ref={ref} className="text-2xl font-extrabold tracking-tight sm:text-3xl">
      {match ? display : value}
    </p>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <div className="grid-dots pointer-events-none absolute inset-0 opacity-70" aria-hidden />

      <div className="container-b relative">
        <div className="grid items-start gap-14 lg:grid-cols-[1.25fr_0.9fr] lg:gap-10">
          <div>
            <motion.span
              initial={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="badge-live max-w-full text-balance"
            >
              <span className="dot-live shrink-0" />
              {site.hero.eyebrow}
            </motion.span>

            <h1 className="text-mega mt-6">
              {site.hero.headline.map((line, i) => (
                <motion.span
                  key={line}
                  custom={i}
                  initial={reduceMotion ? undefined : "hidden"}
                  animate={reduceMotion ? undefined : "show"}
                  variants={lineVariants}
                  className="block"
                >
                  {i === site.hero.headline.length - 1 ? (
                    <span className="highlight">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-muted sm:text-xl"
            >
              {site.hero.description}
            </motion.p>

            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <TypewriterLine />
            </motion.div>

            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-9 flex flex-wrap gap-3 sm:gap-4"
            >
              <Link href="#works" className="btn btn-primary" data-cursor-hover>
                View My Work
              </Link>
              <Link href="#contact" className="btn btn-ghost" data-cursor-hover>
                Get in Touch
              </Link>
              <Link href={site.resume} className="btn btn-ghost" data-cursor-hover>
                Resume
              </Link>
            </motion.div>

            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-cursor-hover
                  className="btn btn-ghost btn-sm gap-2"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9, rotate: 4 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[360px] lg:mx-0 lg:ml-auto"
          >
            <div className="border-b2 absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] bg-lime" aria-hidden />
            <div className="border-b2 relative overflow-hidden rounded-[1.75rem] bg-ink">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/assets/new-me.png"
                  alt={`${site.name} — Full Stack Developer & Agentic AI Specialist`}
                  fill
                  className="object-cover object-top grayscale contrast-110"
                  priority
                  unoptimized
                />
              </div>
            </div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="border-b2 shadow-b-sm absolute -left-8 top-8 rounded-xl bg-cream px-3.5 py-2 text-xs font-bold sm:-left-10"
            >
              MCP server: live
            </motion.div>
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="border-b2 shadow-b-sm absolute -right-6 bottom-10 rounded-xl bg-lime px-3.5 py-2 text-xs font-bold sm:-right-9"
            >
              @ Kupa Inc
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-3 sm:mt-20 sm:gap-4"
        >
          {site.hero.stats.map((stat) => (
            <div key={stat.label} className={`stat-box pop ${stat.highlight ? "stat-box-highlight" : ""}`}>
              <StatNumber value={stat.value} />
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 sm:mt-20">
        <Marquee speed={26}>
          {ticker.map((item) => (
            <span key={item} className="mx-4 flex items-center gap-4 whitespace-nowrap text-lg font-extrabold uppercase tracking-tight sm:text-xl">
              {item}
              <span className="text-lime" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
