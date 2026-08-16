"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mcp } from "@/data/site";
import { Reveal } from "./Reveal";

const conversation = [
  { role: "user", text: "What is Vasudev working on right now?" },
  { role: "tool", text: "get_current_focus()" },
  { role: "agent", text: "Building agentic AI systems — MCP servers and tool schemas that let LLMs query real data and take actions." },
  { role: "user", text: "Can I book a call?" },
  { role: "tool", text: "check_slots() → book_appointment()" },
  { role: "agent", text: "Found an open slot and booked it on his calendar." },
];

function TerminalPanel() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= conversation.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 500 : 850);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="border-b2 shadow-b-lime overflow-hidden rounded-2xl bg-ink text-cream h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 border-b-2 border-cream/20 px-4 py-3 shrink-0">
        <span className="h-2.5 w-2.5 rounded-full bg-coral" />
        <span className="h-2.5 w-2.5 rounded-full bg-lime" />
        <span className="h-2.5 w-2.5 rounded-full bg-blue-light" />
        <span className="ml-2 font-mono text-xs font-semibold text-muted-invert">claude · vasudev-mcp</span>
      </div>

      <div className="flex-1 space-y-3 p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-y-auto min-h-[260px]">
        {conversation.slice(0, visible).map((line, i) => {
          if (line.role === "user") {
            return (
              <div key={i} className="flex justify-end">
                <div className="max-w-[85%] rounded-xl rounded-tr-sm border border-cream/25 bg-cream/10 px-3 py-1.5 text-xs">
                  {line.text}
                </div>
              </div>
            );
          }
          if (line.role === "tool") {
            return (
              <div key={i} className="flex items-center gap-1.5 text-lime">
                <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-[11px] font-bold">{line.text}</span>
              </div>
            );
          }
          return (
            <div key={i} className="flex justify-start">
              <div className="max-w-[85%] rounded-xl rounded-tl-sm border border-lime bg-lime px-3 py-1.5 text-xs text-ink font-semibold">
                {line.text}
              </div>
            </div>
          );
        })}
        {visible < conversation.length && (
          <span className="inline-block h-3.5 w-1.5 animate-blink bg-lime" />
        )}
      </div>
    </div>
  );
}

export function AgenticAI() {
  return (
    <section id="agentic-ai" className="section-pad relative overflow-hidden py-12 sm:py-16">
      <div className="container-b relative">
        {/* Compact Section Eyebrow & Title */}
        <Reveal>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="eyebrow text-muted">02 / AGENTIC AI</p>
              <h2 className="text-h1 mt-1 text-balance">MCP-powered profile</h2>
            </div>
            <span className="badge-live">
              <span className="dot-live" />
              Live MCP Server
            </span>
          </div>
        </Reveal>

        {/* Balanced 2-Column Layout */}
        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          {/* Left Column: Description, CTAs, Denser 16 Tools Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <Reveal variant="up">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-muted">
                {mcp.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link href={mcp.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" data-cursor-hover>
                  Chat with my MCP
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
                <Link href="#contact" className="btn btn-ghost btn-sm" data-cursor-hover>
                  Discuss a project
                </Link>
              </div>
            </Reveal>

            {/* Denser 16-Tool Grid */}
            <Reveal delay={120}>
              <div className="border-b2 shadow-b-sm rounded-2xl bg-cream p-4 border border-ink/15">
                <div className="flex items-center justify-between mb-2.5">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                    16 CALLABLE TOOLS
                  </p>
                  <span className="text-[11px] font-mono text-muted">Model Context Protocol</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5">
                  {mcp.tools.map((tool) => (
                    <span
                      key={tool.name}
                      title={tool.description}
                      className="px-2 py-1 bg-white border border-ink/15 rounded-lg font-mono text-[11px] font-bold text-ink truncate hover:border-lime hover:bg-lime/10 transition-colors"
                    >
                      {tool.name}()
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Terminal Chat Demo Mockup */}
          <div className="lg:col-span-5 h-full">
            <Reveal delay={150} variant="scale" className="h-full">
              <TerminalPanel />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
