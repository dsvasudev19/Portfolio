"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { Words } from "./motion";
import { Reveal } from "./Reveal";
import { btnAccent, container, eyebrowDark, section } from "./ui";

const input =
  "w-full rounded-2xl border border-mu-line bg-mu-bg px-4 py-3.5 text-base text-mu-ink placeholder:text-mu-muted/70 transition focus:border-mu-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-mu-accent/15";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    try {
      const res = await fetch(site.contact.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={section}>
      <div className={container}>
        <div className="relative overflow-hidden rounded-[2rem] bg-mu-navy px-6 py-14 text-white sm:rounded-[2.5rem] sm:px-12 sm:py-20 lg:px-16">
          <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-mu-accent/40 blur-3xl" aria-hidden />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <Reveal>
              <span className={eyebrowDark}>07 / contact</span>
              <Words
                emClass="text-mu-lilac"
                delay={80}
                className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight !text-white sm:text-5xl lg:text-6xl"
                segments={[{ t: "Got something to build?" }, { t: "Say hello.", em: true }]}
              />
              <p className="mt-6 text-lg text-white/70">
                I’m open to full-time roles, contract work and interesting side projects. Drop me a line — I read and reply to every message myself.
              </p>
              <ul className="mt-9 space-y-4 text-lg">
                <li><a href={site.social.email} className="font-semibold text-white hover:text-mu-lilac">{site.contact.email}</a></li>
                <li><a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="text-white/85 hover:text-mu-lilac">{site.contact.phone}</a></li>
                <li className="text-white/60">{site.contact.location}</li>
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <form onSubmit={onSubmit} className="space-y-5 rounded-3xl bg-white p-6 text-mu-ink sm:p-9">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold">Your email</span>
                  <input className={input} name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold">Subject</span>
                  <input className={input} name="subject" type="text" required placeholder="Project inquiry" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold">What are you working on?</span>
                  <textarea className={`${input} resize-y`} name="message" required rows={5} placeholder="Tell me a little about what you are building…" />
                </label>
                <button type="submit" disabled={status === "loading"} className={`${btnAccent} w-full disabled:opacity-60`}>
                  {status === "loading" ? "Sending…" : "Send message"}
                </button>
                <p role="status" aria-live="polite" className={`text-center text-base ${status === "error" ? "text-red-600" : "text-mu-muted"}`}>
                  {status === "success" && "Thanks! Your message is on its way — I’ll get back to you soon."}
                  {status === "error" && "Something went wrong. Please email me directly."}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
