import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Controls — Keyboard & Controller Guide",
  description: "Complete controls guide for MECCHA CHAMELEON. Keyboard, mouse, and controller mappings for movement, painting, and more.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/controls",
  },
  openGraph: {
    title: "Controls — Keyboard & Controller Guide | MECCHA CHAMELEON Lab",
    description: "Complete controls guide for MECCHA CHAMELEON. Keyboard, mouse, and controller mappings for movement, painting, and more.",
    url: "https://mecchachameleonlab.com/guides/controls",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Controls — Keyboard & Controller Guide | MECCHA CHAMELEON Lab",
    description: "Complete controls guide for MECCHA CHAMELEON. Keyboard, mouse, and controller mappings for movement, painting, and more.",
  },
};

const sections = [
  { id: "keyboard", title: "Keyboard Controls" },
  { id: "controller", title: "Controller Controls" },
  { id: "advanced", title: "Advanced Controls" },
];

const keyboardControls: [string, string, string][] = [
  ["W / A / S / D", "Movement", "Move your character forward, left, backward, and right."],
  ["Mouse", "Camera Look", "Move the mouse to rotate the camera and aim where you're looking."],
  ["Left Click", "Paint", "Spray paint onto surfaces in front of you. Hold to continuously paint."],
  ["Right Click", "Eyedropper", "Pick the exact color from any surface you're pointing at."],
  ["E", "Emote", "Open the emote wheel to communicate with teammates."],
  ["Space", "Jump", "Jump to reach higher surfaces or clear obstacles."],
  ["Tab", "Scoreboard", "Hold to display the current match scoreboard and team info."],
  ["Esc", "Menu", "Open the pause menu to access settings, leave match, or report issues."],
];

const controllerControls: [string, string, string][] = [
  ["Left Stick", "Movement", "Move your character in any direction."],
  ["Right Stick", "Camera Look", "Rotate the camera to aim and look around."],
  ["RT / R2", "Paint", "Hold to spray paint onto surfaces."],
  ["LT / L2", "Eyedropper", "Hold to pick colors from surfaces."],
  ["Y / △", "Emote", "Open the emote wheel for team communication."],
  ["A / ×", "Jump", "Jump to reach elevated positions."],
  ["View / Touchpad", "Scoreboard", "Toggle the match scoreboard overlay."],
  ["Menu / Options", "Pause Menu", "Open the pause menu for settings and options."],
];

const advancedControls: { title: string; desc: string }[] = [
  { title: "Brush Size — Scroll Wheel", desc: "Use the mouse scroll wheel to increase or decrease your paint brush size. Smaller brushes give more precision for detail work; larger brushes cover area faster for base coats." },
  { title: "Color Quick-Select — Number Keys 1-5", desc: "Press 1 through 5 to quickly swap between saved color slots. Use the eyedropper to capture a color, then save it to a slot for instant recall later." },
  { title: "Paint Mode Toggle — Q", desc: "Toggle between continuous spray mode and single-click mode. Continuous mode is great for covering large areas; single-click gives more control for fine details." },
  { title: "Reset Paint — R", desc: "Instantly reset your entire paint job back to white. Useful when you need to completely repaint for a new hiding spot." },
  { title: "Zoom — Middle Click", desc: "Hold middle mouse button to zoom in slightly. Helpful for checking paint details at distance or scouting hiding spots." },
];

export default function ControlsGuidePage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides/beginner" },
          { name: "Controls Guide", url: "https://mecchachameleonlab.com/guides/controls" },
        ]}
      />
      <ArticleSchema
        title="Controls — Keyboard & Controller Guide"
        description="Complete controls guide for MECCHA CHAMELEON. Keyboard, mouse, and controller mappings for movement, painting, and more."
        url="https://mecchachameleonlab.com/guides/controls"
        datePublished="2026-06-15"
      />
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar TOC */}
        <aside className="lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-[100px] bg-surface border border-outline-variant rounded-lg p-4">
            <h3 className="font-label-caps text-label-caps text-on-surface mb-4 uppercase">Table of Contents</h3>
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
          <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-8">
            Controls Guide
          </h1>

          {/* Keyboard Controls */}
          <section id="keyboard" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Keyboard & Mouse Controls</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-6">
              These are the default controls for keyboard and mouse. All bindings can be customized in the Settings menu.
            </p>
            <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Input</th>
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Action</th>
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase hidden md:table-cell">Description</th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-body-sm text-on-surface">
                  {keyboardControls.map(([input, action, desc]) => (
                    <tr key={input} className="border-b border-outline-variant/50 last:border-b-0">
                      <td className="p-4 text-primary font-label-caps">{input}</td>
                      <td className="p-4 font-semibold">{action}</td>
                      <td className="p-4 text-on-surface-variant hidden md:table-cell">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Controller Controls */}
          <section id="controller" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Controller Controls</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-6">
              MECCHA CHAMELEON supports gamepad input. Button prompts automatically switch when a controller is detected.
            </p>
            <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Input</th>
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Action</th>
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase hidden md:table-cell">Description</th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-body-sm text-on-surface">
                  {controllerControls.map(([input, action, desc]) => (
                    <tr key={input} className="border-b border-outline-variant/50 last:border-b-0">
                      <td className="p-4 text-primary font-label-caps">{input}</td>
                      <td className="p-4 font-semibold">{action}</td>
                      <td className="p-4 text-on-surface-variant hidden md:table-cell">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Advanced Controls */}
          <section id="advanced" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Advanced Controls</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-6">
              These controls are community-reported and may not all be confirmed. They give you finer control over painting and gameplay.
            </p>
            <div className="space-y-4">
              {advancedControls.map((ctrl, i) => (
                <div key={i} className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{ctrl.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{ctrl.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
            <Link href="/maps" className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all">
              BROWSE MAPS
            </Link>
            <Link href="/guides/beginner" className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all">
              BEGINNER GUIDE
            </Link>
            <Link href="/guides/tips" className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all">
              TIPS & TRICKS
            </Link>
          </div>
        </article>
      </div>

      <RelatedPages
        pages={[
          { title: "Settings Guide", description: "Optimize your settings for maximum performance.", href: "/settings", icon: "⚙️" },
          { title: "Combo Guide", description: "Master every disguise combination with paint + object combos.", href: "/guides/combos", icon: "🎯" },
          { title: "Beginner Guide", description: "Everything you need to know before your first round.", href: "/guides/beginner", icon: "📖" },
        ]}
      />
    </main>
  );
}
