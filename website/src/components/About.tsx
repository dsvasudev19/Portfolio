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

        {/* Compact Fact Line (was a 4-box stat grid — merged into one row, Hero already carries the headline stats) */}
        <Reveal variant="scale" delay={120}>
          <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-sm">
            {site.about.facts.map((fact, i) => (
              <span key={fact.label} className="flex items-center gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-lime">{fact.label}</span>
                <span className="font-bold text-cream">{fact.value}</span>
                {i < site.about.facts.length - 1 && (
                  <span className="ml-1.5 text-white/20" aria-hidden>
                    /
                  </span>
                )}
              </span>
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
