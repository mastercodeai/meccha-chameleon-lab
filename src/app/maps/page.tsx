"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

export default function MapsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    // Map cards stagger animation
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".map-card");
      
      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
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
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <div ref={headerRef} className="text-center mb-stack-lg">
        <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase">
          Select Your Map
        </h1>
        <p className="font-body-main text-body-main text-on-surface-variant mt-4">
          Best hiding spots for every official map. Updated for 2026.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <h2 className="font-display-lg text-xl text-on-surface uppercase tracking-wide">
                  {map.name}
                </h2>
              </div>
              {/* Hover overlay */}
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
    </main>
  );
}
