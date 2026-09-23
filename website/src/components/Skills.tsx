"use client";

import { useState } from "react";
import Image from "next/image";
import { skillGroups, skills } from "@/data/site";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const DEFAULT_VISIBLE = 4;

export function Skills() {
  const [showAll, setShowAll] = useState(false);

  // Architecture and AI/Agentic skills are always shown — they're the core positioning, not optional detail.
  const highlighted = skillGroups.filter((g) => g.highlight);
  const rest = skillGroups.filter((g) => !g.highlight);
  const defaultRestCount = Math.max(DEFAULT_VISIBLE - highlighted.length, 0);
  const visibleRest = showAll ? rest : rest.slice(0, defaultRestCount);
  const visibleGroups = [...highlighted, ...visibleRest];
  const hiddenCount = rest.length - visibleRest.length;

  return (
    <section id="skills" className="section-invert section-pad relative overflow-hidden">
      <div className="container-b relative">
        <SectionHeading
          label="Skills"
          index="04"
          title="Technical expertise"
          subtitle="Tools and technologies I use to ship production software."
          invert
        />
      </div>

      {/* Marquee Track — quieter, single-line credential strip */}
      <div className="relative mb-12">
        <Marquee speed={32}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="mx-2.5 my-1 flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2"
            >
              <div className="relative h-5 w-5 shrink-0 opacity-90">
                <Image src={skill.icon} alt={skill.name} fill className="object-contain" unoptimized />
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-cream/85">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Categorized expertise — a single quiet panel, spec-sheet style */}
      <div className="container-b relative">
        <Reveal variant="up">
          <div className="divide-y divide-white/10 rounded-2xl border border-white/12 bg-white/[0.025]">
            {visibleGroups.map((group) => (
              <div
                key={group.key}
                className={`grid grid-cols-1 gap-1.5 px-6 py-5 sm:grid-cols-[190px_1fr] sm:gap-6 sm:py-6 ${
                  group.highlight ? "bg-lime/[0.05]" : ""
                }`}
              >
                <p className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-lime">
                  {group.label}
                  {group.highlight && (
                    <span className="rounded-full bg-lime/15 px-2 py-0.5 text-[9px] font-bold tracking-wider text-lime">
                      CORE
                    </span>
                  )}
                </p>
                <p className="text-sm leading-relaxed font-medium text-muted-invert sm:text-[15px]">
                  {group.items.join("  ·  ")}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {hiddenCount > 0 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="btn btn-ghost-invert btn-sm"
              data-cursor-hover
            >
              {showAll ? "Show fewer skills" : `Show all skills (+${hiddenCount} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
