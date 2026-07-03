import type { Metadata } from 'next';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  Globe,
  BookOpen,
  Layers,
  CheckCircle2,
  ListChecks,
  MessageSquareText,
  Languages,
  Mic,
  Terminal,
  Lightbulb,
  HelpCircle,
  Cpu,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import GuideTOC, { type TocItem } from '@/components/GuideTOC';
import FAQItem from '@/components/FAQItem';

const ACCENT = 'sky' as const;

export const metadata: Metadata = {
  title: 'Jantra World User Guide - AI on WhatsApp for international users',
  description:
    'The complete Jantra World user guide: getting started, features, languages, commands, FAQs, and technical specifications. On WhatsApp, in your language.',
  alternates: { canonical: '/world/guide/' },
  openGraph: {
    title: 'Jantra World User Guide',
    description:
      'Chat, translate, and get things done on WhatsApp, in your language - the international sibling of Jantra Bot.',
    url: '/world/guide/',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jantra World User Guide',
    description:
      'Chat, translate, and get things done on WhatsApp, in your language.',
  },
};

const toc: TocItem[] = [
  { n: 1, id: 'introduction', title: 'Introduction', sub: "What Jantra World is and who it's for" },
  { n: 2, id: 'key-features', title: 'Key Features', sub: 'Core capabilities at a glance' },
  { n: 3, id: 'getting-started', title: 'Getting Started', sub: 'From save-the-number to first reply' },
  { n: 4, id: 'assistant', title: 'Assistant', sub: 'Chat, brainstorm, draft, summarise' },
  { n: 5, id: 'translate', title: 'Translate & Explain', sub: 'Cross-language help mid-thread' },
  { n: 6, id: 'voice', title: 'Voice Notes', sub: 'Speak, listen, keep moving' },
  { n: 7, id: 'languages', title: 'Languages', sub: 'Supported today and on the roadmap' },
  { n: 8, id: 'commands', title: 'Commands Reference', sub: 'Shortcut commands explained' },
  { n: 9, id: 'tips', title: 'Tips & Tricks', sub: 'Power-user advice' },
  { n: 10, id: 'faqs', title: 'FAQs', sub: 'Frequently asked questions' },
  { n: 11, id: 'specs', title: 'Technical Specifications', sub: 'Architecture & data handling' },
  { n: 12, id: 'contact', title: 'Contact & Feedback', sub: 'How to reach us' },
];

const heroStats = [
  { label: 'Platform', value: 'WhatsApp' },
  { label: 'Languages', value: '9+' },
  { label: 'App to install', value: 'None' },
  { label: 'Price', value: 'Free' },
];

const audiences = [
  {
    label: 'International users',
    body:
      'Anyone outside India who wants a capable AI assistant without downloading yet another app - Jantra World lives inside the WhatsApp thread you already have open.',
  },
  {
    label: 'Multilingual chatters',
    body:
      'People who write in more than one language a day. Reply in whichever language fits and Jantra World follows along without settings.',
  },
  {
    label: 'Voice-first users',
    body: 'Send a voice note in your language and get a text or spoken reply. Convenient while cooking, walking, or driving.',
  },
  {
    label: 'Travellers & expats',
    body:
      "Translate quick messages, look up meanings, get a short cultural explanation - without switching between apps or tabs.",
  },
  {
    label: 'Curious first-timers',
    body: 'People who have never used a standalone AI app before. WhatsApp is already familiar - Jantra World fits into that habit.',
  },
];

const features = [
  {
    icon: MessageSquareText,
    title: 'Assistant',
    body:
      'Chat, brainstorm, draft messages, or summarise a document. Free-form questions get direct, plain-language answers.',
  },
  {
    icon: Languages,
    title: 'Translate & Explain',
    body:
      'Translate messages between supported languages, look up word meanings, and get short explanations for unfamiliar terms.',
  },
  {
    icon: Mic,
    title: 'Voice Notes',
    body:
      'Send a WhatsApp voice note in your language. Jantra World transcribes, replies, and can send audio back where supported.',
  },
  {
    icon: Globe,
    title: 'International languages',
    body:
      'English plus a growing set of international languages tuned for the regions we ship in. Roadmap continues to expand.',
  },
  {
    icon: Terminal,
    title: 'Simple commands',
    body:
      'Optional slash commands - change language, reset context, show help. Most sessions never need them.',
  },
  {
    icon: CheckCircle2,
    title: 'Zero-install',
    body:
      'No download, no login, no account creation. Save the number, send a message, get a reply.',
  },
];

const gettingStarted = [
  {
    step: 'Step 1',
    title: 'Open the link',
    body: 'Open world.jantrikai.com - it launches a WhatsApp chat with Jantra World. If you have used it before, just reopen the chat.',
  },
  {
    step: 'Step 2',
    title: 'Save the contact',
    body: 'Save the number to your phone book so future WhatsApp threads recognise it as a saved contact.',
  },
  {
    step: 'Step 3',
    title: 'Say hi',
    body: 'Send any message in the language you naturally write in. Jantra World replies in that language.',
  },
  {
    step: 'Step 4',
    title: 'Try a voice note',
    body: 'Long-press the WhatsApp mic to send a voice note. Jantra World transcribes and replies.',
  },
  {
    step: 'Step 5',
    title: 'Change language anytime',
    body: 'Just start writing in a different language. Or use /lang to change the reply language explicitly.',
  },
];

const assistantExamples = [
  { q: 'Draft a polite email declining an invitation.', a: 'Returns a short, polite draft ready to copy-paste.' },
  { q: 'Summarise this news article in three bullets.', a: 'Extracts the core points; ask a follow-up for detail.' },
  { q: 'Explain what a hash function does in simple words.', a: 'Plain-language explanation, no jargon dump.' },
  { q: 'What are three ideas for a birthday message to my sister?', a: 'Returns three options in your language.' },
];

const translateExamples = [
  { q: 'Translate "How much does this cost?" to Japanese.', a: 'Returns the phrase plus a short romanised guide.' },
  { q: 'What does "quiproquo" mean in French?', a: 'Short dictionary-style definition with example use.' },
  { q: 'Convert this Spanish paragraph to English, keep it casual.', a: 'Preserves tone; asks if you want a formal alternative.' },
];

const commands = [
  { cmd: '/lang', does: 'Change the reply language explicitly.' },
  { cmd: '/reset', does: 'Clear the current conversation context.' },
  { cmd: '/help', does: 'Show the in-app help cheatsheet.' },
  { cmd: '/menu', does: 'Show the main menu (where enabled).' },
];

const tips = [
  { title: 'Write like you would to a friend', body: 'Jantra World is tuned for casual conversation - short questions, follow-ups, and code-mixed replies all work.' },
  { title: 'Use voice notes for long inputs', body: 'When you have a lot to say, a voice note is faster than typing on a phone keyboard.' },
  { title: 'Switch languages naturally', body: 'You do not need to announce a language change. Just reply in the language you want and Jantra World will match.' },
  { title: 'Ask for the format you want', body: 'Say "in three bullets" or "as a short paragraph" - Jantra World will follow the instruction.' },
  { title: 'Reset when the thread drifts', body: 'If a long conversation wanders off-topic, send /reset to start fresh.' },
  { title: 'Save the contact', body: 'Once the number is in your contacts, WhatsApp will show it in search - much faster than reopening a link.' },
];

const faqs = [
  { q: 'Is Jantra World free?', a: 'Yes. Jantra World is currently free while in beta. Standard WhatsApp data charges may apply.' },
  { q: 'Do I need to install an app?', a: 'No. If you already use WhatsApp, you already have everything you need.' },
  { q: 'Which languages are supported?', a: 'English and a growing set of international languages - see the Languages section for the current list. More languages are on the roadmap.' },
  { q: 'How is Jantra World different from Jantra Bot?', a: 'Same product family, different centre of gravity. Jantra Bot is India-first with 11 Indian languages. Jantra World is a dedicated WhatsApp number for international users, tuned for the regions we ship in.' },
  { q: 'Do you use my messages to train AI?', a: 'No. We do not use your content to train AI models. See the Privacy Policy for full details.' },
  { q: 'Can I send images or documents?', a: 'Feature availability evolves quickly - try it and Jantra World will tell you what it can do today.' },
  { q: 'What happens if I stop replying?', a: 'Nothing. Jantra World waits. Come back anytime and pick up where you left off, or send /reset to start fresh.' },
];

const specs = [
  { k: 'Platform', v: 'WhatsApp Cloud API (Meta)' },
  { k: 'AI / Language Model', v: 'A large language model, provider abstracted' },
  { k: 'Backend Framework', v: 'Python · FastAPI · async dispatcher' },
  { k: 'Database', v: 'PostgreSQL on Neon (serverless)' },
  { k: 'Hosting', v: 'Render (cloud deployment, always-on)' },
  { k: 'Voice', v: 'STT + TTS via managed providers' },
  { k: 'Identity', v: 'WhatsApp phone number - no separate account' },
  { k: 'Data retention', v: 'Recent conversation context for continuity; details in the Privacy Policy' },
  { k: 'Current Status', v: 'Beta - actively developed by Coding Ryder' },
];

export default function JantraWorldGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50/70 via-sky-50/20 to-white">
        <div className="container-page py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              Complete user guide
            </span>
            <h1 className="heading-display mt-5">Jantra World - User Guide</h1>
            <p className="prose-lead mt-5">
              WhatsApp AI for international users. Assistant · Translate · Voice · Languages.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="https://world.jantrikai.com" className="btn-primary">
                Try Jantra World
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link href="/world/" className="btn-secondary">
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Back to Jantra World
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-sky-100 bg-white/70 px-4 py-3 text-center shadow-sm backdrop-blur"
                >
                  <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">{s.label}</dt>
                  <dd className="mt-1 text-lg font-bold text-sky-700">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Two-column body */}
      <div className="container-page py-12 sm:py-16">
        <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-16">
          <GuideTOC items={toc} accent={ACCENT} />

          <article className="mt-10 min-w-0 space-y-20 lg:mt-0">
            {/* Section 1 — Introduction */}
            <section id="introduction" className="scroll-mt-24">
              <SectionHeading n={1} title="Introduction" icon={Globe} />
              <p className="prose-lead mt-6">
                Jantra World is a WhatsApp AI assistant for users beyond India - the international
                sibling of Jantra Bot. It lives inside a WhatsApp thread and answers in the
                language you write in. No app to install, no login, no new account.
              </p>
              <p className="mt-5 text-base leading-7 text-slate-700">
                Save the number at{' '}
                <a
                  href="https://world.jantrikai.com"
                  className="font-medium text-sky-700 hover:underline"
                >
                  world.jantrikai.com
                </a>{' '}
                and send a message to get started.
              </p>

              <h3 className="mt-10 text-xl font-bold text-slate-900">Who is it for?</h3>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {audiences.map((a) => (
                  <div
                    key={a.label}
                    className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-sm"
                  >
                    <h4 className="text-sm font-semibold text-sky-700">{a.label}</h4>
                    <p className="mt-1.5 text-sm leading-6 text-slate-700">{a.body}</p>
                  </div>
                ))}
              </div>

              <Callout kind="mission" title="Our mission">
                To make useful AI accessible in the languages people actually speak, on the
                platforms they already use - without gatekeeping, jargon, or extra apps.
              </Callout>
            </section>

            {/* Section 2 — Key Features */}
            <section id="key-features" className="scroll-mt-24">
              <SectionHeading n={2} title="Key Features" icon={Layers} />
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-md"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-100">
                      <f.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-900">{f.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{f.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 — Getting Started */}
            <section id="getting-started" className="scroll-mt-24">
              <SectionHeading n={3} title="Getting Started" icon={CheckCircle2} />
              <p className="mt-6 text-base text-slate-700">
                You can be using Jantra World in under a minute.
              </p>
              <ol className="mt-6 space-y-3">
                {gettingStarted.map((s, idx) => (
                  <li
                    key={s.step}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-sky-700">{s.step}</p>
                      <h3 className="mt-0.5 text-base font-semibold text-slate-900">{s.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-700">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a
                href="https://world.jantrikai.com"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                Try Jantra World
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </section>

            {/* Section 4 — Assistant */}
            <section id="assistant" className="scroll-mt-24">
              <SectionHeading n={4} title="Assistant" icon={MessageSquareText} />
              <p className="mt-6 text-base text-slate-700">
                The default surface. Ask anything - a question, a draft request, a summary,
                a brainstorm. Replies come back in your language, in plain phrasing.
              </p>

              <h3 className="mt-8 text-lg font-bold text-slate-900">Example asks</h3>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-sky-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-sky-900">Ask</th>
                      <th className="px-4 py-3 text-left font-semibold text-sky-900">What Jantra World does</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {assistantExamples.map((s) => (
                      <tr key={s.q} className="hover:bg-sky-50/40">
                        <td className="px-4 py-3 align-top font-medium text-slate-900">{s.q}</td>
                        <td className="px-4 py-3 text-slate-700">{s.a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Callout kind="tip" title="Ask for the format">
                &ldquo;in three bullets&rdquo;, &ldquo;as a short paragraph&rdquo;, &ldquo;polite tone&rdquo; -
                these instructions work and are followed.
              </Callout>
            </section>

            {/* Section 5 — Translate & Explain */}
            <section id="translate" className="scroll-mt-24">
              <SectionHeading n={5} title="Translate & Explain" icon={Languages} />
              <p className="mt-6 text-base text-slate-700">
                Cross-language help without leaving the chat thread. Translate a phrase or a
                paragraph, look up a word, or ask for a short explanation of a term.
              </p>

              <h3 className="mt-8 text-lg font-bold text-slate-900">Example asks</h3>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-sky-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-sky-900">Ask</th>
                      <th className="px-4 py-3 text-left font-semibold text-sky-900">What Jantra World does</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {translateExamples.map((s) => (
                      <tr key={s.q} className="hover:bg-sky-50/40">
                        <td className="px-4 py-3 align-top font-medium text-slate-900">{s.q}</td>
                        <td className="px-4 py-3 text-slate-700">{s.a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 — Voice */}
            <section id="voice" className="scroll-mt-24">
              <SectionHeading n={6} title="Voice Notes" icon={Mic} />
              <p className="mt-6 text-base text-slate-700">
                Send a WhatsApp voice note in the language you speak. Jantra World transcribes,
                answers, and where supported can send an audio reply back - useful when your hands
                are busy or a keyboard is slow.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Mic className="h-5 w-5 text-sky-600" aria-hidden />
                  <h3 className="mt-3 text-base font-bold text-slate-900">Speak your language</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Voice input is treated as first-class. No need to type on a small keyboard.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <MessageSquareText className="h-5 w-5 text-sky-600" aria-hidden />
                  <h3 className="mt-3 text-base font-bold text-slate-900">Text or audio back</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Replies default to text - ask for a voice reply where available.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Languages className="h-5 w-5 text-sky-600" aria-hidden />
                  <h3 className="mt-3 text-base font-bold text-slate-900">Cross-language</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Speak in one language, ask for a reply in another - handy for translation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 — Languages */}
            <section id="languages" className="scroll-mt-24">
              <SectionHeading n={7} title="Languages" icon={Globe} />
              <p className="mt-6 text-base text-slate-700">
                Jantra World is tuned for international users. English is the anchor; other
                languages are added as we ship into new regions. Just start writing in the
                language you prefer - no configuration needed.
              </p>

              <h3 className="mt-8 text-lg font-bold text-slate-900">Currently supported</h3>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  'English',
                  'Spanish',
                  'French',
                  'German',
                  'Portuguese',
                  'Arabic',
                  'Chinese',
                  'Japanese',
                  'Korean',
                ].map((c) => (
                  <div
                    key={c}
                    className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-inset ring-slate-200"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-sky-600" aria-hidden />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <Callout kind="note" title="Roadmap">
                Regional languages for South-East Asia and other markets are on the roadmap.
                Reach out at{' '}
                <a
                  href="mailto:connect@codingryder.com"
                  className="font-medium text-sky-700 hover:underline"
                >
                  connect@codingryder.com
                </a>{' '}
                to request a specific language.
              </Callout>
            </section>

            {/* Section 8 — Commands */}
            <section id="commands" className="scroll-mt-24">
              <SectionHeading n={8} title="Commands Reference" icon={Terminal} />
              <p className="mt-6 text-base text-slate-700">
                Most users never touch a command. These are optional shortcuts.
              </p>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-sky-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-sky-900">Command</th>
                      <th className="px-4 py-3 text-left font-semibold text-sky-900">What it does</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {commands.map((c) => (
                      <tr key={c.cmd} className="hover:bg-sky-50/40">
                        <td className="whitespace-nowrap px-4 py-3 align-top">
                          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">{c.cmd}</code>
                        </td>
                        <td className="px-4 py-3 text-slate-700">{c.does}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9 — Tips */}
            <section id="tips" className="scroll-mt-24">
              <SectionHeading n={9} title="Tips & Tricks" icon={Lightbulb} />
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {tips.map((t) => (
                  <div key={t.title} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="flex items-start gap-2 text-base font-semibold text-sky-700">
                      <Lightbulb className="mt-0.5 h-4 w-4 flex-none" aria-hidden />
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{t.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10 — FAQs */}
            <section id="faqs" className="scroll-mt-24">
              <SectionHeading n={10} title="Frequently Asked Questions" icon={HelpCircle} />
              <p className="mt-4 text-sm text-slate-600">Tap any question to expand the answer.</p>
              <div className="mt-6 space-y-3">
                {faqs.map((f) => (
                  <FAQItem key={f.q} q={f.q} a={f.a} accent={ACCENT} />
                ))}
              </div>
            </section>

            {/* Section 11 — Specs */}
            <section id="specs" className="scroll-mt-24">
              <SectionHeading n={11} title="Technical Specifications" icon={Cpu} />
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {specs.map((s) => (
                      <tr key={s.k} className="hover:bg-sky-50/40">
                        <td className="w-2/5 px-4 py-3 align-top font-semibold text-sky-700">{s.k}</td>
                        <td className="px-4 py-3 text-slate-700">{s.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 12 — Contact */}
            <section id="contact" className="scroll-mt-24">
              <SectionHeading n={12} title="Contact & Feedback" icon={PhoneCall} />
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ContactCard
                  label="Try Jantra World"
                  value="world.jantrikai.com"
                  sub="Opens a WhatsApp chat"
                  href="https://world.jantrikai.com"
                />
                <ContactCard
                  label="Feedback / Support"
                  value="connect@codingryder.com"
                  sub="Email us with feedback, bugs, or ideas"
                  href="mailto:connect@codingryder.com"
                />
                <ContactCard
                  label="Website"
                  value="codingryder.com"
                  sub="Product page, user guide, and updates"
                  href="https://codingryder.com"
                />
                <ContactCard
                  label="Jantrik AI"
                  value="jantrikai.com"
                  sub="The platform homepage for all Jantra products"
                  href="/"
                  internal
                />
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 p-8 text-center text-white shadow-md">
                <p className="text-xl font-bold">Ready to try it?</p>
                <a
                  href="https://world.jantrikai.com"
                  className="mt-3 inline-flex items-center gap-2 text-lg font-semibold underline decoration-2 underline-offset-4 hover:text-sky-50"
                >
                  Open world.jantrikai.com and say hi
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </a>
              </div>

              <p className="mt-8 text-center text-xs text-slate-500">
                © 2026 Coding Ryder · All rights reserved · Currently in Beta
                <br />
                Jantra World is part of the Jantrik AI product family
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}

function SectionHeading({
  n,
  title,
  icon: Icon,
}: {
  n: number;
  title: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-100">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        <span className="text-sky-600">{n}.</span> {title}
      </h2>
    </div>
  );
}

function Callout({
  kind,
  title,
  children,
}: {
  kind: 'note' | 'mission' | 'tip';
  title: string;
  children: React.ReactNode;
}) {
  const styles =
    kind === 'mission'
      ? 'border-sky-200 bg-gradient-to-br from-sky-50 to-white'
      : kind === 'tip'
      ? 'border-sky-200 bg-sky-50/60'
      : 'border-slate-200 bg-slate-50/80';
  const titleColor =
    kind === 'mission' ? 'text-sky-800' : kind === 'tip' ? 'text-sky-800' : 'text-slate-700';
  return (
    <aside className={`mt-8 rounded-2xl border ${styles} p-5`}>
      <p className={`text-xs font-semibold uppercase tracking-wider ${titleColor}`}>{title}</p>
      <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
    </aside>
  );
}

function ContactCard({
  label,
  value,
  sub,
  href,
  internal,
}: {
  label: string;
  value: string;
  sub: string;
  href: string;
  internal?: boolean;
}) {
  const className =
    'block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:bg-sky-50/50 hover:shadow-sm';
  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-2 text-base font-semibold text-sky-700">{value}</p>
      <p className="mt-1 text-sm text-slate-700">{sub}</p>
    </>
  );
  if (internal) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}
