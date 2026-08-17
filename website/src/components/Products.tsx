"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { products, type Product } from "@/data/solutions";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const accentClass = {
  lime: "tag-b-lime",
  blue: "tag-b-blue",
  coral: "tag-b-coral",
  ink: "tag-b-ink",
};

function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <article
      className="card-b group flex h-full cursor-pointer flex-col p-7"
      tabIndex={0}
      aria-label={`View details for ${product.title}`}
      data-cursor-hover
      onClick={() => router.push(`/solutions/${product.slug}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(`/solutions/${product.slug}`);
        }
      }}
    >
      <span className={`tag-b w-fit ${accentClass[product.accent]}`}>{product.status}</span>
      <h3 className="text-h3 mt-4 transition-opacity group-hover:opacity-70">{product.title}</h3>
      <p className="mt-3 text-base font-medium leading-relaxed text-muted">{product.tagline}</p>

      <ul className="mt-6 space-y-2.5">
        {product.includes.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm font-medium leading-relaxed">
            <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-7" onClick={(e) => e.stopPropagation()}>
        <Link href={`/solutions/${product.slug}`} className="btn btn-ghost flex-1 justify-center" data-cursor-hover>
          View Details
        </Link>
        <Link
          href={`/solutions?interest=${product.slug}#contact`}
          className="btn btn-primary flex-1 justify-center"
          data-cursor-hover
        >
          {product.cta}
        </Link>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="products" className="section-pad">
      <div className="container-b">
        <SectionHeading
          label="Products"
          index="02"
          title="Platforms, sold outright"
          subtitle="Each one is licensed directly to your organization — I build and hand it off, you own and run it. No subscriptions, no multi-tenant lock-in."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 80} variant={i % 2 === 0 ? "left" : "right"}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
