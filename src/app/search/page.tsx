'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

const SURAHS = [
  { number: 1, name: 'Al-Fatihah', arabic: 'الفاتحة', verses: 7 },
  { number: 2, name: 'Al-Baqarah', arabic: 'البقرة', verses: 286 },
  { number: 3, name: 'Ali Imran', arabic: 'آل عمران', verses: 200 },
  { number: 18, name: 'Al-Kahf', arabic: 'الكهف', verses: 110 },
  { number: 36, name: 'Ya-Sin', arabic: 'يس', verses: 83 },
  { number: 55, name: 'Ar-Rahman', arabic: 'الرحمن', verses: 78 },
  { number: 67, name: 'Al-Mulk', arabic: 'الملك', verses: 30 },
  { number: 112, name: 'Al-Ikhlas', arabic: 'الإخلاص', verses: 4 },
  { number: 113, name: 'Al-Falaq', arabic: 'الفلق', verses: 5 },
  { number: 114, name: 'An-Nas', arabic: 'الناس', verses: 6 },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const filtered = SURAHS.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.arabic.includes(query) ||
    String(s.number).includes(query)
  );
  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-emerald-600 text-xl">QuranVerse</Link>
        <Link href="/reader/1" className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-xl">Start Reading</Link>
      </nav>
      <div className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Search</h1>
        <p className="text-stone-500 mb-8">Search by Surah name or number</p>
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
          <input type="text" placeholder="Search surahs..." value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-stone-300 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white" />
        </div>
        <div className="space-y-3">
          {filtered.map((s) => (
            <Link key={s.number} href={`/reader/${s.number}`}
              className="bg-white border border-stone-200 rounded-2xl p-4 flex items-center gap-4 hover:border-emerald-300 hover:shadow-sm transition-all block">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 font-bold flex-shrink-0">{s.number}</div>
              <div className="flex-1">
                <p className="font-semibold text-stone-900">{s.name}</p>
                <p className="text-xs text-stone-500">{s.verses} verses</p>
              </div>
              <p className="text-2xl text-stone-700" style={{fontFamily: 'serif'}}>{s.arabic}</p>
            </Link>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-400">No results found for "{query}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
