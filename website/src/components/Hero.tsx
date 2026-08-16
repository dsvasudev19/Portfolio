"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
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
  instagram: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
  { href: site.social.instagram, label: "Instagram", icon: icons.instagram },
  { href: site.social.email, label: "Email", icon: icons.email },
];

const ticker = [
  "Java Full Stack (Spring Boot)",
  "MERN Stack & Next.js",
  "Agentic AI & MCP Servers",
  "System Architecture (HLD + LLD)",
  "Production Software Launch",
];

function StatNumber({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
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
  }, [inView, match]);

  return (
    <p ref={ref} className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink">
      {match ? display : value}
    </p>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-5rem)] max-h-[100dvh] flex-col justify-between overflow-hidden pt-24 pb-3 lg:pt-28 lg:pb-4"
    >
      <div className="container-b relative my-auto">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left Column: Copy & Actions */}
          <div>
            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="badge-live w-fit"
            >
              <span className="dot-live shrink-0" />
              Available for Technical Engagements
            </motion.div>

            <motion.h1
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-ink"
            >
              Your idea. Shipped as{" "}
              <span className="highlight">production software.</span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-muted max-w-xl"
            >
              I build full-stack platforms and agentic AI tooling for startups — from architecture to launch.
            </motion.p>

            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link href="#works" className="btn btn-lime shadow-b-sm" data-cursor-hover>
                View Projects
              </Link>
              <Link href="#contact" className="btn btn-ghost" data-cursor-hover>
                Book a Call
              </Link>
            </motion.div>

            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-cursor-hover
                  className="btn btn-ghost btn-sm gap-1.5 py-1 text-xs"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Code / Terminal Technical Credibility Card */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="border-b2 relative overflow-hidden rounded-2xl bg-ink p-5 sm:p-6 text-cream shadow-b">
              {/* Window Bar Controls */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-xs text-white/50">mcp-server.config.ts</span>
              </div>

              {/* Code Snippet */}
              <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-white/90">
                <code>
                  <span className="text-purple-400">export const</span>{" "}
                  <span className="text-blue-400">engineer</span> = &#123;{"\n"}
                  {"  "}<span className="text-emerald-400">name</span>: <span className="text-lime">"Vasudev Darse Shikari"</span>,{"\n"}
                  {"  "}<span className="text-emerald-400">role</span>: <span className="text-lime">"Full-Stack & AI Engineer"</span>,{"\n"}
                  {"  "}<span className="text-emerald-400">stack</span>: [<span className="text-lime">"Java"</span>, <span className="text-lime">"Spring"</span>, <span className="text-lime">"TypeScript"</span>, <span className="text-lime">"React"</span>],{"\n"}
                  {"  "}<span className="text-emerald-400">mcpServer</span>: <span className="text-lime">"LIVE (16+ tools)"</span>,{"\n"}
                  {"  "}<span className="text-emerald-400">availability</span>: <span className="text-lime">"Open for Select Projects"</span>{"\n"}
                  &#125;;
                </code>
              </pre>

              {/* Live Status Bar */}
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-lime">
                  <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
                  <span>MCP Server: Live</span>
                </div>
                <span className="text-white/60">Engineer @ Kupa Inc</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Compact Stats Row */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-4"
        >
          {site.hero.stats.map((stat) => (
            <div key={stat.label} className={`stat-box pop ${stat.highlight ? "stat-box-highlight" : ""}`}>
              <StatNumber value={stat.value} />
              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Ticker */}
      <div className="mt-4 sm:mt-6">
        <Marquee speed={26}>
          {ticker.map((item) => (
            <span key={item} className="mx-4 flex items-center gap-4 whitespace-nowrap text-sm font-extrabold uppercase tracking-tight sm:text-base">
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
