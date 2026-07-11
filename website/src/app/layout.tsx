import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vasu{.dev} | Vasudev Darse Shikari — Full Stack Developer",
  description:
    "Portfolio of Vasudev Darse Shikari — Full Stack Developer specializing in Java Spring Boot, MERN stack, React Native, and agentic AI systems.",
  icons: { icon: "/assets/author.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
