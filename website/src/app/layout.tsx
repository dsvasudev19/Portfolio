import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import Script from "next/script";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Vasu{.dev} | Vasudev Darse Shikari — Full Stack Developer & Agentic AI Specialist",
    template: "%s | Vasu{.dev}",
  },
  description:
    "Portfolio of Vasudev Darse Shikari — Full Stack Developer specializing in Java Spring Boot, Node.js, TypeScript, React, and building custom Model Context Protocol (MCP) servers for Agentic AI workflows.",
  keywords: [
    "dsvasudev.in",
    "www.dsvasudev.in",
    "Vasudev Darse Shikari",
    "Vasu.dev",
    "Vasudev Darse",
    "Vasudev",
    "Full Stack Engineer",
    "Agentic AI",
    "Model Context Protocol",
    "MCP Servers",
    "Java Spring Boot",
    "Node.js",
    "TypeScript",
    "React Developer",
    "React Native",
    "Microservices",
    "System Design",
    "Kupa Inc",
    "UST",
    "Spack Solutions",
    "Hyderabad Web Developer",
    "Software Developer India",
    "EV charging station software",
    "Co-investing platform"
  ],
  authors: [{ name: "Vasudev Darse Shikari", url: site.url }],
  creator: "Vasudev Darse Shikari",
  publisher: "Vasudev Darse Shikari",
  icons: { icon: "/assets/author.png" },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: "Vasu{.dev} | Vasudev Darse Shikari — Full Stack Developer & Agentic AI Specialist",
    description:
      "Portfolio of Vasudev Darse Shikari — Full Stack Developer specializing in Java Spring Boot, Node.js, TypeScript, React, and building custom Model Context Protocol (MCP) servers for Agentic AI workflows.",
    siteName: "Vasu{.dev}",
    images: [
      {
        url: "/assets/author.png",
        width: 1200,
        height: 630,
        alt: "Vasudev Darse Shikari — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasu{.dev} | Vasudev Darse Shikari — Full Stack Developer & Agentic AI Specialist",
    description:
      "Portfolio of Vasudev Darse Shikari — Full Stack Developer specializing in Java Spring Boot, Node.js, TypeScript, React, and building custom Model Context Protocol (MCP) servers for Agentic AI workflows.",
    images: ["/assets/author.png"],
    creator: "@dsvasudev19",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gtmId = site.gtmId;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        "name": site.name,
        "url": site.url,
        "image": `${site.url}/assets/author.png`,
        "jobTitle": "Software Engineer & Full Stack Specialist",
        "description": site.hero.description,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hyderabad, Telangana",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500020",
          "addressCountry": "IN"
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
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        "url": site.url,
        "name": `${site.name} — Full Stack Engineer & Agentic AI Specialist`,
        "mainEntity": { "@id": `${site.url}/#person` },
        "hasPart": [
          {
            "@type": "WebAPI",
            "name": "Portfolio MCP Server",
            "description": "Model Context Protocol endpoint exposing Vasudev's live tools and system context to AI agents",
            "url": "https://vasudev-claude.vercel.app/claude-connector",
            "documentation": `${site.url}/llms.txt`
          }
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
          "streetAddress": "Hyderabad, Telangana",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500001",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMS.txt Index" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMS.txt Full Knowledge Base" />
        <meta name="mcp-server" content="https://vasudev-claude.vercel.app/claude-connector" />
        <link rel="mcp-server" href="https://vasudev-claude.vercel.app/claude-connector" />
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
