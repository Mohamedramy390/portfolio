import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.hero.description,
  keywords: [
    "Backend Developer",
    "Software Engineer",
    "Full-Stack Developer",
    "Node.js",
    "NestJS",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "API Design",
    profile.name,
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description: profile.hero.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.hero.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg-primary text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
