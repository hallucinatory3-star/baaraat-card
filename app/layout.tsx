import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://baaraat-card.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Baraat Invitation",
  description: `You're invited to celebrate Baraat on February 4th, 2026`,
  keywords: [
    "wedding",
    "invitation",
    "celebration",
    "love",
    "marriage",
    "ceremony",
    "festivities",
  ],
  openGraph: {
    title: "Tap to open your invitation.",
    description: `Join us in the celebration filled with love and blessings.`,
    type: "website",
    siteName: "Wedding Invitation",
    locale: "en_US",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tap to open your invitation.",
    description: `Join us in the celebration filled with love and blessings.`,
    images: [`${siteUrl}/twitter-image`],
  },
  other: {
    "theme-color": "#d4af37",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
