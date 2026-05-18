import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">📖</span>
        </div>
        <h1 className="text-6xl font-bold text-emerald-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Page Not Found</h2>
        <p className="text-stone-500 mb-8 max-w-sm mx-auto">The page you are looking for does not exist.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors">Go Home</Link>
          <Link href="/reader/1" className="bg-white hover:bg-stone-50 text-stone-700 font-medium px-6 py-2.5 rounded-xl border border-stone-200 transition-colors">Start Reading</Link>
        </div>
      </div>
    </div>
  );
}
