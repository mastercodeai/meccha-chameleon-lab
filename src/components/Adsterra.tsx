"use client";

import { useEffect, useRef, useCallback } from "react";
import Script from "next/script";

/**
 * Adsterra Banner Ad (iframe format)
 * Uses a dedicated iframe to isolate ad scripts from React's rendering cycle.
 * The atOptions + invoke.js pair runs inside the iframe, avoiding 403/referrer issues.
 */

interface AdBannerProps {
  adKey: string;
  width: number;
  height: number;
  className?: string;
}

export function AdBanner({ adKey, width, height, className = "" }: AdBannerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const iframe = iframeRef.current;
    if (!iframe) return;

    const html = `<!DOCTYPE html>
<html><head><style>body{margin:0;overflow:hidden}</style></head><body>
<script>
atOptions = {
  'key': '${adKey}',
  'format': 'iframe',
  'height': ${height},
  'width': ${width},
  'params': {}
};
<\/script>
<script src="https://www.highperformanceformat.com/${adKey}/invoke.js"><\/script>
</body></html>`;

    iframe.srcdoc = html;
  }, [adKey, width, height]);

  return (
    <div className={`adsterra-ad flex justify-center overflow-hidden ${className}`}>
      <iframe
        ref={iframeRef}
        title={`Ad ${width}x${height}`}
        style={{
          width: Math.min(width, 728),
          height,
          border: "none",
          maxWidth: "100%",
        }}
        sandbox="allow-scripts allow-popups"
        loading="lazy"
      />
    </div>
  );
}

/**
 * Adsterra Native Banner
 * Loads the native ad script via next/script with lazyOnload strategy.
 * The script auto-discovers its container div by ID.
 */

export function NativeBanner({
  containerId = "container-7ca6320f2d3ceba4b0bdc28b4b562d30",
  className = "",
}: {
  containerId?: string;
  className?: string;
}) {
  return (
    <div className={`adsterra-native ${className}`}>
      <div id={containerId} />
      <Script
        src="https://pl30239505.effectivecpmnetwork.com/7ca6320f2d3ceba4b0bdc28b4b562d30/invoke.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

/**
 * Pre-configured ad size components.
 * LeaderboardAd: 728x90 — desktop only (hidden on mobile)
 * MediumRectAd: 300x250 — all screen sizes
 * MobileBannerAd: 320x50 — mobile only (hidden on desktop)
 */

export function LeaderboardAd({ className }: { className?: string }) {
  return (
    <AdBanner
      adKey="64e0db0a84ca57c3ceb7c90e8efbf398"
      width={728}
      height={90}
      className={`hidden md:flex ${className || ""}`}
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
      className={`flex md:hidden ${className || ""}`}
    />
  );
}
