export function FeaturesSection() {
    const features = [
      { icon: '📖', title: 'Multi-language Translations', desc: '50+ languages with authentic translations from trusted scholars.' },
      { icon: '🎧', title: 'Audio Recitations', desc: 'World-renowned Qaris with crystal-clear audio and verse highlighting.' },
      { icon: '🔖', title: 'Bookmarks', desc: 'Save your favorite verses and pick up where you left off.' },
      { icon: '📊', title: 'Reading Progress', desc: 'Track your journey and maintain your daily reading streak.' },
      { icon: '🕌', title: 'Prayer Times', desc: 'Accurate prayer times based on your location.' },
      { icon: '📝', title: 'Tafsir', desc: 'Deep commentary and explanation for every verse.' },
    ];
  
    return (
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-stone-900 mb-4">
            Everything you need
          </h2>
          <p className="text-center text-stone-500 mb-12 max-w-xl mx-auto">
            A complete Quran experience designed for the modern Muslim.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-stone-200 hover:border-emerald-200 hover:shadow-sm transition-all">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-stone-900 mb-2">{f.title}</h3>
                <p className="text-stone-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }