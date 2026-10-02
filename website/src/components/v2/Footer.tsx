import { site } from "@/data/site";
import { container } from "./ui";

export function Footer() {
  const links = [
    { label: "GitHub", href: site.social.github },
    { label: "LinkedIn", href: site.social.linkedin },
    { label: "WhatsApp", href: site.social.whatsapp },
    { label: "Email", href: site.social.email },
    { label: "Résumé", href: site.resume },
  ];
  return (
    <footer className="pb-10 pt-6">
      <div className={container}>
        <div className="flex flex-col gap-8 border-t border-mu-line pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-sm text-lg text-mu-body">
            Full-stack engineer from Hyderabad, building products and AI agents.
          </p>
          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-base font-semibold text-mu-ink" aria-label="Footer">
            {links.map((l) => (
              <a key={l.label} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="transition hover:text-mu-accent">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        {/* Signature wordmark: big, centered, fading out toward the bottom edge. Decorative — the name is in the line below. */}
        <p
          aria-hidden
          className="mt-14 select-none whitespace-nowrap bg-gradient-to-b from-mu-ink via-mu-ink/60 to-mu-ink/5 bg-clip-text text-center text-[14vw] font-extrabold leading-[0.9] tracking-tighter text-transparent lg:text-[min(11.8vw,11rem)]"
        >
          dsvasudev<span className="text-mu-accent">.in</span>
        </p>
        <div className="mt-8 flex flex-wrap justify-between gap-3 text-sm text-mu-muted">
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
