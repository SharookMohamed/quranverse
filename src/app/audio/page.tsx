'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Play, Pause } from 'lucide-react';

const RECITERS = [
  { id: 'ar.alafasy', name: 'Mishary Alafasy', style: 'Murattal', country: 'Kuwait' },
  { id: 'ar.abdurrahmaansudais', name: 'Abdul Rahman Al-Sudais', style: 'Murattal', country: 'Saudi Arabia' },
  { id: 'ar.shaatree', name: 'Abu Bakr Al-Shatri', style: 'Murattal', country: 'Saudi Arabia' },
  { id: 'ar.hanirifai', name: 'Hani Rifai', style: 'Murattal', country: 'Saudi Arabia' },
];

const POPULAR_SURAHS = [
  { number: 1, name: 'Al-Fatihah', verses: 7 },
  { number: 36, name: 'Ya-Sin', verses: 83 },
  { number: 18, name: 'Al-Kahf', verses: 110 },
  { number: 55, name: 'Ar-Rahman', verses: 78 },
  { number: 67, name: 'Al-Mulk', verses: 30 },
  { number: 112, name: 'Al-Ikhlas', verses: 4 },
];

export default function AudioPage() {
  const [selectedReciter, setSelectedReciter] = useState(RECITERS[0]);
  const [playing, setPlaying] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-emerald-600 text-xl">QuranVerse</Link>
        <Link href="/reader/1" className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-xl">Start Reading</Link>
      </nav>
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Audio Recitations</h1>
        <p className="text-stone-500 mb-8">Listen to beautiful Quran recitations</p>
        <h2 className="text-lg font-semibold text-stone-900 mb-4">Choose Reciter</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {RECITERS.map((r) => (
            <button key={r.id} onClick={() => setSelectedReciter(r)}
              className={`p-4 rounded-2xl border text-left transition-all ${selectedReciter.id === r.id ? 'border-emerald-400 bg-emerald-50' : 'border-stone-200 bg-white hover:border-emerald-200'}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm flex-shrink-0">{r.name[0]}</div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">{r.name}</p>
                  <p className="text-xs text-stone-500">{r.country} · {r.style}</p>
                </div>
                {selectedReciter.id === r.id && <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500" />}
              </div>
            </button>
          ))}
        </div>
        <h2 className="text-lg font-semibold text-stone-900 mb-4">Popular Surahs</h2>
        <div className="space-y-3">
          {POPULAR_SURAHS.map((s) => (
            <div key={s.number} className="bg-white border border-stone-200 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold text-sm flex-shrink-0">{s.number}</div>
              <div className="flex-1">
                <p className="font-semibold text-stone-900">{s.name}</p>
                <p className="text-xs text-stone-500">{s.verses} verses · {selectedReciter.name}</p>
              </div>
              <button onClick={() => setPlaying(playing === s.number ? null : s.number)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${playing === s.number ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'}`}>
                {playing === s.number ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
