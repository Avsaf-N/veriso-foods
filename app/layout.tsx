import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { getWhatsappHref, siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
    apple: siteConfig.icon,
  },
  title: {
    default: "Veriso Foods | Premium Dehydrated Ingredients From India",
    template: "%s | Veriso Foods",
  },
  description: siteConfig.description,
  keywords: [
    "Veriso Foods",
    "dehydrated ingredients India",
    "onion powder exporter",
    "garlic powder exporter",
    "tomato powder supplier",
    "moringa powder India",
    "B2B food export company",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: "Veriso Foods | Premium Dehydrated Ingredients From India",
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Veriso Foods | Premium Dehydrated Ingredients From India",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell whatsappHref={getWhatsappHref()}>{children}</SiteShell>
      </body>
    </html>
  );
}
