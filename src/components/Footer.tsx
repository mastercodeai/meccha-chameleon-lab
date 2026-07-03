import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-stack-lg px-4 md:px-gutter border-t border-outline-variant">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="col-span-1 md:col-span-2">
          <div className="font-headline-md text-headline-md text-primary mb-4">MECCHA CHAMELEON LAB</div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-4">
            The ultimate tactical database for MECCHA CHAMELEON. Find the best hiding spots, workshop maps, and strategies.
          </p>
          <p className="font-label-caps text-label-caps text-on-surface-variant opacity-50">
            © 2026 MECCHA CHAMELEON LAB. Independent fan site. Not affiliated with lemorion_1224 or Valve.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps text-on-surface mb-2">DATABASE</span>
          <Link href="/maps" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Maps</Link>
          <Link href="/guides/beginner" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Beginner Guide</Link>
          <Link href="/guides/hider" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Hider Guide</Link>
          <Link href="/guides/seeker" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Seeker Guide</Link>
          <Link href="/workshop" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Workshop</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps text-on-surface mb-2">NETWORK</span>
          <a href="https://discord.gg/eNFUDBSwag" target="_blank" rel="noopener noreferrer" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Discord</a>
          <a href="https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/" target="_blank" rel="noopener noreferrer" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Steam Store</a>
          <Link href="/privacy" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Privacy Policy</Link>
          <Link href="/terms" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
