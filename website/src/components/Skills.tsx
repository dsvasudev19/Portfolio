import Image from "next/image";
import { skillGroups, skills } from "@/data/site";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const accentBg = ["bg-lime", "bg-blue", "bg-coral", "bg-ink"];

export function Skills() {
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
      <div className="relative mb-10">
        <Marquee speed={32}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border-b2 shadow-b-lime mx-3 my-1 flex items-center gap-3 rounded-full bg-cream px-5 py-2.5"
            >
              <div className="relative h-6 w-6 shrink-0">
                <Image src={skill.icon} alt={skill.name} fill className="object-contain" unoptimized />
              </div>
              <span className="whitespace-nowrap text-sm font-bold text-ink">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* 8-Card Grid Layout */}
      <div className="container-b relative">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {skillGroups.map((group, i) => (
            <Reveal key={group.key} delay={i * 50} className="h-full">
              <div className="card-b border-b2 shadow-b-lime flex h-full flex-col overflow-hidden rounded-2xl bg-cream">
                <div className={`h-2 w-full ${accentBg[i % accentBg.length]}`} aria-hidden />
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="text-xs font-mono font-extrabold tracking-wider text-ink uppercase">{group.label}</p>
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-lg text-xs font-extrabold bg-white text-ink border-2 border-ink shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-lime transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
