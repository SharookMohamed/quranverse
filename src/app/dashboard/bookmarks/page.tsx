'use client';
import Link from 'next/link';
import { Bookmark, Trash2 } from 'lucide-react';
import { useBookmarkStore } from '@/store/bookmarkStore';

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useBookmarkStore();
  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-emerald-600 text-xl">QuranVerse</Link>
        <Link href="/dashboard" className="text-stone-600 text-sm hover:text-emerald-600">← Dashboard</Link>
      </nav>
      <div className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <Bookmark className="w-8 h-8 text-emerald-600" />
          <div>
            <h1 className="text-3xl font-bold text-stone-900">My Bookmarks</h1>
            <p className="text-stone-500 text-sm">{bookmarks.length} saved verses</p>
          </div>
        </div>
        {bookmarks.length === 0 ? (
          <div className="text-center py-16">
            <Bookmark className="w-16 h-16 text-stone-200 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-stone-400 mb-2">No bookmarks yet</h2>
            <p className="text-stone-400 text-sm mb-6">Start reading and bookmark your favorite verses</p>
            <Link href="/reader/1" className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors">Start Reading</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookmarks.map((b) => (
              <div key={`${b.surahNumber}-${b.ayahNumber}`} className="bg-white border border-stone-200 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-stone-900">Surah {b.surahNumber}, Ayah {b.ayahNumber}</p>
                  {b.note && <p className="text-sm text-stone-500 mt-1">{b.note}</p>}
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/reader/${b.surahNumber}?ayah=${b.ayahNumber}`} className="text-sm text-emerald-600 hover:underline">Read</Link>
                  <button onClick={() => removeBookmark(b.surahNumber, b.ayahNumber)}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-400 hover:text-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
