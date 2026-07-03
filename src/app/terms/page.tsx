import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MECCHA CHAMELEON Lab",
  description: "Terms of service for MECCHA CHAMELEON Lab, an independent fan site.",
};

export default function TermsPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-3xl mx-auto px-4 md:px-gutter">
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
        <p className="font-label-caps text-label-caps text-primary">
          This is an independent fan site. Not affiliated with lemorion_1224 or Valve Corporation.
        </p>
      </div>

      <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-8">
        Terms of Service
      </h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">Last updated: July 2026</p>

      <div className="space-y-8 font-body-main text-body-main text-on-surface-variant">
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">Acceptance of Terms</h2>
          <p>By accessing MECCHA CHAMELEON Lab, you agree to these terms of service. If you do not agree, please do not use this site.</p>
        </section>

        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">Disclaimer</h2>
          <p>MECCHA CHAMELEON Lab is an independent fan site created for informational purposes. We are not affiliated with, endorsed by, or connected to lemorion_1224 (the game developer) or Valve Corporation (Steam). All game assets, trademarks, and copyrights belong to their respective owners.</p>
        </section>

        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">Content Accuracy</h2>
          <p>While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, reliability, or accuracy of the content on this site. Game mechanics, maps, and features may change with updates.</p>
        </section>

        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">Intellectual Property</h2>
          <p>All game-related content, including but not limited to game names, logos, screenshots, and artwork, are the property of their respective owners. This site is created under fair use for educational and informational purposes.</p>
        </section>

        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">Limitation of Liability</h2>
          <p>MECCHA CHAMELEON Lab shall not be liable for any damages arising from the use of this site or reliance on any information provided herein.</p>
        </section>

        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the site.</p>
        </section>
      </div>
    </main>
  );
}
