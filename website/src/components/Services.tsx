import Link from "next/link";
import { services } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = {
  agent: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  code: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  mobile: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  api: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
};

const accentStyles = {
  lime: "bg-lime text-ink",
  blue: "bg-blue text-cream",
  coral: "bg-coral text-cream",
  ink: "bg-ink text-cream",
};

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-b">
        <SectionHeading
          label="Services"
          index="03"
          title="What I bring to a team"
          subtitle="End-to-end product engineering across web, mobile, and AI infrastructure."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80} variant={i % 2 === 0 ? "left" : "right"}>
              <article className="card-b group h-full p-7">
                <div className={`mb-5 inline-flex rounded-2xl border-b2 p-3.5 ${accentStyles[service.accent]}`}>
                  {icons[service.icon]}
                </div>
                <h3 className="text-h3">{service.title}</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-muted">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex justify-center">
            <Link href="/solutions" className="btn btn-ghost" data-cursor-hover>
              See packages &amp; pricing for startups →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
