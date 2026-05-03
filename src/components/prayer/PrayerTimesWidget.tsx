export function PrayerTimesWidget() {
    const prayers = [
      { name: 'Fajr', time: '5:12 AM' },
      { name: 'Dhuhr', time: '12:30 PM' },
      { name: 'Asr', time: '3:45 PM' },
      { name: 'Maghrib', time: '6:52 PM' },
      { name: 'Isha', time: '8:15 PM' },
    ];
  
    return (
      <div className="bg-white border border-stone-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-stone-900 mb-4">Prayer Times</h2>
        <div className="space-y-3">
          {prayers.map((p) => (
            <div key={p.name} className="flex justify-between items-center py-2 border-b border-stone-100 last:border-0">
              <span className="text-stone-600 text-sm">{p.name}</span>
              <span className="text-stone-900 font-medium text-sm">{p.time}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }