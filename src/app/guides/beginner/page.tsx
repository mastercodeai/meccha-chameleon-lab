import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, ArticleSchema, FAQSchema } from "@/components/Schema";
import RelatedPages from "@/components/RelatedPages";
import { relatedGuides } from "@/data/relatedGuides";
import Comments from "@/components/Comments";

export const metadata: Metadata = {
  title: "Beginner Guide — How to Play",
  description: "Everything you need to know before your first round of MECCHA CHAMELEON. Rules, controls, painting tips, and common mistakes.",
  alternates: {
    canonical: "https://mecchachameleonlab.com/guides/beginner",
  },
  openGraph: {
    title: "Beginner Guide — How to Play & Win (2026)",
    description: "Everything you need to know before your first round of MECCHA CHAMELEON. Rules, controls, painting tips, and common mistakes.",
    url: "https://mecchachameleonlab.com/guides/beginner",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beginner Guide — How to Play & Win (2026)",
    description: "Everything you need to know before your first round of MECCHA CHAMELEON. Rules, controls, painting tips, and common mistakes.",
  },
};

const sections = [
  { id: "what-is", title: "What is MECCHA CHAMELEON?" },
  { id: "how-round-works", title: "How a Round Works" },
  { id: "getting-started", title: "Three Ways to Start Playing" },
  { id: "rules", title: "Rules" },
  { id: "painting", title: "How Painting Works" },
  { id: "beginner-hider-steps", title: "Your First 5 Minutes as Hider" },
  { id: "first-match-settings", title: "Recommended First Match Settings" },
  { id: "hider-tips", title: "Hider Tips" },
  { id: "seeker-tips", title: "Seeker Tips" },
  { id: "controls", title: "Controls" },
  { id: "mistakes", title: "Common Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BeginnerGuidePage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-[1440px] mx-auto px-4 md:px-gutter">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mecchachameleonlab.com" },
          { name: "Guides", url: "https://mecchachameleonlab.com/guides" },
          { name: "Beginner Guide", url: "https://mecchachameleonlab.com/guides/beginner" },
        ]}
      />
      <ArticleSchema
        title="Beginner Guide — How to Play"
        description="Everything you need to know before your first round of MECCHA CHAMELEON. Rules, controls, painting tips, and common mistakes."
        url="https://mecchachameleonlab.com/guides/beginner"
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
            Beginner Guide
          </h1>

          <section id="what-is" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">What is MECCHA CHAMELEON?</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Whether you want to hide or hunt, this guide covers both. For deep strategies, check the <Link href="/guides/hider" className="text-primary hover:underline">Hider Guide</Link> and <Link href="/guides/seeker" className="text-primary hover:underline">Seeker Guide</Link>.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              MECCHA CHAMELEON is a casual PvP hide-and-seek game where you paint your body to blend into the environment. Released on June 9, 2026, it has already sold over 15 million copies and received 42,000+ Steam reviews.
            </p>
            <p className="font-body-main text-body-main text-on-surface-variant">
              The game features multiple maps, each with unique environments and hiding opportunities. Players split into two teams: Hiders and Seekers.
            </p>
          </section>
          <section id="how-round-works" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">How a Round Works</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Every match of MECCHA CHAMELEON follows the same structure. Understanding the flow from lobby to scoreboard will help you know what to expect and when to act. Here is the full round cycle broken down step by step.
            </p>
            <ol className="space-y-4 font-body-main text-body-main text-on-surface-variant list-decimal list-inside">
              <li>
                <strong className="text-on-surface">Lobby & Settings</strong> — The host picks a map, round time, team sizes, and optional modifiers. You can tweak everything from paint capacity to taunt frequency before anyone spawns.
              </li>
              <li>
                <strong className="text-on-surface">Role Assignment</strong> — Once the lobby is ready, the game splits everyone into Hiders and Seekers. Roles rotate each round so you get to experience both sides.
              </li>
              <li>
                <strong className="text-on-surface">Hiding Phase</strong> — Hiders spawn first and get a head start. Use the 3D eyedropper to sample nearby surfaces, then spray-paint your body to blend in. Pick a strong spot and finish your camouflage before time runs out.
              </li>
              <li>
                <strong className="text-on-surface">Hunting Phase</strong> — Seekers are released and start searching the map. They have a limited time to find every Hider. Shoot anything that looks suspicious — a wrong guess costs time.
              </li>
              <li>
                <strong className="text-on-surface">Taunt Events</strong> — Periodically the game forces Hiders to play an animation or make a sound. These taunt events give Seekers a chance to narrow down locations, so stay near cover.
              </li>
              <li>
                <strong className="text-on-surface">Round End & Scoring</strong> — When the timer runs out or every Hider is found, the round ends. Points are awarded for surviving, for finding Hiders, and for style. The scoreboard pops up before the next round.
              </li>
              <li>
                <strong className="text-on-surface">Next Round</strong> — Roles rotate and a new round begins. Matches typically run several rounds, and the player with the most points at the end wins the match.
              </li>
            </ol>
          </section>

          <section id="getting-started" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Three Ways to Start Playing</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              There is no single right way to jump in. Pick the approach that matches your comfort level and available friends.
            </p>
            <div className="space-y-4">
              <div className="bg-surface border border-outline-variant rounded-lg p-5">
                <h3 className="font-label-caps text-label-caps text-primary mb-2">Solo Practice</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Jump into a public lobby and learn by watching. Nobody expects a newcomer to carry the team, so there is zero pressure. Observe how experienced players paint, where they hide, and how Seekers move through the map. You will pick up the basics faster than you think just by spectating a few rounds.
                </p>
              </div>
              <div className="bg-surface border border-outline-variant rounded-lg p-5">
                <h3 className="font-label-caps text-label-caps text-secondary mb-2">Friend Lobby</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Create a private room and invite your friends. This is the best way to learn because everyone is on the same page. You can take your time painting, experiment with hiding spots, and give each other feedback without the pressure of experienced players hunting you down.
                </p>
              </div>
              <div className="bg-surface border border-outline-variant rounded-lg p-5">
                <h3 className="font-label-caps text-label-caps text-tertiary mb-2">Public Match</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Jump straight into a full public match. It is chaotic and you will die a lot, but you learn fast. Experienced players often share tips in chat, and seeing creative hiding spots in action is the fastest way to improve your own game.
                </p>
              </div>
            </div>
          </section>

          <section id="rules" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Rules</h2>
            <div className="bg-surface border border-primary/30 rounded-lg p-6 mb-4">
              <p className="font-body-main text-body-main text-on-surface">
                The rules are simple. Split into the <span className="text-primary font-semibold">Seeker team</span> and the <span className="text-secondary font-semibold">Hider team</span>. The Seekers win if they find everyone within the time limit. The Hiders win if at least one player survives.
              </p>
            </div>
            <ul className="space-y-2 font-body-main text-body-main text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                2-10 players recommended per match
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Matches can be public or private
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Streamers can easily host viewer participation games
              </li>
            </ul>
          </section>

          <section id="painting" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">How Painting Works</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              The core mechanic of MECCHA CHAMELEON is painting. As a Hider, you start with a pure white body and must paint yourself to match the environment — like a real chameleon.
            </p>
            <div className="bg-surface-container-high border border-outline-variant rounded-lg p-6">
              <h3 className="font-label-caps text-label-caps text-primary mb-3 uppercase">Key Painting Tips</h3>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <li>• Use the 3D eyedropper to pick exact colors from surfaces</li>
                <li>• Match the surface texture, not just the color</li>
                <li>• Consider lighting — shadows change how colors appear</li>
                <li>• Metallic and roughness sliders can help match surface finishes</li>
              </ul>
            </div>
          </section>

          <section id="beginner-hider-steps" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Your First 5 Minutes as Hider</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              Your first few rounds as Hider can feel overwhelming. Follow these five steps in order and you will survive longer than most beginners.
            </p>
            <div className="space-y-4">
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">1. Find Your Spot First</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Before you touch the paint tool, walk around the map and find a location that offers natural cover. Look for corners, behind furniture, or areas where a shaped object would not look out of place. Choosing your spot first saves you from repainting later.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">2. Sample the Surface</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Aim at the wall or floor right behind where you plan to stand and right-click to activate the 3D eyedropper. This copies the exact color and material properties from the surface so your paint matches perfectly.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">3. Paint Your Body</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Left-click to spray paint across your entire body. Work from head to toe, making sure there are no white patches left. Use multiple angles to cover hard-to-reach spots like your back and the soles of your feet.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">4. Break Your Silhouette</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Stand at an angle rather than facing the seeker's likely approach path head-on. Crouch if the environment allows it. A human-shaped outline is the easiest thing for seekers to spot, so anything you can do to disrupt that silhouette helps.
                </p>
              </div>
              <div className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-1">5. Stay Still</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Once you are in position, stop moving. Movement is the number one way to get caught. Even a tiny adjustment can draw a seeker's eye. Trust your paint job and let the timer run down.
                </p>
              </div>
            </div>
          </section>

          <section id="first-match-settings" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Recommended First Match Settings</h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-4">
              When you host your first game, use these settings to keep things simple while you learn the ropes. You can always crank up the difficulty later.
            </p>
            <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Setting</th>
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Recommended</th>
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Why</th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-body-sm text-on-surface">
                  {[
                    ["Map", "Backrooms", "Simplest layout with consistent lighting — easy to learn hiding spots"],
                    ["Mode", "Basic", "Standard hide and seek rules, no extra modifiers to confuse new players"],
                    ["Players", "3–5", "Small group keeps things manageable without too much seeker pressure"],
                    ["Round Time", "3 minutes", "Enough time to find a spot and paint without rushing"],
                  ].map(([setting, value, reason]) => (
                    <tr key={setting} className="border-b border-outline-variant/50">
                      <td className="p-4">{setting}</td>
                      <td className="p-4 text-primary font-label-caps">{value}</td>
                      <td className="p-4 text-on-surface-variant">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="hider-tips" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Hider Tips</h2>
            <div className="space-y-4">
              {[
                { tip: "Pick your spot BEFORE painting", desc: "Find a good hiding location first, then match your paint to that specific surface." },
                { tip: "Stand still", desc: "Movement catches the Seeker's eye. Once you're painted, stay perfectly still." },
                { tip: "Use shadows", desc: "Dark areas are more forgiving — small color mismatches are harder to spot in shadows." },
                { tip: "Think like furniture", desc: "The best spots are where objects naturally exist. Don't hide in open spaces." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-primary rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.tip}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="seeker-tips" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Seeker Tips</h2>
            <div className="space-y-4">
              {[
                { tip: "Look for color mismatches", desc: "Even the best painters can't perfectly match every surface. Look for slight color differences." },
                { tip: "Check common spots", desc: "Experienced players tend to use the same hiding spots. Learn the maps." },
                { tip: "Use the emote system", desc: "Emotes can help you communicate with teammates and coordinate searches." },
               { tip: "Listen for audio cues", desc: "Footsteps and paint spray sounds can reveal a hider's location even when they are perfectly camouflaged. Turn up your volume and listen carefully." },
               { tip: "Check suspicious shapes", desc: "If something looks slightly off — a bump on a wall, an unusual shadow, or a surface that seems to shimmer — shoot it. Trust your instincts." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-secondary rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.tip}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="controls" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Controls</h2>
            <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Action</th>
                    <th className="text-left p-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Key</th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-body-sm text-on-surface">
                  {[
                    ["Move", "WASD"],
                    ["Look", "Mouse"],
                    ["Paint", "Left Click"],
                    ["Eyedropper", "Right Click"],
                    ["Emote", "E"],
                    ["Jump", "Space"],
                  ].map(([action, key]) => (
                    <tr key={action} className="border-b border-outline-variant/50">
                      <td className="p-4">{action}</td>
                      <td className="p-4 text-primary font-label-caps">{key}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="mistakes" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Common Mistakes</h2>
            <div className="space-y-4">
              {[
                { mistake: "Painting before finding a spot", desc: "You'll waste time repainting when you move. Find your spot first." },
                { mistake: "Hiding in obvious places", desc: "The middle of a room or an open floor is the first place seekers check." },
                { mistake: "Moving after the round starts", desc: "Once you're in position, freeze. Movement is the #1 way to get caught." },
                { mistake: "Ignoring the timer", desc: "If you're a Seeker, manage your time. Don't spend too long on one area." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border-l-4 border-error rounded-r-lg p-4">
                  <h3 className="font-label-caps text-label-caps text-error mb-1">⚠ {item.mistake}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Frequently Asked Questions</h2>
            <FAQSchema
              items={[
                {
                  q: "Is MECCHA CHAMELEON free?",
                  a: "No, MECCHA CHAMELEON costs $5.99 on Steam. There are no microtransactions or DLC — all maps and Workshop content are included in the base price.",
                },
                {
                  q: "How many players can play in one match?",
                  a: "Matches support 2 to 10 players. The recommended sweet spot is 4-6 players for the best balance between hiding spots and seeker pressure.",
                },
                {
                  q: "How long does one match last?",
                  a: "Each round lasts 2-4 minutes depending on lobby settings. A full match typically runs 15-25 minutes with multiple rounds.",
                },
                {
                  q: "What's the best map for beginners?",
                  a: "Backrooms is the best beginner map. It has a simple layout, consistent lighting, and straightforward hiding spots that are easy to learn.",
                },
                {
                  q: "Can I play on Steam Deck?",
                  a: "Yes, MECCHA CHAMELEON runs on Steam Deck. Performance is solid but painting with the trackpad takes some practice. A mouse is recommended for precision painting.",
                },
                {
                  q: "Do I need a microphone to play?",
                  a: "Voice chat is not required but makes the game much more fun. The game has an emote system for basic communication if you don't have a mic.",
                },
              ]}
            />
            <div className="space-y-4">
              {[
                { q: "Is MECCHA CHAMELEON free?", a: "No, it costs $5.99 on Steam. There are no microtransactions or DLC — all maps and Workshop content are included." },
                { q: "How many players can play?", a: "Matches support 2 to 10 players. The sweet spot is 4-6 for the best balance between hiding spots and seeker pressure." },
                { q: "How long does one match last?", a: "Each round lasts 2-4 minutes. A full match with multiple rounds typically runs 15-25 minutes." },
                { q: "What's the best map for beginners?", a: "Backrooms. It has a simple layout, consistent lighting, and straightforward hiding spots." },
                { q: "Can I play on Steam Deck?", a: "Yes. Performance is solid but painting with the trackpad takes practice. A mouse is recommended for precision painting." },
                { q: "Do I need a microphone?", a: "Not required, but voice chat makes the game more fun. The emote system works for basic communication." },
              ].map((item, i) => (
                <details key={i} className="bg-surface border border-outline-variant rounded-lg group">
                  <summary className="flex items-center justify-between cursor-pointer p-4 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors">
                    {item.q}
                    <span className="text-on-surface-variant group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="px-4 pb-4 font-body-sm text-body-sm text-on-surface-variant">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-stack-lg">
            <Link href="/maps" className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded text-center shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all">
              BROWSE MAPS
            </Link>
            <Link href="/guides/hider" className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-primary/10 transition-all">
              HIDER GUIDE
            </Link>
            <Link href="/guides/seeker" className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded text-center hover:bg-secondary/10 transition-all">
              SEEKER GUIDE
            </Link>
          </div>

          {/* Deep Dive Section */}
          <section className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Deep Dive: Level Up Your Game
            </h2>
            <p className="font-body-main text-body-main text-on-surface-variant mb-6">
              Ready for more? These guides go deeper into specific topics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/guides/beginner-mistakes" className="group bg-surface border border-outline-variant rounded-lg p-5 hover:border-primary/50 transition-all">
                <span className="text-2xl mb-2 block">🚫</span>
                <h3 className="font-label-caps text-label-caps text-on-surface group-hover:text-primary transition-colors mb-2">Beginner Mistakes</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">The most common mistakes new players make and how to avoid them.</p>
              </Link>
              <Link href="/guides/tips" className="group bg-surface border border-outline-variant rounded-lg p-5 hover:border-primary/50 transition-all">
                <span className="text-2xl mb-2 block">💡</span>
                <h3 className="font-label-caps text-label-caps text-on-surface group-hover:text-primary transition-colors mb-2">Pro Tips</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Expert tips and tricks to accelerate your improvement and win more rounds.</p>
              </Link>
            </div>
          </section>
        </article>
      </div>

      <RelatedPages
        pages={relatedGuides["beginner"]}
        nextSteps={[
          { label: "HIDER PATH", title: "Master Hiding", description: "Deep dive into camouflage, painting, and positioning", href: "/guides/hider", icon: "🎨" },
          { label: "SEEKER PATH", title: "Hunt Better", description: "Learn to read the environment and catch hiders", href: "/guides/seeker", icon: "🔍" },
          { label: "SOCIAL PLAY", title: "Play With Friends", description: "Set up the perfect lobby for your group", href: "/guides/tips", icon: "🎮" },
        ]}
      />

      <Comments slug="guides/beginner" />
    </main>
  );
}
