import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Landmark,
  FileSearch,
  BadgeCheck,
  Users,
  Bell,
  Briefcase,
  Newspaper,
  ArrowRight,
  BookOpenCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jantra Civic — Government schemes & forms in your language',
  description:
    'Jantra Civic helps Indian citizens discover central and state government schemes, fill forms, find elected representatives, and access jobs and tenders — on WhatsApp, in their language.',
  alternates: { canonical: '/civic/' },
  openGraph: {
    title: 'Jantra Civic — Government schemes & forms in your language',
    description:
      'Discover government schemes, fill forms, and access civic services on WhatsApp in your language.',
    url: '/civic/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jantra Civic — Government services in your language',
    description:
      'Discover schemes, fill forms, and access civic services on WhatsApp in your language.',
  },
};

const services = [
  {
    icon: FileSearch,
    title: 'Schemes',
    body: 'Surface central and state-government schemes you qualify for, filtered by your age, gender, occupation, income, and state.',
  },
  {
    icon: BadgeCheck,
    title: 'Forms',
    body: 'Discover and access common government forms — application templates, eligibility, where to apply, and what to carry.',
  },
  {
    icon: Users,
    title: 'Representatives',
    body: 'Find your elected representatives — MP, MLA, ward councillor — based on the state you select.',
  },
  {
    icon: Briefcase,
    title: 'Government jobs',
    body: 'Browse current openings across state PSCs and central recruitment portals. Live scrapers for AS PSC and TN PSC, with more states coming.',
  },
  {
    icon: Newspaper,
    title: 'Tenders & Govt-for-Business',
    body: 'Get tender notices from CPPP and state portals, plus discovery for entrepreneurs and small businesses.',
  },
  {
    icon: Bell,
    title: 'Alerts',
    body: 'Subscribe to alerts so you don\'t miss new schemes, deadlines, or recruitments in your area.',
  },
];

export default function JantraCivicPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-amber-50/60 to-white">
        <div className="container-page section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">
              <Landmark className="h-3.5 w-3.5" aria-hidden />
              On WhatsApp · Personalised to your state
            </span>
            <h1 className="heading-display mt-5">Jantra Civic</h1>
            <p className="prose-lead mt-5">
              Civic information made conversational. Jantra Civic helps Indian
              citizens discover government schemes, find their elected
              representatives, access common forms, and track jobs and tenders —
              all on WhatsApp, in the language they prefer.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://jantracivic.codingryder.com"
                className="btn-primary"
              >
                Try Jantra Civic
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link href="/civic/guide/" className="btn-secondary">
                <BookOpenCheck className="h-4 w-4" aria-hidden />
                Read the user guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section">Six everyday civic surfaces.</h2>
            <p className="prose-lead mt-4">
              Built for citizens — not bureaucrats. Plain language, your tongue,
              answers that fit on a phone screen.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-amber-300 hover:shadow-md"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <s.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it personalises */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="heading-section">Personalised to you, not the average.</h2>
              <p className="prose-lead mt-4">
                A one-time onboarding captures your state, age band, gender,
                occupation, and income bracket — used only to filter the schemes
                and jobs you see. Skip anything you&apos;d rather not share; you can
                update later.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-amber-600" />
                  State picker covers all Indian states and UTs.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-amber-600" />
                  Demographic filters are optional and editable.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-amber-600" />
                  Free-text questions get grounded answers — not links to dig
                  through.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Sample interaction
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-2xl bg-slate-100 px-4 py-3 text-slate-800">
                  Show me schemes for women entrepreneurs in Assam.
                </div>
                <div className="ml-6 rounded-2xl bg-amber-50 px-4 py-3 text-amber-900 ring-1 ring-inset ring-amber-100">
                  Here are 3 schemes that match — Stand-Up India, PMEGP, and
                  Assam&apos;s Mahila Udyamita Abhiyaan. Tap a name for eligibility,
                  benefits, and how to apply.
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
            <h2 className="heading-section">Why a separate civic surface?</h2>
            <p className="prose-lead mt-4">
              Government services are dense, fragmented, and rarely written in the
              language people actually speak at home. Jantra Civic puts a
              language-first, conversational front-end on top — so getting to the
              right scheme, the right form, or the right office takes seconds, not
              hours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="https://jantracivic.codingryder.com" className="btn-primary">
                Open Jantra Civic
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link href="/civic/guide/" className="btn-secondary">
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
