"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FAQSchema, WebSiteSchema, GameSchema } from "@/components/Schema";
import { NativeBanner } from "@/components/Adsterra";
import { maps } from "@/data/maps";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function DifficultyStars({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-3 h-3 [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)] ${
            i <= level ? "bg-yellow-400 shadow-[0_0_4px_rgba(250,204,21,0.4)]" : "bg-surface-container-highest"
          }`}
        />
      ))}
    </div>
  );
}

const stats = [
  { value: "15M+", label: "COPIES SOLD" },
  { value: "93M+", label: "YOUTUBE VIEWS" },
  { value: "53K+", label: "STEAM REVIEWS" },
  { value: "7+", label: "OFFICIAL MAPS" },
  { value: "605", label: "WORKSHOP ITEMS" },
];

const features = [
  {
    icon: "🗺️",
    title: "Per-Map Spot Guides",
    description: "Each official map gets its own dedicated page with 10+ hiding spots. Every spot has a labeled screenshot, description, and difficulty rating.",
  },
  {
    icon: "⭐",
    title: "Difficulty Ratings",
    description: "Every spot is rated by difficulty — how hard it is to find, how often players check it, and how reliable it is across skill levels.",
  },
  {
    icon: "🔧",
    title: "Workshop Database",
    description: "A searchable database of 500+ Workshop maps with ratings, subscriber counts, and direct Steam subscribe links.",
  },
  {
    icon: "🎭",
    title: "Hider vs Seeker Guides",
    description: "Separate strategy guides for Hider and Seeker roles, each with role-specific tips, common mistakes, and advanced techniques.",
  },
  {
    icon: "🎨",
    title: "Paint & Color Guide",
    description: "A visual guide showing the best color combinations for each map surface — which paints blend in and which ones stand out.",
  },
  {
    icon: "🔄",
    title: "Always Updated",
    description: "Content updates when the game adds new maps or balance changes. Workshop data refreshes daily via the Steam API.",
  },
];

const faqItems = [
  {
    q: "Is MECCHA CHAMELEON Lab an official site?",
    a: "No. This is an independent fan site. We are not affiliated with the developer (lemorion_1224) or Valve Corporation. All game assets belong to their respective owners.",
  },
  {
    q: "How does the 3D Eyedropper work?",
    a: "Right-click any surface in the game to sample its exact color AND material properties (roughness and metallic values). The eyedropper captures the color with lighting context from that specific spot. Always sample from the exact location where you plan to hide — colors look different under different lighting.",
  },
  {
    q: "What do the Roughness and Metallic sliders do?",
    a: "Roughness controls how matte or shiny your surface appears (0 = mirror-shiny, 1 = completely matte). Metallic controls how metallic the surface looks (0 = non-metal like wood or fabric, 1 = full metal like chrome). Matching these to the environment is just as important as matching the color — wrong metallic values are one of the biggest tells for experienced seekers.",
  },
  {
    q: "How do I paint faster?",
    a: "Move your mouse quickly while painting to create dot patterns instead of solid strokes — this covers area faster. Use Color Profiles to save and switch between pre-mixed colors instantly. Also, pre-mix your map's dominant colors before the round starts so you're not mixing mid-round.",
  },
  {
    q: "What is X-Ray Rendering?",
    a: "X-Ray Rendering lets you see through your own body to paint hard-to-reach areas like your back, underside, and between limbs. Toggle it on when you need to paint areas you can't normally see, then toggle it off to check your overall appearance.",
  },
  {
    q: "How is the visibility score calculated?",
    a: "The game compares your painted body against the surrounding environment at the vertex level. It evaluates color distance (how close your colors are to the environment), material matching (roughness and metallic values), and how well your silhouette blends in. Lower visibility = harder for seekers to find you.",
  },
  {
    q: "Does MECCHA CHAMELEON support crossplay?",
    a: "No. As of July 2026, MECCHA CHAMELEON is PC (Windows) only. There is no crossplay because the game is not available on other platforms.",
  },
  {
    q: "Is MECCHA CHAMELEON free to play?",
    a: "No. The game costs $5.99 on Steam. However, this guide site is completely free — no sign-up, no paywall, no catch.",
  },
  {
    q: "How many official maps are there?",
    a: "There are 7 official maps: Backrooms, Hide-and-Seek Mansion, Indoor Country, Osaka, Penguin Hotel, Sewer, and Sugar Land. The Steam Workshop adds 605+ community-created maps. Both Backrooms and Osaka have been reworked in recent updates.",
  },
  {
    q: "What game modes are available?",
    a: "The core mode is hide-and-seek (Hiders vs Seekers). Additional modes include Double Mode (two players share a hiding spot), Reverse Chicken Race (deduce the hidden player from their paint), and various community-made modes via Workshop maps.",
  },
  {
    q: "Can I play MECCHA CHAMELEON with a controller?",
    a: "Controller support is in development. Update v2.5.0 added an experimental color palette for upcoming controller support. The game currently works best with keyboard and mouse for precise painting.",
  },
  {
    q: "How many players can play MECCHA CHAMELEON?",
    a: "The game supports 2-10 players per match, depending on the host's network environment. Public matches allow anyone to join, while private matches are invite-only. Streamers can easily host viewer participation games.",
  },
  {
    q: "What are the best hiding spots?",
    a: "The best spots depend on the map. In general: look for areas with natural cover, match the dominant color of your surroundings, and use the environment's shape to break your silhouette. Check our per-map guides for specific spot recommendations with screenshots.",
  },
  {
    q: "Is MECCHA CHAMELEON on Steam Deck?",
    a: "MECCHA CHAMELEON is a PC game on Steam, so it can run on Steam Deck through Proton compatibility. However, there is no official Steam Deck optimization. Check our Steam Deck guide for setup tips and recommended settings.",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const overviewRef = useRef<HTMLElement>(null);
  const mapsOverviewRef = useRef<HTMLElement>(null);
  const platformRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Hero animations
    const heroTl = gsap.timeline({ delay: 0.3 });
    
    if (heroRef.current) {
      const heroTitle = heroRef.current.querySelector("h1");
      const heroParagraph = heroRef.current.querySelector("p");
      const heroImage = heroRef.current.querySelector(".hero-image");

      heroTl
        .from(heroTitle, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(heroParagraph, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.4")
        .from(".hero-cta", {
          y: 20,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
        }, "-=0.3")
        .from(heroImage, {
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.6");
    }

    // Stats animation with ScrollTrigger
    if (statsRef.current) {
      const statElements = statsRef.current.querySelectorAll(".stat-item");
      
      gsap.from(statElements, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Counter animation for stats — only start when visible
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const valueEl = entry.target.querySelector(".stat-value") as HTMLElement | null;
            if (valueEl && !valueEl.dataset.animated) {
              valueEl.dataset.animated = "true";
              const finalText = valueEl.textContent || "";
              const numMatch = finalText.match(/[\d.]+/);
              if (numMatch) {
                const finalNum = parseFloat(numMatch[0]);
                const suffix = finalText.replace(numMatch[0], "");
                const isDecimal = finalText.includes(".");
                
                // Only replace text AFTER animation starts
                valueEl.textContent = (isDecimal ? "0.0" : "0") + suffix;
                
                const counter = { val: 0 };
                gsap.to(counter, {
                  val: finalNum,
                  duration: 2,
                  ease: "power1.out",
                  onUpdate: function() {
                    if (isDecimal) {
                      valueEl.textContent = counter.val.toFixed(1) + suffix;
                    } else {
                      valueEl.textContent = Math.round(counter.val) + suffix;
                    }
                  },
                  onComplete: function() {
                    valueEl.textContent = finalText;
                  }
                });
              }
            }
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      
      statElements.forEach((stat) => counterObserver.observe(stat));
    }

    // Features animation
    if (featuresRef.current) {
      const featureCards = featuresRef.current.querySelectorAll(".feature-card");
      
      gsap.from(featureCards, {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // How It Works animation
    if (howItWorksRef.current) {
      const steps = howItWorksRef.current.querySelectorAll(".step-item");
      
      gsap.from(steps, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: howItWorksRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // FAQ animation
    if (faqRef.current) {
      const faqItems = faqRef.current.querySelectorAll("details");
      
      gsap.from(faqItems, {
        x: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Overview section animation
    if (overviewRef.current) {
      const overviewEls = overviewRef.current.querySelectorAll(".max-w-3xl p, .grid > div");
      gsap.from(overviewEls, {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Maps overview animation
    if (mapsOverviewRef.current) {
      const mapCards = mapsOverviewRef.current.querySelectorAll(".map-card");
      gsap.from(mapCards, {
        y: 80,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapsOverviewRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Platform section animation
    if (platformRef.current) {
      const platformCards = platformRef.current.querySelectorAll(".grid > div");
      gsap.from(platformCards, {
        scale: 0.85,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: platformRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // CTA animation
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main>
      <WebSiteSchema />
      <GameSchema />
      <FAQSchema items={faqItems} />
      
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-[80vh] flex flex-col md:flex-row items-start md:items-center gap-gutter pt-24 md:pt-28 pb-stack-lg px-4 md:px-gutter max-w-[1440px] mx-auto hero-bg relative">
        <div className="w-full md:w-1/2 flex flex-col gap-stack-lg z-10">
          <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface leading-tight">
            MECCHA CHAMELEON:{" "}
            <span className="text-primary">Best Hiding Spots & Maps Guide (2026)</span>
          </h1>
          <p className="font-body-main text-body-main text-on-surface-variant max-w-lg">
            <Link href="/maps/backrooms" className="text-primary hover:underline">MECCHA CHAMELEON</Link> sold 15 million copies. Top YouTube videos have 93M+ views. But search for hiding spot guides and all you get is irrelevant results. Our <Link href="/tier-list" className="text-primary hover:underline">map tier list</Link> and <Link href="/maps" className="text-primary hover:underline">per-map spot guides</Link> fix that.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/maps"
              className="hero-cta bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all hover:scale-105 active:scale-95"
            >
              BROWSE ALL MAPS
            </Link>
            <Link
              href="/guides/beginner"
              className="hero-cta border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all hover:scale-105 active:scale-95"
            >
              READ THE BEGINNER GUIDE
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative z-10 hero-image">
          <div className="relative rounded-lg overflow-hidden border-2 border-[#1e1e32] shadow-[0_0_15px_rgba(75,226,119,0.2)]">
            <Image
              src="/hero-character.jpg"
              alt="MECCHA CHAMELEON character peeling off a brick wall"
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, 50vw"
              preload={true}
              loading="eager"
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section ref={statsRef} className="grid grid-cols-2 md:grid-cols-5 gap-4 py-8 border-y border-[#1e1e32] mt-4 mb-stack-lg bg-surface/20 max-w-[1440px] mx-auto px-4">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item flex flex-col items-center justify-center p-4 hover:scale-110 transition-transform">
            <span className="stat-value font-display-lg text-2xl md:text-stat-lg text-primary font-bold">{stat.value}</span>
            <span className="font-label-caps text-label-caps text-on-surface-variant mt-2 text-center">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-stack-lg px-4 md:px-gutter max-w-[1440px] mx-auto">
        <h2 className="font-headline-md text-headline-md text-on-surface text-center mb-stack-lg uppercase">What You Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card bg-surface border border-outline-variant rounded-lg p-6 glow-hover transition-all hover:scale-105 hover:border-primary/50"
            >
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="font-headline-md text-lg text-on-surface mb-2">{feature.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Native Ad between content sections */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-gutter py-4">
        <NativeBanner />
      </div>

      {/* How It Works */}
      <section ref={howItWorksRef} className="py-stack-lg px-4 md:px-gutter max-w-[1440px] mx-auto">
        <h2 className="font-headline-md text-headline-md text-on-surface text-center mb-stack-lg uppercase">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Pick a Map", desc: "Browse the map list or search for a specific one", icon: "🎯" },
            { step: "2", title: "See the Spots", desc: "Each spot has a screenshot, description, and difficulty rating", icon: "📍" },
            { step: "3", title: "Win More Rounds", desc: "Your friends will wonder how you got so good", icon: "🏆" },
          ].map((item) => (
            <div key={item.step} className="step-item text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4 shadow-[0_0_12px_rgba(75,226,119,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(75,226,119,0.5)] transition-all">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-headline-md text-lg text-on-surface mb-2">{item.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Game Overview — SEO content with feature highlight cards */}
      <section ref={overviewRef} className="py-stack-lg px-4 md:px-gutter max-w-[1440px] mx-auto">
        <h2 className="font-display-lg text-2xl md:text-display-lg text-on-surface text-center mb-4 uppercase">What Is MECCHA CHAMELEON?</h2>
        <p className="font-body-main text-body-main text-on-surface-variant text-center max-w-2xl mx-auto mb-stack-lg">
          A multiplayer hide-and-seek game on Steam where you paint your character to blend into the environment. 15M+ copies sold. 93M+ YouTube views. $5.99 on Steam.
        </p>
        <div className="max-w-3xl mx-auto space-y-4 font-body-main text-body-main text-on-surface-variant mb-stack-lg">
          <p>
            <strong className="text-on-surface">MECCHA CHAMELEON</strong> is a multiplayer hide-and-seek game on Steam where you paint your character's body to blend into the environment. Instead of choosing a skin, you use a 3D color picker with a right-click eyedropper to sample colors directly from the map surface — matching color, roughness, and metallic values to become nearly invisible. The game supports 2–10 players per match, with Hiders trying to camouflage and Seekers trying to spot them before time runs out.
          </p>
          <p>
            What makes MECCHA CHAMELEON different from other hide-and-seek games is the <strong className="text-on-surface">paint system</strong>. You are not limited to preset skins — you can paint any color, adjust roughness (matte vs shiny) and metallic (wood vs chrome) sliders, and even use X-Ray Rendering to paint hard-to-reach areas like your back. The game calculates a visibility score by comparing your painted body against the surrounding environment at the vertex level, so getting the paint right is the core skill.
          </p>
          <p>
            The game launched in June 2026 and sold over 15 million copies in its first month. It has 7 official maps — each with a unique theme, color palette, and hiding dynamics — plus 600+ community-created Workshop maps. Top YouTube videos have accumulated 93 million views, and the game has over 53,000 Steam reviews. At $5.99, it is one of the most popular casual PvP games on Steam right now.
          </p>
          <p>
            MECCHA CHAMELEON is developed by <strong className="text-on-surface">lemorion_1224</strong> and published by <strong className="text-on-surface">Moloko</strong>. It is available exclusively on PC (Windows) through Steam. There is no mobile version, no console version, and no crossplay — it is a PC-only experience. The game receives regular updates, with the latest being v2.5.0 which reworked the Osaka map and improved the paint brush resolution.
          </p>
        </div>
        {/* Key feature highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: "🎨", title: "Paint System", desc: "3D eyedropper + roughness/metallic sliders. Match any surface." },
            { icon: "🗺️", title: "7 Official Maps", desc: "Each with unique themes, colors, and 5–10 hiding spots." },
            { icon: "👥", title: "2–10 Players", desc: "Public or private matches. Streamer-friendly lobbies." },
            { icon: "🔧", title: "600+ Workshop", desc: "Community-created maps with daily data refresh via Steam API." },
          ].map((item) => (
            <div key={item.title} className="bg-surface border border-outline-variant rounded-lg p-5 text-center glow-hover transition-all hover:scale-105 hover:border-primary/50">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="font-label-caps text-label-caps text-primary mb-1">{item.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Maps Overview — same card design as /maps page */}
      <section ref={mapsOverviewRef} className="py-stack-lg px-4 md:px-gutter max-w-[1440px] mx-auto">
        <h2 className="font-display-lg text-2xl md:text-display-lg text-on-surface text-center mb-4 uppercase">All 7 Official Maps</h2>
        <p className="font-body-main text-body-main text-on-surface-variant text-center max-w-2xl mx-auto mb-stack-lg">
          Each map has a different theme, color palette, and difficulty level. Click into any map for detailed hiding spot guides with screenshots, difficulty ratings, and hider vs seeker strategies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {maps.map((map) => (
            <Link
              key={map.slug}
              href={`/maps/${map.slug}`}
              className="map-card group bg-surface border border-outline-variant rounded-lg overflow-hidden glow-hover transition-all hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(75,226,119,0.2)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={map.image}
                  alt={`${map.name} map`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="font-display-lg text-xl text-on-surface uppercase tracking-wide">
                    {map.name}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded text-xs font-label-caps">
                    {map.spots} SPOTS
                  </span>
                  <DifficultyStars level={map.difficulty} />
                </div>
                <svg className="w-5 h-5 text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Platform & Pricing — info cards with consistent styling */}
      <section ref={platformRef} className="py-stack-lg px-4 md:px-gutter max-w-[1440px] mx-auto">
        <h2 className="font-display-lg text-2xl md:text-display-lg text-on-surface text-center mb-4 uppercase">Platform, Price & Requirements</h2>
        <p className="font-body-main text-body-main text-on-surface-variant text-center max-w-2xl mx-auto mb-stack-lg">
          MECCHA CHAMELEON is a PC-exclusive Steam game. Here is everything you need to know before buying.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              ),
              title: "PC (Windows) Only",
              desc: "Available exclusively on Steam. No PlayStation, Xbox, Switch, Android, or iOS versions. Runs on most modern PCs with a DirectX 11 GPU and 4 GB RAM.",
            },
            {
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "$5.99 USD",
              desc: "One-time purchase on Steam. No free-to-play version, no demo, no microtransactions. Free Workshop maps included. No subscription required.",
            },
            {
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              ),
              title: "2–10 Players",
              desc: "Public matches (anyone joins) or private matches (invite-only). No crossplay — all players connect through Steam. Streamer-friendly public lobbies.",
            },
            {
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              ),
              title: "Keyboard + Mouse",
              desc: "Controller support in development (experimental palette in v2.5.0). High-polling-rate mouse recommended for precise painting. Keyboard + mouse is the competitive standard.",
            },
            {
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.183" />
                </svg>
              ),
              title: "Steam Deck (Proton)",
              desc: "Verified to run via Proton compatibility. No official Steam Deck optimization yet. Check our Steam Deck guide for setup tips and recommended settings.",
            },
            {
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              ),
              title: "Active Development",
              desc: "Regular updates since launch. Latest: v2.5.0 (Osaka rework + paint brush improvements). Developer lemorion_1224 actively responds to community feedback.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-surface border border-outline-variant rounded-lg p-6 glow-hover transition-all hover:scale-[1.02] hover:border-primary/50">
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-label-caps text-label-caps text-primary mb-2">{item.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-stack-lg px-4 md:px-gutter max-w-3xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-on-surface text-center mb-stack-lg uppercase">FAQ</h2>
        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <details key={i} className="bg-surface border border-outline-variant rounded-lg group">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors">
                {item.q}
                <svg className="w-4 h-4 transition-transform group-open:rotate-180 text-on-surface-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-stack-lg px-4 md:px-gutter max-w-[1440px] mx-auto text-center">
        <div className="bg-[#12121e] border-2 border-[#1e1e32] p-12 rounded-lg max-w-3xl mx-auto shadow-[0_0_15px_rgba(75,226,119,0.1)] hover:border-primary transition-colors duration-300">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4 uppercase">Stop Getting Caught. Start Winning.</h2>
          <p className="font-body-main text-body-main text-on-surface-variant mb-8">
            The best spots for every map. Screenshots you can actually use. Updated as the game evolves.
          </p>
          <Link
            href="/maps"
            className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-10 py-4 rounded shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all inline-flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            EXPLORE ALL MAPS
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
