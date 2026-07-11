"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const contactItems = [
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    label: site.contact.location,
  },
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    label: site.contact.phone,
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: site.contact.email,
  },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(site.contact.formspree, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-lime section-pad relative overflow-hidden">
      <div className="grid-dots pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="container-b relative">
        <Reveal>
          <p className="eyebrow mb-4">07 / Contact</p>
          <h2 className="text-h1 max-w-3xl text-balance">Let&apos;s build something worth shipping.</h2>
          <p className="mt-5 max-w-xl text-lg font-semibold">
            Open to full-time roles, contract work, and interesting collaborations.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal variant="left">
            <div className="card-b h-full p-8">
              <h3 className="text-h3">Let&apos;s connect</h3>
              <p className="mt-3 text-base font-medium text-muted">
                I&apos;m always open to discussing new projects and opportunities.
              </p>

              <div className="mt-8 space-y-4">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 font-semibold">
                    <span className="border-b2 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                      </svg>
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} variant="right">
            <form onSubmit={handleSubmit} className="card-b space-y-5 p-8">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-extrabold">
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="your@email.com" className="glass-input" />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-extrabold">
                  Subject
                </label>
                <input id="subject" name="subject" type="text" required placeholder="Project inquiry" className="glass-input" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-extrabold">
                  Message
                </label>
                <textarea id="message" name="message" required rows={4} placeholder="Tell me about your project..." className="glass-input resize-none" />
              </div>
              <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full justify-center">
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && <p className="text-center text-sm font-bold">Message sent successfully!</p>}
              {status === "error" && <p className="text-center text-sm font-bold text-coral">Something went wrong. Please email me directly.</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
