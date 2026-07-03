import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steam Deck — Setup & Performance Guide | MECCHA CHAMELEON Lab",
  description:
    "Is MECCHA CHAMELEON playable on Steam Deck? Performance settings, controller mapping, and recommended configuration for the best handheld experience.",
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
              MECCHA CHAMELEON runs on the Steam Deck via Proton compatibility
              layer. The game is built on Valve&apos;s Source engine, which has
              strong Proton support. You can launch and play the game on Steam
              Deck without major issues.
            </p>
          </div>
          <p>
            The Steam Deck&apos;s native resolution of 1280×800 is well-suited for
            the game, and the Source engine is lightweight enough to maintain
            stable performance on the Deck&apos;s hardware.
          </p>
        </section>

        {/* Performance Settings */}
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">
            Performance Settings
          </h2>
          <p className="mb-4">
            For the smoothest experience on Steam Deck, use these recommended
            performance settings:
          </p>
          <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden">
            <div className="border-b border-outline-variant p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                Resolution
              </p>
              <p>1280×800 (native) or 1280×720 for a slight performance boost</p>
            </div>
            <div className="border-b border-outline-variant p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                Frame Rate Target
              </p>
              <p>60 FPS — the Source engine can easily hit this on Deck hardware</p>
            </div>
            <div className="border-b border-outline-variant p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                Texture Quality
              </p>
              <p>Medium or High — the Deck&apos;s 16GB shared memory handles this well</p>
            </div>
            <div className="border-b border-outline-variant p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                Shadow Quality
              </p>
              <p>Low to Medium — shadows are the biggest FPS impact in Source games</p>
            </div>
            <div className="p-4">
              <p className="font-label-caps text-label-caps text-primary mb-1">
                Anti-Aliasing
              </p>
              <p>MSAA 2x or 4x — at 800p, MSAA looks clean without heavy GPU cost</p>
            </div>
          </div>
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
            For the best experience, apply these Steam Deck-specific settings:
          </p>
          <ol className="list-decimal list-inside space-y-3 ml-2">
            <li>
              <strong className="text-on-surface">Enable Proton Experimental</strong>{" "}
              — In Steam, go to the game&apos;s Properties → Compatibility → Force
              Proton Experimental for the latest compatibility fixes.
            </li>
            <li>
              <strong className="text-on-surface">Set TDP to 10–12W</strong>{" "}
              — The Source engine doesn&apos;t need full Deck power. Limiting TDP
              saves battery without hurting performance.
            </li>
            <li>
              <strong className="text-on-surface">Use the right trackpad as mouse</strong>{" "}
              — In Steam Input, set the right trackpad to &quot;Mouse&quot; mode
              with a comfortable sensitivity (start around 70%).
            </li>
            <li>
              <strong className="text-on-surface">Enable Gyro Aiming (optional)</strong>{" "}
              — Set gyro to activate on right trackpad touch for precision aiming.
              Great for competitive play.
            </li>
            <li>
              <strong className="text-on-surface">Lock to 60 FPS</strong>{" "}
              — Use the Deck&apos;s performance overlay (⋯ button) to cap the frame
              rate at 60 for consistent frame pacing.
            </li>
            <li>
              <strong className="text-on-surface">Use FSR if needed</strong>{" "}
              — If you drop below 60 FPS, enable AMD FSR in the Deck&apos;s
              performance menu with the game set to 720p.
            </li>
          </ol>
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
                Force Proton Experimental or Proton 9.x in the game&apos;s
                compatibility settings. If it still fails, try verifying game
                files (Properties → Installed Files → Verify).
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
                Lower shadow quality to Low, disable anti-aliasing, and cap FPS
                to 60. If stutters persist, try clearing the shader cache
                (Settings → Storage → Shader Cache).
              </p>
            </div>

            <div className="bg-surface border border-outline-variant rounded-lg p-5">
              <h3 className="font-headline-md text-base text-on-surface mb-2">
                Text is too small to read
              </h3>
              <p>
                The Deck&apos;s 7-inch screen can make UI text hard to read. Use the
                built-in magnifier (Steam + L1) or lower the resolution to 720p
                and let FSR upscale for larger UI elements.
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
    </main>
  );
}
