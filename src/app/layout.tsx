import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles.css";
import QueryProvider from "@/components/providers/QueryProvider";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NoiseBg from "@/components/layout/NoiseBg";

import { SEO } from "@/constants";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords.split(", "),
  authors: [{ name: SEO.author }],
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.url,
    siteName: SEO.title,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
    creator: SEO.twitter,
  },
  alternates: {
    canonical: SEO.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <QueryProvider>
          <SmoothScroll>
            <NoiseBg />
            <CustomCursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </QueryProvider>
      </body>
    </html>
  );
}
