import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import {
  Globe2,
  MessageSquareText,
  Globe,
  Languages,
  Shield,
  Sparkles,
  Mic,
  FileText,
} from 'lucide-react';

const capabilities = [
  {
    icon: Languages,
    title: '19 languages',
    body: '11 Indian regional languages - Hindi, Assamese, Bengali, Tamil, Kannada, Telugu, Malayalam, Marathi, Punjabi, Gujarati, Odia - plus 8 international.',
  },
  {
    icon: Mic,
    title: 'Voice in your language',
    body: 'Speech recognition and text-to-speech tuned for Indic languages. Speak naturally, listen back in your tongue.',
  },
  {
    icon: FileText,
    title: 'Documents, scans, OCR',
    body: 'Translate documents, parse bank statements into CSV, and digitise handwritten Indic-script pages.',
  },
  {
    icon: Shield,
    title: 'Built for trust',
    body: 'Identity tied to phone or email. Data follows you across devices. Designed for everyday users, not just techies.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Products */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section">Three products. One language-first ecosystem.</h2>
            <p className="prose-lead mt-4">
              Whichever surface you prefer - a browser tab, WhatsApp in India, or
              WhatsApp for the wider world - Jantrik AI meets you in your language.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            <ProductCard
              name="Jantra Web"
              tagline="A full multilingual AI workspace"
              description="Chat, translate, dictionary, language games, bank-statement scanning, and handwriting OCR - all in 19 languages, in your browser."
              href="/web/"
              icon={Globe2}
              accent="indigo"
            />
            <ProductCard
              name="Jantra Bot"
              tagline="AI on WhatsApp, in your language"
              description="Ask anything, translate, look up word meanings, play language games - directly inside WhatsApp. No app to install."
              href="/bot/"
              icon={MessageSquareText}
              accent="emerald"
            />
            <ProductCard
              name="Jantra World"
              tagline="Jantra Bot, for the world"
              description="A WhatsApp AI assistant for international users - chat, translate, and get things done in your language, right inside WhatsApp."
              href="/world/"
              icon={Globe}
              accent="sky"
              badge="New"
            />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="badge">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Platform capabilities
            </span>
            <h2 className="heading-section mt-4">
              Designed for the languages people actually speak.
            </h2>
            <p className="prose-lead mt-4">
              Most AI products were built English-first and translated outward.
              Jantrik AI is built language-first - Indic scripts, romanised forms,
              code-mixed inputs, and voice are all first-class citizens.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <c.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 p-10 text-white shadow-lg sm:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Start in your language. Today.
              </h2>
              <p className="mt-4 text-base text-brand-100 sm:text-lg">
                Pick the surface that fits how you work - and meet AI in a language
                you actually think in.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://jantraweb.codingryder.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-brand-700 transition hover:bg-brand-50"
                >
                  Open Jantra Web
                </a>
                <a
                  href="https://jantrabot.codingryder.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Open Jantra Bot
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
