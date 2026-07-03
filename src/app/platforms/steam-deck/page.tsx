import type { Metadata } from "next";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Steam Deck — Setup & Performance Guide",
  description:
    "Is MECCHA CHAMELEON playable on Steam Deck? Check compatibility status and tips for the best handheld experience.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/platforms/steam-deck",
  },
};

export default function SteamDeckPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-3xl mx-auto px-4 md:px-gutter">
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
        <p className="font-label-caps text-label-caps text-primary">
          Last updated: July 2026
        </p>
      </div>

      <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-4">
        Steam Deck
      </h1>
      <p className="font-body-main text-body-main text-on-surface-variant mb-8">
        Everything you need to know about running MECCHA CHAMELEON on Valve&apos;s
        handheld PC.
      </p>

      <div className="space-y-10 font-body-main text-body-main text-on-surface-variant">
        {/* Is it Playable? */}
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">
            Is it Playable?
          </h2>
          <div className="bg-surface border border-outline-variant rounded-lg p-6 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full font-label-caps text-label-caps text-primary">
                Playable
              </span>
            </div>
            <p>
              MECCHA CHAMELEON has a Steam Deck compatibility status of
              &quot;Playable&quot;. You can launch and play the game on Steam
              Deck.
            </p>
          </div>
          <p>
            The Steam Deck&apos;s native resolution of 1280×800 is well-suited for
            the game.
          </p>
        </section>

        {/* Performance Settings */}
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">
            Performance Settings
          </h2>
          <p className="mb-4">
            Performance on Steam Deck will vary depending on your settings.
            Experiment with the in-game graphics options to find the best
            balance for your experience.
          </p>
        </section>

        {/* Controller Mapping */}
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">
            Controller Mapping
          </h2>
          <p className="mb-4">
            MECCHA CHAMELEON is designed for mouse and keyboard, so you&apos;ll want
            to configure your Steam Deck controls thoughtfully. Here&apos;s a
            recommended mapping:
          </p>
          <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden">
            <div className="border-b border-outline-variant p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                Right Trackpad
              </p>
              <p>Mouse look — this gives you the closest feel to a mouse for aiming and camera control</p>
            </div>
            <div className="border-b border-outline-variant p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                Left Stick
              </p>
              <p>Movement (WASD) — standard analog movement</p>
            </div>
            <div className="border-b border-outline-variant p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                Right Trigger (R2)
              </p>
              <p>Primary action / interact — mapped to left mouse click</p>
            </div>
            <div className="border-b border-outline-variant p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                Left Trigger (L2)
              </p>
              <p>Secondary action — mapped to right mouse click</p>
            </div>
            <div className="border-b border-outline-variant p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                A / B / X / Y Buttons
              </p>
              <p>Game-specific actions — check in-game keybinds and map accordingly</p>
            </div>
            <div className="border-b border-outline-variant p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                Left Bumper (L1)
              </p>
              <p>Sprint or crouch — depending on game context</p>
            </div>
            <div className="border-b border-outline-variant p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                Right Bumper (R1)
              </p>
              <p>Jump — mapped to Space</p>
            </div>
            <div className="p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                D-Pad
              </p>
              <p>Item selection or quick commands — customizable per preference</p>
            </div>
          </div>
        </section>

        {/* Recommended Configuration */}
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">
            Recommended Configuration
          </h2>
          <p className="mb-4">
            Experiment with the in-game graphics settings to find what works
            best for you on Steam Deck. Adjust resolution, texture quality,
            and shadows until you get a smooth experience.
          </p>
        </section>

        {/* Troubleshooting */}
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">
            Troubleshooting
          </h2>
          <div className="space-y-4">
            <div className="bg-surface border border-outline-variant rounded-lg p-5">
              <h3 className="font-headline-md text-base text-on-surface mb-2">
                Game won&apos;t launch
              </h3>
              <p>
                Try verifying game files (Properties → Installed Files → Verify).
                If it still fails, try switching to a different Proton version
                in the game&apos;s compatibility settings.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant rounded-lg p-5">
              <h3 className="font-headline-md text-base text-on-surface mb-2">
                Controller not recognized
              </h3>
              <p>
                Make sure Steam Input is enabled for the game. Go to the
                game&apos;s Properties → Controller → Enable Steam Input. This
                ensures the Deck&apos;s controls are properly mapped.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant rounded-lg p-5">
              <h3 className="font-headline-md text-base text-on-surface mb-2">
                Low frame rate or stuttering
              </h3>
              <p>
                Try lowering shadow quality and disabling anti-aliasing in the
                in-game settings. Experiment with different graphics presets
                until you find a stable experience.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant rounded-lg p-5">
              <h3 className="font-headline-md text-base text-on-surface mb-2">
                Text is too small to read
              </h3>
              <p>
                The Deck&apos;s 7-inch screen can make UI text hard to read. Use the
                built-in magnifier (Steam + L1) or lower the resolution to 720p
                for larger UI elements.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant rounded-lg p-5">
              <h3 className="font-headline-md text-base text-on-surface mb-2">
                Audio crackling or cutting out
              </h3>
              <p>
                This can happen with some Proton versions. Switch to a different
                Proton version (try Proton 8.x or GE-Proton) and relaunch the
                game.
              </p>
            </div>
          </div>
        </section>
      </div>

      <RelatedPages
        pages={[
          { title: "System Requirements", description: "Check if your PC can run MECCHA CHAMELEON.", href: "/system-requirements", icon: "💻" },
          { title: "Price", description: "Is MECCHA CHAMELEON worth $5.99? Price breakdown and honest verdict.", href: "/price", icon: "💰" },
          { title: "Settings Guide", description: "Optimize your settings for maximum performance.", href: "/settings", icon: "⚙️" },
        ]}
      />
    </main>
  );
}
