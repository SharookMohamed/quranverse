import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { AudioCTA } from '@/components/home/AudioCTA';
import { PopularSurahs } from '@/components/home/PopularSurahs';
import { PrayerTimesWidget } from '@/components/prayer/PrayerTimesWidget';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PopularSurahs />
          </div>
          <div>
            <PrayerTimesWidget />
          </div>
        </div>
        <AudioCTA />
      </main>
      <Footer />
    </div>
  );
}