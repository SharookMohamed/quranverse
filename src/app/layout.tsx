import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { QueryProvider } from '@/components/providers/QueryProvider';
import { Noto_Sans_Arabic } from 'next/font/google';  // ← import font
import './globals.css';

// ← configure font
const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-noto-arabic',   // CSS variable name
});

export const metadata: Metadata = {
  title: 'QuranVerse — Read, Listen, Understand Quran',
  description: 'Access the divine message with professional recitations and authentic translations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={notoSansArabic.variable}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}