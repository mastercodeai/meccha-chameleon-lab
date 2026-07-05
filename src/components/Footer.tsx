import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-stack-lg px-4 md:px-gutter border-t border-outline-variant overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps text-on-surface mb-2">GUIDES</span>
          <Link href="/guides/beginner" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Beginner Guide</Link>
          <Link href="/guides/hider" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Hider Guide</Link>
          <Link href="/guides/seeker" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Seeker Guide</Link>
          <Link href="/guides/tips" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Tips & Tricks</Link>
          <Link href="/guides/controls" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Controls Guide</Link>
          <Link href="/guides/combos" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Combo Guide</Link>
          <Link href="/guides/videos" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Video Tutorials</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps text-on-surface mb-2">TOOLS</span>
          <Link href="/maps" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">All Maps</Link>
          <Link href="/tier-list" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Tier List</Link>
          <Link href="/workshop" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Workshop</Link>
          <Link href="/settings" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Settings Guide</Link>
          <Link href="/guides/paint" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Paint Guide</Link>
          <Link href="/guides/object-tiers" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Object Tiers</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps text-on-surface mb-2">INFO</span>
          <Link href="/price" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Price</Link>
          <Link href="/system-requirements" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">System Requirements</Link>
          <Link href="/crossplay" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Crossplay</Link>
          <Link href="/platforms/steam-deck" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Steam Deck</Link>
          <Link href="/update" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Update Log</Link>
          <Link href="/gallery" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Gallery</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps text-on-surface mb-2">LEGAL</span>
          <Link href="/privacy" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Privacy Policy</Link>
          <Link href="/terms" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Terms of Service</Link>
          <a href="https://discord.gg/eNFUDBSwag" target="_blank" rel="noopener noreferrer" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Discord</a>
          <a href="https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/" target="_blank" rel="noopener noreferrer" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Steam Store</a>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-8 pt-6 border-t border-outline-variant/50">
        <p className="font-body-sm text-body-sm text-on-surface-variant opacity-50">
          © {new Date().getFullYear()} MECCHA CHAMELEON LAB. Independent fan site. Not affiliated with lemorion_1224 or Valve.
        </p>
      </div>
    </footer>
  );
}
