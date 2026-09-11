import type { Metadata } from "next";
import localFont from "next/font/local";

import { siteConfig } from "@/content/site-config";

import "./globals.css";

const inter = localFont({
  src: "../assets/fonts/inter-latin.woff2",
  variable: "--font-interface",
  display: "swap",
  style: "normal",
  weight: "100 900",
});

const newsreader = localFont({
  src: "../assets/fonts/newsreader-latin.woff2",
  variable: "--font-display",
  display: "swap",
  style: "normal",
  weight: "200 800",
});

const title = `${siteConfig.name} | Psicóloga em São Paulo e atendimento online`;
const description =
  "Psicoterapia para adultos com a Dra. Mariana Alves, psicóloga que atua com Terapia Cognitivo-Comportamental. Atendimento online e presencial em São Paulo.";
const socialTitle = `${siteConfig.name} — Psicoterapia para adultos`;
const socialDescription =
  "Atendimento psicológico online e presencial em São Paulo, com abordagem em Terapia Cognitivo-Comportamental.";

export const metadata: Metadata = {
  ...(siteConfig.siteUrl
    ? {
        metadataBase: new URL(siteConfig.siteUrl),
        alternates: { canonical: "/" },
      }
    : {}),
  title,
  description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  robots: {
    index: siteConfig.isProductionReady,
    follow: siteConfig.isProductionReady,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    ...(siteConfig.siteUrl ? { url: siteConfig.siteUrl } : {}),
    title: socialTitle,
    description: socialDescription,
  },
  twitter: {
    card: "summary",
    title: socialTitle,
    description: socialDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
