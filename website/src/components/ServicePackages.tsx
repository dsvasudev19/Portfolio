import Link from "next/link";
import { servicePackages } from "@/data/solutions";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const accentBg = {
  lime: "bg-lime",
  blue: "bg-blue",
  coral: "bg-coral",
  ink: "bg-ink",
};

export function ServicePackages() {
  return (
    <section id="packages" className="section-invert section-pad relative overflow-hidden">
      <div className="grid-dots-invert pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="container-b relative">
        <SectionHeading
          label="Services"
          index="01"
          title="Productized service packages"
          subtitle="Fixed-scope engagements built around how startups actually ship — no lengthy discovery phase."
          invert
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {servicePackages.map((pkg, i) => (
            <Reveal key={pkg.slug} delay={i * 80}>
              <article className="card-b flex h-full flex-col overflow-hidden">
                <div className={`h-2 w-full ${accentBg[pkg.accent]}`} aria-hidden />
                <div className="flex h-full flex-col p-7">
                  <span className="tag-b w-fit">{pkg.bestFor}</span>
                  <h3 className="text-h3 mt-4">{pkg.title}</h3>
                  <p className="mt-3 text-base font-medium leading-relaxed text-muted">{pkg.tagline}</p>

                  <ul className="mt-6 space-y-2.5">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm font-medium leading-relaxed">
                        <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <p className="eyebrow mb-3 text-muted">{pkg.pricingNote}</p>
                    <Link
                      href={`/solutions?interest=${pkg.slug}#contact`}
                      className="btn btn-primary w-full justify-center"
                      data-cursor-hover
                    >
                      Get Started
                    </Link>
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
