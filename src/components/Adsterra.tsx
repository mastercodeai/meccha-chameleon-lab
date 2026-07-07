"use client";

import { useEffect, useRef } from "react";

/**
 * Adsterra Ad Components
 * 
 * All ads use iframe srcdoc to fully isolate ad scripts from React.
 * This prevents: infinite re-render loops, referrer issues, 403 errors from CDN.
 * 
 * If Adsterra returns 403 (account not approved / domain not verified),
 * the iframe will be empty — no JS errors leak into the main page.
 */

/* ─── Banner Ad (iframe format) ─── */

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
    if (loadedRef.current || !iframeRef.current) return;
    loadedRef.current = true;

    iframeRef.current.srcdoc = `<!DOCTYPE html>
<html><head><style>*{margin:0;padding:0}body{overflow:hidden}</style></head><body>
<script>
atOptions={key:'${adKey}',format:'iframe',height:${height},width:${width},params:{}};
<\/script>
<script src="https://www.highperformanceformat.com/${adKey}/invoke.js"><\/script>
</body></html>`;
  }, [adKey, width, height]);

  return (
    <div className={`adsterra-ad flex justify-center overflow-hidden ${className}`}>
      <iframe
        ref={iframeRef}
        title="Advertisement"
        style={{ width: Math.min(width, 728), height, border: "none", maxWidth: "100%" }}
        sandbox="allow-scripts allow-popups"
        loading="lazy"
      />
    </div>
  );
}

/* ─── Native Banner ─── */

interface NativeBannerProps {
  className?: string;
}

export function NativeBanner({ className = "" }: NativeBannerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current || !iframeRef.current) return;
    loadedRef.current = true;

    iframeRef.current.srcdoc = `<!DOCTYPE html>
<html><head>
<style>*{margin:0;padding:0}body{background:transparent}</style>
</head><body>
<div id="container-7ca6320f2d3ceba4b0bdc28b4b562d30"></div>
<script src="https://pl30239505.effectivecpmnetwork.com/7ca6320f2d3ceba4b0bdc28b4b562d30/invoke.js"><\/script>
</body></html>`;
  }, []);

  return (
    <div className={`adsterra-native flex justify-center overflow-hidden ${className}`}>
      <iframe
        ref={iframeRef}
        title="Sponsored Content"
        style={{ width: "100%", height: 300, border: "none" }}
        sandbox="allow-scripts allow-popups"
        loading="lazy"
      />
    </div>
  );
}

/* ─── Pre-configured sizes ─── */

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
