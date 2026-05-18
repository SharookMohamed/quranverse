'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  const [language, setLanguage] = useState('en');
  const [translation, setTranslation] = useState('en.sahih');
  const [reciter, setReciter] = useState('ar.alafasy');
  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-emerald-600 text-xl">QuranVerse</Link>
        <Link href="/dashboard" className="text-stone-600 text-sm hover:text-emerald-600">← Dashboard</Link>
      </nav>
      <div className="max-w-2xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Settings</h1>
        <p className="text-stone-500 mb-8">Customize your QuranVerse experience</p>
        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-stone-900 mb-4">Language & Translation</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-stone-700 block mb-1">Interface Language</label>
                <select value={language} onChange={(e) => setLanguage(e.target.value)}
                  className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                  <option value="fr">French</option>
                  <option value="ur">Urdu</option>
                  <option value="tr">Turkish</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-stone-700 block mb-1">Translation</label>
                <select value={translation} onChange={(e) => setTranslation(e.target.value)}
                  className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                  <option value="en.sahih">Saheeh International</option>
                  <option value="en.pickthall">Pickthall</option>
                  <option value="en.yusufali">Yusuf Ali</option>
                  <option value="ur.ahmedali">Ahmed Ali (Urdu)</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-stone-900 mb-4">Audio Settings</h2>
            <div>
              <label className="text-sm font-medium text-stone-700 block mb-1">Default Reciter</label>
              <select value={reciter} onChange={(e) => setReciter(e.target.value)}
                className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                <option value="ar.alafasy">Mishary Alafasy</option>
                <option value="ar.abdurrahmaansudais">Abdul Rahman Al-Sudais</option>
                <option value="ar.shaatree">Abu Bakr Al-Shatri</option>
                <option value="ar.hanirifai">Hani Rifai</option>
              </select>
            </div>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-stone-900 mb-4">Account</h2>
            <div className="space-y-3">
              <Link href="/auth/login" className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-xl transition-colors">Sign In</Link>
              <Link href="/auth/register" className="block w-full text-center bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium py-2.5 rounded-xl transition-colors">Create Account</Link>
            </div>
          </div>
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl transition-colors">Save Settings</button>
        </div>
      </div>
    </div>
  );
}
