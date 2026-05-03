import Link from 'next/link';

export function AudioCTA() {
  return (
    <div className="bg-emerald-600 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Immersive Audio Experience
        </h2>
        <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
          Crystal-clear recitations from world-renowned Qaris. Sync audio with verse highlighting for better memorization.
        </p>
        <Link href="/reader/1" className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-xl hover:bg-emerald-50 transition-colors inline-block">
          Try Audio Player
        </Link>
      </div>
    </div>
  );
}