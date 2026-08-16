import Image from "next/image";
import { agenticSkills, skillGroups, skills } from "@/data/site";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const accentBg = ["bg-lime", "bg-blue", "bg-coral", "bg-ink"];

export function Skills() {
  return (
    <section id="skills" className="section-invert section-pad relative overflow-hidden">
      <div className="grid-dots-invert pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="container-b relative">
        <SectionHeading
          label="Skills"
          index="04"
          title="Technical expertise"
          subtitle="Tools and technologies I use to ship production software."
          invert
        />
      </div>

      <div className="relative mb-14">
        <Marquee speed={32}>
          {skills.map((skill) => (
            <div key={skill.name} className="border-b2 shadow-b-lime mx-2.5 flex items-center gap-3 rounded-full bg-cream px-5 py-3">
              <div className="relative h-6 w-6 shrink-0">
                <Image src={skill.icon} alt={skill.name} fill className="object-contain" unoptimized />
              </div>
              <span className="whitespace-nowrap text-sm font-bold text-ink">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="container-b relative">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const isLast = i === skillGroups.length - 1;
            return (
              <Reveal key={group.key} delay={i * 60} className={isLast ? "sm:col-span-2 lg:col-span-3" : ""}>
                <div className="card-b h-full overflow-hidden">
                  <div className={`h-2 w-full ${accentBg[i % accentBg.length]}`} aria-hidden />
                  <div className="p-6">
                    <p className="eyebrow text-muted">{group.label}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="tag-b">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={220} variant="scale">
          <div className="border-b2 shadow-b-lime mt-10 rounded-2xl bg-ink-soft p-7">
            <span className="badge-live">
              <span className="dot-live" />
              AI &amp; Agentic Stack
            </span>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {agenticSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="border-b2-invert inline-flex items-center rounded-full px-4 py-2 text-sm font-bold text-cream"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
