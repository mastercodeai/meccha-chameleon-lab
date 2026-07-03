import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crossplay — Can You Play Together? | MECCHA CHAMELEON Lab",
  description:
    "Can you play MECCHA CHAMELEON with friends on different platforms? Check the current crossplay status and platform availability.",
};

export default function CrossplayPage() {
  return (
    <main className="pt-[100px] pb-stack-lg max-w-3xl mx-auto px-4 md:px-gutter">
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
        <p className="font-label-caps text-label-caps text-primary">
          Last updated: July 2026
        </p>
      </div>

      <h1 className="font-display-lg text-3xl md:text-display-lg text-on-surface uppercase mb-4">
        Crossplay
      </h1>
      <p className="font-body-main text-body-main text-on-surface-variant mb-8">
        Can you play together across different platforms? Here&apos;s everything
        you need to know about MECCHA CHAMELEON&apos;s platform availability.
      </p>

      <div className="space-y-10 font-body-main text-body-main text-on-surface-variant">
        {/* Current Platform Status */}
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">
            Current Platform Status
          </h2>
          <div className="bg-surface border border-outline-variant rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
                <span>
                  <strong className="text-on-surface">PC (Windows)</strong> —
                  Available on Steam
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-on-surface-variant/30 flex-shrink-0" />
                <span>
                  <strong className="text-on-surface">PlayStation 5</strong> —
                  Not announced
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-on-surface-variant/30 flex-shrink-0" />
                <span>
                  <strong className="text-on-surface">Xbox</strong> — Not
                  announced
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-on-surface-variant/30 flex-shrink-0" />
                <span>
                  <strong className="text-on-surface">Nintendo Switch</strong> —
                  Not announced
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-on-surface-variant/30 flex-shrink-0" />
                <span>
                  <strong className="text-on-surface">Mobile</strong> — Not
                  announced
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* What is Crossplay */}
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">
            What is Crossplay?
          </h2>
          <p className="mb-4">
            Crossplay (or cross-platform play) lets players on different
            platforms — for example, PC and PlayStation — join the same
            multiplayer session. Without crossplay, each platform is an isolated
            player pool.
          </p>
          <p>
            Since MECCHA CHAMELEON is currently a PC-only title, there is no
            cross-platform functionality to support. All players are already on
            the same platform: Windows via Steam.
          </p>
        </section>

        {/* Why No Crossplay Yet */}
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">
            Why No Crossplay Yet?
          </h2>
          <p className="mb-4">
            MECCHA CHAMELEON is developed by a solo developer (lemorion_1224)
            and is built on Valve&apos;s Source engine. The game is exclusive to
            PC Windows through Steam.
          </p>
          <p>
            Crossplay only becomes relevant when a game exists on more than one
            platform. With no console or mobile ports announced, crossplay is not
            currently applicable.
          </p>
        </section>

        {/* Future Possibilities */}
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">
            Future Possibilities
          </h2>
          <p className="mb-4">
            As of July 2026, there have been no official announcements regarding
            console ports or crossplay support. The game remains a PC Windows
            exclusive.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
            <p className="font-label-caps text-label-caps text-primary mb-2">
              Note
            </p>
            <p>
              If console versions are ever released, crossplay support would
              depend on platform-specific networking requirements and the
              developer&apos;s resources. Nothing has been confirmed.
            </p>
          </div>
        </section>

        {/* How to Play with Friends */}
        <section>
          <h2 className="font-headline-md text-lg text-on-surface mb-4">
            How to Play with Friends
          </h2>
          <p className="mb-4">
            Since everyone plays on the same platform (PC / Steam), connecting
            with friends is straightforward:
          </p>
          <ol className="list-decimal list-inside space-y-3 ml-2">
            <li>
              <strong className="text-on-surface">Add friends on Steam</strong>{" "}
              — Make sure you&apos;re Steam friends with the people you want to
              play with.
            </li>
            <li>
              <strong className="text-on-surface">
                Join a server or lobby
              </strong>{" "}
              — Use the in-game server browser to find the same server, or
              create a private lobby.
            </li>
            <li>
              <strong className="text-on-surface">
                Use Steam&apos;s &quot;Join Game&quot;
              </strong>{" "}
              — Right-click a friend&apos;s name in the Steam overlay and select
              &quot;Join Game&quot; if they&apos;re already in a match.
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
