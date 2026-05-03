import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="pt-24 pb-16 px-4 text-center bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
          The Noble Quran
        </span>
        <h1 className="text-5xl font-bold text-stone-900 mb-6 leading-tight">
          Read, Listen, Understand Quran in Every Language
        </h1>
        <p className="text-stone-500 text-lg mb-8 max-w-xl mx-auto">
          Access the divine message with professional recitations, authentic translations, and a tranquil reading experience.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/reader/1" className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-3 rounded-xl transition-colors">
            Start Reading
          </Link>
          <Link href="/audio" className="bg-white hover:bg-stone-50 text-stone-700 font-medium px-8 py-3 rounded-xl border border-stone-200 transition-colors">
            Listen Now
          </Link>
        </div>
      </div>
    </div>
  );
}