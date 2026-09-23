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

      {/* Marquee Track */}
      <div className="relative mb-12">
        <Marquee speed={32}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border-b2-invert mx-2.5 my-1 flex items-center gap-2.5 rounded-full bg-ink-soft px-4 py-2"
            >
              <div className="relative h-5 w-5 shrink-0">
                <Image src={skill.icon} alt={skill.name} fill className="object-contain" unoptimized />
              </div>
              <span className="whitespace-nowrap text-sm font-bold text-cream">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Categorized expertise — on-brand card, calmer than a full chip grid */}
      <div className="container-b relative">
        <Reveal variant="up">
          <div className="border-b2-invert shadow-b-lime divide-y divide-white/10 rounded-2xl bg-ink-soft p-6 sm:p-8">
            {visibleGroups.map((group) => (
              <div
                key={group.key}
                className="grid grid-cols-1 gap-3 py-5 first:pt-0 last:pb-0 sm:grid-cols-[190px_1fr] sm:gap-6"
              >
                <p className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-lime">
                  {group.label}
                  {group.highlight && (
                    <span className="rounded-full bg-lime px-2 py-0.5 text-[9px] font-bold tracking-wider text-ink">
                      CORE
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag-b tag-b-invert">
                      {item}
                    </span>
                  ))}
                </div>
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
