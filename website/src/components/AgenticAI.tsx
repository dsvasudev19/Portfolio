"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mcp } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

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
    <div className="border-b2 shadow-b-lime overflow-hidden rounded-2xl bg-ink text-cream">
      <div className="flex items-center gap-2 border-b-2 border-cream/20 px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-coral" />
        <span className="h-3 w-3 rounded-full bg-lime" />
        <span className="h-3 w-3 rounded-full bg-blue-light" />
        <span className="ml-2 font-mono text-xs font-semibold text-muted-invert">claude · vasudev-mcp</span>
      </div>

      <div className="min-h-[280px] space-y-3 p-5 font-mono text-sm">
        {conversation.slice(0, visible).map((line, i) => {
          if (line.role === "user") {
            return (
              <div key={i} className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm border-2 border-cream/25 bg-cream/10 px-4 py-2">
                  {line.text}
                </div>
              </div>
            );
          }
          if (line.role === "tool") {
            return (
              <div key={i} className="flex items-center gap-2 text-lime">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-xs">{line.text}</span>
              </div>
            );
          }
          return (
            <div key={i} className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm border-2 border-lime bg-lime px-4 py-2 text-ink">
                {line.text}
              </div>
            </div>
          );
        })}
        {visible < conversation.length && (
          <span className="inline-block h-4 w-1.5 animate-blink bg-lime" />
        )}
      </div>
    </div>
  );
}

export function AgenticAI() {
  return (
    <section id="agentic-ai" className="section-pad relative overflow-hidden">
      <div className="container-b relative">
        <SectionHeading
          label="Agentic AI"
          index="02"
          title="MCP-powered profile"
          subtitle="AI agents can query my experience, projects, and calendar directly — not just read a PDF."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <span className="badge-live">
                <span className="dot-live" />
                Live MCP Server
              </span>

              <p className="text-lg font-medium leading-relaxed text-muted">{mcp.description}</p>

              <div className="flex flex-wrap gap-3">
                <Link href={mcp.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" data-cursor-hover>
                  Chat with my MCP
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
                <Link href="#contact" className="btn btn-ghost" data-cursor-hover>
                  Discuss a project
                </Link>
              </div>

              <div className="card-b p-5">
                <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-muted">
                  {mcp.tools.length} callable tools
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {mcp.tools.map((tool) => (
                    <span key={tool.name} title={tool.description} className="tag-b">
                      {tool.name}()
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} variant="scale">
            <TerminalPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
