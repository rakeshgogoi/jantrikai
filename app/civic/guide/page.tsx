import type { Metadata } from 'next';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  Landmark,
  BookOpen,
  Layers,
  CheckCircle2,
  ListChecks,
  ScrollText,
  FileSignature,
  Users,
  Bell,
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

const ACCENT = 'amber' as const;

export const metadata: Metadata = {
  title: 'Jantra Civic User Guide - Government services on WhatsApp',
  description:
    'The complete Jantra Civic user guide: schemes, services, forms, your representatives, alerts, commands, FAQs, and technical specifications. On WhatsApp, in your language.',
  alternates: { canonical: '/civic/guide/' },
  openGraph: {
    title: 'Jantra Civic User Guide - Government services on WhatsApp',
    description:
      'Find schemes, look up civic services, draft letters, find your MLA/MP, and stay informed - on WhatsApp, in your language.',
    url: '/civic/guide/',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jantra Civic User Guide',
    description:
      'Find schemes, look up civic services, draft letters, find your MLA/MP, and stay informed - on WhatsApp.',
  },
};

const toc: TocItem[] = [
  { n: 1, id: 'introduction', title: 'Introduction', sub: "What Jantra Civic is and who it's for" },
  { n: 2, id: 'key-features', title: 'Key Features', sub: 'Six core capabilities at a glance' },
  { n: 3, id: 'getting-started', title: 'Getting Started', sub: 'Enter Civic mode in under a minute' },
  { n: 4, id: 'menu', title: 'User Guide - Main Menu', sub: 'The five menu options' },
  { n: 5, id: 'services', title: 'Civic Services', sub: 'Ration, DL, Aadhaar, certificates' },
  { n: 6, id: 'schemes', title: 'Government Schemes', sub: 'Profile-based scheme matching' },
  { n: 7, id: 'forms', title: 'Forms & Letters', sub: 'Draft RTIs, complaints, leave letters' },
  { n: 8, id: 'representatives', title: 'Know Your Representatives', sub: 'MLA / MP lookup by constituency' },
  { n: 9, id: 'alerts', title: 'Alerts, Jobs & Tenders', sub: 'Local civic alerts and listings' },
  { n: 10, id: 'commands', title: 'Commands Reference', sub: 'Shortcut commands explained' },
  { n: 11, id: 'tips', title: 'Tips & Tricks', sub: 'Power-user advice' },
  { n: 12, id: 'faqs', title: 'FAQs', sub: 'Frequently asked questions' },
  { n: 13, id: 'specs', title: 'Technical Specifications', sub: 'Architecture & data sources' },
  { n: 14, id: 'contact', title: 'Contact & Feedback', sub: 'How to reach us' },
];

const heroStats = [
  { label: 'States & UTs', value: 'All' },
  { label: 'Languages', value: '10' },
  { label: 'On WhatsApp', value: 'Yes' },
  { label: 'Price', value: 'Free' },
];

const audiences = [
  {
    label: 'Everyday citizens',
    body:
      'Anyone trying to figure out a government scheme, service, or form - without trawling clunky websites or visiting offices.',
  },
  {
    label: 'Rural & semi-urban users',
    body: 'Get scheme and service info in your native language. No English needed, no app needed.',
  },
  {
    label: 'First-time applicants',
    body:
      'Documents, eligibility, fees, where to apply - all answered in plain language. We point you to the official portals.',
  },
  {
    label: 'Anyone drafting an application',
    body:
      'RTI, civic complaints, leave letters, school admission, address proof, transfer - opens as a quick tap-to-fill form.',
  },
  {
    label: 'Engaged citizens',
    body: 'Find your MLA / MP, follow local alerts, browse scheme listings, and stay informed.',
  },
];

const features = [
  {
    icon: ListChecks,
    title: 'Civic Services Lookup',
    body:
      'Ration card, driving licence, Aadhaar, PAN, certificates and more - eligibility, documents, where to apply, fees, and expected timelines.',
  },
  {
    icon: Landmark,
    title: 'Government Schemes Matching',
    body:
      'Build a quick profile (age, gender, occupation, income) and we shortlist central and state schemes you may qualify for - no irrelevant noise.',
  },
  {
    icon: FileSignature,
    title: 'Form & Letter Drafting',
    body:
      'Generate civic complaints, RTI requests, address-proof letters, school admission letters, transfer requests, and leave letters - via simple WhatsApp Flows.',
  },
  {
    icon: Users,
    title: 'Your Representatives',
    body:
      'Look up the MLA and MP for your Assembly Constituency, with party, phone, email, and office address where on record.',
  },
  {
    icon: Bell,
    title: 'Local Civic Alerts',
    body: 'Power cuts, water disruptions, road closures, and public notices for your area, in your language.',
  },
  {
    icon: ScrollText,
    title: 'Jobs & Tenders',
    body: 'Recent government job and tender listings relevant to your state, with key dates and direct links.',
  },
];

const gettingStarted = [
  {
    step: 'Step 1',
    title: 'Open Jantra Bot',
    body: "Save +91 63612 45647 in WhatsApp and send Hi. If you've used Jantra Bot before, just open the chat.",
  },
  {
    step: 'Step 2',
    title: 'Enter Civic',
    body: 'Type /civic - or send /mode and pick option 6 · Civic.',
  },
  {
    step: 'Step 3',
    title: 'Pick your state',
    body: 'Reply with the number or type the state / UT name. Your state is remembered for future visits - change anytime with /state.',
  },
  {
    step: 'Step 4',
    title: 'Use the menu',
    body: 'Tap a menu option. No commands needed - almost everything happens by tapping list items in the WhatsApp menu.',
  },
  {
    step: 'Step 5',
    title: 'Get the answer',
    body: 'Jantra Civic searches its knowledge base and trusted government sources, then replies in your chosen language. Drill in or save.',
  },
];

const menu = [
  {
    n: 1,
    title: 'Ask about civic services',
    body: 'Lookup for ration card, driving licence, Aadhaar, PAN, certificates, and other government services - eligibility, documents, and where to apply.',
    ref: 'Section 5',
    refId: 'services',
  },
  {
    n: 2,
    title: 'Find schemes for me',
    body: 'Profile-matched central and state schemes you may qualify for, based on a short profile.',
    ref: 'Section 6',
    refId: 'schemes',
  },
  {
    n: 3,
    title: 'Help with a form or letter',
    body: 'Draft civic complaints, RTI requests, leave applications, address proofs, school admission letters, and more.',
    ref: 'Section 7',
    refId: 'forms',
  },
  {
    n: 4,
    title: 'Know your representatives',
    body: 'MLA and MP lookup for your Assembly Constituency, with contact details.',
    ref: 'Section 8',
    refId: 'representatives',
  },
  {
    n: 5,
    title: 'Civic alerts in my area',
    body: 'Power, water, traffic, public notices, and other local civic alerts.',
    ref: 'Section 9',
    refId: 'alerts',
  },
];

const services = [
  { service: 'Ration card', q: 'Eligibility, documents, BPL/APL category, where to apply, linkage with Aadhaar.' },
  { service: 'Driving licence', q: "Learner's licence, permanent licence, renewal, address change, fees and RTO links." },
  { service: 'Aadhaar', q: 'Enrolment centres, updates (name, address, mobile), biometric updates.' },
  { service: 'PAN card', q: 'New PAN, corrections, linking with Aadhaar, fees and online channels.' },
  { service: 'Birth & death certificate', q: 'Where to apply, supporting documents, late registration.' },
  { service: 'Income / caste / domicile', q: 'Issuing authority, supporting docs, validity, fees.' },
  { service: 'Voter ID', q: 'Enrolment, corrections, address change, online portal links.' },
  { service: 'Property / land records', q: 'RTC / khata / mutation - the state-specific portals.' },
];

const schemeSteps = [
  { n: 1, title: 'Build your profile', body: 'Tap the profile Flow and share basic details - age, gender, occupation, and income bracket. Stored only for scheme matching.' },
  { n: 2, title: 'We filter', body: 'Profile is matched against central and state-scheme rules. Schemes you do not qualify for are dropped.' },
  { n: 3, title: 'Get a shortlist', body: 'Receive a focused list of schemes you may qualify for, with a brief summary, eligibility, and where to apply.' },
  { n: 4, title: 'Drill in or save', body: 'Tap any scheme for more detail. Re-run the search anytime by typing /schemes. Update your profile with /profile.' },
];

const schemeCategories = [
  'Education & scholarships (students, single parents)',
  'Health & insurance (Ayushman Bharat, state-specific)',
  'Agriculture & farmer support',
  'Housing & urban schemes (PMAY-U, state housing boards)',
  'Women & child welfare',
  'Senior citizen support & pension schemes',
  'Skill development, jobs & self-employment',
  'Differently-abled (Divyangjan) schemes',
  'State-specific welfare and employment schemes',
];

const formTemplates = [
  { template: 'Civic complaint', body: 'A formal complaint letter addressed to BDO / municipal / police / public-service authority about a civic problem.' },
  { template: 'RTI request', body: 'A Right to Information application asking a specified PIO for information on a defined topic.' },
  { template: 'Address proof letter', body: 'A self-declaration / self-attested letter confirming your residential address, usable as supporting proof.' },
  { template: 'Leave application', body: 'A polite leave-of-absence application addressed to a school principal, office manager, or supervisor.' },
  { template: 'School admission letter', body: "A request letter to a school principal for admission, with the child's details and parents' particulars." },
  { template: 'Transfer request', body: 'A formal letter from an employee or student requesting a transfer to a specified branch or location.' },
  { template: 'Govt-related business letter', body: 'A general-purpose government-correspondence letter for business owners (registration, licence, NOC follow-ups).' },
  { template: 'General service query', body: 'Free-form letter for any service-specific clarification or follow-up.' },
];

const repSteps = [
  { n: 1, title: 'Pick your district', body: 'From the main menu, tap Know your representatives. Pick your district from the list (filtered to your state).' },
  { n: 2, title: 'Pick your Assembly Constituency', body: 'Pick your AC from the list filtered to your district. Two-screen design keeps the lists short and easy to scroll.' },
  { n: 3, title: 'Get your representatives', body: 'Jantra Civic returns the MLA and MP for that constituency - name, party, phone, email, and office address where on record.' },
  { n: 4, title: 'Use the contact details', body: 'Tap the phone or email straight from WhatsApp. Cross-check on the official ECI / Lok Sabha portal before contacting.' },
];

const commands = [
  { cmd: '/civic', does: 'Open the Jantra Civic main menu.' },
  { cmd: '/state', does: 'Change your state or UT.' },
  { cmd: '/schemes', does: 'Jump straight to scheme matching.' },
  { cmd: '/profile', does: 'Re-do or update your schemes profile.' },
  { cmd: '/menu', does: 'Global Jantra Bot menu (across modes).' },
  { cmd: '/lang', does: 'Change language (10 options).' },
  { cmd: '/help', does: 'Show the in-app help cheatsheet.' },
  { cmd: '0', does: 'Exit Jantra Civic and return to Jantra Bot.' },
];

const tips = [
  { title: 'Set the right state first', body: 'Many entitlements and services are state-specific. If you have moved, update with /state before you search - it changes the data you see.' },
  { title: 'Complete your profile', body: 'More accurate profile means more relevant schemes. Takes ~30 seconds; you can update anytime with /profile.' },
  { title: 'Tap menus, not commands', body: 'Jantra Civic is designed for tapping. The list menus produce faster, more accurate routes than free-form questions.' },
  { title: 'Use your language', body: 'All replies follow your /lang setting. Civic content is translated to your language - change anytime.' },
  { title: 'Verify before applying', body: 'Always cross-check on the official portal before paying any fee. Jantra Civic surfaces information; it does not file applications for you.' },
  { title: 'Save the letter you generated', body: "After a Flow returns a letter, forward it to yourself or copy it to your notes - WhatsApp won't keep an editable version indefinitely." },
  { title: 'Re-open Civic any time', body: 'Civic mode persists across sessions. Even days later, type /civic to land back on the menu with your state remembered.' },
];

const faqs = [
  { q: 'Is Jantra Civic free?', a: 'Yes. Jantra Civic is currently free, like the rest of Jantra Bot. Standard WhatsApp data charges may apply.' },
  { q: 'Do I need to install anything?', a: "No. Jantra Civic runs entirely inside WhatsApp. If you have Jantra Bot's number saved, you already have Civic too." },
  { q: 'Will Jantra Civic submit forms on my behalf?', a: 'No. Jantra Civic generates draft letters and points you to official portals - you remain in control of every submission.' },
  { q: 'Which states are covered?', a: 'All Indian states and Union Territories. Some states have deeper data (full services KB); states marked "(limited)" on the picker still answer core queries.' },
  { q: 'How is scheme matching done?', a: "Your profile (age, gender, occupation, income) is matched against central and state-scheme eligibility rules - schemes you don't qualify for are dropped before you see them." },
  { q: 'What data is stored about me?', a: "Only what's needed to remember your state and (if you build one) your schemes profile. You can re-do or clear your profile anytime with /profile." },
  { q: 'Are the representative details verified?', a: 'Representative data is sourced from publicly available directories. Always cross-check on the official ECI / Lok Sabha portal before reaching out.' },
  { q: 'How recent are jobs and tenders?', a: 'Jobs and tenders are refreshed on a rolling schedule from trusted government feeds. Treat them as a quick scan, not a compliance-grade source.' },
  { q: 'Can I use Jantra Civic in my language?', a: 'Yes - all 10 Jantra Bot languages are supported. Switch with /lang anytime.' },
  { q: 'How do I leave Civic mode?', a: 'Type 0 to return to Jantra Bot. Civic state is preserved so you can come back later.' },
];

const specs = [
  { k: 'Platform', v: 'WhatsApp Cloud API (Meta) for Jantra Civic surface' },
  { k: 'AI / Language Model', v: 'Google Gemini 2.5 Flash with grounded search' },
  { k: 'Backend Framework', v: 'Python · FastAPI · async dispatcher' },
  { k: 'Database', v: 'PostgreSQL on Neon (serverless)' },
  { k: 'Hosting', v: 'Render (cloud deployment, always-on)' },
  { k: 'State Coverage', v: 'All Indian states & UTs' },
  { k: 'Forms', v: 'Native WhatsApp Flows (tap-to-fill)' },
  { k: 'Knowledge Base', v: 'Curated services KB · representative directories · schemes catalogue · grounded web search' },
  { k: 'Languages', v: '10 (same set as Jantra Bot)' },
  { k: 'Modes', v: 'Civic services · Schemes · Forms · Reps · Alerts · Jobs & Tenders' },
  { k: 'Current Status', v: 'Beta - actively developed by Coding Ryder' },
];

const dataSources = [
  'Central & state government portals (official scheme pages)',
  'Election Commission / Lok Sabha directories for representatives',
  'State e-procurement portals for tenders',
  'Government job boards and notifications',
  'Curated services knowledge base (state-by-state)',
];

export default function JantraCivicGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-amber-50/70 via-amber-50/20 to-white">
        <div className="container-page py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              Complete user guide
            </span>
            <h1 className="heading-display mt-5">Jantra Civic - User Guide</h1>
            <p className="prose-lead mt-5">
              Government & civic help on WhatsApp. Schemes · Services · Representatives · Forms ·
              Alerts.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="https://wa.me/916361245647" className="btn-primary">
                Try Jantra Civic
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link href="/civic/" className="btn-secondary">
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Back to Jantra Civic
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-amber-100 bg-white/70 px-4 py-3 text-center shadow-sm backdrop-blur"
                >
                  <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">{s.label}</dt>
                  <dd className="mt-1 text-lg font-bold text-amber-700">{s.value}</dd>
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
              <SectionHeading n={1} title="Introduction" icon={Landmark} />
              <p className="prose-lead mt-6">
                Jantra Civic is a WhatsApp service that helps you navigate Indian government - find
                schemes you qualify for, look up civic services (ration card, driving licence,
                certificates), know your elected representatives, get help drafting forms and
                letters, and stay informed about alerts in your area. All in your language, with no
                app to install.
              </p>
              <p className="mt-5 text-base leading-7 text-slate-700">
                Jantra Civic is built into Jantra Bot. Type{' '}
                <code className="rounded bg-slate-100 px-1.5 py-0.5">/civic</code> from any Jantra
                Bot conversation to enter Civic mode - or pick option 6 from{' '}
                <code className="rounded bg-slate-100 px-1.5 py-0.5">/mode</code>.
              </p>

              <h3 className="mt-10 text-xl font-bold text-slate-900">Who is it for?</h3>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {audiences.map((a) => (
                  <div
                    key={a.label}
                    className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amber-300 hover:shadow-sm"
                  >
                    <h4 className="text-sm font-semibold text-amber-700">{a.label}</h4>
                    <p className="mt-1.5 text-sm leading-6 text-slate-700">{a.body}</p>
                  </div>
                ))}
              </div>

              <Callout kind="mission" title="Our mission">
                To make Indian government accessible to every citizen in their own language, on
                the platform they already use - without barriers, without forms, without
                paperwork.
              </Callout>
            </section>

            {/* Section 2 — Key Features */}
            <section id="key-features" className="scroll-mt-24">
              <SectionHeading n={2} title="Key Features" icon={Layers} />
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-amber-300 hover:shadow-md"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition group-hover:bg-amber-100">
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
                You can be using Jantra Civic in under a minute.
              </p>
              <ol className="mt-6 space-y-3">
                {gettingStarted.map((s, idx) => (
                  <li
                    key={s.step}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-amber-700">{s.step}</p>
                      <h3 className="mt-0.5 text-base font-semibold text-slate-900">{s.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-700">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a
                href="https://wa.me/916361245647"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                Open Jantra Bot, then type: /civic
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </section>

            {/* Section 4 — Main Menu */}
            <section id="menu" className="scroll-mt-24">
              <SectionHeading n={4} title="User Guide - the Main Menu" icon={Terminal} />
              <p className="mt-6 text-base text-slate-700">
                Every Jantra Civic session opens with a five-option main menu, once your state is
                set. Each option is explained in detail in later sections.
              </p>
              <ol className="mt-6 space-y-3">
                {menu.map((m) => (
                  <li key={m.n} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                        {m.n}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-slate-900">{m.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-700">{m.body}</p>
                        <a
                          href={`#${m.refId}`}
                          className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-amber-700 hover:text-amber-800"
                        >
                          → {m.ref}
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-slate-600">
                You can return to this menu anytime by typing{' '}
                <code className="rounded bg-slate-100 px-1.5 py-0.5">/civic</code>. To exit Jantra
                Civic and return to Jantra Bot, type{' '}
                <code className="rounded bg-slate-100 px-1.5 py-0.5">0</code>.
              </p>
            </section>

            {/* Section 5 — Civic Services */}
            <section id="services" className="scroll-mt-24">
              <SectionHeading n={5} title="Civic Services" icon={ListChecks} />
              <p className="mt-6 text-base text-slate-700">
                Lookup answers for everyday government services. Ask in natural language (in any
                of the supported languages) or pick from the menu - Jantra Civic returns
                eligibility, required documents, fees, and where to apply.
              </p>

              <h3 className="mt-8 text-lg font-bold text-slate-900">Common services covered</h3>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-amber-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-amber-900">Service</th>
                      <th className="px-4 py-3 text-left font-semibold text-amber-900">
                        Typical questions answered
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {services.map((s) => (
                      <tr key={s.service} className="hover:bg-amber-50/40">
                        <td className="whitespace-nowrap px-4 py-3 align-top font-medium text-slate-900">
                          {s.service}
                        </td>
                        <td className="px-4 py-3 text-slate-700">{s.q}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Callout kind="note" title="Coverage">
                Coverage varies by state. Better-covered states return more specific answers;
                states marked "(limited)" on the picker still answer core queries from grounded
                web search.
              </Callout>
            </section>

            {/* Section 6 — Schemes */}
            <section id="schemes" className="scroll-mt-24">
              <SectionHeading n={6} title="Government Schemes" icon={Landmark} />
              <p className="mt-6 text-base text-slate-700">
                Jantra Civic shortlists central and state schemes you may qualify for, based on a
                short profile you build inside WhatsApp. No scrolling through irrelevant scheme
                catalogues.
              </p>

              <h3 className="mt-8 text-lg font-bold text-slate-900">How matching works</h3>
              <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {schemeSteps.map((s) => (
                  <li
                    key={s.n}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-amber-600 text-xs font-semibold text-white">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                      <p className="mt-1 text-sm text-slate-700">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <h3 className="mt-10 text-lg font-bold text-slate-900">Categories covered</h3>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {schemeCategories.map((c) => (
                  <div
                    key={c}
                    className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-inset ring-slate-200"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-600" aria-hidden />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7 — Forms & Letters */}
            <section id="forms" className="scroll-mt-24">
              <SectionHeading n={7} title="Forms & Letters" icon={FileSignature} />
              <p className="mt-6 text-base text-slate-700">
                Drafting a formal letter is one of the slowest parts of dealing with government or
                institutions. Jantra Civic generates the draft for you - you just fill a
                tap-friendly mini-form on WhatsApp.
              </p>

              <h3 className="mt-8 text-lg font-bold text-slate-900">Available form templates</h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {formTemplates.map((t) => (
                  <div key={t.template} className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-amber-700">{t.template}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{t.body}</p>
                  </div>
                ))}
              </div>
              <Callout kind="tip" title="How it works">
                Each form opens as a WhatsApp Flow - a native tap-to-fill experience. After you
                submit, the letter is generated and sent back so you can copy, save, or forward
                it.
              </Callout>
            </section>

            {/* Section 8 — Representatives */}
            <section id="representatives" className="scroll-mt-24">
              <SectionHeading n={8} title="Know Your Representatives" icon={Users} />
              <p className="mt-6 text-base text-slate-700">
                Find out who represents you in the State Assembly and Parliament. Jantra Civic
                uses your selected state plus an Assembly Constituency picker to look up your MLA
                and MP.
              </p>

              <h3 className="mt-8 text-lg font-bold text-slate-900">How the lookup works</h3>
              <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {repSteps.map((s) => (
                  <li
                    key={s.n}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-amber-600 text-xs font-semibold text-white">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                      <p className="mt-1 text-sm text-slate-700">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Callout kind="note" title="Coverage">
                Representative data is sourced from publicly available directories. Coverage
                varies by state; states without curated AC data show a placeholder.
              </Callout>
            </section>

            {/* Section 9 — Alerts / Jobs / Tenders */}
            <section id="alerts" className="scroll-mt-24">
              <SectionHeading n={9} title="Alerts, Jobs & Tenders" icon={Bell} />

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Bell className="h-5 w-5 text-amber-600" aria-hidden />
                  <h3 className="mt-3 text-base font-bold text-slate-900">Local civic alerts</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Short notices for your selected area - power cuts, water disruptions, road
                    closures, and public notices published by state and municipal authorities.
                    Scoped to your state and surfaced in your language.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <Users className="h-5 w-5 text-amber-600" aria-hidden />
                  <h3 className="mt-3 text-base font-bold text-slate-900">Government jobs</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Recent state and central government job announcements, including department,
                    post, key dates, and the official application portal. Useful for quick
                    scanning without trawling individual sites.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <ScrollText className="h-5 w-5 text-amber-600" aria-hidden />
                  <h3 className="mt-3 text-base font-bold text-slate-900">Tenders</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Recent tender notices relevant to your state, with publishing department, key
                    dates, and where to download the tender document. Quick visibility for small
                    businesses and contractors.
                  </p>
                </div>
              </div>

              <Callout kind="note" title="Freshness">
                Jobs and tenders are refreshed on a rolling schedule from trusted government
                feeds. For mission-critical applications, always cross-check on the issuing
                department's official portal.
              </Callout>
            </section>

            {/* Section 10 — Commands */}
            <section id="commands" className="scroll-mt-24">
              <SectionHeading n={10} title="Commands Reference" icon={Terminal} />
              <p className="mt-6 text-base text-slate-700">
                Most users navigate Jantra Civic entirely through menu taps. These commands are
                optional shortcuts.
              </p>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-amber-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-amber-900">Command</th>
                      <th className="px-4 py-3 text-left font-semibold text-amber-900">What it does</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {commands.map((c) => (
                      <tr key={c.cmd} className="hover:bg-amber-50/40">
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

            {/* Section 11 — Tips */}
            <section id="tips" className="scroll-mt-24">
              <SectionHeading n={11} title="Tips & Tricks" icon={Lightbulb} />
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {tips.map((t) => (
                  <div key={t.title} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="flex items-start gap-2 text-base font-semibold text-amber-700">
                      <Lightbulb className="mt-0.5 h-4 w-4 flex-none" aria-hidden />
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{t.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 12 — FAQs */}
            <section id="faqs" className="scroll-mt-24">
              <SectionHeading n={12} title="Frequently Asked Questions" icon={HelpCircle} />
              <p className="mt-4 text-sm text-slate-600">Tap any question to expand the answer.</p>
              <div className="mt-6 space-y-3">
                {faqs.map((f) => (
                  <FAQItem key={f.q} q={f.q} a={f.a} accent={ACCENT} />
                ))}
              </div>
            </section>

            {/* Section 13 — Specs */}
            <section id="specs" className="scroll-mt-24">
              <SectionHeading n={13} title="Technical Specifications" icon={Cpu} />
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {specs.map((s) => (
                      <tr key={s.k} className="hover:bg-amber-50/40">
                        <td className="w-2/5 px-4 py-3 align-top font-semibold text-amber-700">{s.k}</td>
                        <td className="px-4 py-3 text-slate-700">{s.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="mt-8 text-lg font-bold text-slate-900">Data sources</h3>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {dataSources.map((d) => (
                  <div
                    key={d}
                    className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-inset ring-slate-200"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-600" aria-hidden />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 14 — Contact */}
            <section id="contact" className="scroll-mt-24">
              <SectionHeading n={14} title="Contact & Feedback" icon={PhoneCall} />
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ContactCard
                  label="Try Jantra Civic"
                  value="+91 63612 45647"
                  sub="WhatsApp Jantra Bot and type /civic"
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

              <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 p-8 text-center text-white shadow-md">
                <p className="text-xl font-bold">Ready to try it?</p>
                <a
                  href="https://wa.me/916361245647"
                  className="mt-3 inline-flex items-center gap-2 text-lg font-semibold underline decoration-2 underline-offset-4 hover:text-amber-50"
                >
                  Open WhatsApp → wa.me/916361245647 → /civic
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </a>
              </div>

              <p className="mt-8 text-center text-xs text-slate-500">
                © 2026 Coding Ryder · All rights reserved · Currently in Beta
                <br />
                Jantra Civic is a sub-product of Jantra Bot · Powered by Google Gemini
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
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-100">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        <span className="text-amber-600">{n}.</span> {title}
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
      ? 'border-amber-200 bg-gradient-to-br from-amber-50 to-white'
      : kind === 'tip'
      ? 'border-amber-200 bg-amber-50/60'
      : 'border-slate-200 bg-slate-50/80';
  const titleColor =
    kind === 'mission' ? 'text-amber-800' : kind === 'tip' ? 'text-amber-800' : 'text-slate-700';
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
    'block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amber-300 hover:bg-amber-50/50 hover:shadow-sm';
  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-2 text-base font-semibold text-amber-700">{value}</p>
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
