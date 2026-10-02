import { experience } from "@/data/site";
import { Timeline, Words } from "./motion";
import { Reveal } from "./Reveal";
import { container, eyebrow, section, tag } from "./ui";

export function Experience() {
  return (
    <section id="experience" className={`${section} bg-white`}>
      <div className={container}>
        <Reveal>
          <span className={eyebrow}>06 / experience</span>
        </Reveal>
        <Words
          delay={80}
          className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-mu-ink sm:text-5xl lg:text-6xl"
          segments={[{ t: "Where I’ve worked," }, { t: "and what I shipped.", em: true }]}
        />

        <Timeline>
          {experience.map((x) => (
            <li key={x.company} className="relative">
              <span className={`absolute -left-[1.9rem] top-9 h-3.5 w-3.5 rounded-full ring-4 ring-white sm:-left-[2.9rem] ${x.status === "Current" ? "bg-mu-accent" : "bg-mu-line"}`} aria-hidden />
              <Reveal from="right">
                <article className="rounded-[1.75rem] border border-mu-line bg-mu-bg p-6 sm:p-9">
                  <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-mu-ink sm:text-3xl">{x.title}</h3>
                      <p className="mt-1 text-lg font-semibold text-mu-accent">{x.company}</p>
                    </div>
                    <p className="flex items-center gap-3 text-base text-mu-muted">
                      {x.status === "Current" && (
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">Current</span>
                      )}
                      {x.period}
                    </p>
                  </div>
                  <p className="mt-5 text-base text-mu-body sm:text-lg">{x.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {x.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-base text-mu-body">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mu-accent" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {x.stack.map((s) => (
                      <li key={s} className={`${tag} !bg-white`}>{s}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
