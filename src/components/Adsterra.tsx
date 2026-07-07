"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

/**
 * Adsterra Banner Ad Component
 * Renders a banner ad with the given key and dimensions.
 * Uses iframe format — the ad network handles its own content.
 */

interface AdBannerProps {
  adKey: string;
  width: number;
  height: number;
  className?: string;
}

export function AdBanner({ adKey, width, height, className = "" }: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // Clear any previous ad content (prevents duplicates on HMR)
    const el = containerRef.current;
    el.innerHTML = "";

    // Create the options script
    const optionsScript = document.createElement("script");
    optionsScript.innerHTML = `
      atOptions = {
        'key' : '${adKey}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;
    el.appendChild(optionsScript);

    // Create the invoke script
    const invokeScript = document.createElement("script");
    invokeScript.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
    el.appendChild(invokeScript);
  }, [adKey, width, height]);

  return (
    <div
      ref={containerRef}
      className={`adsterra-ad flex justify-center items-center overflow-hidden ${className}`}
      style={{ minHeight: height, minWidth: width, maxWidth: "100%" }}
    />
  );
}

/**
 * Adsterra Native Banner Ad Component
 * Renders a responsive native ad that blends with content.
 */

interface NativeBannerProps {
  containerId?: string;
  className?: string;
}

export function NativeBanner({
  containerId = "container-7ca6320f2d3ceba4b0bdc28b4b562d30",
  className = "",
}: NativeBannerProps) {
  return (
    <div className={`adsterra-native ${className}`}>
      <Script
        src="https://pl30239505.effectivecpmnetwork.com/7ca6320f2d3ceba4b0bdc28b4b562d30/invoke.js"
        strategy="lazyOnload"
      />
      <div id={containerId} />
    </div>
  );
}

/**
 * Pre-configured ad size components for convenience.
 */

export function LeaderboardAd({ className }: { className?: string }) {
  return (
    <AdBanner
      adKey="64e0db0a84ca57c3ceb7c90e8efbf398"
      width={728}
      height={90}
      className={`hidden md:block ${className || ""}`}
    />
  );
}

export function MediumRectAd({ className }: { className?: string }) {
  return (
    <AdBanner
      adKey="034cbd7ae53c33bc7c77b854a818cb43"
      width={300}
      height={250}
      className={className}
    />
  );
}

export function MobileBannerAd({ className }: { className?: string }) {
  return (
    <AdBanner
      adKey="79d9de1edff8640732b08d7e086da5ed"
      width={320}
      height={50}
      className={`block md:hidden ${className || ""}`}
    />
  );
}
