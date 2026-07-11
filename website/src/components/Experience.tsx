import { experience } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const accentBg = {
  lime: "bg-lime",
  blue: "bg-blue",
  coral: "bg-coral",
};

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-b">
        <SectionHeading
          label="Experience"
          index="05"
          title="Where I've shipped"
          subtitle="Real impact measured in uptime, deployment speed, and data integrity."
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.title + job.company} delay={i * 100}>
              <article className="card-b overflow-hidden">
                <div className={`h-2.5 w-full ${accentBg[job.accent]}`} />
                <div className="p-7 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-h3">{job.title}</h3>
                        {job.status === "Current" && (
                          <span className="badge-live">
                            <span className="dot-live" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-lg font-bold text-muted">{job.company}</p>
                    </div>
                    <p className="font-mono text-sm font-bold text-muted">{job.period}</p>
                  </div>

                  <p className="mt-4 text-base font-medium leading-relaxed text-muted">{job.summary}</p>

                  <ul className="mt-6 space-y-3">
                    {job.highlights.map((item) => (
                      <li key={item.slice(0, 40)} className="flex gap-3">
                        <svg className="mt-1 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-base font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 border-t-2 border-ink pt-6">
                    {job.stack.map((t) => (
                      <span key={t} className="tag-b">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
