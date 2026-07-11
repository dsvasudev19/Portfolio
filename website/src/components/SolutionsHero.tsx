import Link from "next/link";

export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <div className="grid-dots pointer-events-none absolute inset-0 opacity-70" aria-hidden />

      <div className="container-b relative">
        <span className="badge-live">
          <span className="dot-live" />
          For Startups &amp; Teams
        </span>

        <h1 className="text-h1 mt-6 max-w-3xl text-balance">
          Build faster. <span className="highlight">Ship sooner.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-muted sm:text-xl">
          Productized service packages for startups that need to move fast, and SaaS tools built
          from the same agentic-AI engineering that powers this site.
        </p>

        <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
          <Link href="#packages" className="btn btn-primary" data-cursor-hover>
            View Packages
          </Link>
          <Link href="#contact" className="btn btn-ghost" data-cursor-hover>
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  );
}
