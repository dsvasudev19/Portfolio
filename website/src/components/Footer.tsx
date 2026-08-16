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
          <div className="flex flex-wrap items-center gap-6">
            <Link href={site.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-70">
              <svg className="h-4 w-4 shrink-0 text-[#24292e]" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </Link>
            <Link href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-70">
              <svg className="h-4 w-4 shrink-0 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </Link>
            <Link href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-70">
              <svg className="h-4 w-4 shrink-0 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.001 2c-5.523 0-10 4.477-10 10 0 1.821.487 3.53 1.338 5.003L2 22l5.15-1.312A9.958 9.958 0 0012.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.083a8.05 8.05 0 01-4.099-1.121l-.294-.174-3.055.779.816-2.978-.191-.306a8.05 8.05 0 01-1.24-4.283c0-4.454 3.627-8.081 8.081-8.081 4.454 0 8.081 3.627 8.081 8.081-.001 4.454-3.628 8.083-8.099 8.083z" />
              </svg>
              WhatsApp
            </Link>
            <Link href={site.social.email} className="flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-70">
              <svg className="h-4 w-4 shrink-0 text-[#EA4335]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
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
        <span className="text-outline-invert block text-[18.5vw] font-extrabold leading-none tracking-tighter sm:text-[16vw] lg:text-[14.8vw]">
          dsvasudev.in
        </span>
      </div>
    </footer>
  );
}
