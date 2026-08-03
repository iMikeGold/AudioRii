import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      {
        url: "/assets/icons/favicons/audiorii-bracket-flow/favicon.ico",
      },
      {
        url: "/assets/icons/favicons/audiorii-bracket-flow/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/icons/favicons/audiorii-bracket-flow/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple:
      "/assets/icons/favicons/audiorii-bracket-flow/apple-touch-icon.png",
  },
  manifest:
    "/assets/icons/favicons/audiorii-bracket-flow/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
