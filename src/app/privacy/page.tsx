import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MECCHA CHAMELEON Lab",
  description: "Privacy policy for MECCHA CHAMELEON Lab, an independent fan site.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-3xl mx-auto px-4 md:px-gutter">
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
        <p className="font-label-caps text-label-caps text-primary">
          This is an independent fan site. Not affiliated with lemorion_1224 or Valve Corporation.
        </p>
      </div>

      <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-8">
        Privacy Policy
      </h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">Last updated: July 2026</p>

      <div className="space-y-8 font-body-main text-body-main text-on-surface-variant">
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">Information We Collect</h2>
          <p>MECCHA CHAMELEON Lab does not require user accounts and does not collect personal information such as names, email addresses, or payment details.</p>
        </section>

        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">Analytics</h2>
          <p>We use privacy-focused analytics (Plausible Analytics) to understand how visitors use our site. This analytics tool does not use cookies and does not collect personal data. All data is aggregated and anonymized.</p>
        </section>

        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">Third-Party Services</h2>
          <p>Our site may contain links to third-party websites, including Steam and Discord. We are not responsible for the privacy practices of these external sites.</p>
        </section>

        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">Cookies</h2>
          <p>MECCHA CHAMELEON Lab does not use tracking cookies. We may use essential technical cookies for site functionality.</p>
        </section>

        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">Contact</h2>
          <p>For privacy-related questions, please contact us through our <a href="https://discord.gg/eNFUDBSwag" className="text-primary hover:underline">Discord server</a>.</p>
        </section>
      </div>
    </main>
  );
}
