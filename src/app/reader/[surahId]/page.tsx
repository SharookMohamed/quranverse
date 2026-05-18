import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getSurah(surahId: string) {
  try {
    const res = await fetch(
      `https://api.alquran.cloud/v1/surah/${surahId}/editions/quran-uthmani,en.sahih`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.data;
  } catch {
    return null;
  }
}

export default async function ReaderPage({ params }: { params: Promise<{ surahId: string }> }) {
  const { surahId } = await params;
  const id = parseInt(surahId);
  if (isNaN(id) || id < 1 || id > 114) notFound();

  const surahData = await getSurah(surahId);
  if (!surahData) notFound();

  const arabic = surahData[0];
  const translation = surahData[1];

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-emerald-600 text-xl">QuranVerse</Link>
        <span className="text-stone-600 text-sm">{arabic.englishName}</span>
      </nav>
      <div className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-stone-900">{arabic.englishName}</h1>
          <p className="text-stone-500 mt-1">{arabic.numberOfAyahs} verses</p>
        </div>
        <div className="space-y-6">
          {arabic.ayahs.map((ayah: {number: number; numberInSurah: number; text: string}, i: number) => (
            <div key={ayah.number} className="bg-white border border-stone-200 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">
                  {ayah.numberInSurah}
                </div>
              </div>
              <p className="text-right text-2xl leading-loose text-stone-900 mb-4" style={{fontFamily: 'serif'}}>
                {ayah.text}
              </p>
              <p className="text-stone-500 text-sm leading-relaxed">
                {translation.ayahs[i]?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
