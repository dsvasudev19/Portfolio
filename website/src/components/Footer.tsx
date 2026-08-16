"use client";

import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-invert relative overflow-hidden border-t-2 border-ink pt-14">
      <div className="container-b">
        <div className="flex flex-col items-center justify-between gap-6 border-b-2 border-cream/20 pb-10 sm:flex-row">
          <p className="text-sm font-semibold text-muted-invert">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-7">
            <Link href={site.social.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold transition-opacity hover:opacity-60">
              GitHub
            </Link>
            <Link href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-bold transition-opacity hover:opacity-60">
              LinkedIn
            </Link>
            <Link href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-bold transition-opacity hover:opacity-60">
              Instagram
            </Link>
            <Link href={site.social.email} className="text-sm font-bold transition-opacity hover:opacity-60">
              Email
            </Link>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-bold text-lime transition-opacity hover:opacity-70"
          >
            Back to top ↑
          </button>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none py-4 text-center">
        <span className="text-outline-invert block text-[17vw] font-extrabold leading-none tracking-tight sm:text-[13vw]">
          vasudev
        </span>
      </div>
    </footer>
  );
}
