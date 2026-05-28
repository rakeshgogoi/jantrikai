import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MessageSquareText,
  Languages,
  BookOpen,
  Gamepad2,
  Receipt,
  Mic,
  ImageDown,
  ArrowRight,
  BookOpenCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jantra Bot - AI on WhatsApp in 10 Indian languages',
  description:
    'Jantra Bot is a WhatsApp AI assistant in 10 Indian languages plus English. Ask anything, translate, look up words, play language games - no app to install.',
  alternates: { canonical: '/bot/' },
  openGraph: {
    title: 'Jantra Bot - AI on WhatsApp in 10 Indian languages',
    description:
      'A WhatsApp AI assistant fluent in 10 Indian languages and English. Translate, chat, learn, play.',
    url: '/bot/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jantra Bot - AI on WhatsApp',
    description:
      'A WhatsApp AI assistant fluent in 10 Indian languages and English.',
  },
};

const features = [
  {
    icon: MessageSquareText,
    title: 'Assistant',
    body: 'Ask anything - facts, advice, summaries, drafts. Replies in your chosen language; pulls live information from the web when needed.',
  },
  {
    icon: BookOpen,
    title: 'Dictionary',
    body: 'Send a word, get its meaning, pronunciation, and an example sentence - explained in your language.',
  },
  {
    icon: Languages,
    title: 'Translator',
    body: 'Send any text; receive it translated into the language you picked. Works across Indic scripts and Roman forms.',
  },
  {
    icon: Receipt,
    title: 'Accounts',
    body: 'Track your everyday spending and payments by chatting with Jantra in your language.',
  },
  {
    icon: Gamepad2,
    title: 'Play',
    body: 'Hangman, quizzes, riddles, and word games - all running in your chosen language right inside WhatsApp.',
  },
  {
    icon: Mic,
    title: 'Voice notes',
    body: 'Send a voice note in your language; Jantra transcribes and replies. No typing required.',
  },
];

const supportedLanguages = [
  { code: 'asm', label: 'অসমীয়া', en: 'Assamese' },
  { code: 'ben', label: 'বাংলা', en: 'Bengali' },
  { code: 'hin', label: 'हिन्दी', en: 'Hindi' },
  { code: 'kan', label: 'ಕನ್ನಡ', en: 'Kannada' },
  { code: 'tam', label: 'தமிழ்', en: 'Tamil' },
  { code: 'odi', label: 'ଓଡ଼ିଆ', en: 'Odia' },
  { code: 'mal', label: 'മലയാളം', en: 'Malayalam' },
  { code: 'eng', label: 'English', en: 'English' },
  { code: 'kan_r', label: 'Kannada (Roman)', en: 'Kannada in Roman script' },
  { code: 'hin_r', label: 'Hindi (Roman)', en: 'Hindi in Roman script' },
];

export default function JantraBotPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="container-page section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">
              <MessageSquareText className="h-3.5 w-3.5" aria-hidden />
              On WhatsApp · No app to install
            </span>
            <h1 className="heading-display mt-5">Jantra Bot</h1>
            <p className="prose-lead mt-5">
              An AI assistant that lives inside WhatsApp - fluent in 10 Indian
              languages and Indic-Roman variants. Ask anything, translate, look up
              words, play games, send voice notes. All inside the chat app you
              already use every day.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://jantrabot.codingryder.com"
                className="btn-primary"
              >
                Open Jantra Bot
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link href="/bot/guide/" className="btn-secondary">
                <BookOpenCheck className="h-4 w-4" aria-hidden />
                Read the user guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modes */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section">Five modes inside one number.</h2>
            <p className="prose-lead mt-4">
              Switch any time with{' '}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">/mode</code>{' '}
              or the in-chat menu.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <f.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section">Pick your language - once.</h2>
            <p className="prose-lead mt-4">
              On first chat, Jantra Bot asks you to choose a language. Every reply
              after that - including help text and menus - comes back in it.
            </p>
          </div>

          <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {supportedLanguages.map((l) => (
              <li
                key={l.code}
                title={l.en}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm"
              >
                <div className="text-base font-semibold text-slate-900">{l.label}</div>
                <div className="mt-0.5 text-xs text-slate-500">{l.en}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-section text-center">Getting started takes 10 seconds.</h2>
            <ol className="mt-10 space-y-6">
              {[
                { n: 1, t: 'Save the number', d: 'Add Jantra Bot to your contacts and open WhatsApp.' },
                { n: 2, t: 'Send "Hi"', d: 'You\'ll be shown a language picker - choose your preferred language.' },
                { n: 3, t: 'Ask anything', d: 'Type, speak a voice note, or pick a mode like Translator or Dictionary.' },
              ].map((s) => (
                <li key={s.n} className="flex items-start gap-5">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-emerald-600 text-base font-semibold text-white">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{s.t}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://jantrabot.codingryder.com"
                className="btn-primary"
              >
                Start a chat
                <ImageDown className="h-4 w-4 rotate-180" aria-hidden />
              </a>
              <Link href="/bot/guide/" className="btn-secondary">
                <BookOpenCheck className="h-4 w-4" aria-hidden />
                Read the user guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
