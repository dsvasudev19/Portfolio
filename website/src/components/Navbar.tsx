"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { site } from "@/data/site";

const primaryNav = [
  { label: "About", href: "/#about" },
  { label: "Agentic AI", href: "/#agentic-ai" },
  // { label: "Solutions", href: "/solutions" }, // TODO: re-enable when ready to launch
  { label: "Work", href: "/#works" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-cream transition-shadow duration-300 ${
        scrolled ? "border-b-2 border-ink" : "border-b-2 border-transparent"
      }`}
    >
      <nav className="container-b flex h-20 items-center justify-between gap-6">
        <Logo />

        <ul className="hidden items-center gap-9 lg:flex">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={site.resume} className="btn btn-ghost btn-sm" data-cursor-hover>
            Resume
          </Link>
          <Link href="/#contact" className="btn btn-lime btn-sm" data-cursor-hover>
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="border-b2 flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-20 z-50 border-b-2 border-ink bg-cream px-6 py-8 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-1 py-3 text-2xl font-extrabold tracking-tight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 border-t-2 border-ink pt-6">
              <Link href={site.resume} onClick={() => setOpen(false)} className="btn btn-ghost justify-center">
                Resume
              </Link>
              <Link href="#contact" onClick={() => setOpen(false)} className="btn btn-lime justify-center">
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
