import type { Metadata } from "next";
import { Orbitron, Rajdhani, Inter } from "next/font/google";
import Script from "next/script";
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
  alternates: {
    canonical: "https://mecchachameleonlab.com",
  },
  openGraph: {
    title: "MECCHA CHAMELEON Lab — Best Hiding Spots, Maps & Guides",
    description:
      "Free MECCHA CHAMELEON guides: best hiding spots for every map with screenshots, Workshop map database, beginner guide, and tips.",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
      <head>
        {/* Bing Webmaster */}
        <meta name="msvalidate.01" content="711D023A581945A37EA78CB925D2A7A9" />

        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xggeuggf7b");
            `,
          }}
        />
      </head>
      <body className="font-body-main bg-background text-on-surface antialiased overflow-x-hidden">
        {/* Plausible Analytics */}
        <Script
          src="https://plausible.shipsolo.io/js/pa-fvsf9y25CvYQYtSohbXSP.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init()
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3RJR2L26DG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3RJR2L26DG');
          `}
        </Script>

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="crBy5UYpsRs/kdvFGmkIrg"
          strategy="afterInteractive"
        />

        <ParticleBg />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
