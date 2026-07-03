import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Best MECCHA CHAMELEON Settings — FPS, Graphics & Controls",
  description:
    "Optimize your MECCHA CHAMELEON settings for maximum performance. Best graphics, FPS, and control settings for competitive play.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/settings",
  },
  keywords: [
    "meccha chameleon settings",
    "meccha chameleon fps",
    "meccha chameleon graphics settings",
    "best settings meccha chameleon",
  ],
  openGraph: {
    title:
      "Best MECCHA CHAMELEON Settings — FPS, Graphics & Controls | MECCHA CHAMELEON Lab",
    description:
      "Optimize your MECCHA CHAMELEON settings for maximum performance. Best graphics, FPS, and control settings for competitive play.",
    url: "https://mecchachameleonlab.com/settings",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best MECCHA CHAMELEON Settings — FPS, Graphics & Controls | MECCHA CHAMELEON Lab",
    description:
      "Optimize your MECCHA CHAMELEON settings for maximum performance. Best graphics, FPS, and control settings for competitive play.",
  },
};

const sections = [
  { id: "graphics", title: "Graphics Settings" },
  { id: "fps", title: "FPS Optimization" },
  { id: "audio", title: "Audio Settings" },
  { id: "controls", title: "Control Settings" },
];

export default function SettingsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Settings", url: "https://mecchachameleonlab.com/settings" },
        ]}
      />
      <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar TOC */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-[100px] bg-surface border border-outline-variant rounded-lg p-4">
              <h3 className="font-label-caps text-label-caps text-on-surface mb-4 uppercase">
                Table of Contents
              </h3>
              <nav aria-label="Table of Contents" className="flex flex-col gap-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors py-1 px-2 rounded hover:bg-primary/5"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="flex-1 max-w-3xl">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
              <p className="font-label-caps text-label-caps text-primary">
                Last updated: July 2026
              </p>
            </div>

            <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-4">
              Best MECCHA CHAMELEON Settings
            </h1>
            <p className="font-body-main text-body-main text-on-surface-variant mb-8">
              Dial in the perfect settings for MECCHA CHAMELEON. Whether
              you&apos;re chasing every last frame or want the cleanest visuals,
              this guide covers graphics, FPS, audio, and control tweaks for
              competitive play.
            </p>

            <div className="space-y-10 font-body-main text-body-main text-on-surface-variant">
              {/* Graphics Settings */}
              <section id="graphics">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Graphics Settings
                </h2>
                <p className="mb-6">
                  Here are the key graphics options and what they do.
                </p>

                <div className="space-y-4">
                  <div className="bg-surface border border-outline-variant rounded-lg p-5">
                    <h3 className="font-label-caps text-label-caps text-primary mb-2">
                      Resolution
                    </h3>
                    <p className="font-body-sm text-body-sm mb-2">
                      Set this to your monitor&apos;s native resolution for the
                      sharpest image. If you need more FPS, dropping to 1600×900
                      or 1280×720 gives a significant boost with minimal visual
                      loss.
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      <strong>Recommended:</strong> Native (e.g. 1920×1080) for
                      quality · 1280×720 for max FPS
                    </p>
                  </div>

                  <div className="bg-surface border border-outline-variant rounded-lg p-5">
                    <h3 className="font-label-caps text-label-caps text-primary mb-2">
                      Texture Quality
                    </h3>
                    <p className="font-body-sm text-body-sm mb-2">
                      Controls the resolution of textures on surfaces and
                      objects. High looks noticeably better, but Medium is fine
                      for competitive play and saves VRAM.
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      <strong>Recommended:</strong> High (4 GB+ VRAM) · Medium
                      (2 GB VRAM) · Low (integrated GPU)
                    </p>
                  </div>

                  <div className="bg-surface border border-outline-variant rounded-lg p-5">
                    <h3 className="font-label-caps text-label-caps text-primary mb-2">
                      Shadows
                    </h3>
                    <p className="font-body-sm text-body-sm mb-2">
                      Dynamic shadows are one of the most expensive settings.
                      Turning them off or setting to Low can recover 15–25% FPS.
                      However, shadows can help you spot movement as a seeker.
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      <strong>Recommended:</strong> Low or Off for competitive ·
                      Medium for casual play
                    </p>
                  </div>

                  <div className="bg-surface border border-outline-variant rounded-lg p-5">
                    <h3 className="font-label-caps text-label-caps text-primary mb-2">
                      Anti-Aliasing &amp; Post-Processing
                    </h3>
                    <p className="font-body-sm text-body-sm">
                      FXAA is lightweight and removes jagged edges. MSAA is
                      sharper but more expensive. Post-processing effects like
                      bloom and motion blur are mostly cosmetic — disable motion
                      blur for clearer visuals during fast movement.
                    </p>
                  </div>
                </div>
              </section>

              {/* FPS Optimization */}
              <section id="fps">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                  FPS Optimization
                </h2>
                <p className="mb-6">
                  Higher FPS means smoother gameplay and lower input lag. Follow
                  these steps to squeeze the most frames out of your system.
                </p>
                <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden">
                  <div className="space-y-0">
                    {[
                      {
                        step: "1",
                        title: "Lower Shadows to Off or Low",
                        desc: "The single biggest FPS gain. Shadows are typically the most expensive graphics setting.",
                      },
                      {
                        step: "2",
                        title: "Disable Motion Blur",
                        desc: "Removes the blur effect during fast turns. Cleaner visuals and a small FPS boost.",
                      },
                      {
                        step: "3",
                        title: "Set Texture Quality to Medium",
                        desc: "Frees up VRAM and reduces stuttering on lower-end GPUs.",
                      },
                      {
                        step: "4",
                        title: "Use FXAA Instead of MSAA",
                        desc: "FXAA is much cheaper than MSAA while still smoothing edges.",
                      },
                      {
                        step: "5",
                        title: "Close Background Applications",
                        desc: "Browsers, Discord overlays, and recording software all consume resources. Close what you don&apos;t need.",
                      },
                      {
                        step: "6",
                        title: "Update GPU Drivers",
                        desc: "Always use the latest drivers from NVIDIA, AMD, or Intel for the best game compatibility.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-4 border-b border-outline-variant/50 last:border-b-0"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-label-caps text-label-caps text-primary">
                          {item.step}
                        </span>
                        <div>
                          <p className="font-semibold text-on-surface text-sm">
                            {item.title}
                          </p>
                          <p className="font-body-sm text-body-sm">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Audio Settings */}
              <section id="audio">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Audio Settings
                </h2>
                <p className="mb-6">
                  Good audio settings help you hear footsteps, paint sprays, and
                  other players. Here&apos;s how to configure them.
                </p>
                <div className="space-y-4">
                  <div className="bg-surface border border-outline-variant rounded-lg p-5">
                    <h3 className="font-label-caps text-label-caps text-primary mb-2">
                      Master Volume
                    </h3>
                    <p className="font-body-sm text-body-sm">
                      Set this to a comfortable level. We recommend 70–80% to
                      avoid clipping and distortion on louder sound effects.
                    </p>
                  </div>
                  <div className="bg-surface border border-outline-variant rounded-lg p-5">
                    <h3 className="font-label-caps text-label-caps text-primary mb-2">
                      Music Volume
                    </h3>
                    <p className="font-body-sm text-body-sm">
                      Lower this to 20–30% or off entirely in competitive
                      matches. Background music can mask important audio cues
                      like footsteps and paint sprays.
                    </p>
                  </div>
                  <div className="bg-surface border border-outline-variant rounded-lg p-5">
                    <h3 className="font-label-caps text-label-caps text-primary mb-2">
                      SFX Volume
                    </h3>
                    <p className="font-body-sm text-body-sm">
                      Keep this at 80–100%. Sound effects are critical for
                      awareness — hearing a seeker nearby or a hider&apos;s paint
                      can save your round.
                    </p>
                  </div>
                </div>
              </section>

              {/* Control Settings */}
              <section id="controls">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Control Settings
                </h2>
                <p className="mb-6">
                  Fine-tune your controls for precision and comfort. Small
                  adjustments can make a big difference in reaction time.
                </p>
                <div className="space-y-4">
                  <div className="bg-surface border border-outline-variant rounded-lg p-5">
                    <h3 className="font-label-caps text-label-caps text-primary mb-2">
                      Mouse Sensitivity
                    </h3>
                    <p className="font-body-sm text-body-sm">
                      Most competitive players use a lower sensitivity (1.5–3.0
                      at 800 DPI). Lower sens gives smoother aim for both seeker
                      and hider roles. Find what feels natural and stick with it.
                    </p>
                  </div>
                  <div className="bg-surface border border-outline-variant rounded-lg p-5">
                    <h3 className="font-label-caps text-label-caps text-primary mb-2">
                      Key Bindings
                    </h3>
                    <p className="font-body-sm text-body-sm">
                      Rebind keys to what feels natural. Common changes: Paint on
                      a side mouse button, Eyedropper on another, Emote on a
                      thumb button. Check the{" "}
                      <Link
                        href="/guides/controls"
                        className="text-primary hover:underline"
                      >
                        Controls Guide
                      </Link>{" "}
                      for the full list.
                    </p>
                  </div>
                  <div className="bg-surface border border-outline-variant rounded-lg p-5">
                    <h3 className="font-label-caps text-label-caps text-primary mb-2">
                      Controller Settings
                    </h3>
                    <p className="font-body-sm text-body-sm">
                      If you play on controller, set dead zones low (5–10%) for
                      responsive sticks. Increase look sensitivity gradually
                      until you can do a 180° turn comfortably.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
              <Link
                href="/system-requirements"
                className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all"
              >
                SYSTEM REQUIREMENTS
              </Link>
              <Link
                href="/guides/controls"
                className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
              >
                CONTROLS GUIDE
              </Link>
              <Link
                href="/guides/tips"
                className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all"
              >
                TIPS &amp; TRICKS
              </Link>
            </div>
          </article>
        </div>

        <RelatedPages
          pages={[
            { title: "Controls Guide", description: "Full control bindings and input customization guide.", href: "/guides/controls", icon: "🎮" },
            { title: "System Requirements", description: "Check if your PC can run MECCHA CHAMELEON.", href: "/system-requirements", icon: "💻" },
            { title: "Beginner Guide", description: "Everything you need to know before your first round.", href: "/guides/beginner", icon: "📖" },
          ]}
        />
      </main>
    </>
  );
}
