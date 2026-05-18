import Link from 'next/link';
import { BookOpen, Bookmark, Headphones, Target } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-emerald-600 text-xl">QuranVerse</Link>
        <Link href="/reader/1" className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-xl">Continue Reading</Link>
      </nav>
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-900">Assalamu Alaikum 👋</h1>
          <p className="text-stone-500 mt-1">Track your Quran journey</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: BookOpen, label: 'Ayahs Read', value: '0' },
            { icon: Bookmark, label: 'Bookmarks', value: '0' },
            { icon: Headphones, label: 'Hours Listened', value: '0' },
            { icon: Target, label: 'Day Streak', value: '0' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-stone-200 rounded-2xl p-4">
              <p className="text-sm text-stone-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-stone-900">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold text-stone-900 mb-4">Reading Progress</h2>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-stone-600">Overall Progress</span>
            <span className="text-sm font-medium text-stone-900">0 / 6236 ayahs</span>
          </div>
          <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '0%' }} />
          </div>
          <div className="mt-4">
            <Link href="/reader/1" className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-colors inline-block">Start Reading</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/dashboard/bookmarks" className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-emerald-300 transition-all">
            <Bookmark className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-stone-900 mb-1">My Bookmarks</h3>
            <p className="text-sm text-stone-500">View all saved verses</p>
          </Link>
          <Link href="/audio" className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-emerald-300 transition-all">
            <Headphones className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-stone-900 mb-1">Audio Player</h3>
            <p className="text-sm text-stone-500">Listen to recitations</p>
          </Link>
          <Link href="/dashboard/settings" className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-emerald-300 transition-all">
            <Target className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-stone-900 mb-1">Settings</h3>
            <p className="text-sm text-stone-500">Customize your experience</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
