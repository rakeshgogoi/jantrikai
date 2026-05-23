import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MessageCircle,
  Languages,
  BookOpen,
  Gamepad2,
  Receipt,
  PenLine,
  Mic,
  Volume2,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jantra Web — Multilingual AI workspace in 19 languages',
  description:
    'A browser-based multilingual AI assistant. Chat, translate, scan bank statements, digitise handwritten Indic pages, and play language games — across 19 languages.',
  alternates: { canonical: '/web/' },
  openGraph: {
    title: 'Jantra Web — Multilingual AI workspace in 19 languages',
    description:
      'Chat, translate, scan statements, and digitise handwritten Indic pages in your language.',
    url: '/web/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jantra Web — Multilingual AI workspace',
    description:
      'Chat, translate, scan statements, and digitise handwritten Indic pages in your language.',
  },
};

const modes = [
  {
    icon: MessageCircle,
    title: 'Chat',
    body: 'General-purpose AI assistant. Ask anything in any of the 19 supported languages and get a reply in the same language.',
  },
  {
    icon: Languages,
    title: 'Translate',
    body: 'Translate text or whole documents between any two supported languages — including long-form PDFs and Word files.',
  },
  {
    icon: BookOpen,
    title: 'Dictionary',
    body: 'Word meanings, pronunciations, and example usages — explained in your chosen language.',
  },
  {
    icon: Gamepad2,
    title: 'Play',
    body: 'Hangman, quizzes, riddles, and word puzzles in your language. On-demand hints. Fast 5–15 second rounds.',
  },
  {
    icon: Receipt,
    title: 'Accounts',
    body: 'Upload a bank statement, UPI screenshot, or card statement. Jantra extracts each transaction and exports as CSV.',
  },
  {
    icon: PenLine,
    title: 'Handwriting OCR',
    body: 'Digitise handwritten pages in Indic scripts. Photograph, upload, and edit the OCR output with Roman → Indic typing.',
  },
];

const tiers = [
  {
    name: 'Rookie',
    price: 'Free',
    cadence: '',
    features: ['20 chats / day', '500 chars per translation', '10 lifetime statement scans'],
  },
  {
    name: 'Seasoned',
    price: '₹99',
    cadence: '/ month',
    features: [
      '100 chats / day',
      '3,000 chars + 5 docs / day',
      '10 statement scans / day',
      'Voice TTS',
      '7-day free trial',
    ],
    highlighted: true,
  },
  {
    name: 'Maestro',
    price: '₹199',
    cadence: '/ month',
    features: ['Unlimited chats', 'Unlimited translations', 'Unlimited scans', 'Voice TTS', '7-day free trial'],
  },
];

export default function JantraWebPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-page section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">
              <Languages className="h-3.5 w-3.5" aria-hidden />
              19 languages · 6 modes
            </span>
            <h1 className="heading-display mt-5">Jantra Web</h1>
            <p className="prose-lead mt-5">
              A multilingual AI workspace in your browser. Chat, translate, look up
              words, play language games, scan financial statements, and digitise
              handwritten regional-script pages — all in your own language.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://jantraweb.codingryder.com"
                className="btn-primary"
              >
                Open Jantra Web
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link href="/" className="btn-secondary">
                Back to Jantrik AI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modes */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section">Six modes. One conversation history per mode.</h2>
            <p className="prose-lead mt-4">
              Each mode is purpose-built and keeps its own thread. Switch between
              them anytime from the sidebar.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modes.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-brand-200 hover:shadow-md"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <m.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{m.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice & accessibility */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="heading-section">Voice that knows Indic phonetics.</h2>
              <p className="prose-lead mt-4">
                Speak naturally in any of the 11 Indian languages or English, and
                listen to Jantra read replies aloud in your tongue. Powered by
                Sarvam AI&apos;s Indic-language speech stack.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <Mic className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                  Speech input across 11 Indian languages + English.
                </li>
                <li className="flex items-start gap-3">
                  <Volume2 className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                  Read-aloud (TTS) on Seasoned and Maestro tiers, 10 languages supported.
                </li>
                <li className="flex items-start gap-3">
                  <PenLine className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                  Script-aware rendering — proper Bengali, Assamese, and other
                  Indic fonts loaded so glyphs render correctly.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-1 shadow-lg">
              <div className="rounded-[20px] bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  Powered by
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li>
                    <span className="font-medium text-slate-900">Google Gemini</span>{' '}
                    — 2.5 Pro for OCR, 2.5 Flash elsewhere
                  </li>
                  <li>
                    <span className="font-medium text-slate-900">Sarvam AI</span>{' '}
                    — saarika:v2 speech recognition, Bulbul v3 text-to-speech
                  </li>
                  <li>
                    <span className="font-medium text-slate-900">Next.js + FastAPI</span>{' '}
                    — Web app, Python backend, PostgreSQL data
                  </li>
                  <li>
                    <span className="font-medium text-slate-900">pgvector</span>{' '}
                    — Embeddings and semantic search on PostgreSQL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section">Plans for everyday users.</h2>
            <p className="prose-lead mt-4">
              Start free. Upgrade when you need more. Student discount available at
              checkout; lifetime plans available too.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={
                  t.highlighted
                    ? 'rounded-2xl border-2 border-brand-600 bg-white p-8 shadow-lg ring-1 ring-brand-100'
                    : 'rounded-2xl border border-slate-200 bg-white p-8 shadow-sm'
                }
              >
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight text-slate-900">
                    {t.price}
                  </span>
                  <span className="text-sm text-slate-500">{t.cadence}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-slate-700">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://jantraweb.codingryder.com"
                  className={
                    t.highlighted
                      ? 'mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-700'
                      : 'mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50'
                  }
                >
                  Get started
                </a>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            Credit packs available: Starter (200 credits / ₹29), Value (500 credits / ₹49).
          </p>
        </div>
      </section>
    </>
  );
}
