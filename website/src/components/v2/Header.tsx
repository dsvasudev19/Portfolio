"use client";

import { useState } from "react";
import Link from "next/link";
import { btnPrimary } from "./ui";

const links = [
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#approach" },
  { label: "Ask AI", href: "/#agentic-ai" },
  { label: "Projects", href: "/#work" },
  { label: "Experience", href: "/#experience" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto max-w-[1100px] rounded-[2rem] border border-mu-line bg-white/85 shadow-[0_10px_40px_-20px_rgba(14,20,36,0.25)] backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between pl-6 pr-2.5">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-mu-ink" aria-label="Vasudev — home">
            Vasudev<span className="text-mu-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-[0.95rem] font-semibold text-mu-body transition hover:text-mu-accent">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/#contact" className={`${btnPrimary} !px-6 !py-3 text-[0.95rem]`}>
              Say hello
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full text-mu-ink hover:bg-mu-bg lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col border-t border-mu-line px-6 pb-4 pt-2 lg:hidden" aria-label="Mobile" onClick={() => setOpen(false)}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="border-b border-mu-line py-4 text-lg font-semibold text-mu-ink last:border-0">
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
