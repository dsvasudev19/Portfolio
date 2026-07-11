import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/solutions";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Props = { params: Promise<{ slug: string }> };

const accentClass = {
  lime: "tag-b-lime",
  blue: "tag-b-blue",
  coral: "tag-b-coral",
  ink: "tag-b-ink",
};

const accentBg = {
  lime: "bg-lime",
  blue: "bg-blue",
  coral: "bg-coral",
  ink: "bg-ink",
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return { title: `${product.title} | Vasu.dev`, description: product.tagline };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main>
        <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
          <div className="grid-dots pointer-events-none absolute inset-0 opacity-70" aria-hidden />

          <div className="container-b relative">
            <Link href="/solutions" className="text-sm font-bold transition-opacity hover:opacity-60" data-cursor-hover>
              ← All Products
            </Link>

            <div className="mt-6">
              <span className={`tag-b ${accentClass[product.accent]}`}>{product.status}</span>
            </div>

            <h1 className="text-h1 mt-5 max-w-3xl text-balance">{product.title}</h1>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-muted sm:text-xl">{product.tagline}</p>

            <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
              <Link href={`/solutions?interest=${product.slug}#contact`} className="btn btn-primary" data-cursor-hover>
                {product.cta}
              </Link>
              <Link href="/solutions#products" className="btn btn-ghost" data-cursor-hover>
                Compare Other Products
              </Link>
            </div>
          </div>
        </section>

        <section className="section-invert section-pad relative overflow-hidden">
          <div className="grid-dots-invert pointer-events-none absolute inset-0 opacity-40" aria-hidden />
          <div className="container-b relative">
            <p className="eyebrow mb-4 text-lime">The Problem</p>
            <p className="text-h3 max-w-3xl text-balance font-medium leading-snug">{product.problem}</p>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-b">
            <p className="eyebrow mb-4">Features</p>
            <h2 className="text-h2 max-w-2xl text-balance">Everything included</h2>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature, i) => (
                <article key={feature.title} className="card-b flex h-full flex-col overflow-hidden">
                  <div className={`h-2 w-full ${accentBg[product.accent]}`} aria-hidden />
                  <div className="p-6">
                    <span className="eyebrow text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 text-lg font-extrabold leading-snug">{feature.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-muted">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t-2 border-ink">
          <div className="container-b grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="eyebrow mb-4">Who It&apos;s For</p>
              <ul className="space-y-3">
                {product.idealFor.map((item) => (
                  <li key={item} className="flex gap-3 text-base font-medium leading-relaxed">
                    <svg className="mt-1 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="eyebrow mb-4 mt-10">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((t) => (
                  <span key={t} className="tag-b">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-b p-7">
              <p className="eyebrow text-muted">How You Get It</p>
              <p className="mt-3 text-lg font-semibold leading-relaxed">{product.engagementModel}</p>
              <Link href={`/solutions?interest=${product.slug}#contact`} className="btn btn-primary mt-7 w-full justify-center" data-cursor-hover>
                {product.cta}
              </Link>
            </div>
          </div>
        </section>

        <section className="section-lime section-pad relative overflow-hidden">
          <div className="grid-dots pointer-events-none absolute inset-0 opacity-30" aria-hidden />
          <div className="container-b relative text-center">
            <h2 className="text-h1 mx-auto max-w-2xl text-balance">Ready to bring {product.title} to your team?</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={`/solutions?interest=${product.slug}#contact`} className="btn btn-primary" data-cursor-hover>
                {product.cta}
              </Link>
              <Link href="/solutions#products" className="btn btn-ghost" data-cursor-hover>
                See All Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
