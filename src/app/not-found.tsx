import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20 text-center">
      <h1 className="text-6xl font-black mb-4">🦎</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8">The page you\'re looking for doesn\'t exist or has been moved.</p>
      <Link href="/" className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-bold transition-colors">
        Back to Home
      </Link>
    </main>
  );
}