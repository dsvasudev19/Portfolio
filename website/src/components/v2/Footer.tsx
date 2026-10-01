import Link from "next/link";
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
          <div>
            <p className="text-2xl font-extrabold tracking-tight text-mu-ink">
              Vasudev<span className="text-mu-accent">.</span>
            </p>
            <p className="mt-2 max-w-sm text-base text-mu-muted">
              Full-stack engineer from Hyderabad, building products and AI agents.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-base font-semibold text-mu-ink" aria-label="Footer">
            {links.map((l) => (
              <a key={l.label} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="transition hover:text-mu-accent">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-wrap justify-between gap-3 text-sm text-mu-muted">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <Link href="/" className="font-semibold hover:text-mu-accent">View classic site →</Link>
        </div>
      </div>
    </footer>
  );
}
