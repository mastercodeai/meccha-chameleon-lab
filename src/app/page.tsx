"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FAQSchema, WebSiteSchema, GameSchema } from "@/components/Schema";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
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

      // Counter animation for stats
      statElements.forEach((stat) => {
        const valueEl = stat.querySelector(".stat-value");
        if (valueEl) {
          const finalText = valueEl.textContent || "";
          const numMatch = finalText.match(/[\d.]+/);
          if (numMatch) {
            const finalNum = parseFloat(numMatch[0]);
            const suffix = finalText.replace(numMatch[0], "");
            const isDecimal = finalText.includes(".");
            
            // Set initial display to preserve text width
            valueEl.textContent = (isDecimal ? "0.0" : "0") + suffix;
            
            const counter = { val: 0 };
            gsap.to(counter, {
              val: finalNum,
              duration: 2,
              ease: "power1.out",
              scrollTrigger: {
                trigger: stat,
                start: "top 80%",
              },
              onUpdate: function() {
                if (isDecimal) {
                  valueEl.textContent = counter.val.toFixed(1) + suffix;
                } else if (finalNum >= 100) {
                  valueEl.textContent = Math.round(counter.val) + suffix;
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
      });
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

      {/* Quick Links for SEO — ensures Google discovers all important pages */}
      <section className="py-8 px-4 md:px-gutter max-w-[1440px] mx-auto border-t border-[#1e1e32]">
        <h2 className="sr-only">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2">Maps</h3>
            <ul className="space-y-1">
              <li><Link href="/maps/backrooms" className="text-on-surface-variant hover:text-primary transition-colors">Backrooms</Link></li>
              <li><Link href="/maps/hide-and-seek-mansion" className="text-on-surface-variant hover:text-primary transition-colors">Hide-and-Seek Mansion</Link></li>
              <li><Link href="/maps/indoor-country" className="text-on-surface-variant hover:text-primary transition-colors">Indoor Country</Link></li>
              <li><Link href="/maps/osaka" className="text-on-surface-variant hover:text-primary transition-colors">Osaka</Link></li>
              <li><Link href="/maps/penguin-hotel" className="text-on-surface-variant hover:text-primary transition-colors">Penguin Hotel</Link></li>
              <li><Link href="/maps/sewer" className="text-on-surface-variant hover:text-primary transition-colors">Sewer</Link></li>
              <li><Link href="/maps/sugar-land" className="text-on-surface-variant hover:text-primary transition-colors">Sugar Land</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2">Guides</h3>
            <ul className="space-y-1">
              <li><Link href="/guides/beginner" className="text-on-surface-variant hover:text-primary transition-colors">Beginner Guide</Link></li>
              <li><Link href="/guides/hider" className="text-on-surface-variant hover:text-primary transition-colors">Hider Guide</Link></li>
              <li><Link href="/guides/seeker" className="text-on-surface-variant hover:text-primary transition-colors">Seeker Guide</Link></li>
              <li><Link href="/guides/paint" className="text-on-surface-variant hover:text-primary transition-colors">Paint Guide</Link></li>
              <li><Link href="/guides/combos" className="text-on-surface-variant hover:text-primary transition-colors">Combo Guide</Link></li>
              <li><Link href="/guides/controls" className="text-on-surface-variant hover:text-primary transition-colors">Controls Guide</Link></li>
              <li><Link href="/guides/videos" className="text-on-surface-variant hover:text-primary transition-colors">Video Tutorials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2">Resources</h3>
            <ul className="space-y-1">
              <li><Link href="/tier-list" className="text-on-surface-variant hover:text-primary transition-colors">Map Tier List</Link></li>
              <li><Link href="/gallery" className="text-on-surface-variant hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/workshop" className="text-on-surface-variant hover:text-primary transition-colors">Workshop Maps</Link></li>
              <li><Link href="/update" className="text-on-surface-variant hover:text-primary transition-colors">Update Log</Link></li>
              <li><Link href="/guides/easter-eggs" className="text-on-surface-variant hover:text-primary transition-colors">Easter Eggs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2">Game Info</h3>
            <ul className="space-y-1">
              <li><Link href="/price" className="text-on-surface-variant hover:text-primary transition-colors">Price</Link></li>
              <li><Link href="/system-requirements" className="text-on-surface-variant hover:text-primary transition-colors">System Requirements</Link></li>
              <li><Link href="/crossplay" className="text-on-surface-variant hover:text-primary transition-colors">Crossplay</Link></li>
              <li><Link href="/platforms/steam-deck" className="text-on-surface-variant hover:text-primary transition-colors">Steam Deck</Link></li>
              <li><Link href="/settings" className="text-on-surface-variant hover:text-primary transition-colors">Settings Guide</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
