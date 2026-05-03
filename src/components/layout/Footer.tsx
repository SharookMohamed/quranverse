import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="font-bold text-white text-lg">
                Quran<span className="text-emerald-400">Verse</span>
              </span>
            </div>
            <p className="text-sm text-stone-500 max-w-xs">
              Access the divine message with professional recitations and authentic translations.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-3 text-sm">Explore</h4>
            <div className="space-y-2">
              <Link href="/reader/1" className="block text-sm text-stone-500 hover:text-emerald-400 transition-colors">Reader</Link>
              <Link href="/audio" className="block text-sm text-stone-500 hover:text-emerald-400 transition-colors">Audio</Link>
              <Link href="/search" className="block text-sm text-stone-500 hover:text-emerald-400 transition-colors">Search</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 text-sm">Account</h4>
            <div className="space-y-2">
              <Link href="/auth/login" className="block text-sm text-stone-500 hover:text-emerald-400 transition-colors">Sign in</Link>
              <Link href="/auth/register" className="block text-sm text-stone-500 hover:text-emerald-400 transition-colors">Register</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 text-center">
          <p className="text-xs text-stone-600">© 2024 QuranVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}