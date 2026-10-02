import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SolutionsHero } from "@/components/SolutionsHero";
import { ServicePackages } from "@/components/ServicePackages";
import { Products } from "@/components/Products";
import { SolutionsContact } from "@/components/SolutionsContact";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Productized service packages and platforms licensed directly to your organization — MVP sprints, agentic AI integration, CORE, OPs HUB, ElevateHub, DigiSchool, and more.",
  keywords: ["MVP Sprint", "Agentic AI Integration", "Platform Audit", "CORE", "OPs HUB", "ElevateHub", "DigiSchool", "Software licensing", "Vasu.dev Solutions"],
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions | Vasu{.dev}",
    description:
      "Productized service packages and platforms licensed directly to your organization — MVP sprints, agentic AI integration, CORE, OPs HUB, ElevateHub, DigiSchool, and more.",
    url: `${site.url}/solutions`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions | Vasu{.dev}",
    description:
      "Productized service packages and platforms licensed directly to your organization — MVP sprints, agentic AI integration, CORE, OPs HUB, ElevateHub, DigiSchool, and more.",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SolutionsHero />
        <ServicePackages />
        <Products />
        <SolutionsContact />
      </main>
      <Footer />
    </>
  );
}
