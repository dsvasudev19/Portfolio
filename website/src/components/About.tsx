import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-invert section-pad relative overflow-hidden">
      <div className="grid-dots-invert pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="container-b relative">
        {/* Section Header */}
        <Reveal>
          <p className="eyebrow mb-3 text-lime">{site.about.kicker}</p>
        </Reveal>

        <Reveal variant="up">
          <h2 className="text-h1 max-w-3xl text-balance">{site.about.lead}</h2>
        </Reveal>

        {/* Primary Stat Cards Grid */}
        <Reveal variant="scale" delay={120}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.about.facts.map((fact) => (
              <div key={fact.label} className="border-b2 shadow-b-invert rounded-2xl bg-white/5 p-5 border border-white/15">
                <p className="text-xs font-mono font-bold tracking-wider text-lime uppercase">{fact.label}</p>
                <p className="mt-1.5 text-lg sm:text-xl font-extrabold text-cream tracking-tight">{fact.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Compressed Bio Paragraph & Actions */}
        <div className="mt-8 max-w-3xl">
          <Reveal delay={200}>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-muted-invert">
              {site.about.bio}
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href={site.resume} className="btn btn-lime shadow-b-sm" data-cursor-hover>
                Download Resume
              </Link>
              <Link href="#contact" className="btn btn-ghost-invert" data-cursor-hover>
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
