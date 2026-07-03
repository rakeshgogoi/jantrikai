import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe,
  MessageSquareText,
  Languages,
  Mic,
  Sparkles,
  Bell,
  Shield,
  ArrowRight,
  BookOpenCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jantra World - Jantra Bot, for the world',
  description:
    'Jantra World is a WhatsApp AI assistant for users beyond India - the international sibling of Jantra Bot. Chat, translate, and get things done in your language, right inside WhatsApp.',
  alternates: { canonical: '/world/' },
  openGraph: {
    title: 'Jantra World - Jantra Bot, for the world',
    description:
      'A WhatsApp AI assistant for users beyond India - chat, translate, and get things done in your language.',
    url: '/world/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jantra World - Jantra Bot, for the world',
    description:
      'A WhatsApp AI assistant for users beyond India, in your language.',
  },
};

const capabilities = [
  {
    icon: MessageSquareText,
    title: 'Assistant on WhatsApp',
    body: 'Ask anything, brainstorm, draft a reply, summarise a document - inside WhatsApp. No app to install, no new account to create.',
  },
  {
    icon: Languages,
    title: 'International languages',
    body: 'Reply in the language you write in. English, Portuguese, Spanish, Thai, Bahasa Indonesia, Korean, French, Vietnamese, Malay, German - with more languages on the roadmap.',
  },
  {
    icon: Mic,
    title: 'Voice notes welcome',
    body: 'Send a voice note in your language and get a written or spoken reply back - convenient on the go.',
  },
  {
    icon: Sparkles,
    title: 'Translate & explain',
    body: 'Translate messages, look up meanings, and get short explanations of unfamiliar terms - without leaving your chat thread.',
  },
  {
    icon: Bell,
    title: 'One number, always on',
    body: 'A single WhatsApp number handles chat, voice, and quick lookups. Saved contacts see it as an ordinary chat.',
  },
  {
    icon: Shield,
    title: 'Private by default',
    body: 'Your WhatsApp number is your identifier. We do not train models on your content, and history stays scoped to your chat.',
  },
];

export default function JantraWorldPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50/60 to-white">
        <div className="container-page section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">
              <Globe className="h-3.5 w-3.5" aria-hidden />
              On WhatsApp · International
            </span>
            <h1 className="heading-display mt-5">Jantra World</h1>
            <p className="prose-lead mt-5 !leading-7 sm:!leading-8">
              Jantra Bot, for the world. A WhatsApp AI assistant that meets
              international users in their language - chat, translate, look up,
              and get things done, right inside a WhatsApp thread.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://world.jantrikai.com"
                className="btn-primary"
              >
                Try Jantra World
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link href="/world/guide/" className="btn-secondary">
                <BookOpenCheck className="h-4 w-4" aria-hidden />
                Read the user guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section">Six everyday surfaces.</h2>
            <p className="prose-lead mt-4">
              Built for people who live on WhatsApp - plain language, your
              tongue, answers that fit on a phone screen.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-sky-300 hover:shadow-md"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  <c.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="heading-section">Made for how the world actually chats.</h2>
              <p className="prose-lead mt-4">
                Jantra World keeps the friction low. Save the number, send a
                message, get an answer. Reply in whichever language you write
                in - even mid-conversation - and Jantra World follows along.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-sky-600" />
                  Nothing to install - WhatsApp is the app.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-sky-600" />
                  Switch languages mid-thread without settings menus.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-sky-600" />
                  Voice notes and text are treated as equals.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                Sample interaction
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-2xl bg-slate-100 px-4 py-3 text-slate-800">
                  ¿Puedes traducir esto al inglés y hacer un resumen corto?
                </div>
                <div className="ml-6 rounded-2xl bg-sky-50 px-4 py-3 text-sky-900 ring-1 ring-inset ring-sky-100">
                  Claro - aquí está la traducción y un resumen de tres puntos.
                  ¿Quieres que lo mande como nota de voz también?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-section">Why a separate WhatsApp number?</h2>
            <p className="prose-lead mt-4">
              Jantra Bot is India-first. Jantra World is the same product family,
              expanded outward - a dedicated WhatsApp number for international
              users, with a language and voice mix tuned for the regions we ship
              in. Same simple product, different centre of gravity.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="https://world.jantrikai.com" className="btn-primary">
                Open Jantra World
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link href="/world/guide/" className="btn-secondary">
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
