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
    default: "Vasudev DS (dsvasudev / vasudevds / ds.vasudev) — Full Stack Developer & Agentic AI Specialist | Vasu{.dev}",
    template: "%s | Vasudev DS (dsvasudev)",
  },
  description:
    "Official portfolio of Vasudev DS (dsvasudev / vasudevds / ds.vasudev / Vasudev Darse Shikari) — Full Stack Developer & Agentic AI Specialist. Expert in Java Spring Boot, Node.js, TypeScript, React, Next.js, and custom Model Context Protocol (MCP) servers.",
  keywords: [
    "Vasudev DS",
    "dsvasudev",
    "vasudev",
    "vasudevds",
    "ds.vasudev",
    "ds vasudev",
    "dsvasudev developer",
    "vasudev developer",
    "vasudev full stack developer",
    "vasudev darse",
    "vasudev darse shikari",
    "darse shikari vasudev",
    "vasudev.dev",
    "vasu.dev",
    "Vasu.dev",
    "dsvasudev.in",
    "www.dsvasudev.in",
    "ds.vasudev instagram",
    "dsvasudev github",
    "dsvasudev linkedin",
    "DS Vasudev",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Agentic AI Specialist",
    "Model Context Protocol",
    "MCP Servers",
    "Java Spring Boot",
    "Node.js",
    "TypeScript",
    "React Developer",
    "Next.js Developer",
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
  authors: [{ name: "Vasudev DS (dsvasudev / vasudevds / ds.vasudev / Vasudev Darse Shikari)", url: site.url }],
  creator: "Vasudev DS (dsvasudev)",
  publisher: "Vasudev DS (dsvasudev)",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: "Vasudev DS (dsvasudev / vasudevds / ds.vasudev) — Full Stack Developer & Agentic AI Specialist",
    description:
      "Official portfolio of Vasudev DS (dsvasudev / vasudevds / ds.vasudev / Vasudev Darse Shikari) — Full Stack Developer & Agentic AI Specialist. Custom MCP servers, Java Spring Boot, Node.js, React, Next.js, and scalable cloud architectures.",
    siteName: "dsvasudev | Vasudev DS",
    images: [
      {
        url: "/assets/author.png",
        width: 1200,
        height: 630,
        alt: "Vasudev DS (dsvasudev / vasudevds / ds.vasudev) — Full Stack Developer & Agentic AI Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasudev DS (dsvasudev / vasudevds / ds.vasudev) — Full Stack Developer & Agentic AI Specialist",
    description:
      "Official portfolio of Vasudev DS (dsvasudev / vasudevds / ds.vasudev / Vasudev Darse Shikari) — Full Stack Developer & Agentic AI Specialist. Custom MCP servers, Java Spring Boot, Node.js, React, Next.js.",
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
        "alternateName": [
          "Vasudev DS",
          "dsvasudev",
          "vasudev",
          "vasudevds",
          "ds.vasudev",
          "DS Vasudev",
          "Vasudev Darse",
          "Vasudev Darse Shikari",
          "Darse Shikari Vasudev",
          "dsvasudev developer",
          "vasudev developer",
          "vasudev full stack developer",
          "Vasu.dev",
          "Vasudev.dev"
        ],
        "identifier": "dsvasudev",
        "url": site.url,
        "image": `${site.url}/assets/author.png`,
        "jobTitle": "Full Stack Developer & Agentic AI Specialist",
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
          site.social.whatsapp,
          site.social.instagram
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        "url": site.url,
        "name": "dsvasudev",
        "alternateName": [
          "Vasudev DS",
          "dsvasudev",
          "vasudev",
          "vasudevds",
          "ds.vasudev",
          "DS Vasudev",
          "dsvasudev developer",
          "vasudev developer",
          "Vasu.dev",
          "Vasudev Darse Shikari Portfolio"
        ],
        "publisher": { "@id": `${site.url}/#person` },
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        "url": site.url,
        "name": `Vasudev DS (dsvasudev) — Full Stack Engineer & Agentic AI Specialist`,
        "mainEntity": { "@id": `${site.url}/#person` },
        "hasPart": [
          {
            "@type": "WebAPI",
            "name": "Portfolio MCP Server",
            "description": "Model Context Protocol endpoint exposing Vasudev's live tools and system context to AI agents",
            "url": "https://ai.dsvasudev.in/mcp",
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
        "description": "Custom full-stack web and mobile development, microservice systems design, and Agentic AI integrations / MCP server construction by Vasudev DS (dsvasudev).",
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMS.txt Index" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMS.txt Full Knowledge Base" />
        <meta name="mcp-server" content="https://ai.dsvasudev.in/mcp" />
        <link rel="mcp-server" href="https://ai.dsvasudev.in/mcp" />
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {gtmId && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
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
