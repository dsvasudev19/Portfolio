import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SolutionsHero } from "@/components/SolutionsHero";
import { ServicePackages } from "@/components/ServicePackages";
import { Products } from "@/components/Products";
import { SolutionsContact } from "@/components/SolutionsContact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solutions | Vasu.dev",
  description:
    "Productized service packages and platforms licensed directly to your organization — MVP sprints, agentic AI integration, CORE, OPs HUB, ElevateHub, DigiSchool, and more.",
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
