"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { Marquee } from "./Marquee";

const icons = {
  github: (
    <svg className="h-4 w-4 shrink-0 text-[#24292e]" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg className="h-4 w-4 shrink-0 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  whatsapp: (
    <svg className="h-4 w-4 shrink-0 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.001 2c-5.523 0-10 4.477-10 10 0 1.821.487 3.53 1.338 5.003L2 22l5.15-1.312A9.958 9.958 0 0012.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.083a8.05 8.05 0 01-4.099-1.121l-.294-.174-3.055.779.816-2.978-.191-.306a8.05 8.05 0 01-1.24-4.283c0-4.454 3.627-8.081 8.081-8.081 4.454 0 8.081 3.627 8.081 8.081-.001 4.454-3.628 8.083-8.099 8.083z" />
    </svg>
  ),
  email: (
    <svg className="h-4 w-4 shrink-0 text-[#EA4335]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
  "Java Full Stack (Spring Boot)",
  "MERN Stack & Next.js",
  "Agentic AI & MCP Servers",
  "System Architecture (HLD + LLD)",
  "Production Software Launch",
];

function StatNumber({ value }: { value: string }) {
  return (
    <p className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink">
      {value}
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
              <span className="sr-only">
                Vasudev DS (dsvasudev / ds.vasudev / vasudevds / Vasudev Darse Shikari) — Full Stack Developer & Agentic AI Specialist.
              </span>
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
