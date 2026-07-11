import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-invert section-pad relative overflow-hidden">
      <div className="grid-dots-invert pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="container-b relative">
        <Reveal>
          <p className="eyebrow mb-4 text-lime">{site.about.kicker}</p>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal variant="up">
              <h2 className="text-h1 text-balance">{site.about.lead}</h2>
            </Reveal>

            <div className="mt-9 space-y-5">
              {site.about.paragraphs.map((paragraph, i) => (
                <Reveal key={paragraph.slice(0, 30)} delay={i * 90}>
                  <p className="text-lg font-medium leading-relaxed text-muted-invert">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={site.resume} className="btn btn-lime" data-cursor-hover>
                  Download Resume
                </Link>
                <Link href="#contact" className="btn btn-ghost-invert" data-cursor-hover>
                  Get in Touch
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={150}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {site.about.facts.map((fact) => (
                <div key={fact.label} className="card-b p-5">
                  <p className="eyebrow text-muted">{fact.label}</p>
                  <p className="mt-2 text-lg font-extrabold leading-snug tracking-tight">{fact.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
