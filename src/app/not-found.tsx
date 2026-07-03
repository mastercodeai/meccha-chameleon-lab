import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="font-display-lg text-6xl text-primary mb-4">404</h1>
      <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Map Not Found</h2>
      <p className="font-body-main text-body-main text-on-surface-variant mb-8">
        This hiding spot doesn&apos;t exist. Try looking somewhere else.
      </p>
      <Link
        href="/"
        className="bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded shadow-[0_0_8px_rgba(75,226,119,0.4)] hover:brightness-110 transition-all"
      >
        BACK TO HOME
      </Link>
    </main>
  );
}
