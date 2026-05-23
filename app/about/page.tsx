import type { Metadata } from 'next';
import { Mail, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Jantrik AI — Built by Coding Ryder Enterprises',
  description:
    'Jantrik AI is built by Coding Ryder Enterprises to make AI accessible in the languages Indians actually speak. Learn about the team and our language-first principles.',
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'About Jantrik AI — Built by Coding Ryder Enterprises',
    description:
      'Language-first AI for India. Learn about the team behind Jantra Web, Jantra Bot, and Jantra Civic.',
    url: '/about/',
    type: 'website',
  },
};

const principles = [
  {
    title: 'Language-first, not English-first',
    body: 'Indic scripts, romanised forms, voice notes, and code-mixed inputs are first-class — not translated afterthoughts.',
  },
  {
    title: 'Meet people where they are',
    body: 'On WhatsApp, in a browser, or on a dedicated civic number — the same product family, reachable on whatever surface fits.',
  },
  {
    title: 'Useful before clever',
    body: 'Bank-statement scanning, government schemes, handwriting OCR. Real everyday tasks — not chatbot demos.',
  },
  {
    title: 'Honest about limits',
    body: 'We say so when we don\'t know. We point to the source when it matters. We explain trade-offs in plain language.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-page section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">About</span>
            <h1 className="heading-display mt-5">Bridging India&apos;s languages with AI.</h1>
            <p className="prose-lead mt-5">
              Jantrik AI is a product family from{' '}
              <a
                href="https://codingryder.com"
                className="font-medium text-brand-700 hover:underline"
              >
                Coding Ryder Enterprises
              </a>
              . We build AI tools that work in the languages people actually speak —
              across India and around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl space-y-6 text-slate-700">
            <p>
              Most AI products were designed English-first and translated outward.
              That works fine if English is how you think — but for the majority of
              India, the result feels foreign: stilted phrasing, lost nuance,
              missing scripts.
            </p>
            <p>
              Jantrik AI flips the default. Every product — Jantra Web in the
              browser, Jantra Bot on WhatsApp, Jantra Civic for government services
              — starts from the assumption that a user might think, type, or speak
              in Assamese, Hindi, Tamil, Bengali, or any of the 19 languages we
              support today. Indic scripts, romanised forms, voice notes, and
              code-mixed inputs are treated as the norm.
            </p>
            <p>
              We&apos;re a small team, and we&apos;d rather ship a few tools that
              genuinely help people get something done — drafting an email,
              finding the right government scheme, digitising a handwritten note —
              than chase every benchmark.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section">How we build.</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section">Get in touch.</h2>
            <p className="prose-lead mt-4">
              Partnerships, press, language requests, or just a hello — we&apos;d
              love to hear from you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:connect@codingryder.com" className="btn-primary">
                <Mail className="h-4 w-4" aria-hidden />
                connect@codingryder.com
              </a>
              <a href="https://codingryder.com" className="btn-secondary">
                <Globe className="h-4 w-4" aria-hidden />
                codingryder.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
