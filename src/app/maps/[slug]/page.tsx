"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { maps, getMapBySlug } from "@/data/maps";
import { getSpotsByMapSlug } from "@/data/spots";
import { notFound } from "next/navigation";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    EASY: "bg-green-500/10 text-green-400 border-green-500/30",
    MEDIUM: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    HARD: "bg-red-500/10 text-red-400 border-red-500/30",
  };
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-label-caps border ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
}

export default function MapPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const map = getMapBySlug(slug);
  if (!map) notFound();

  const spots = getSpotsByMapSlug(slug);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const spotsRef = useRef<HTMLDivElement>(null);
  const otherMapsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero parallax effect
    if (heroRef.current) {
      const heroImage = heroRef.current.querySelector("img");
      if (heroImage) {
        gsap.to(heroImage, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Title animation
      const title = heroRef.current.querySelector("h1");
      const subtitle = heroRef.current.querySelector(".subtitle");
      
      gsap.from(title, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });
      
      gsap.from(subtitle, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.out",
      });
    }

    // Spots animation
    if (spotsRef.current) {
      const spotCards = spotsRef.current.querySelectorAll(".spot-card");
      
      gsap.from(spotCards, {
        y: 60,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: spotsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Other maps animation
    if (otherMapsRef.current) {
      const mapCards = otherMapsRef.current.querySelectorAll(".other-map-card");
      
      gsap.from(mapCards, {
        x: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: otherMapsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [slug]);

  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-6">
        <Link href="/maps" className="hover:text-primary transition-colors">Maps</Link>
        <span>/</span>
        <span className="text-on-surface">{map.name}</span>
      </nav>

      {/* Map Hero */}
      <div ref={heroRef} className="relative rounded-lg overflow-hidden border-2 border-[#1e1e32] mb-stack-lg">
        <img
          src={map.image}
          alt={`${map.name} map`}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/30 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h1 className="font-display-lg text-3xl md:text-4xl text-on-surface uppercase tracking-wide mb-2">
            {map.name}
          </h1>
          <div className="subtitle flex items-center gap-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary rounded font-label-caps text-sm">
              {map.spots} SPOTS
            </span>
            <span className="text-on-surface-variant font-body-sm">{map.description}</span>
          </div>
        </div>
      </div>

      {/* Spots Grid */}
      <div ref={spotsRef}>
        {spots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spots.map((spot) => (
              <div
                key={spot.id}
                className="spot-card bg-surface border border-outline-variant rounded-lg overflow-hidden glow-hover transition-all hover:scale-[1.02] hover:border-primary/50"
              >
                {/* Spot Image */}
                {spot.image && (
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={spot.image}
                      alt={spot.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_8px_rgba(75,226,119,0.6)]">
                        <span className="text-sm font-bold text-on-primary">{spot.id}</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <DifficultyBadge difficulty={spot.difficulty} />
                    </div>
                  </div>
                )}
                
                {/* Spot Info */}
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    {!spot.image && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_8px_rgba(75,226,119,0.6)]">
                        <span className="text-sm font-bold text-on-primary">{spot.id}</span>
                      </div>
                    )}
                    <h3 className="font-headline-md text-base text-on-surface">{spot.name}</h3>
                    {!spot.image && <DifficultyBadge difficulty={spot.difficulty} />}
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">{spot.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-on-surface-variant">Best for:</span>
                    <span className={`text-xs font-label-caps ${spot.bestFor === "Hider" ? "text-primary" : "text-secondary"}`}>
                      {spot.bestFor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-on-surface-variant">No hiding spots data available yet.</p>
          </div>
        )}
      </div>

      {/* Other Maps */}
      <div ref={otherMapsRef} className="mt-16">
        <h2 className="font-display-lg text-xl text-on-surface uppercase mb-6">Other Maps</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {maps
            .filter((m) => m.slug !== slug)
            .map((m) => (
              <Link
                key={m.slug}
                href={`/maps/${m.slug}`}
                className="other-map-card group bg-surface border border-outline-variant rounded-lg overflow-hidden glow-hover hover:scale-105 hover:border-primary/50 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={m.image}
                    alt={`${m.name} map`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <span className="text-xs font-display-lg text-on-surface uppercase">{m.name}</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}
