import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const siteName = "Ibini Chinasa Joy Portfolio";
const title = "Ibini Chinasa Joy | Frontend Engineer";
const description =
  "Frontend Engineer building scalable SaaS and enterprise web applications with React, Next.js, and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Ibini Chinasa Joy",
  },
  description,
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Ibini Chinasa Joy" }],
  creator: "Ibini Chinasa Joy",
  publisher: "Ibini Chinasa Joy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title,
    description,
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ibini Chinasa Joy",
  url: siteUrl,
  jobTitle: "Frontend Engineer",
  knowsAbout: ["React", "Next.js", "TypeScript", "Frontend Architecture", "Performance Optimization"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
