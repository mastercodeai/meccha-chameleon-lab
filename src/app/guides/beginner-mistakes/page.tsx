import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import { relatedGuides } from "@/data/relatedGuides";
import Comments from "@/components/Comments";

export const metadata: Metadata = {
  title: "10 MECCHA CHAMELEON Mistakes Beginners Make",
  description:
    "Avoid these 10 common MECCHA CHAMELEON beginner mistakes. Learn what NOT to do as a new player and improve fast.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/beginner-mistakes",
  },
  openGraph: {
    title: "10 MECCHA CHAMELEON Mistakes Beginners Make",
    description:
      "Avoid these 10 common MECCHA CHAMELEON beginner mistakes. Learn what NOT to do as a new player and improve fast.",
    url: "https://mecchachameleonlab.com/guides/beginner-mistakes",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "10 MECCHA CHAMELEON Mistakes Beginners Make",
    description:
      "Avoid these 10 common MECCHA CHAMELEON beginner mistakes. Learn what NOT to do as a new player and improve fast.",
  },
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "mistakes", title: "The 10 Mistakes" },
  { id: "next-steps", title: "Next Steps" },
];

const mistakes = [
  {
    title: "Choosing Oversized Objects",
    description:
      "New players often transform into the largest available object — a massive bookshelf, a giant crate, or a bulky vehicle. It feels safe because you're hidden inside something huge.",
    whyWrong:
      "Oversized objects stand out immediately. Seekers know the map layout and will instantly notice a large object that wasn't there before or is in an unusual position. Big objects also limit your placement options and make repositioning nearly impossible.",
    whatToDo:
      "Pick medium-sized objects that blend into clusters. A small box among other boxes, a chair against a wall, or a lamp on a table — these are far less likely to draw attention.",
  },
  {
    title: "Wrong Paint Color for Surface",
    description:
      "Beginners often paint themselves with colors they think look 'close enough' without actually sampling the surface they're hiding against.",
    whyWrong:
      "Even a slightly off shade is noticeable to experienced Seekers. Human eyes are extremely good at detecting color mismatches, especially in well-lit areas. A green chair against a blue wall is an instant giveaway.",
    whatToDo:
      "Always use the 3D eyedropper tool to sample the exact color from the surface you'll be hiding against. Sample from the specific spot where you'll be placed, including lighting conditions.",
  },
  {
    title: "Standing Still Too Long",
    description:
      "Some beginners find a spot and never move for the entire round, thinking absolute stillness is the best strategy.",
    whyWrong:
      "While staying still is important, never repositioning means you can't adapt to a Seeker's search pattern. If they're systematically sweeping the map, staying in one spot means you'll eventually be checked.",
    whatToDo:
      "Stay still when Seekers are nearby, but reposition during safe moments — when they're looking away or searching a different area. Good hiders know when to stay frozen and when to quietly relocate.",
  },
  {
    title: "Hiding in Obvious Spots",
    description:
      "New hiders gravitate toward the same popular spots: behind the desk, inside the closet, in the corner of the room.",
    whyWrong:
      "Experienced Seekers check these spots first because everyone hides there. Corners, closets, and under desks are the first places on any Seeker's checklist.",
    whatToDo:
      "Think creatively. Hide in the middle of a cluttered area where objects naturally overlap. Place yourself where an object makes sense contextually — a cup on a kitchen counter, a book on a shelf — not where a human would hide.",
  },
  {
    title: "Not Re-Painting After Taking Damage",
    description:
      "When a Seeker damages you, your paint may chip or degrade, potentially exposing your original colors. Many beginners forget or don't know they may need to repaint.",
    whyWrong:
      "Damaged paint can reveal patches of your original body color, making you more visible against the environment. Even minor paint damage can blow your cover.",
    whatToDo:
      "The moment you take damage, find a safe spot and immediately repaint. Keep your paint tool ready and memorize your camouflage colors so you can quickly reapply them.",
  },
  {
    title: "Ignoring Map Knowledge",
    description:
      "Beginners jump into rounds without learning the map layout, object placements, or typical Seeker patrol routes.",
    whyWrong:
      "Without map knowledge, you can't predict where Seekers will look, which areas are high-traffic, or where natural hiding clusters exist. You'll end up in random spots with no strategy.",
    whatToDo:
      "Study each map before playing seriously. Learn the color palettes, high-traffic zones, and common object placements. Check out our map guides for detailed breakdowns of every arena.",
  },
  {
    title: "Following Other Hiders",
    description:
      "New players sometimes follow other hiders to similar spots, thinking there's safety in numbers.",
    whyWrong:
      "When a Seeker finds one hider in an area, they'll immediately intensify their search nearby. If multiple hiders are clustered together, one discovery leads to multiple eliminations in rapid succession.",
    whatToDo:
      "Spread out across the map. If you see another player heading to a zone, go somewhere else entirely. Diversity of positions makes it harder for Seekers to find everyone.",
  },
  {
    title: "Using Rare or Unique Objects",
    description:
      "Some beginners pick the flashiest or most unusual object available — a golden statue, a neon sign, or a one-of-a-kind decoration.",
    whyWrong:
      "Unique objects draw the eye. Seekers will notice something that stands out from the environment, even if your paint is perfect. If there's only one of something on the map, it becomes a target.",
    whatToDo:
      "Choose common, repeated objects. If there are ten identical potted plants on a map, becoming one of them means the Seeker has to check all ten. Blend into quantity, not novelty.",
  },
  {
    title: "Not Checking Seeker Position",
    description:
      "Beginners often focus entirely on their own hiding spot and forget to track where the Seeker is on the map.",
    whyWrong:
      "Knowing the Seeker's position lets you plan repositions, anticipate their search path, and know when it's safe to adjust. Without this awareness, you're just guessing.",
    whatToDo:
      "Listen for audio cues like footsteps and paint spraying. Track the Seeker's movement patterns so you can predict their next area of focus and stay one step ahead.",
  },
  {
    title: "Panicking and Moving",
    description:
      "When a Seeker gets close, new players often panic, break formation, and start running — the worst possible reaction.",
    whyWrong:
      "Movement is the single biggest giveaway in MECCHA CHAMELEON. A Seeker might walk right past a poorly painted hider, but they will never miss sudden movement in their peripheral vision.",
    whatToDo:
      "Stay absolutely still when a Seeker is near, even if your paint isn't perfect. Most Seekers rely on movement detection first and paint quality second. Trust your position and freeze.",
  },
];

export default function BeginnerMistakesPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
          { name: "Beginner Mistakes", url: "https://mecchachameleonlab.com/guides/beginner-mistakes" },
        ]}
      />
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
          <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-8">
            10 MECCHA CHAMELEON Mistakes Beginners Make
          </h1>

          <section id="overview" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Overview
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Starting out in MECCHA CHAMELEON is exciting, but new players often fall into the same traps that get them caught every round. These mistakes seem logical at first, but they&apos;re the reason most beginners struggle to survive.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant">
              This guide covers the 10 most common beginner mistakes — what they are, why they fail, and exactly what to do instead. Avoid these and you&apos;ll immediately improve your survival rate.
            </p>
          </section>

          <section id="mistakes" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              The 10 Mistakes
            </h2>
            <div className="space-y-6">
              {mistakes.map((m, i) => (
                <div
                  key={i}
                  className="bg-surface border border-outline-variant rounded-lg p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-error/20 text-error font-label-caps text-label-caps w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      {m.title}
                    </h3>
                  </div>
                  <p className="font-body-main text-body-main text-on-surface-variant mb-4">
                    {m.description}
                  </p>
                  <div className="space-y-3">
                    <div className="bg-surface border-l-4 border-error rounded-r-lg p-3">
                      <h4 className="font-label-caps text-label-caps text-error mb-1">
                        Why It&apos;s Wrong
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {m.whyWrong}
                      </p>
                    </div>
                    <div className="bg-surface border-l-4 border-primary rounded-r-lg p-3">
                      <h4 className="font-label-caps text-label-caps text-primary mb-1">
                        What To Do Instead
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {m.whatToDo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="next-steps" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Next Steps
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Now that you know what NOT to do, dive deeper into the strategies that actually work. Our detailed guides will take your gameplay to the next level.
            </p>
          </section>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
            <Link
              href="/guides/hider"
              className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all"
            >
              HIDER GUIDE
            </Link>
            <Link
              href="/guides/beginner"
              className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all"
            >
              BEGINNER GUIDE
            </Link>
            <Link
              href="/maps"
              className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all"
            >
              BROWSE MAPS
            </Link>
          </div>
        </article>
      </div>

      <RelatedPages
        pages={relatedGuides["beginner-mistakes"]}
        nextSteps={[
          { label: "HIDER PATH", title: "Master Hiding", description: "Deep dive into camouflage, painting, and positioning", href: "/guides/hider", icon: "🎨" },
          { label: "SEEKER PATH", title: "Hunt Better", description: "Learn to read the environment and catch hiders", href: "/guides/seeker", icon: "🔍" },
          { label: "SOCIAL PLAY", title: "Play With Friends", description: "Set up the perfect lobby for your group", href: "/guides/tips", icon: "🎮" },
        ]}
      />

      <Comments slug="guides/beginner-mistakes" />
    </main>
  );
}
