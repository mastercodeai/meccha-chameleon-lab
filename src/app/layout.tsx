import type { Metadata } from "next";
import { Orbitron, Rajdhani, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBg from "@/components/ParticleBg";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mecchachameleonlab.com"),
  title: {
    default: "MECCHA CHAMELEON Lab — Best Hiding Spots, Maps & Guides",
    template: "%s | MECCHA CHAMELEON Lab",
  },
  description:
    "Free MECCHA CHAMELEON guides: best hiding spots for every map with screenshots, Workshop map database, beginner guide, and tips. Updated for 2026.",
  openGraph: {
    title: "MECCHA CHAMELEON Lab — Best Hiding Spots, Maps & Guides",
    description:
      "Free MECCHA CHAMELEON guides: best hiding spots for every map with screenshots, Workshop map database, beginner guide, and tips.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MECCHA CHAMELEON Lab",
      },
    ],
    type: "website",
    siteName: "MECCHA CHAMELEON Lab",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MECCHA CHAMELEON Lab — Best Hiding Spots, Maps & Guides",
    description:
      "Free MECCHA CHAMELEON guides: best hiding spots for every map with screenshots, Workshop map database, beginner guide, and tips.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/Favicon.svg",
    shortcut: "/Favicon.svg",
    apple: "/Favicon.svg",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${orbitron.variable} ${rajdhani.variable} ${inter.variable}`}
    >
      <body className="font-body-main bg-background text-on-surface antialiased overflow-x-hidden">
        <ParticleBg />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
