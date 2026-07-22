"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { servicePackages, products } from "@/data/solutions";
import { Reveal } from "./Reveal";

const interestOptions = [
  { value: "", label: "What are you interested in?" },
  ...servicePackages.map((p) => ({ value: p.slug, label: p.title })),
  ...products.map((p) => ({ value: p.slug, label: p.title })),
  { value: "other", label: "Something else" },
];

export function SolutionsContact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [interest, setInterest] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const match = params.get("interest");
      if (match && interestOptions.some((o) => o.value === match)) {
        setInterest(match);
      }
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

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
        setInterest("");
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
          <p className="eyebrow mb-4">03 / Get Started</p>
          <h2 className="text-h1 max-w-2xl text-balance">Tell me what you&apos;re building.</h2>
          <p className="mt-5 max-w-xl text-lg font-semibold">
            No checkout, no forms buried in legalese — just tell me what you need and I&apos;ll get back to you.
          </p>
        </Reveal>

        <Reveal delay={120} variant="scale" className="mt-12">
          <form id="solutions-contact-form" onSubmit={handleSubmit} className="card-b mx-auto max-w-2xl space-y-5 p-8">
            <div>
              <label htmlFor="s-email" className="mb-2 block text-sm font-extrabold">
                Email
              </label>
              <input id="s-email" name="email" type="email" required placeholder="your@email.com" className="glass-input" />
            </div>

            <div>
              <label htmlFor="s-interest" className="mb-2 block text-sm font-extrabold">
                Interested in
              </label>
              <select
                id="s-interest"
                name="interest"
                required
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="glass-input"
              >
                {interestOptions.map((o) => (
                  <option key={o.value} value={o.value} disabled={o.value === ""}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="s-message" className="mb-2 block text-sm font-extrabold">
                Tell me about it
              </label>
              <textarea
                id="s-message"
                name="message"
                required
                rows={4}
                placeholder="What are you trying to build or solve?"
                className="glass-input resize-none"
              />
            </div>

            <button id="solutions-contact-submit" type="submit" disabled={status === "loading"} className="btn btn-primary w-full justify-center">
              {status === "loading" ? "Sending..." : "Send"}
            </button>
            {status === "success" && <p className="text-center text-sm font-bold">Got it — I&apos;ll reply soon.</p>}
            {status === "error" && (
              <p className="text-center text-sm font-bold text-coral">Something went wrong. Please email me directly.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
