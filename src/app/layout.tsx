import type { Metadata } from "next";
import { Orbitron, Rajdhani, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBg from "@/components/ParticleBg";
import AnimationProvider from "@/components/AnimationProvider";
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
  keywords: [
    "meccha chameleon",
    "meccha chameleon guide",
    "meccha chameleon hiding spots",
    "meccha chameleon maps",
    "meccha chameleon tips",
    "meccha chameleon best hiding spots",
    "meccha chameleon beginner guide",
    "meccha chameleon steam",
    "meccha chameleon workshop maps",
    "meccha chameleon tier list",
    "meccha chameleon paint guide",
    "meccha chameleon hider guide",
    "meccha chameleon seeker guide",
    "meccha chameleon combos",
    "meccha chameleon crossplay",
    "meccha chameleon steam deck",
    "meccha chameleon system requirements",
    "meccha chameleon price",
    "meccha chameleon settings",
    "meccha chameleon controls",
    "meccha chameleon backrooms",
    "meccha chameleon sewer",
    "meccha chameleon all maps",
    "meccha chameleon easter eggs",
    "meccha chameleon update",
    "meccha chameleon patch notes",
    "meccha chameleon review",
    "meccha chameleon gameplay",
    "meccha chameleon strategy",
    "meccha chameleon multiplayer",
    "meccha chameleon online",
    "meccha chameleon pvp",
    "meccha chameleon hide and seek",
    "meccha chameleon hiding game",
    "meccha chameleon object morphing",
    "meccha chameleon best spots",
    "meccha chameleon map guide",
    "meccha chameleon sewer hiding spots",
    "meccha chameleon backrooms hiding spots",
    "meccha chameleon backrooms guide",
    "meccha chameleon sewer guide",
    "meccha chameleon workshop guide",
    "meccha chameleon custom maps",
    "meccha chameleon creative workshop",
    "meccha chameleon steam workshop",
    "meccha chameleon paint tutorial",
    "meccha chameleon color guide",
    "meccha chameleon object tiers",
    "meccha chameleon tier list 2026",
    "meccha chameleon best objects",
    "meccha chameleon seeker tips",
    "meccha chameleon hider tips",
    "meccha chameleon seeker strategy",
    "meccha chameleon hider strategy",
    "meccha chameleon advanced tips",
    "meccha chameleon pro tips",
    "meccha chameleon hidden spots",
    "meccha chameleon secret spots",
    "meccha chameleon glitches",
    "meccha chameleon exploits",
    "meccha chameleon tricks",
    "meccha chameleon 2026",
    "meccha chameleon pc",
    "meccha chameleon windows",
    "meccha chameleon pc requirements",
    "meccha chameleon fps",
    "meccha chameleon performance",
    "meccha chameleon best settings",
    "meccha chameleon graphics settings",
    "meccha chameleon keybinds",
    "meccha chameleon keyboard controls",
    "meccha chameleon mouse sensitivity",
    "meccha chameleon movement guide",
    "meccha chameleon spawn points",
    "meccha chameleon map rotation",
    "meccha chameleon game modes",
    "meccha chameleon how to play",
    "meccha chameleon getting started",
    "meccha chameleon new player",
    "meccha chameleon tutorial",
    "meccha chameleon walkthrough",
    "meccha chameleon secrets",
    "meccha chameleon hidden features",
    "meccha chameleon developer",
    "meccha chameleon lemorion",
    "meccha chameleon lemorion_1224",
    "meccha chameleon steam sale",
    "meccha chameleon discount",
    "meccha chameleon worth buying",
    "meccha chameleon free",
    "meccha chameleon player count",
    "meccha chameleon playerbase",
    "meccha chameleon community",
    "meccha chameleon reddit",
    "meccha chameleon discord",
    "meccha chameleon wiki",
    "meccha chameleon database",
    "meccha chameleon fan site",
    "meccha chameleon lab",
    "mecchachameleonlab",
    "best hiding spots steam",
    "steam hide and seek game",
    "pvp hiding game steam",
    "meccha chameleon map list",
    "meccha chameleon sewer map",
    "meccha chameleon backrooms map",
    "meccha chameleon spots guide",
    "meccha chameleon where to hide",
    "meccha chameleon how to win",
    "meccha chameleon win rate",
    "meccha chameleon competitive",
    "meccha chameleon ranked",
    "meccha chameleon leaderboard",
    "meccha chameleon achievements",
    "meccha chameleon steam achievements",
    "meccha chameleon all achievements",
    "meccha chameleon cosmetics",
    "meccha chameleon skins",
    "meccha chameleon customization",
    "meccha chameleon paint skins",
    "meccha chameleon color skins",
    "meccha chameleon objects list",
    "meccha chameleon all objects",
    "meccha chameleon morphing",
    "meccha chameleon disguise",
    "meccha chameleon stealth",
    "meccha chameleon camouflage",
  ],
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
        {/* Preconnect to third-party domains */}
        <link rel="preconnect" href="https://www.clarity.ms" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <link rel="preconnect" href="https://plausible.shipsolo.io" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Bing Webmaster */}
        <meta name="msvalidate.01" content="711D023A581945A37EA78CB925D2A7A9" />

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "xggeuggf7b");`}
        </Script>
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
          strategy="lazyOnload"
        />

        <ParticleBg />
        <AnimationProvider>
          <Navbar />
          {children}
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
