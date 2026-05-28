import type { Metadata } from 'next';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  MessageCircle,
  BookOpen,
  Languages,
  LayoutGrid,
  Sparkles,
  UserCircle2,
  CreditCard,
  ShieldCheck,
  Lightbulb,
  Wrench,
  HelpCircle,
  Cpu,
  ListChecks,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Layers,
  Receipt,
  Gamepad2,
  BookOpenCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jantra Web User Guide — Complete information & user guide',
  description:
    'The complete Jantra Web user guide: 19 languages, five chat modes, profile, plans, privacy, tips, troubleshooting, FAQs, and technical reference.',
  alternates: { canonical: '/web/guide/' },
  openGraph: {
    title: 'Jantra Web User Guide — Complete information & user guide',
    description:
      'Every mode, language, command, and tip for using Jantra Web — the free multilingual AI workspace in your browser.',
    url: '/web/guide/',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jantra Web User Guide',
    description:
      'Every mode, language, command, and tip for using Jantra Web.',
  },
};

const toc = [
  { n: 1, id: 'overview', title: 'Overview', sub: 'Vision, highlights, and who it is for' },
  { n: 2, id: 'getting-started', title: 'Getting Started', sub: 'Sign up and choose your language' },
  { n: 3, id: 'languages', title: 'Supported Languages', sub: '19 languages, Indian + international' },
  { n: 4, id: 'interface', title: 'The Chat Interface', sub: 'Layout, sidebar, input, themes' },
  { n: 5, id: 'modes', title: 'Chat Modes', sub: 'All five modes explained' },
  { n: 6, id: 'profile', title: 'User Profile', sub: 'Profile fields and editing' },
  { n: 7, id: 'plans', title: 'Plans & Tiers', sub: 'Rookie, Seasoned, Maestro' },
  { n: 8, id: 'privacy', title: 'Privacy & Security', sub: 'What we collect and what we do not' },
  { n: 9, id: 'tips', title: 'Tips & Best Practices', sub: 'Power-user advice' },
  { n: 10, id: 'troubleshooting', title: 'Troubleshooting', sub: 'Common problems and fixes' },
  { n: 11, id: 'faqs', title: 'FAQs', sub: 'Frequently asked questions' },
  { n: 12, id: 'technical', title: 'Technical Reference', sub: 'Stack, endpoints, request example' },
  { n: 13, id: 'glossary', title: 'Glossary', sub: 'Key terms explained' },
  { n: 14, id: 'support', title: 'Support & Contact', sub: 'How to reach us' },
];

const highlights = [
  '100% free to use — no credit card or payment required',
  'Supports 19 languages (11 Indian + 8 international)',
  'Five specialised chat modes inside a single application',
  'Powered by Google Gemini 2.5 Flash — fast, multimodal AI',
  'Works on any device: desktop, tablet, and mobile browsers',
  'Passwordless sign-in — just an email address gets you started',
  'Built-in image understanding for OCR and transaction tracking',
  'Privacy-first design — minimal data collection, no third-party tracking',
];

const platformInfo = [
  { k: 'Application Name', v: 'Jantra Web' },
  { k: 'Web Address', v: 'jantraweb.codingryder.com' },
  { k: 'Developer', v: 'Coding Ryder (codingryder.com)' },
  { k: 'AI Engine', v: 'Google Gemini 2.5 Flash' },
  { k: 'Category', v: 'AI Assistant / Language Tool' },
  { k: 'Pricing', v: 'Free (Rookie tier — no payment required)' },
  { k: 'Hosting', v: 'Render (cloud-hosted, Oregon region)' },
  { k: 'First released', v: '2026' },
];

const audiences = [
  'Students looking up word meanings, translations and study summaries',
  'Professionals drafting emails and getting quick AI-assisted help',
  'Writers and content creators needing translation or creative help in Indian languages',
  'Everyday users tracking their UPI transactions from GPay, PhonePe or Paytm',
  'Language learners practising vocabulary through quizzes, riddles and word games',
  'Travellers and non-English speakers who want quick access to a capable AI assistant',
];

const systemReqs = [
  { k: 'Browser', v: 'Latest Chrome, Firefox, Safari or Edge' },
  { k: 'Operating System', v: 'Any (Windows, macOS, Linux, iOS, Android)' },
  { k: 'Internet Connection', v: 'Stable broadband or mobile data' },
  { k: 'Screen Size', v: 'Any — responsive layout for phone, tablet, desktop' },
  { k: 'Identifier', v: 'A valid, accessible email address' },
];

const signupSteps = [
  'Open your browser and navigate to jantraweb.codingryder.com.',
  'You will be redirected automatically to the Sign In page.',
  'Enter your email address in the provided field.',
  'Select your country from the dropdown list.',
  'Read and accept the Terms of Service and Privacy Policy by ticking the checkbox.',
  'Click the Get Started button.',
  'Wait a moment while your account is provisioned — you will be taken to the language picker.',
];

const indianLanguages = ['Hindi', 'Bengali', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Marathi', 'Punjabi', 'Gujarati', 'Odia', 'Assamese'];
const intlLanguages = ['English', 'Spanish', 'French', 'German', 'Arabic', 'Chinese', 'Japanese', 'Korean'];

const switchingEffects = [
  'Starts a fresh session in the active chat mode',
  'Updates the UI strings to reflect the chosen language',
  'Causes the AI to respond natively in the new language',
  'Does not affect your profile or stored account information',
];

const interfaceAreas = [
  { area: 'Sidebar (left)', body: 'Mode navigation and language switcher' },
  { area: 'Chat Area (centre)', body: 'Conversation messages and input bar' },
  { area: 'Top Bar (header)', body: 'App title, theme toggle, profile access and settings' },
];

const inputCapabilities = [
  'Type your message and press Enter (or tap the Send button) to submit it.',
  'Use Shift+Enter to insert a line break without sending.',
  'Upload an image by clicking the image icon next to the input field — supported in Chat and Accounts modes.',
  'Use the suggested starter chips displayed above the input on a fresh session to begin a conversation quickly.',
  'Tap the microphone icon (where shown) to record a voice prompt that will be transcribed.',
];

const modes = [
  { mode: 'Chat', purpose: 'General AI conversation — ask any question in your language', icon: MessageCircle },
  { mode: 'Translate', purpose: 'Translate text between any of the 19 supported languages', icon: Languages },
  { mode: 'Dictionary', purpose: 'Look up word meanings, pronunciation and usage examples', icon: BookOpen },
  { mode: 'Play', purpose: 'Interactive word games: Hangman, Quiz, Riddle and Word Game', icon: Gamepad2 },
  { mode: 'Accounts', purpose: 'Analyse payment-app screenshots and track UPI transactions', icon: Receipt },
];

const chatUses = [
  'Asking questions on any topic — science, history, cooking, technology',
  'Getting explanations of complex ideas in your own language',
  'Brainstorming, creative writing, drafting emails or social posts',
  'Multi-turn conversations — the AI remembers context within the session',
  'Uploading an image and asking questions about it (vision-enabled)',
];

const translateSteps = [
  'Switch to Translate from the sidebar.',
  'Type or paste the text you want to translate.',
  'The AI automatically detects the source language and translates into your selected language.',
  'To target a different language explicitly, mention it in your message (for example: "translate into French").',
  'Tap the share icon to copy the translated text.',
];

const dictionaryReturns = [
  'Clear definitions in your selected language',
  'Pronunciation guidance (transliterated or phonetic)',
  'Multiple example sentences showing the word used in context',
  'Where relevant, synonyms, antonyms and related word forms',
];

const games = [
  { name: 'Hangman', body: 'Guess the hidden word one letter at a time before the figure is completed.' },
  { name: 'Quiz', body: 'Answer multiple-choice questions on language, grammar and general knowledge.' },
  { name: 'Riddle', body: 'The AI poses a riddle in your language; you try to solve it.' },
  { name: 'Word Game', body: 'Various vocabulary challenges — antonyms, synonyms, word associations.' },
];

const accountsSteps = [
  'Open Accounts Mode from the sidebar.',
  'Tap the image upload icon next to the input field.',
  'Choose a transaction screenshot from GPay, PhonePe or Paytm.',
  'The AI extracts the amount, recipient (or sender), date and direction of the transaction.',
  'The transaction is added to your in-session ledger automatically.',
];

const accountsCommands = [
  { cmd: '/summary', does: 'Show an overall summary of all recorded transactions (totals by direction)' },
  { cmd: '/sent', does: 'List all money-sent transactions in chronological order' },
  { cmd: '/received', does: 'List all money-received transactions in chronological order' },
  { cmd: '/person [name]', does: 'Show all transactions with a specific person (e.g. /person Rahul)' },
  { cmd: '/export', does: 'Generate a downloadable CSV of all transaction data' },
  { cmd: '/clear', does: 'Clear all transaction history for the current session' },
];

const profileFields = [
  { f: 'Avatar', d: 'Displays your initial letter as a circular badge' },
  { f: 'Name', d: 'Optional display name (editable)' },
  { f: 'Username', d: 'Optional unique handle (editable)' },
  { f: 'Email', d: 'The email address used at registration (read-only)' },
  { f: 'Country', d: 'Country selected at sign-up (read-only)' },
  { f: 'Current Language', d: 'Active language selection' },
  { f: 'Plan / Tier', d: 'Current subscription tier (Rookie by default)' },
  { f: 'Joined', d: 'Date your account was created' },
];

const tiers = [
  { name: 'Rookie', status: 'Active', body: 'Chat, Translate, Dictionary, Play and Accounts — get started today, free of cost.' },
  { name: 'Seasoned', status: 'Coming Soon', body: 'Advanced features, priority response time, higher daily message limits and enhanced capabilities.' },
  { name: 'Maestro', status: 'Coming Soon', body: 'Full access, highest message limits and early access to new features as they launch.' },
];

const dataCollected = [
  { d: 'Email address', why: 'Used to identify your account and reconnect across sessions' },
  { d: 'Country', why: 'Used to personalise your experience and content' },
  { d: 'Optional name and username', why: 'Used only for display, if you choose to provide them' },
  { d: 'Chat history (per session)', why: 'Stored to enable multi-turn conversation context' },
  { d: 'Uploaded images', why: 'Processed for the requested task only (e.g. OCR in Accounts Mode)' },
];

const dataNotCollected = [
  'No passwords (the service is passwordless)',
  'No credit card or payment details (Rookie tier is free)',
  'No third-party analytics or advertising trackers',
  'No location data beyond the country you selected',
];

const tipGroups = [
  {
    title: 'Getting better responses',
    items: [
      'Be specific — detailed questions get more useful answers.',
      'Provide context — for a follow-up, briefly mention what was discussed before.',
      'Use your preferred language — the AI responds best in the language you selected.',
      'Break complex tasks into steps — ask one question at a time for the best clarity.',
    ],
  },
  {
    title: 'Translation tips',
    items: [
      'Translate one paragraph at a time for the most accurate results.',
      'If a translation feels off, ask the AI to "try again more formally" or "more casually".',
      'For technical text, include the domain in your prompt (e.g. "translate this medical report into Hindi").',
    ],
  },
  {
    title: 'Dictionary tips',
    items: [
      'Single words or short phrases give the richest output.',
      "Ask for the word's etymology or regional usage for extra depth.",
      'Use it as a learning aid — ask for sample sentences at different difficulty levels.',
    ],
  },
  {
    title: 'Accounts mode tips',
    items: [
      'Use clear, high-resolution screenshots for best OCR accuracy.',
      'Screenshot the transaction confirmation screen, not the home or history screen.',
      'Use /summary regularly to keep track of your spending at a glance.',
      'Export your data with /export before clearing, to keep a local backup.',
      'If the AI misreads a field, simply correct it in chat — "change the amount to ₹500".',
    ],
  },
  {
    title: 'Language tips',
    items: [
      'If a response comes back in the wrong language, switch language in the top bar and try again.',
      'When mixing two languages (e.g. Hinglish), explicitly tell the AI which language you want the reply in.',
      'Indian script rendering is fully supported — copy/paste output to other apps without losing characters.',
    ],
  },
];

const troubleshooting = [
  { problem: 'The page will not load.', solution: 'Check your internet connection, then hard-refresh the browser (Ctrl+Shift+R or Cmd+Shift+R).' },
  { problem: 'I cannot sign in with my email.', solution: 'Make sure you have accepted the Terms and selected a country. Try a different browser if the issue persists.' },
  { problem: 'The AI is replying in the wrong language.', solution: 'Switch language using the top-bar language picker, which starts a fresh session in the chosen language.' },
  { problem: 'Responses are slow.', solution: 'Slowness is usually network-related. Try again after a few seconds, or move to a stronger connection.' },
  { problem: 'An image upload failed.', solution: 'Ensure the image is under a few megabytes and is JPG/PNG. Try cropping it and uploading again.' },
  { problem: 'A payment screenshot was misread in Accounts Mode.', solution: 'Re-upload a higher-resolution screenshot, or correct the field in chat (e.g. "change amount to 500").' },
  { problem: 'My chat history disappeared.', solution: 'History is per-session. Clearing browser data, switching device, or rotating language resets the session.' },
  { problem: 'I am stuck on a blank screen.', solution: "Open the browser's developer console (F12) and refresh. If the problem persists, report it to support." },
];

const faqs = [
  { q: 'Is Jantra Web really free?', a: 'Yes. The Rookie tier — which includes all current features — is completely free. No credit card or payment information is required.' },
  { q: 'Do I need to install anything?', a: 'No. Jantra Web runs entirely in your web browser. There is no app to download and nothing to install.' },
  { q: 'Which AI model powers Jantra Web?', a: 'Jantra Web is powered by Google Gemini 2.5 Flash, a fast multimodal model that supports both text and image understanding.' },
  { q: 'Can I use it on my phone?', a: 'Yes. The interface is fully responsive and works on any modern mobile browser. You can also add the website to your home screen for an app-like experience.' },
  { q: 'Do I need to create a password?', a: 'No. Jantra Web is passwordless. You sign in with your email address and your session is restored automatically on the same device.' },
  { q: 'Is my chat history private?', a: 'Your chat history is stored per session and is associated with your account. It is not shared with other users and is not used to train external AI models.' },
  { q: 'Can I delete my data?', a: 'Yes. Use /clear in Accounts Mode to clear transaction history. To delete your entire account, contact Coding Ryder via the website.' },
  { q: 'Why does switching language clear my chat?', a: 'Each conversation is anchored to a specific language so that the AI can produce high-quality, natively-phrased responses. Rotating the session avoids mixing languages in the same context window.' },
  { q: 'Can I upload PDFs or documents?', a: 'Currently the platform supports image uploads (for OCR and vision tasks). For long text documents, paste the contents directly into Chat Mode and ask the AI for help.' },
  { q: 'How accurate is the payment screenshot reader?', a: 'OCR accuracy is high for clear, full-resolution screenshots of the confirmation screen from GPay, PhonePe and Paytm. If a field is misread, you can correct it directly in chat.' },
  { q: 'Will more languages be added?', a: 'Yes — additional languages will be added in future releases based on user demand. Follow @codingryder for announcements.' },
  { q: 'How do I report a bug?', a: 'Note the mode and language you were using, the message that triggered the issue, and contact Coding Ryder via the website or social channels listed in the Support section.' },
];

const techStack = [
  { layer: 'Frontend', tech: 'Next.js 14 + TypeScript', details: 'React 18, Tailwind CSS, Supabase client' },
  { layer: 'Backend', tech: 'FastAPI (Python)', details: 'Uvicorn server, pdfplumber, python-docx' },
  { layer: 'Database', tech: 'Neon PostgreSQL', details: 'Serverless PostgreSQL, psycopg2 adapter' },
  { layer: 'AI Model', tech: 'Google Gemini 2.5 Flash', details: 'google-genai SDK, multimodal (text + image)' },
  { layer: 'Voice / OCR', tech: 'Sarvam / Bhashini APIs', details: 'Indian-language transcription and translation services' },
  { layer: 'Hosting', tech: 'Render (cloud)', details: 'Node.js + Python services, Oregon region' },
];

const endpoints = [
  { method: 'POST', endpoint: '/chat', purpose: 'Main chat endpoint, used by every mode' },
  { method: 'GET', endpoint: '/history/{session_id}', purpose: 'Fetch the conversation history for a session' },
  { method: 'POST', endpoint: '/accounts/screenshot', purpose: 'Upload a payment screenshot for OCR extraction' },
  { method: 'GET', endpoint: '/accounts/export/{token}', purpose: 'Download the transaction CSV export' },
  { method: 'POST', endpoint: '/voice/transcribe', purpose: 'Transcribe audio via the Sarvam API' },
  { method: 'POST', endpoint: '/users/register', purpose: 'Register a new user account' },
  { method: 'GET', endpoint: '/health', purpose: 'Health check / server status' },
];

const apiModes = [
  { value: 'chat', use: 'General-purpose conversation' },
  { value: 'translate', use: 'Translation requests' },
  { value: 'dictionary', use: 'Word lookup' },
  { value: 'play', use: 'Interactive games' },
];

const glossary = [
  { term: 'AI (Artificial Intelligence)', meaning: 'Computer systems that perform tasks normally requiring human intelligence — in this case, understanding and producing natural language.' },
  { term: 'Bhashini', meaning: 'An Indian government initiative providing language-AI building blocks (translation, transliteration, speech) for Indian languages.' },
  { term: 'Chat Mode', meaning: 'The general-purpose AI assistant mode of Jantra Web.' },
  { term: 'Dark Theme', meaning: 'An optional visual theme using a dark background, easier on the eyes in low-light environments.' },
  { term: 'Gemini 2.5 Flash', meaning: 'The Google AI model that powers Jantra Web. Multimodal (text + image), fast and capable across many languages.' },
  { term: 'Mode', meaning: 'A purpose-built chat experience inside Jantra Web. Five modes are available: Chat, Translate, Dictionary, Play and Accounts.' },
  { term: 'OCR (Optical Character Recognition)', meaning: 'Technology that reads text from images. Used in Accounts Mode to read payment screenshots.' },
  { term: 'Onboarding', meaning: 'The initial language-selection screen shown after registration.' },
  { term: 'Passwordless', meaning: 'An authentication style that uses only an email address (and a session identifier in the browser) — no password to remember.' },
  { term: 'Rookie / Seasoned / Maestro', meaning: 'The three tier names used by Jantra Web. Rookie is the free default; the others are coming soon.' },
  { term: 'Session', meaning: 'An identifier stored in your browser that links you to your account. Clearing browser data resets the session.' },
  { term: 'Sidebar', meaning: 'The vertical navigation panel on the left of the interface listing all chat modes.' },
  { term: 'UPI', meaning: 'Unified Payments Interface — the Indian instant-payments system used by apps such as GPay, PhonePe and Paytm.' },
];

const supportLinks = [
  { resource: 'Jantra Web App', url: 'jantraweb.codingryder.com', href: 'https://jantraweb.codingryder.com' },
  { resource: 'Coding Ryder Website', url: 'codingryder.com', href: 'https://codingryder.com' },
  { resource: 'User Guide (web version)', url: 'codingryder.com/jantrabot_guide.html', href: 'https://codingryder.com/jantrabot_guide.html' },
  { resource: 'Terms & Privacy Policy', url: 'codingryder.com/jantrabot_legal.html', href: 'https://codingryder.com/jantrabot_legal.html' },
  { resource: 'Twitter / X', url: '@codingryder', href: 'https://twitter.com/codingryder' },
];

export default function JantraWebGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-page section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">
              <BookOpenCheck className="h-3.5 w-3.5" aria-hidden />
              Complete user guide
            </span>
            <h1 className="heading-display mt-5">Jantra Web — User Guide</h1>
            <p className="prose-lead mt-5">
              AI chat in Indian & world languages. 19 languages · 5 modes · Free to use ·
              Powered by Google Gemini 2.5 Flash.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="https://jantraweb.codingryder.com" className="btn-primary">
                Open Jantra Web
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link href="/web/" className="btn-secondary">
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Back to Jantra Web
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
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-300 hover:bg-brand-50/50"
                  >
                    <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-brand-50 text-xs font-semibold text-brand-700">
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

      {/* Section 1 — Overview */}
      <section id="overview" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={1} title="Overview" icon={Sparkles} />
            <p className="prose-lead mt-6">
              Jantra Web is a free, AI-powered multilingual chatbot platform developed by Coding
              Ryder. It is designed to make artificial intelligence accessible to everyone, with a
              special focus on Indian languages. Users can chat naturally, translate text between
              languages, look up words in a multilingual dictionary, play interactive language
              games, and even analyse payment-app screenshots to track financial transactions —
              all from a single, clean web interface and all in the language of their choice.
            </p>

            <h3 className="mt-12 text-xl font-bold text-slate-900">1.1 Vision &amp; Purpose</h3>
            <p className="mt-3 text-base leading-7 text-slate-700">The platform was built around a single guiding principle:</p>
            <blockquote className="mt-4 border-l-4 border-brand-500 bg-brand-50/50 p-5 text-lg italic text-brand-900">
              "Your AI companion, in your language."
            </blockquote>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Jantra Web is the only AI chat platform built first for Indian languages and then
              extended to serve a global audience. It removes language barriers so that anyone —
              regardless of technical background or English fluency — can harness the power of
              modern AI for everyday tasks like learning, writing, translating, summarising and
              personal finance.
            </p>

            <h3 className="mt-12 text-xl font-bold text-slate-900">1.2 Key Highlights</h3>
            <ul className="mt-4 space-y-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl font-bold text-slate-900">1.3 Platform Information</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <tbody className="divide-y divide-slate-200 bg-white">
                  {platformInfo.map((p) => (
                    <tr key={p.k}>
                      <td className="w-1/3 px-4 py-3 align-top font-semibold text-brand-700">{p.k}</td>
                      <td className="px-4 py-3 text-slate-700">{p.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-12 text-xl font-bold text-slate-900">1.4 Who Is It For?</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Jantra Web is designed for anyone who wants the benefits of a modern AI assistant
              without paying a subscription or struggling with English-only tools. Typical users
              include:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {audiences.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 — Getting Started */}
      <section id="getting-started" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={2} title="Getting Started" icon={CheckCircle2} />
            <p className="mt-6 text-base text-slate-700">
              Getting started with Jantra Web takes less than a minute. There is no app to
              download, no password to create and no payment information to enter — just a browser
              and an email address.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">2.1 System Requirements</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Jantra Web is a fully web-based application. Nothing needs to be installed locally.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-brand-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Requirement</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Recommended</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {systemReqs.map((r) => (
                    <tr key={r.k}>
                      <td className="px-4 py-3 font-medium text-slate-900">{r.k}</td>
                      <td className="px-4 py-3 text-slate-700">{r.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 text-lg font-bold text-slate-900">2.2 Creating an Account</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Account creation is passwordless. You only need an email address.
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
              {signupSteps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="mt-4 rounded-lg bg-amber-50 p-4 text-xs text-amber-900 ring-1 ring-inset ring-amber-100">
              <strong>Note:</strong> If you have previously signed in on the same device and
              browser, Jantra Web will recognise your session and skip the registration step,
              taking you directly to your last-used chat interface.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">2.3 Signing In on a New Device</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Because Jantra Web does not use passwords, signing in on a different device or
              browser starts a fresh session. Simply visit the website and enter the same email
              address you used previously to be reconnected to your account.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">2.4 Choosing Your Language</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              After signing up, you will land on the Language Selection page (also known as the
              Onboarding screen). This is where you tell Jantra Web which language you would like
              to chat in.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Browse the list of 19 available languages, grouped by region.</li>
              <li>Indian Languages are listed first, followed by International Languages.</li>
              <li>Tap or click your preferred language to confirm.</li>
              <li>You will be taken directly into the chat interface in the selected language.</li>
            </ul>
            <p className="mt-4 rounded-lg bg-brand-50 p-4 text-xs text-brand-900 ring-1 ring-inset ring-brand-100">
              <strong>Tip:</strong> You can change your language at any time from within the chat
              interface using the language switcher in the top navigation bar. Switching language
              starts a fresh session in the chosen mode so that responses are properly localised.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Languages */}
      <section id="languages" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <SectionHeading n={3} title="Supported Languages" icon={Languages} />
            <p className="mt-6 text-base text-slate-700">
              Jantra Web supports 19 languages across two groups. Every chat mode (Chat,
              Translate, Dictionary, Play and Accounts) is available in every supported language.
              The AI replies natively in your chosen language without needing any prompt
              translation on your part.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">3.1 Indian Languages (11)</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {indianLanguages.map((l) => (
                <div
                  key={l}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-900 shadow-sm"
                >
                  {l}
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-lg font-bold text-slate-900">3.2 International Languages (8)</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {intlLanguages.map((l) => (
                <div
                  key={l}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-900 shadow-sm"
                >
                  {l}
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-lg font-bold text-slate-900">3.3 Switching Languages</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              The language selector appears in the top bar of the chat interface. Tapping it opens
              a language picker showing the same list as the onboarding screen. Selecting a new
              language:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {switchingEffects.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4 — Chat Interface */}
      <section id="interface" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={4} title="The Chat Interface" icon={LayoutGrid} />
            <p className="mt-6 text-base text-slate-700">
              The Chat Interface is the heart of Jantra Web. It has been designed to be intuitive,
              clean and distraction-free across every screen size. This section explains each
              component of the interface and how to use it efficiently.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">4.1 Interface Layout</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">The interface is divided into three main areas:</p>
            <div className="mt-4 space-y-3">
              {interfaceAreas.map((a) => (
                <div key={a.area} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-brand-700">{a.area}</p>
                  <p className="mt-1 text-sm text-slate-700">{a.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              On mobile devices, the sidebar collapses automatically and can be opened via the
              hamburger menu icon in the top-left corner.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">4.2 Sidebar Navigation</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              The sidebar lists all six chat modes as clearly-labelled buttons. Click or tap any
              mode to switch instantly. Each mode maintains its own separate conversation history,
              so switching modes does not erase your other conversations.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              The sidebar also contains the language picker, a link to your profile, the theme
              toggle (light/dark) and a quick link to the pricing page.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">4.3 Message Input</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              The text input field is located at the bottom of the chat area. You can:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {inputCapabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h3 className="mt-10 text-lg font-bold text-slate-900">4.4 Receiving Responses</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Once you send a message, Jantra Web shows a typing indicator while the AI prepares
              its reply. Responses are streamed into the chat as they are generated, so you
              usually see the first words within one or two seconds. Long answers are formatted
              with bullet points, headings and tables where appropriate.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">4.5 Language Switching Mid-Session</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              The language switcher is accessible at any time. Switching language rotates your
              session: the chat history for the current mode is cleared and a fresh session starts
              in the new language. This ensures the AI produces high-quality responses natively
              in the chosen language rather than mixing languages.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">4.6 Sharing a Conversation</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Jantra Web includes a built-in share feature. Tap the share icon on any message to
              copy the message text to your clipboard or share it via your device's native share
              sheet. This is useful for sending a helpful AI response to a friend or colleague.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">4.7 Light &amp; Dark Themes</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Jantra Web supports both light and dark themes. Toggle the theme using the sun/moon
              icon in the top bar. The choice is remembered across sessions on the same device.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Chat Modes */}
      <section id="modes" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={5} title="Chat Modes" icon={Layers} />
            <p className="mt-6 text-base text-slate-700">
              Jantra Web offers five distinct chat modes, each tailored for a specific use case.
              You can switch between modes at any time using the sidebar; each mode keeps its own
              history and context.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-brand-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Mode</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {modes.map((m) => (
                    <tr key={m.mode}>
                      <td className="whitespace-nowrap px-4 py-3 align-top">
                        <span className="inline-flex items-center gap-2 font-medium text-slate-900">
                          <m.icon className="h-4 w-4 text-brand-600" aria-hidden />
                          {m.mode}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-700">{m.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 text-lg font-bold text-slate-900">5.1 Chat Mode</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Chat Mode is the default general-purpose AI assistant. Use it for any kind of
              open-ended question or conversation.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-700">Typical uses</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {chatUses.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm italic text-slate-500">
              Welcome message: "Hello! I am Jantra Bot. How can I help you today?"
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">5.2 Translate Mode</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Translate Mode provides instant translation between any of the 19 supported
              languages. The interface renders a side-by-side panel showing the original input and
              the translated output for easy comparison.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-700">How to use</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
              {translateSteps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="mt-4 rounded-lg bg-brand-50 p-4 text-xs text-brand-900 ring-1 ring-inset ring-brand-100">
              <strong>Tip:</strong> Translate Mode works best with short-to-medium length text — a
              few sentences to a paragraph at a time. Break very long documents into smaller
              chunks and translate each section in turn for the most accurate results.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">5.3 Dictionary Mode</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Dictionary Mode acts as a rich multilingual dictionary. Type any word — in your own
              language or another language — and receive:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {dictionaryReturns.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <h3 className="mt-10 text-lg font-bold text-slate-900">5.4 Play Mode</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Play Mode is an interactive language game arena. It is a fun, low-pressure way to
              practise vocabulary in any of the 19 supported languages.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-brand-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Game</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">How it works</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {games.map((g) => (
                    <tr key={g.name}>
                      <td className="whitespace-nowrap px-4 py-3 align-top font-medium text-slate-900">{g.name}</td>
                      <td className="px-4 py-3 text-slate-700">{g.body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              To start, type the name of the game you want to play (for example, "Hangman" or
              "Quiz") and the AI will guide you through it turn by turn.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">5.5 Accounts Mode</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Accounts Mode is a unique financial assistant that uses AI vision to read payment-app
              screenshots (Google Pay, PhonePe, Paytm) and automatically log your transactions.
              There is no manual data entry — just upload a screenshot.
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand-700">5.5.1 Adding a transaction</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
              {accountsSteps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand-700">5.5.2 Accounts commands</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Once transactions are recorded, use the following slash-commands to query and manage
              your data:
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-brand-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Command</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">What it does</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {accountsCommands.map((c) => (
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
            <p className="mt-4 rounded-lg bg-amber-50 p-4 text-xs text-amber-900 ring-1 ring-inset ring-amber-100">
              <strong>Note:</strong> Accounts data lives inside your current session. Use{' '}
              <code className="rounded bg-amber-100 px-1 py-0.5">/export</code> regularly to
              download a CSV backup before clearing or rotating your session.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — User Profile */}
      <section id="profile" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={6} title="User Profile" icon={UserCircle2} />
            <p className="mt-6 text-base text-slate-700">
              Your profile page gives you a personalised view of your account and lets you update
              your display information.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">6.1 Accessing Your Profile</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Click the profile avatar (your initial letter shown as a circular badge) in the
              top-right corner of the interface to open the Profile page.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">6.2 Profile Information</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-brand-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Field</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {profileFields.map((p) => (
                    <tr key={p.f}>
                      <td className="whitespace-nowrap px-4 py-3 align-top font-medium text-slate-900">{p.f}</td>
                      <td className="px-4 py-3 text-slate-700">{p.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 text-lg font-bold text-slate-900">6.3 Editing Your Profile</h3>
            <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-slate-700">
              <li>Open the Profile page from the avatar in the top-right.</li>
              <li>Tap the Edit icon next to Name or Username.</li>
              <li>Type the new value.</li>
              <li>Tap Save to confirm.</li>
            </ol>
            <p className="mt-4 rounded-lg bg-amber-50 p-4 text-xs text-amber-900 ring-1 ring-inset ring-amber-100">
              <strong>Note:</strong> Email and country cannot be edited after registration. If you
              need to change either, contact Coding Ryder support.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 — Plans & Tiers */}
      <section id="plans" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={7} title="Plans & Tiers" icon={CreditCard} />
            <p className="mt-6 text-base text-slate-700">
              Jantra Web uses a tiered plan system. All users start on the Rookie tier at no cost.
              Additional tiers are planned for future release.
            </p>

            <div className="mt-8 space-y-4">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={
                    t.status === 'Active'
                      ? 'rounded-2xl border-2 border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-100'
                      : 'rounded-2xl border border-slate-200 bg-white p-6'
                  }
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">{t.name}</h3>
                    <span
                      className={
                        t.status === 'Active'
                          ? 'rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800'
                          : 'rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600'
                      }
                    >
                      {t.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{t.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-lg bg-amber-50 p-4 text-xs text-amber-900 ring-1 ring-inset ring-amber-100">
              <strong>Note:</strong> All current features are available on the free Rookie tier.
              No payment or credit card is required to use Jantra Web today. When new tiers
              launch, existing users will be notified in-app.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 — Privacy */}
      <section id="privacy" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={8} title="Privacy & Security" icon={ShieldCheck} />
            <p className="mt-6 text-base text-slate-700">
              Jantra Web is built with a privacy-first philosophy. We collect only the data that is
              strictly necessary to operate the service.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">8.1 Data We Collect</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-brand-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Data</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Why it is collected</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {dataCollected.map((d) => (
                    <tr key={d.d}>
                      <td className="whitespace-nowrap px-4 py-3 align-top font-medium text-slate-900">{d.d}</td>
                      <td className="px-4 py-3 text-slate-700">{d.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 text-lg font-bold text-slate-900">8.2 Data We Do Not Collect</h3>
            <ul className="mt-4 space-y-2">
              {dataNotCollected.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-slate-700">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-lg font-bold text-slate-900">8.3 Session Management</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Your session is identified by a unique ID stored in your browser's local storage. No
              passwords are used. If you clear your browser data, your session will be reset.
              Switching to a new browser or device will start a fresh session linked to the same
              email address.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">8.4 How Your Data Is Used by the AI</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Messages you send are processed by Google Gemini 2.5 Flash to generate a reply. Once
              the reply has been generated, the message and response are stored only in your
              personal session history so that follow-up messages have context. They are never
              used to train external AI models from within Jantra Web.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">8.5 Terms &amp; Privacy Policy</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              By using Jantra Web, you agree to the Terms of Service and Privacy Policy published
              by Coding Ryder. You can read the full policy at{' '}
              <a
                href="https://codingryder.com/jantrabot_legal.html"
                className="font-medium text-brand-700 underline decoration-brand-200 underline-offset-2 hover:text-brand-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                codingryder.com/jantrabot_legal.html
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Section 9 — Tips */}
      <section id="tips" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={9} title="Tips & Best Practices" icon={Lightbulb} />
            <div className="mt-8 space-y-10">
              {tipGroups.map((g) => (
                <div key={g.title}>
                  <h3 className="text-lg font-bold text-slate-900">{g.title}</h3>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 — Troubleshooting */}
      <section id="troubleshooting" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <SectionHeading n={10} title="Troubleshooting" icon={Wrench} />
            <p className="mt-6 text-base text-slate-700">
              Most issues with Jantra Web can be resolved by refreshing the page or starting a new
              session. The table below lists common situations and their solutions.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-brand-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Problem</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">What to try</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {troubleshooting.map((t) => (
                    <tr key={t.problem}>
                      <td className="px-4 py-3 align-top font-medium text-slate-900">{t.problem}</td>
                      <td className="px-4 py-3 text-slate-700">{t.solution}</td>
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
                  <dt className="text-base font-semibold text-brand-700">Q. {f.q}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-700">A. {f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Section 12 — Technical Reference */}
      <section id="technical" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <SectionHeading n={12} title="Technical Reference" icon={Cpu} />
            <p className="mt-6 text-base text-slate-700">
              This section is intended for developers and technically-curious users. It is not
              required reading for everyday use of Jantra Web.
            </p>

            <h3 className="mt-10 text-lg font-bold text-slate-900">12.1 Technology Stack</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-brand-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Layer</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Technology</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {techStack.map((s) => (
                    <tr key={s.layer}>
                      <td className="whitespace-nowrap px-4 py-3 align-top font-medium text-slate-900">{s.layer}</td>
                      <td className="whitespace-nowrap px-4 py-3 align-top text-slate-700">{s.tech}</td>
                      <td className="px-4 py-3 text-slate-700">{s.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 text-lg font-bold text-slate-900">12.2 Key API Endpoints</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-brand-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Method</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Endpoint</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {endpoints.map((e) => (
                    <tr key={e.endpoint + e.method}>
                      <td className="whitespace-nowrap px-4 py-3 align-top">
                        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold">{e.method}</code>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 align-top">
                        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">{e.endpoint}</code>
                      </td>
                      <td className="px-4 py-3 text-slate-700">{e.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 text-lg font-bold text-slate-900">12.3 Request Example</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">A typical chat request looks like:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-xs leading-6 text-slate-100">
{`POST /chat
Content-Type: application/json

{
  "session_id": "abc-123",
  "message": "Translate 'good morning' into Hindi",
  "mode": "translate",
  "language_code": "hin"
}`}
            </pre>

            <h3 className="mt-10 text-lg font-bold text-slate-900">12.4 Supported Modes (API)</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-brand-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Mode value</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-900">Use case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {apiModes.map((m) => (
                    <tr key={m.value}>
                      <td className="whitespace-nowrap px-4 py-3 align-top">
                        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">{m.value}</code>
                      </td>
                      <td className="px-4 py-3 text-slate-700">{m.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13 — Glossary */}
      <section id="glossary" className="section scroll-mt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={13} title="Glossary" icon={ListChecks} />
            <dl className="mt-8 space-y-4">
              {glossary.map((g) => (
                <div key={g.term} className="rounded-xl border border-slate-200 bg-white p-5">
                  <dt className="text-sm font-semibold text-brand-700">{g.term}</dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-700">{g.meaning}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Section 14 — Support & Contact */}
      <section id="support" className="section scroll-mt-24 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading n={14} title="Support & Contact" icon={PhoneCall} />

            <h3 className="mt-10 text-lg font-bold text-slate-900">14.1 Getting Help</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              If you encounter any issues or have questions about Jantra Web, the following
              resources are available:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Visit the developer website at codingryder.com for updates and announcements.</li>
              <li>Follow @codingryder on Twitter/X for news and feature previews.</li>
              <li>Review the Terms of Service and Privacy Policy for legal information.</li>
              <li>Re-read this user guide — most everyday questions are answered in Sections 5 and 9.</li>
            </ul>

            <h3 className="mt-10 text-lg font-bold text-slate-900">14.2 Reporting Issues</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              If you experience a bug or unexpected behaviour, please include the following details
              in your report so we can reproduce and fix the issue quickly:
            </p>
            <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-slate-700">
              <li>The mode you were using (Chat, Translate, Dictionary, Play or Accounts).</li>
              <li>The language selected at the time.</li>
              <li>The device and browser you were using (e.g. iPhone Safari, Windows Chrome).</li>
              <li>The message or action that caused the issue.</li>
              <li>Any error message shown on screen.</li>
            </ol>

            <h3 className="mt-10 text-lg font-bold text-slate-900">14.3 Useful Links</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {supportLinks.map((l) => (
                <a
                  key={l.resource}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-300 hover:bg-brand-50/50"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{l.resource}</p>
                  <p className="mt-2 text-sm font-semibold text-brand-700">{l.url}</p>
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-center text-white">
              <p className="text-xl font-bold">Ready to start?</p>
              <a
                href="https://jantraweb.codingryder.com"
                className="mt-3 inline-flex items-center gap-2 text-lg font-semibold underline decoration-2 underline-offset-4 hover:text-brand-50"
              >
                jantraweb.codingryder.com
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
            </div>

            <p className="mt-8 text-center text-xs text-slate-500">
              Jantra Web is a product of Coding Ryder. Free to use. Powered by Google Gemini 2.5 Flash.
              <br />
              © 2026 Coding Ryder. All rights reserved.
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
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        <span className="text-brand-600">{n}.</span> {title}
      </h2>
    </div>
  );
}
