import type { Metadata } from 'next';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  MessageSquareText,
  BookOpen,
  Languages,
  Receipt,
  Gamepad2,
  Landmark,
  Mic,
  ImageIcon,
  Terminal,
  Lightbulb,
  Layers,
  HelpCircle,
  Cpu,
  User,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jantra Bot User Guide — Complete product documentation',
  description:
    'The complete Jantra Bot user guide: all six modes, 10 languages, voice and image support, commands, tips, use cases, FAQs, and technical specifications.',
  alternates: { canonical: '/bot/guide/' },
  openGraph: {
    title: 'Jantra Bot User Guide — Complete product documentation',
    description:
      'Every mode, command, language, and tip for using Jantra Bot inside WhatsApp.',
    url: '/bot/guide/',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jantra Bot User Guide',
    description:
      'Every mode, command, language, and tip for using Jantra Bot inside WhatsApp.',
  },
};

const toc = [
  { n: 1, id: 'introduction', title: 'Introduction', sub: "What Jantra Bot is and who it's for" },
  { n: 2, id: 'key-features', title: 'Key Features', sub: 'Eight core capabilities at a glance' },
  { n: 3, id: 'getting-started', title: 'Getting Started', sub: 'Up and running in 30 seconds' },
  { n: 4, id: 'modes', title: 'User Guide — Modes', sub: 'All six modes explained' },
  { n: 5, id: 'languages', title: 'Supported Languages', sub: '10 languages with scripts & codes' },
  { n: 6, id: 'voice', title: 'Voice Support', sub: 'Using voice notes with Jantra Bot' },
  { n: 7, id: 'images', title: 'Image Understanding', sub: 'Send a photo, get a description' },
  { n: 8, id: 'commands', title: 'Commands Reference', sub: 'Every slash command' },
  { n: 9, id: 'tips', title: 'Tips & Tricks', sub: 'Power-user advice' },
  { n: 10, id: 'use-cases', title: 'Use Cases', sub: 'Real-world scenarios' },
  { n: 11, id: 'faqs', title: 'FAQs', sub: 'Frequently asked questions' },
  { n: 12, id: 'specs', title: 'Technical Specifications', sub: 'Architecture & tech stack' },
  { n: 13, id: 'developer', title: 'About the Developer', sub: 'Rakesh Gogoi & Coding Ryder' },
  { n: 14, id: 'contact', title: 'Contact & Feedback', sub: 'How to reach us' },
];

const audiences = [
  {
    label: 'Learners & students',
    body:
      'Instant explanations, definitions, and study help — homework support in your own language without flipping a dictionary.',
  },
  {
    label: 'Working professionals',
    body:
      'Quick research, translations, draft emails, summarise documents, and AI-powered advice on the go — without leaving WhatsApp.',
  },
  {
    label: 'First-time AI users',
    body:
      'No tech skills needed. If you can send a WhatsApp message, you can use Jantra Bot. No login. No app store.',
  },
  {
    label: 'Regional language users',
    body:
      'Ask in Assamese, Kannada, Bengali, Tamil, Hindi, Odia, or Malayalam — or mix scripts freely. Replies come back in your chosen tongue.',
  },
  {
    label: 'Voice-first users',
    body:
      'Too tired to type? Just hold the mic in WhatsApp and speak — Jantra Bot transcribes Indian languages accurately and replies in text.',
  },
];

const features = [
  {
    icon: MessageSquareText,
    title: 'Universal AI Assistant',
    body:
      'Ask anything — general knowledge, science, history, advice, creative writing, coding help, and more. Jantra Bot handles open-ended conversations just like a knowledgeable friend would.',
  },
  {
    icon: Languages,
    title: '10 Languages',
    body:
      'Supports English, Hindi, Assamese, Kannada, Bengali, Tamil, Odia, Malayalam, Kanglish (romanised Kannada), and Hinglish (romanised Hindi). Switch anytime with a single command.',
  },
  {
    icon: CheckCircle2,
    title: 'WhatsApp Native',
    body:
      'Zero setup. No downloads, no logins, no separate app. Works directly inside the WhatsApp app on any smartphone — Android, iOS, or web.',
  },
  {
    icon: Layers,
    title: 'Context-Aware Memory',
    body:
      'Jantra Bot remembers your recent conversation in Assistant mode so follow-up questions always make sense, just like talking to a person. Clear it any time with /clear.',
  },
  {
    icon: Mic,
    title: 'Voice Note Support',
    body:
      'Send a voice note instead of typing. Jantra Bot transcribes it using Sarvam AI (purpose-built for Indian languages) and responds in your chosen language.',
  },
  {
    icon: ImageIcon,
    title: 'Image Understanding',
    body:
      "Send any photo — food, documents, street signs, plants, artwork — and Jantra Bot describes what it sees, in your language, powered by Google Gemini's vision AI.",
  },
  {
    icon: Receipt,
    title: 'Personal Accounts Mode',
    body:
      'Track income, expenses, and balances by chatting naturally. Export any time as CSV — no spreadsheets, no apps, just messages.',
  },
  {
    icon: Landmark,
    title: 'Jantra Civic Built-in',
    body:
      'Civic mode opens a dedicated sub-product: government schemes you qualify for, civic services, your representatives, and local alerts — covered fully in the Jantra Civic Guide.',
  },
];

const gettingStarted = [
  {
    step: 'Step 1',
    title: 'Open WhatsApp',
    body: 'Open WhatsApp on your phone (iOS or Android), or on WhatsApp Web / Desktop — no installation needed.',
  },
  {
    step: 'Step 2',
    title: 'Start a chat',
    body: 'Tap the link or save the number: wa.me/916361245647 (+91 63612 45647).',
  },
  {
    step: 'Step 3',
    title: 'Choose your language',
    body: 'Jantra Bot will greet you and ask you to pick your preferred language from a menu of 10 options.',
  },
  {
    step: 'Step 4',
    title: 'Pick a mode (optional)',
    body: 'Type /mode and pick one of: Assistant, Dictionary, Translator, Accounts, Play, or Civic. Defaults to Assistant if you skip this step.',
  },
  {
    step: 'Step 5',
    title: 'Start talking',
    body: "Type anything, send a voice note, or send a photo. That's it — you're in!",
  },
];

const modes = [
  {
    title: '4.1 Assistant Mode (Default)',
    body:
      'The default mode — a general-purpose AI for open-ended questions, explanations, creative writing, advice, and anything else you can think of. Responses are conversational, context-aware, and delivered in your chosen language.',
    examplesLabel: 'Example questions',
    examples: [
      '"What are the health benefits of turmeric?"',
      '"Explain machine learning in simple terms"',
      '"Write a birthday message for my friend in Assamese"',
      '"What is the capital of Manipur?"',
      '"Give me a recipe for sambar"',
    ],
  },
  {
    title: '4.2 Dictionary Mode',
    body:
      'Send a single word and receive its meaning, origin, and an example sentence — all in your chosen language. Perfect for vocabulary building and language learning. Note: only single words are accepted in this mode.',
    examplesLabel: 'Example inputs',
    examples: ['"Ephemeral"', '"ಸಮುದ್ರ (Kannada)"', '"Serendipity"', '"নদী (Assamese)"'],
  },
  {
    title: '4.3 Translator Mode',
    body:
      'Send any text and it will be translated into your currently set language. Useful for translating English articles, messages, or documents into your mother tongue, or vice versa.',
    examplesLabel: 'Example inputs',
    examples: [
      '"The quick brown fox jumps over the lazy dog"',
      '"Please translate this: Congratulations on your new job!"',
      '"আজি বতৰটো কেনেকুৱা?" (translate to English)',
    ],
    tip: 'Tip: Combine with the /lang command to translate into any of the 10 supported languages.',
  },
  {
    title: '4.4 Accounts Mode',
    body:
      'A natural-language expense tracker. Add transactions by typing what you spent, view recent activity, see your running balance, and export your records as CSV — all by chatting in any supported language.',
    examplesLabel: 'Example inputs',
    examples: [
      '"Spent 250 on groceries today"',
      '"Received salary 35000"',
      '"Show last 10 transactions"',
      '"Show balance"',
      '"Export CSV"',
    ],
  },
  {
    title: '4.5 Play Mode',
    body:
      'A relaxing, multilingual word-game mode. Riddles, vocabulary puzzles, and quick quizzes — perfect for unwinding or for parents to share with children. Games run in your chosen language.',
    examplesLabel: "What's inside",
    examples: [
      'Riddles and word puzzles in 10 languages',
      'Multilingual word-association games',
      'Short, snackable quizzes — play for one minute or fifteen',
    ],
  },
  {
    title: '4.6 Civic Mode (Jantra Civic)',
    body:
      'Civic mode opens a dedicated government-services sub-product — Jantra Civic. From here you can find schemes you qualify for, look up civic services, know your representatives, get help with forms, and see local alerts. Type /civic from anywhere to enter.',
    examplesLabel: 'See also',
    examples: ['For full documentation, read the separate Jantra Civic Guide.'],
    civicLink: true,
  },
];

const languages = [
  { n: 1, name: 'Assamese', script: 'অসমীয়া', code: 'asm', voice: true },
  { n: 2, name: 'Kannada', script: 'ಕನ್ನಡ', code: 'kan', voice: true },
  { n: 3, name: 'Hindi', script: 'हिन्दी', code: 'hin', voice: true },
  { n: 4, name: 'Bengali', script: 'বাংলা', code: 'ben', voice: true },
  { n: 5, name: 'Tamil', script: 'தமிழ்', code: 'tam', voice: true },
  { n: 6, name: 'Odia', script: 'ଓଡ଼ିଆ', code: 'odi', voice: true },
  { n: 7, name: 'Malayalam', script: 'മലയാളം', code: 'mal', voice: true },
  { n: 8, name: 'English', script: 'English', code: 'eng', voice: true },
  { n: 9, name: 'Kanglish', script: 'Romanised Kannada', code: 'kan_roman', voice: false },
  { n: 10, name: 'Hinglish', script: 'Romanised Hindi', code: 'hin_roman', voice: false },
];

const voiceSteps = [
  { n: 1, title: 'Record', body: 'Record a voice note in WhatsApp as you normally would.' },
  {
    n: 2,
    title: 'Receive & route',
    body: 'Jantra Bot receives the audio and sends it to Sarvam AI — a speech-to-text engine built specifically for Indian languages.',
  },
  {
    n: 3,
    title: 'Understand',
    body: 'The transcription is passed to Gemini AI, which generates a response in your set language.',
  },
  {
    n: 4,
    title: 'Reply',
    body: 'You receive the response as a text message in your chosen language, ready to read or copy.',
  },
];

const voiceTips = [
  { label: 'Quiet environment', body: 'Record in a quiet room for best accuracy.' },
  { label: 'Speak naturally', body: "Don't slow down unnaturally — speak as you normally would." },
  { label: 'Good connection', body: 'Ensure your internet connection is stable when sending audio.' },
  { label: 'Any length', body: "Short or long — there's no strict time limit on voice notes." },
];

const imageSteps = [
  { n: 1, title: 'Attach', body: 'Attach and send any photo from your camera roll, or take a new one — JPEG, PNG, and WEBP are all accepted.' },
  { n: 2, title: 'Acknowledge', body: 'Jantra Bot immediately replies in your language with a wait message such as "Let me read the image for you, please wait…"' },
  { n: 3, title: 'Analyse', body: 'Google Gemini analyses the image and identifies its content — objects, scene, text, context.' },
  { n: 4, title: 'Describe', body: "You receive a detailed description in your chosen language — useful for reading, summarising, or translating what's in the photo." },
];

const imageTypes = [
  { type: 'Everyday objects', examples: 'Products, packaging, household items' },
  { type: 'Nature', examples: 'Animals, plants, flowers, landscapes' },
  { type: 'Landmarks', examples: 'Buildings, monuments, places' },
  { type: 'Documents', examples: 'Letters, forms, handwritten notes' },
  { type: 'Food', examples: 'Dishes, ingredients, recipes' },
  { type: 'Maps & diagrams', examples: 'Locations, instructions, schematics' },
  { type: 'Art & illustrations', examples: 'Paintings, drawings, posters' },
  { type: 'Charts & infographics', examples: 'Tables, graphs, data visuals' },
  { type: 'Signs & labels', examples: 'Street signs, menus, price tags' },
  { type: 'Fashion', examples: 'Clothing, accessories, styles' },
];

const commands = [
  { cmd: '/menu or *', does: 'Opens the main menu with all available actions.' },
  { cmd: '/mode', does: 'Change your current mode (Assistant, Dictionary, Translator, Accounts, Play, Civic).' },
  { cmd: '/lang', does: 'Change your preferred language from the 10 supported options.' },
  { cmd: '/status', does: 'Show your current settings: language, mode, and recent activity.' },
  { cmd: '/help', does: 'Show a quick help summary and the available commands.' },
  { cmd: '/clear', does: 'Clear Assistant-mode conversation history.' },
  { cmd: '/civic', does: 'Jump directly into Jantra Civic.' },
  { cmd: 'change mode', does: 'Natural-language alternative to /mode.' },
  { cmd: 'change language', does: 'Natural-language alternative to /lang.' },
];

const tips = [
  {
    title: 'Switch modes mid-conversation',
    body: 'You can change mode at any point without losing context. Ask your last question in Assistant mode, then switch to Dictionary to look up a word from that answer.',
  },
  {
    title: 'Use voice for long queries',
    body: "Instead of typing a long question, record a voice note. It's faster, and the AI handles natural spoken language better than broken typed text.",
  },
  {
    title: 'Mix languages freely',
    body: "You don't have to type in your set language. Ask in English even when your language is set to Kannada — the bot will reply in Kannada regardless.",
  },
  {
    title: 'Follow-up questions',
    body: '"Tell me more", "Give me an example", "Explain that differently" — the bot remembers your recent conversation in Assistant mode.',
  },
  {
    title: 'Photograph text for translation',
    body: 'Take a photo of a sign, menu, or document and Jantra Bot will describe it including any text visible in the image.',
  },
  {
    title: 'Use /status to check your setup',
    body: 'If something seems off, type /status to see your current language and mode at a glance.',
  },
  {
    title: 'Kanglish / Hinglish for comfort',
    body: 'If reading Devanagari or Kannada script is tiring, switch to Hinglish or Kanglish — you get the same language in easy-to-read English letters.',
  },
  {
    title: 'Ask for structured output',
    body: '"Give me a bullet-point list", "Summarise in 3 lines", "Give me a table comparing X and Y" — the bot formats its output based on your instruction.',
  },
];

const useCases = [
  { scenario: 'Student studying for exams', help: 'Switch to Dictionary mode for tough English words with Assamese meanings, then back to Assistant for chemistry explanations in your language.' },
  { scenario: 'Understanding a medical report', help: 'Photograph the report and ask "What does this mean?" — get a plain-language explanation, no medical jargon.' },
  { scenario: 'Shopping at a new market', help: 'Photograph an unfamiliar label and instantly know what it says, in your language.' },
  { scenario: 'Travel assistant', help: 'Ask for local food recommendations, cultural tips, or translate phrases you need at a local shop.' },
  { scenario: 'Professional writing help', help: 'Draft formal emails, summarise documents, or suggest phrasing for tricky situations in any supported language.' },
  { scenario: 'Helping kids learn', help: "Parents can ask for children's stories, rhymes, or simple explanations in the languages kids are comfortable with." },
  { scenario: 'Cooking companion', help: 'Send a photo of ingredients and ask "What can I cook with these?" or request recipes in your regional language.' },
  { scenario: 'Rural & semi-urban users', help: 'Ask farming questions, scheme queries, or health questions in your native language without needing English.' },
  { scenario: 'Personal expense tracker', help: 'Log spends in chat with Accounts mode, see balances, and export CSV when you need to share.' },
  { scenario: 'Government & civic queries', help: 'Jump to Civic mode for schemes, services, and your representatives — see the Jantra Civic Guide.' },
];

const faqs = [
  { q: 'Is Jantra Bot free to use?', a: 'Yes, Jantra Bot is currently free during the beta period. Standard WhatsApp data charges from your network provider may apply.' },
  { q: 'Do I need to create an account?', a: 'No. There are no accounts, logins, or passwords. Your WhatsApp number is your identity.' },
  { q: 'Does the bot store my conversations?', a: 'Jantra Bot stores recent conversation in Assistant mode so follow-up questions work. You can clear it any time with /clear. Images and voice recordings are not stored after processing.' },
  { q: 'Can I use Jantra Bot on WhatsApp Web?', a: 'Yes — Jantra Bot works wherever WhatsApp works: mobile app, WhatsApp Web, and WhatsApp Desktop.' },
  { q: "What if the bot doesn't understand my voice note?", a: 'Try recording in a quieter environment or speak more clearly. If the problem persists, type your question instead.' },
  { q: 'Can I use multiple languages in one session?', a: "You can ask in any language, but the bot's replies will be in your currently set language. Use /lang to change it at any time." },
  { q: 'What is the difference between Kanglish and Kannada?', a: 'Kannada uses the native Kannada script. Kanglish is the same language written in English/Roman letters — easier to read for those not fluent in the native script. Hinglish is the equivalent for Hindi.' },
  { q: 'Is there a message limit?', a: 'There is no strict daily limit for regular usage. Extremely high-volume usage may be rate-limited automatically.' },
  { q: 'What AI powers Jantra Bot?', a: 'Jantra Bot uses Google Gemini for language understanding and image analysis, and Sarvam AI for voice transcription.' },
  { q: 'Can businesses use Jantra Bot?', a: 'Jantra Bot is built for individuals. For business or institutional deployments, contact Coding Ryder directly.' },
  { q: 'How do I give feedback?', a: 'WhatsApp Rakesh directly at wa.me/918720951721 — he personally reads all feedback.' },
];

const specs = [
  { k: 'Platform', v: 'WhatsApp Business API (via Twilio & Meta Cloud API)' },
  { k: 'AI / Language Model', v: 'Google Gemini 2.5 Flash (text + vision)' },
  { k: 'Voice Transcription', v: 'Sarvam AI — saarika:v2.5 + saaras:v3 (Assamese)' },
  { k: 'Backend Framework', v: 'Python · FastAPI · Uvicorn (async)' },
  { k: 'Database', v: 'PostgreSQL on Neon (serverless, cloud-hosted)' },
  { k: 'Hosting', v: 'Render (cloud deployment, always-on)' },
  { k: 'Language Detection', v: 'langdetect library + Sarvam language-code enforcement' },
  { k: 'Supported Formats', v: 'Text · Voice (OGG / audio) · Images (JPEG, PNG, WEBP)' },
  { k: 'Context Window', v: 'Rolling conversation history per user, Assistant mode' },
  { k: 'Modes', v: 'Assistant · Dictionary · Translator · Accounts · Play · Civic' },
  { k: 'Languages Supported', v: '10 (Assamese, Kannada, Hindi, Bengali, Tamil, Odia, Malayalam, English, Kanglish, Hinglish)' },
  { k: 'Current Status', v: 'Beta — actively developed by Coding Ryder' },
];

export default function JantraBotGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="container-page section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              Complete user guide
            </span>
            <h1 className="heading-display mt-5">Jantra Bot — User Guide</h1>
            <p className="prose-lead mt-5">
              Your multilingual AI assistant on WhatsApp. Answers anything · 10 languages ·
              Voice & image · No downloads.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="https://wa.me/916361245647" className="btn-primary">
                Try Jantra Bot
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link href="/bot/" className="btn-secondary">
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Back to Jantra Bot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TOC */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-page py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Table of Contents</h2>
            <ol className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {toc.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300 hover:bg-emerald-50/50"
                  >
                    <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-emerald-50 text-xs font-semibold text-emerald-700">
                      {t.n}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-900">{t.title}</span>
                      <span className="mt-0.5 block text-xs text-slate-500">{t.sub}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Section 1 — Introduction */}
      <section id="introduction" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={1} title="Introduction" icon={MessageSquareText} />
            <p className="prose-lead mt-6">
              Jantra Bot is a multilingual AI assistant that lives entirely inside WhatsApp — the
              messaging app you already use every day. There are no downloads, no signups, no new
              apps to learn. Just open a chat with the bot and start asking questions in any of 10
              supported languages.
            </p>
            <p className="mt-5 text-base leading-7 text-slate-700">
              Built by Coding Ryder and powered by Google Gemini and Sarvam AI, Jantra Bot
              combines cutting-edge AI with deep support for Indian languages — including Assamese,
              Kannada, Hindi, Bengali, Tamil, Odia, Malayalam, and the beloved romanised hybrids
              Kanglish and Hinglish.
            </p>

            <h3 className="mt-12 text-xl font-bold text-slate-900">Who is it for?</h3>
            <div className="mt-6 space-y-4">
              {audiences.map((a) => (
                <div key={a.label} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h4 className="text-base font-semibold text-emerald-700">{a.label}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{a.body}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-12 text-xl font-bold text-slate-900">Mission</h3>
            <p className="mt-3 text-base leading-7 text-slate-700">
              To make world-class AI accessible in every Indian language, for every person,
              without any barrier — through a platform they already trust: WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Key Features */}
      <section id="key-features" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-5xl">
            <SectionHeading n={2} title="Key Features" icon={Layers} />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <f.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Getting Started */}
      <section id="getting-started" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={3} title="Getting Started" icon={CheckCircle2} />
            <p className="mt-6 text-base text-slate-700">You can be up and running in under 30 seconds.</p>
            <ol className="mt-8 space-y-4">
              {gettingStarted.map((s) => (
                <li
                  key={s.step}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="text-xs font-medium uppercase tracking-wider text-emerald-700">{s.step}</div>
                  <h3 className="mt-1 text-base font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{s.body}</p>
                </li>
              ))}
            </ol>
            <a
              href="https://wa.me/916361245647"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-600"
            >
              Try it now: wa.me/916361245647
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Section 4 — Modes */}
      <section id="modes" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={4} title="User Guide — Modes" icon={Terminal} />
            <p className="mt-6 text-base text-slate-700">
              Jantra Bot operates in six distinct modes. Your active mode determines how the bot
              interprets and responds to your messages. You can switch at any time by typing{' '}
              <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm">/mode</code>.
            </p>

            <div className="mt-10 space-y-8">
              {modes.map((m) => (
                <div key={m.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-emerald-700">{m.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{m.body}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {m.examplesLabel}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {m.examples.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                  {m.tip && <p className="mt-4 text-xs italic text-slate-500">{m.tip}</p>}
                  {m.civicLink && (
                    <Link
                      href="/civic/guide/"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-800"
                    >
                      Read the Jantra Civic Guide
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Languages */}
      <section id="languages" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <SectionHeading n={5} title="Supported Languages" icon={Languages} />
            <p className="mt-6 text-base text-slate-700">
              Jantra Bot supports 10 languages. For each language, you can send messages in the
              native script or in romanised (English letters) form — the bot understands both.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-900">#</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-900">Language</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-900">Native Script</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-900">Code</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-900">Voice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {languages.map((l) => (
                    <tr key={l.code}>
                      <td className="px-4 py-3 text-slate-500">{l.n}</td>
                      <td className="px-4 py-3 font-medium text-slate-900">{l.name}</td>
                      <td className="px-4 py-3 text-slate-700">{l.script}</td>
                      <td className="px-4 py-3">
                        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">{l.code}</code>
                      </td>
                      <td className="px-4 py-3 text-slate-700">{l.voice ? '✓' : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-slate-600">
              To switch language, type <code className="rounded bg-slate-100 px-1.5 py-0.5">/lang</code> or
              say "change language" — an interactive menu will appear with all 10 options.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — Voice */}
      <section id="voice" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={6} title="Voice Support" icon={Mic} />
            <p className="mt-6 text-base text-slate-700">
              Jantra Bot understands voice notes. No typing needed — just hold the microphone
              button in WhatsApp and speak naturally. The bot will transcribe your voice and
              respond in your chosen language.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">How it works</h3>
            <ol className="mt-4 space-y-3">
              {voiceSteps.map((s) => (
                <li key={s.n} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4">
                  <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                    <p className="mt-1 text-sm text-slate-700">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3 className="mt-10 text-lg font-bold text-slate-900">Voice technology — Sarvam AI</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Jantra Bot uses Sarvam AI (sarvam.ai) for voice transcription — an Indian startup
              whose models are trained natively on Indian languages including Assamese, Kannada,
              Hindi, Bengali, and Tamil. This makes it significantly more accurate for Indian
              accents and regional speech patterns than generic speech engines.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {voiceTips.map((v) => (
                <div key={v.label} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-emerald-700">{v.label}</p>
                  <p className="mt-1 text-sm text-slate-700">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Images */}
      <section id="images" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={7} title="Image Understanding" icon={ImageIcon} />
            <p className="mt-6 text-base text-slate-700">
              Send any photo to Jantra Bot and it will describe what it sees — in your chosen
              language. Powered by Google Gemini's multimodal vision AI, the bot can identify
              objects, scenes, text, food, animals, landmarks, and much more.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">How it works</h3>
            <ol className="mt-4 space-y-3">
              {imageSteps.map((s) => (
                <li key={s.n} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4">
                  <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                    <p className="mt-1 text-sm text-slate-700">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3 className="mt-10 text-lg font-bold text-slate-900">What kinds of images work best</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-900">Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-900">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {imageTypes.map((row) => (
                    <tr key={row.type}>
                      <td className="px-4 py-3 font-medium text-slate-900">{row.type}</td>
                      <td className="px-4 py-3 text-slate-700">{row.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm italic text-slate-500">
              Privacy note: Images are sent to Google Gemini for analysis and are not stored by
              Jantra Bot. Only the text description is saved in your conversation history.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 — Commands */}
      <section id="commands" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={8} title="Commands Reference" icon={Terminal} />
            <p className="mt-6 text-base text-slate-700">
              Type any of these commands at any time — they work in all modes and languages.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-900">Command</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-900">What it does</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {commands.map((c) => (
                    <tr key={c.cmd}>
                      <td className="whitespace-nowrap px-4 py-3 align-top">
                        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">{c.cmd}</code>
                      </td>
                      <td className="px-4 py-3 text-slate-700">{c.does}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — Tips */}
      <section id="tips" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={9} title="Tips & Tricks" icon={Lightbulb} />
            <div className="mt-8 space-y-5">
              {tips.map((t) => (
                <div key={t.title} className="border-l-2 border-emerald-500 pl-5">
                  <h3 className="text-base font-semibold text-emerald-700">› {t.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 — Use Cases */}
      <section id="use-cases" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <SectionHeading n={10} title="Use Cases" icon={CheckCircle2} />
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-900">Scenario</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-900">How Jantra Bot helps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {useCases.map((u) => (
                    <tr key={u.scenario}>
                      <td className="px-4 py-3 align-top font-medium text-slate-900">{u.scenario}</td>
                      <td className="px-4 py-3 text-slate-700">{u.help}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11 — FAQs */}
      <section id="faqs" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={11} title="Frequently Asked Questions" icon={HelpCircle} />
            <dl className="mt-8 space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-slate-200 bg-white p-5">
                  <dt className="text-base font-semibold text-emerald-700">Q: {f.q}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-700">A: {f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Section 12 — Specs */}
      <section id="specs" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={12} title="Technical Specifications" icon={Cpu} />
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <tbody className="divide-y divide-slate-200 bg-white">
                  {specs.map((s) => (
                    <tr key={s.k}>
                      <td className="w-1/3 px-4 py-3 align-top font-semibold text-emerald-700">{s.k}</td>
                      <td className="px-4 py-3 text-slate-700">{s.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13 — Developer */}
      <section id="developer" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={13} title="About the Developer" icon={User} />
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-emerald-100 text-base font-bold text-emerald-700">
                  RG
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Rakesh Gogoi</h3>
                  <p className="text-sm text-slate-600">Founder · Developer · Designer</p>
                  <p className="mt-1 text-sm font-medium text-emerald-700">Coding Ryder</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-700">
                Rakesh Gogoi is the solo developer behind Jantra Bot and the Coding Ryder brand.
                With a passion for making technology accessible to everyone — regardless of
                language, literacy, or location — Rakesh built Jantra Bot to bridge the gap
                between powerful AI tools and everyday users across India.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Jantra Bot is a personal passion project, built and maintained entirely by Rakesh
                during his own time. Every feature, language addition, and improvement comes from
                direct conversations with real users and a genuine desire to make AI useful for
                people in their own language.
              </p>
            </div>

            <h3 className="mt-10 text-lg font-bold text-slate-900">About Coding Ryder</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Coding Ryder is an indie tech brand focused on building practical, language-inclusive
              digital products for everyday users. The brand's philosophy: "Technology should speak
              your language — not the other way around."
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Independent, bootstrapped — no VC funding, no corporate agenda.</li>
              <li>Focused on Indian-language users and underserved digital communities.</li>
              <li>Open to collaboration, feedback, and community-driven development.</li>
              <li>All products are built with privacy and simplicity as first principles.</li>
            </ul>
            <p className="mt-6 text-xs text-slate-500">
              Powered by Google Gemini · Sarvam AI · FastAPI · PostgreSQL · WhatsApp Business API
            </p>
          </div>
        </div>
      </section>

      {/* Section 14 — Contact */}
      <section id="contact" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={14} title="Contact & Feedback" icon={PhoneCall} />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ContactCard
                label="Try Jantra Bot"
                value="+91 63612 45647"
                sub="Start a chat with the bot directly on WhatsApp"
                href="https://wa.me/916361245647"
              />
              <ContactCard
                label="Feedback / Support"
                value="+91 87209 51721"
                sub="WhatsApp Rakesh directly with feedback, bugs, or ideas"
                href="https://wa.me/918720951721"
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

            <div className="mt-10 rounded-2xl bg-emerald-500 p-8 text-center text-white">
              <p className="text-xl font-bold">Ready to try it?</p>
              <a
                href="https://wa.me/916361245647"
                className="mt-3 inline-flex items-center gap-2 text-lg font-semibold underline decoration-2 underline-offset-4 hover:text-emerald-50"
              >
                wa.me/916361245647
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
            </div>

            <p className="mt-8 text-center text-xs text-slate-500">
              © 2026 Coding Ryder · All rights reserved · Currently in Beta
              <br />
              Jantra Bot is a product of Coding Ryder · Powered by Google Gemini & Sarvam AI
            </p>
          </div>
        </div>
      </section>
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
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        <span className="text-emerald-600">{n}.</span> {title}
      </h2>
    </div>
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
    'block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:bg-emerald-50/50';
  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-2 text-base font-semibold text-emerald-700">{value}</p>
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
