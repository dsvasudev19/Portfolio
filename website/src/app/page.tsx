import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AgenticAI } from "@/components/AgenticAI";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        "name": site.name,
        "url": site.url,
        "image": `${site.url}/assets/author.png`,
        "jobTitle": "Full Stack Engineer",
        "description": site.hero.description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "India"
        },
        "knowsAbout": [
          "Java Full Stack Engineering",
          "MERN Stack Development",
          "Agentic AI Frameworks",
          "Model Context Protocol (MCP)",
          "MCP Servers",
          "Java & Spring Boot",
          "Node.js & TypeScript",
          "React & Next.js",
          "MongoDB & PostgreSQL",
          "Startup 0-to-1 MVP Development",
          "Freelance Software Engineering",
          "System Design & Microservices",
          "REST APIs",
          "Docker & CI/CD Pipelines"
        ],
        "sameAs": [
          site.social.github,
          site.social.linkedin,
          site.social.instagram
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        "name": site.brand,
        "url": site.url,
        "logo": `${site.url}/assets/author.png`,
        "image": `${site.url}/assets/author.png`,
        "description": "Custom full-stack web and mobile development, microservice systems design, and Agentic AI integrations / MCP server construction by Vasudev Darse Shikari.",
        "telephone": site.contact.phone,
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "India"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <AgenticAI />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
