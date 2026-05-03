import Link from 'next/link';

const SURAHS = [
  { number: 1, name: 'Al-Fatihah', arabic: 'الفاتحة', verses: 7 },
  { number: 36, name: 'Ya-Sin', arabic: 'يس', verses: 83 },
  { number: 18, name: 'Al-Kahf', arabic: 'الكهف', verses: 110 },
  { number: 67, name: 'Al-Mulk', arabic: 'الملك', verses: 30 },
];

export function PopularSurahs() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-stone-900">Popular Surahs</h2>
        <Link href="/reader/1" className="text-sm text-emerald-600 hover:underline">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SURAHS.map((s) => (
          <Link
            key={s.number}
            href={`/reader/${s.number}`}
            className="bg-white border border-stone-200 rounded-2xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
              {s.number}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-stone-900">{s.name}</p>
              <p className="text-xs text-stone-500">{s.verses} verses</p>
            </div>
            <p className="text-xl text-stone-700 font-arabic">{s.arabic}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}