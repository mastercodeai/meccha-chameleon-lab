import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import Comments from "@/components/Comments";

export const metadata: Metadata = {
  title: "Seeker Guide — Hunt Like a Pro",
  description: "Sharpen your detection skills and become an unstoppable Seeker. Learn search patterns, environment reading, team coordination, and time management in MECCHA CHAMELEON.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/seeker",
  },
  openGraph: {
    title: "Seeker Guide — How to Find Every Hider (2026)",
    description: "Sharpen your detection skills and become an unstoppable Seeker. Learn search patterns, environment reading, team coordination, and time management in MECCHA CHAMELEON.",
    url: "https://mecchachameleonlab.com/guides/seeker",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seeker Guide — How to Find Every Hider (2026)",
    description: "Sharpen your detection skills and become an unstoppable Seeker. Learn search patterns, environment reading, team coordination, and time management in MECCHA CHAMELEON.",
  },
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "search-strategies", title: "Search Strategies" },
  { id: "reading-environment", title: "Reading the Environment" },
  { id: "team-coordination", title: "Team Coordination" },
  { id: "time-management", title: "Time Management" },
  { id: "mistakes", title: "Common Mistakes" },
];

export default function SeekerGuidePage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
          { name: "Seeker Guide", url: "https://mecchachameleonlab.com/guides/seeker" },
        ]}
      />
      <ArticleSchema
        title="Seeker Guide — Hunt Like a Pro"
        description="Sharpen your detection skills and become an unstoppable Seeker. Learn search patterns, environment reading, team coordination, and time management in MECCHA CHAMELEON."
        url="https://mecchachameleonlab.com/guides/seeker"
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
                  className="font-body-sm text-sm text-on-surface-variant hover:text-secondary transition-colors py-1 px-2 rounded hover:bg-secondary/5"
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
            Seeker Guide
          </h1>

          <section id="overview" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Overview</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              As a Seeker in MECCHA CHAMELEON, your mission is to find and identify every Hider before the timer runs out. Hiders are painted to blend into the environment, so you'll need sharp eyes, smart strategies, and solid teamwork.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant">
              The best Seekers don't just wander around randomly — they follow systematic patterns, read subtle environmental clues, and coordinate with teammates to cover the entire map efficiently. This guide will sharpen your hunting instincts.
            </p>
          </section>

          <section id="search-strategies" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Search Strategies</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Random searching is the fastest way to lose as a Seeker. Use these proven strategies to find Hiders systematically.
            </p>
            <div className="space-y-4">
              {[
                { tip: "Sweep methodically", desc: "Pick a direction and scan the entire area in a grid pattern. Don't double back or skip sections — methodical coverage beats random wandering every time." },
                { tip: "Start at high-traffic zones", desc: "Check the most popular hiding spots first. Experienced players tend to gravitate toward the same reliable positions, especially near objectives and spawn areas." },
                { tip: "Look for color mismatches", desc: "Even skilled painters can't perfectly match every surface from every angle. Scan for slight differences in hue, saturation, or brightness that don't belong." },
                { tip: "Check elevation changes", desc: "Many Seekers only scan at eye level. Look up at shelves, ledges, and rafters, then crouch and check under tables and behind low walls." },
                { tip: "Use peripheral vision", desc: "Don't stare at one spot. Let your eyes sweep broadly — movement and shape anomalies are easier to catch in your peripheral vision than in focused center gaze." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-purple-500 rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.tip}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="reading-environment" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Reading the Environment</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              The environment itself tells you where Hiders are hiding. Learn to read the subtle signs.
            </p>
            <div className="bg-surface-container-high border border-outline-variant rounded-lg p-6 mb-4">
              <h3 className="font-label-caps text-label-caps text-secondary mb-3 uppercase">What to Look For</h3>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <li>• Surfaces that look slightly &quot;off&quot; — wrong shade, wrong texture, wrong shine</li>
                <li>• Shapes that don't match the expected geometry of the area</li>
                <li>• Subtle shadows that indicate a 3D object where there shouldn't be one</li>
                <li>• Painted edges that don't quite line up with the underlying surface</li>
                <li>• Repeated identical patterns that look copy-pasted from the environment</li>
              </ul>
            </div>
            <div className="space-y-4">
              {[
                { tip: "Trust your instincts", desc: "If something looks slightly off — a shape, a shadow, a color — investigate it. Your brain picks up on subtle anomalies before you consciously recognize them." },
                { tip: "Compare surfaces", desc: "If two identical surfaces look different, one might have a Hider painted onto it. Compare objects of the same type across the map." },
                { tip: "Watch for texture seams", desc: "Hiders painting onto surfaces often create visible seams where their body meets the environment. Look for edges and transitions that don't exist naturally." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-purple-500 rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.tip}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="team-coordination" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Team Coordination</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              A coordinated Seeker team is exponentially more effective than solo hunters. Use communication and strategy to cover the map faster.
            </p>
            <div className="space-y-4">
              {[
                { tip: "Split the map into zones", desc: "Assign each team member a section of the map before searching begins. Overlapping searches waste time — divide and conquer." },
                { tip: "Call out locations", desc: "When you find a Hider, immediately share the location with your team. This helps them learn common spots and avoid re-checking cleared areas." },
                { tip: "Use the emote system", desc: "Emotes are your primary communication tool. Use them to signal teammates, mark suspicious areas, or indicate which zones you've already cleared." },
                { tip: "Double-check teammates' zones", desc: "Even the best Seekers miss things. Once you finish your zone, sweep through an area a teammate already checked — a fresh pair of eyes catches what they missed." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-purple-500 rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.tip}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="time-management" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Time Management</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              The clock is your enemy as a Seeker. Poor time management is the #1 reason teams fail to find all Hiders.
            </p>
            <div className="space-y-4">
              {[
                { tip: "Don't camp one spot", desc: "If you've spent more than a few seconds examining an area and found nothing, move on. You can always come back later if time permits." },
                { tip: "Prioritize likely zones first", desc: "Spend your first half of the timer on the most popular hiding areas. Save obscure corners and edge cases for the final stretch." },
                { tip: "Keep track of the clock", desc: "Always know how much time is left. Adjust your search speed accordingly — be aggressive early, frantic late." },
                { tip: "Speed up in the final minute", desc: "In the last stretch, switch from careful inspection to rapid sweeping. It's better to do a fast pass over remaining areas than to carefully examine one more spot." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-purple-500 rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.tip}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="mistakes" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Common Mistakes</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Avoid these frequent errors that cause Seekers to lose rounds they should have won.
            </p>
            <div className="space-y-4">
              {[
                { mistake: "Random wandering", desc: "Walking around without a plan wastes time and leaves large areas unchecked. Always follow a systematic search pattern." },
                { mistake: "Only scanning at eye level", desc: "Hiders above and below your natural sightline go unnoticed. Regularly look up at shelves and down at under-table spaces." },
                { mistake: "Ignoring gut feelings", desc: "If something looks off, check it. Your subconscious picks up on mismatches faster than your conscious mind. Trust your instincts." },
                { mistake: "Poor time allocation", desc: "Spending 80% of the timer on 20% of the map guarantees a loss. Spread your search evenly and cut losses when an area is taking too long." },
                { mistake: "Not using teammates", desc: "Solo searching is slow and incomplete. Coordinate zones, share findings, and double-check each other's work for maximum coverage." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-error rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-error mb-1">⚠ {item.mistake}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
            <Link href="/maps" className="bg-gradient-to-r from-secondary to-inverse-secondary text-on-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(168,130,255,0.4)] hover:brightness-110 transition-all">
              BROWSE MAPS
            </Link>
            <Link href="/guides/beginner" className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all">
              BEGINNER GUIDE
            </Link>
            <Link href="/guides/hider" className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all">
              HIDER GUIDE
            </Link>
          </div>
        </article>
      </div>

      <RelatedPages
        pages={[
          { title: "Hider Guide", description: "Become an invisible master of disguise.", href: "/guides/hider", icon: "🎨" },
          { title: "Seeker Counters", description: "Advanced strategies to catch even the best hiders.", href: "/guides/seeker-counters", icon: "🛡️" },
          { title: "Tips & Tricks", description: "50 essential tips for hiders, seekers, painters, and map experts.", href: "/guides/tips", icon: "💡" },
        ]}
      />

      <Comments slug="guides/seeker" />
    </main>
  );
}
