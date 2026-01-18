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

const siteUrl = "https://baraat-card.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Baraat Invitation",
  description: "You're invited to celebrate at our Baraat on February 4th, 2026",
  openGraph: {
    title: "Baraat Invitation",
    description: "You're invited to celebrate at our Baraat on February 4th, 2026",
    type: "website",
    siteName: "Baraat Invitation",
    locale: "en_US",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Baraat Invitation",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baraat Invitation",
    description: "You're invited to celebrate at our Baraat on February 4th, 2026",
    images: [`${siteUrl}/og-image.svg`],
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
