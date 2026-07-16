import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, ArticleSchema, FAQSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import { relatedGuides } from "@/data/relatedGuides";
import Comments from "@/components/Comments";

export const metadata: Metadata = {
  title: "Controls — Keyboard & Controller Guide",
  description: "Complete controls guide for MECCHA CHAMELEON. Keyboard, mouse, and controller mappings for movement, painting, and more.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/controls",
  },
  openGraph: {
    title: "Controls Guide — Keyboard & Controller Setup (2026)",
    description: "Complete controls guide for MECCHA CHAMELEON. Keyboard, mouse, and controller mappings for movement, painting, and more.",
    url: "https://mecchachameleonlab.com/guides/controls",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Controls Guide — Keyboard & Controller Setup (2026)",
    description: "Complete controls guide for MECCHA CHAMELEON. Keyboard, mouse, and controller mappings for movement, painting, and more.",
  },
};

const sections = [
  { id: "keyboard", title: "Keyboard Controls" },
  { id: "keyboard-tips", title: "Keyboard & Mouse Tips" },
  { id: "controller", title: "Controller Controls" },
  { id: "controller-vs-keyboard", title: "Controller vs Keyboard" },
  { id: "advanced", title: "Advanced Controls" },
  { id: "sensitivity-settings", title: "Sensitivity & Settings" },
  { id: "faq", title: "FAQ" },
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
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
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

          {/* Keyboard & Mouse Tips */}
          <section id="keyboard-tips" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Keyboard & Mouse Tips</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-6">
              Mastering keyboard and mouse controls is key to efficient painting and quick camera work. These tips will help you get the most out of your setup and improve your performance in every match.
            </p>
            <div className="space-y-4">
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Optimize Your Sensitivity</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Start with medium sensitivity and adjust based on painting comfort. Higher sensitivity allows faster camera turns but makes precision painting more difficult. Find the sweet spot where you can smoothly rotate the camera without overshooting your paint targets. Most competitive players settle somewhere in the middle range.</p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Use the Scroll Wheel</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Brush size control via the scroll wheel is the fastest way to switch between broad strokes and detail work. Scroll up to increase brush size for covering large surfaces, and scroll down to shrink it for fine details and edges. This is much faster than navigating menus mid-match and lets you adapt on the fly.</p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Right-Click Before Left-Click</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Always sample the color first with right-click, then paint with left-click. This eyedropper-then-paint workflow prevents accidentally painting the wrong color onto a surface and having to redo your work. Build the habit early — it saves time in every match and keeps your camouflage consistent.</p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Hold Shift for Precision</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">If available, holding Shift activates precision mode which slows your movement for detailed painting work. This is especially useful when painting small objects or working on fine camouflage patterns where every pixel counts. Toggle it on for detail passes, then release for normal speed movement.</p>
              </div>
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

          {/* Controller vs Keyboard */}
          <section id="controller-vs-keyboard" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Controller vs Keyboard: Which Should You Use?</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-6">
              Both input methods are fully supported in MECCHA CHAMELEON. Your choice depends on your play style, platform, and personal preference. Here's a detailed comparison to help you decide.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-2">Keyboard & Mouse Advantages</h3>
                <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-disc list-inside">
                  <li>Faster camera movement with mouse</li>
                  <li>More precise painting with mouse aiming</li>
                  <li>Brush size control via scroll wheel</li>
                  <li>Quick color slot switching with number keys 1-5</li>
                </ul>
              </div>
              <div className="bg-surface border-l-4 border-secondary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-2">Controller Advantages</h3>
                <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-disc list-inside">
                  <li>Smoother analog movement for walking and sneaking</li>
                  <li>More comfortable for casual and couch play</li>
                  <li>Vibration feedback when painting (if supported)</li>
                  <li>Better experience on Steam Deck</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface border border-outline-variant rounded-lg p-4">
              <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Our Recommendation</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Use keyboard and mouse for competitive play and precision painting — the mouse gives you finer control over brush placement and faster camera snaps. Use a controller for casual sessions, couch co-op, and Steam Deck play where comfort matters more than pixel-perfect accuracy. Many players switch between both depending on the situation.</p>
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

          {/* Sensitivity & Settings */}
          <section id="sensitivity-settings" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Sensitivity & Settings Recommendations</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-6">
              Getting your settings right can make a big difference in how comfortable and effective your controls feel. Here are our recommended starting points for both mouse and controller players.
            </p>
            <div className="space-y-4">
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Mouse DPI</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">We recommend a DPI range of 800 to 1200 for MECCHA CHAMELEON. This range gives you enough speed for quick camera movements while retaining the control needed for precise painting. Most gaming mice allow you to toggle between DPI presets on the fly, so experiment to find what works best for you.</p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">In-Game Sensitivity</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Start at 50% in-game sensitivity and adjust from there. If painting feels too slow or sluggish, bump it up in 5% increments. If your camera feels too twitchy and hard to control, lower it. The goal is smooth, predictable camera movement without sacrificing your ability to paint quickly.</p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Controller Dead Zone</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Keep the controller dead zone setting low for responsive movement. A high dead zone introduces input delay and makes fine adjustments harder to execute. Only increase the dead zone if your analog stick drifts when centered — otherwise, keep it as low as possible for the best feel.</p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Paint Brush Default Size</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Medium brush size is the best starting point for new players. It covers enough area for base coats while still being manageable for detail work. Use the scroll wheel to adjust on the fly as needed during a match — start broad, then shrink down for edges and fine details.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Frequently Asked Questions</h2>
            <FAQSchema
              items={[
                { q: "Can I rebind controls in MECCHA CHAMELEON?", a: "Yes, all controls can be customized in the Settings menu. Navigate to Settings > Controls to remap any key or button." },
                { q: "What sensitivity should I use for painting?", a: "Start with 50% in-game sensitivity and 800-1200 DPI on your mouse. Adjust based on comfort — lower sensitivity gives better painting precision, higher sensitivity allows faster camera movement." },
                { q: "Does controller have aim assist?", a: "MECCHA CHAMELEON doesn't have combat mechanics, so there's no aim assist. However, controller users get slightly larger paint brush radius to compensate for less precise aiming." },
                { q: "Can I play with keyboard on Steam Deck?", a: "Yes, you can connect a keyboard and mouse to Steam Deck via USB-C hub or Bluetooth. The game will automatically detect and switch to keyboard input prompts." },
              ]}
            />
            <div className="space-y-4">
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Can I rebind controls in MECCHA CHAMELEON?</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Yes, all controls can be customized in the Settings menu. Navigate to Settings &gt; Controls to remap any key or button to your preference. Changes take effect immediately without restarting the game.</p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">What sensitivity should I use for painting?</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Start with 50% in-game sensitivity and 800–1200 DPI on your mouse. Adjust based on comfort — lower sensitivity gives better painting precision, while higher sensitivity allows faster camera movement. Most players find their ideal setting within the first few matches.</p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Does controller have aim assist?</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">MECCHA CHAMELEON doesn't have combat mechanics, so there's no aim assist in the traditional sense. However, controller users get a slightly larger paint brush radius to compensate for less precise aiming compared to a mouse. This keeps the playing field fair across input methods.</p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Can I play with keyboard on Steam Deck?</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Yes, you can connect a keyboard and mouse to Steam Deck via a USB-C hub or Bluetooth. The game will automatically detect the input device and switch to keyboard and mouse prompts. This is a great option if you prefer mouse aiming for painting precision.</p>
              </div>
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
        pages={relatedGuides["controls"]}
        nextSteps={[
          { label: "HIDER PATH", title: "Master Hiding", description: "Deep dive into camouflage, painting, and positioning", href: "/guides/hider", icon: "🎨" },
          { label: "SEEKER PATH", title: "Hunt Better", description: "Learn to read the environment and catch hiders", href: "/guides/seeker", icon: "🔍" },
          { label: "SOCIAL PLAY", title: "Play With Friends", description: "Set up the perfect lobby for your group", href: "/guides/tips", icon: "🎮" },
        ]}
      />

      <Comments slug="guides/controls" />
    </main>
  );
}
