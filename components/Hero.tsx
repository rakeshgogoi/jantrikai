import Link from 'next/link';
import { ArrowRight, Languages } from 'lucide-react';

// A small visual flourish: render the same word "Hello" in several scripts.
const helloVariants = [
  { label: 'নমস্কাৰ', lang: 'Assamese' },
  { label: 'नमस्ते', lang: 'Hindi' },
  { label: 'ನಮಸ್ಕಾರ', lang: 'Kannada' },
  { label: 'வணக்கம்', lang: 'Tamil' },
  { label: 'নমস্কার', lang: 'Bengali' },
  { label: 'നമസ്കാരം', lang: 'Malayalam' },
  { label: 'ନମସ୍କାର', lang: 'Odia' },
  { label: 'Hello', lang: 'English' },
  { label: 'Hola', lang: 'Spanish' },
  { label: 'Bonjour', lang: 'French' },
  { label: 'Hallo', lang: 'German' },
  { label: 'مرحبا', lang: 'Arabic' },
  { label: '你好', lang: 'Chinese' },
  { label: 'こんにちは', lang: 'Japanese' },
  { label: '안녕하세요', lang: 'Korean' },
  { label: 'Olá', lang: 'Portuguese' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-50 via-white to-white"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl"
      />

      <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex">
            <span className="badge">
              <Languages className="h-3.5 w-3.5" aria-hidden />
              19 languages · 3 products · 1 platform
            </span>
          </div>

          <h1 className="heading-display mt-6">
            AI that speaks{' '}
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              your language.
            </span>
          </h1>

          <p className="prose-lead mt-6">
            Jantrik AI is a multilingual AI platform built for India and the world.
            Chat, translate, transcribe, scan, and digitise - across 11 Indian
            languages and 8 international ones, on WhatsApp and the web.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/web/" className="btn-primary">
              Explore Jantra Web
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/bot/" className="btn-secondary">
              Try Jantra Bot on WhatsApp
            </Link>
          </div>
        </div>

        {/* Hello-in-many-scripts marquee */}
        <div className="mt-16 sm:mt-20">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">
            One platform, many tongues
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-2xl text-slate-700 sm:text-3xl">
            {helloVariants.map((v) => (
              <li
                key={v.lang}
                title={v.lang}
                className="font-medium transition hover:text-brand-700"
              >
                {v.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
