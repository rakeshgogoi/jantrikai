import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const EFFECTIVE_DATE = '28 May 2026';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Jantrik AI',
  description:
    'The terms governing use of Jantrik AI and its products - Jantra Web, Jantra Bot, and Jantra Civic - operated by Coding Ryder Enterprises.',
  alternates: { canonical: '/terms/' },
  openGraph: {
    title: 'Terms & Conditions - Jantrik AI',
    description:
      'Terms governing use of Jantra Web, Jantra Bot, and Jantra Civic.',
    url: '/terms/',
    type: 'website',
  },
};

const sections = [
  { id: 'acceptance', title: '1. Acceptance of these terms' },
  { id: 'who-we-are', title: '2. Who we are' },
  { id: 'services', title: '3. The services' },
  { id: 'beta', title: '4. Beta status & availability' },
  { id: 'eligibility', title: '5. Eligibility' },
  { id: 'accounts', title: '6. Accounts & identification' },
  { id: 'acceptable-use', title: '7. Acceptable use' },
  { id: 'ai-output', title: '8. AI output - know the limits' },
  { id: 'civic-disclaimer', title: '9. Jantra Civic - informational only' },
  { id: 'paid-plans', title: '10. Paid plans (Jantra Web)' },
  { id: 'ip', title: '11. Intellectual property' },
  { id: 'your-content', title: '12. Your content & licence' },
  { id: 'third-parties', title: '13. Third-party services' },
  { id: 'termination', title: '14. Suspension & termination' },
  { id: 'disclaimer', title: '15. Disclaimer of warranties' },
  { id: 'liability', title: '16. Limitation of liability' },
  { id: 'indemnity', title: '17. Indemnity' },
  { id: 'governing-law', title: '18. Governing law & jurisdiction' },
  { id: 'changes', title: '19. Changes to these terms' },
  { id: 'contact', title: '20. Contact' },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-page section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">Legal</span>
            <h1 className="heading-display mt-5">Terms &amp; Conditions</h1>
            <p className="prose-lead mt-5 !leading-7 sm:!leading-8">
              Plain-language terms for using Jantrik AI and its products -
              Jantra Web, Jantra Bot, and Jantra Civic.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Effective {EFFECTIVE_DATE}
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            {/* TOC */}
            <nav
              aria-label="Table of contents"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                On this page
              </p>
              <ol className="mt-3 grid grid-cols-1 gap-y-1.5 text-sm text-slate-700 sm:grid-cols-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="hover:text-brand-700 hover:underline"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-10 space-y-12 text-[15px] leading-7 text-slate-700">
              <Section id="acceptance" title="1. Acceptance of these terms">
                <p>
                  By accessing or using Jantrik AI, Jantra Web, Jantra Bot, or
                  Jantra Civic (each a &ldquo;Service&rdquo;), you agree to be
                  bound by these Terms &amp; Conditions and our{' '}
                  <Link
                    href="/privacy/"
                    className="font-medium text-brand-700 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  . If you do not agree, do not use the Services.
                </p>
              </Section>

              <Section id="who-we-are" title="2. Who we are">
                <p>
                  The Services are operated by{' '}
                  <strong>Coding Ryder Enterprises</strong> (&ldquo;Coding
                  Ryder&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), the
                  proprietor of the Jantrik AI product family. Contact:{' '}
                  <a
                    href="mailto:connect@codingryder.com"
                    className="font-medium text-brand-700 hover:underline"
                  >
                    connect@codingryder.com
                  </a>
                  .
                </p>
              </Section>

              <Section id="services" title="3. The services">
                <p>The Services currently include:</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>
                    <strong>Jantra Web</strong> - a browser-based multilingual
                    AI workspace (chat, translation, dictionary, language games,
                    statement scanning, handwriting OCR).
                  </li>
                  <li>
                    <strong>Jantra Bot</strong> - a multilingual AI assistant
                    delivered through the WhatsApp messaging app.
                  </li>
                  <li>
                    <strong>Jantra Civic</strong> - a WhatsApp-delivered
                    information service about Indian government schemes, civic
                    services, elected representatives, and related public
                    information.
                  </li>
                </ul>
                <p className="mt-3">
                  Features, limits, and availability of each Service may change
                  from time to time.
                </p>
              </Section>

              <Section id="beta" title="4. Beta status & availability">
                <p>
                  The Services are currently offered in beta. They may contain
                  errors, may be modified or discontinued without notice, and
                  may be subject to downtime, rate limits, or maintenance
                  windows. We do not guarantee uninterrupted or error-free
                  operation.
                </p>
              </Section>

              <Section id="eligibility" title="5. Eligibility">
                <p>
                  You must be at least 13 years old to use the Services. Users
                  between 13 and 18 must have a parent or guardian&rsquo;s
                  consent. For paid Jantra Web plans you must be at least 18 and
                  legally capable of entering into a contract under applicable
                  law.
                </p>
              </Section>

              <Section id="accounts" title="6. Accounts & identification">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    <strong>Jantra Bot &amp; Jantra Civic:</strong> your
                    WhatsApp phone number is your identifier. No separate
                    account or password is created.
                  </li>
                  <li>
                    <strong>Jantra Web:</strong> some features require a
                    sign-in. You are responsible for keeping your credentials
                    secure and for activity that occurs under your account.
                  </li>
                </ul>
                <p className="mt-3">
                  You must not impersonate any person or misrepresent your
                  identity, age, or affiliation.
                </p>
              </Section>

              <Section id="acceptable-use" title="7. Acceptable use">
                <p>You agree not to use the Services to:</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>
                    Break any law or infringe anyone&rsquo;s rights (including
                    intellectual-property, privacy, and publicity rights);
                  </li>
                  <li>
                    Generate or distribute illegal, harmful, hateful, harassing,
                    sexually explicit, or violent content; content that exploits
                    or endangers minors; or content that promotes self-harm;
                  </li>
                  <li>
                    Attempt to extract, reverse-engineer, scrape, or train any
                    model on outputs of the Services without our written
                    permission;
                  </li>
                  <li>
                    Disrupt the Services, evade rate limits, or attempt
                    unauthorised access to any system or account;
                  </li>
                  <li>
                    Use the Services to send spam, phishing, malware, or
                    automated bulk messages;
                  </li>
                  <li>
                    Use AI output to make consequential decisions (medical,
                    legal, financial, employment) without independent
                    professional review.
                  </li>
                </ul>
                <p className="mt-3">
                  We may suspend or terminate access if we reasonably believe
                  these terms have been breached.
                </p>
              </Section>

              <Section id="ai-output" title="8. AI output - know the limits">
                <p>
                  The Services use third-party AI models (currently Google
                  Gemini and Sarvam AI) to generate responses, translations,
                  transcriptions, descriptions, and document extractions.
                  AI-generated output:
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>
                    can be inaccurate, incomplete, biased, or fabricated
                    (&ldquo;hallucinated&rdquo;);
                  </li>
                  <li>
                    is provided for general informational purposes only, not as
                    medical, legal, financial, tax, or other professional
                    advice;
                  </li>
                  <li>
                    should be independently verified before you act on it,
                    particularly for anything important.
                  </li>
                </ul>
                <p className="mt-3">
                  You are solely responsible for how you use any output
                  generated by the Services.
                </p>
              </Section>

              <Section id="civic-disclaimer" title="9. Jantra Civic - informational only">
                <p>
                  Jantra Civic is an independent service. It is{' '}
                  <strong>
                    not affiliated with, endorsed by, or representing any
                    government, ministry, department, agency, or official body
                  </strong>{' '}
                  of India or any state. Scheme eligibility, deadlines,
                  procedures, contact details, and representative information
                  are aggregated from public sources and may be outdated,
                  incomplete, or incorrect. Always confirm with the relevant
                  official authority before acting.
                </p>
              </Section>

              <Section id="paid-plans" title="10. Paid plans (Jantra Web)">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    <strong>Plans &amp; pricing:</strong> current plans
                    (Rookie, Seasoned, Maestro) and prices are shown on the{' '}
                    <Link
                      href="/web/"
                      className="font-medium text-brand-700 hover:underline"
                    >
                      Jantra Web
                    </Link>{' '}
                    page. We may change pricing, features, and limits with
                    notice; existing paid periods will not be affected.
                  </li>
                  <li>
                    <strong>Free trial:</strong> paid plans may include a
                    7-day free trial. Unless cancelled before the trial ends,
                    your subscription will convert to a paid subscription at
                    the listed price.
                  </li>
                  <li>
                    <strong>Renewal:</strong> subscriptions renew automatically
                    each billing period until cancelled. You can cancel any
                    time; cancellation takes effect at the end of the current
                    paid period.
                  </li>
                  <li>
                    <strong>Refunds:</strong> charges are non-refundable except
                    where required by law. If you experience a billing error,
                    contact us within 30 days and we will investigate.
                  </li>
                  <li>
                    <strong>Taxes:</strong> prices are inclusive of applicable
                    Indian taxes unless stated otherwise.
                  </li>
                  <li>
                    <strong>Payments:</strong> payments are processed by
                    third-party payment providers. We do not store full card
                    or bank details on our own systems.
                  </li>
                </ul>
              </Section>

              <Section id="ip" title="11. Intellectual property">
                <p>
                  The Jantrik AI, Jantra Web, Jantra Bot, Jantra Civic, and
                  Coding Ryder names, logos, designs, copy, code, and underlying
                  technology are owned by Coding Ryder Enterprises or its
                  licensors and protected by Indian and international
                  intellectual-property laws. Nothing in these terms transfers
                  those rights to you.
                </p>
              </Section>

              <Section id="your-content" title="12. Your content & licence">
                <p>
                  &ldquo;Your Content&rdquo; means anything you send to the
                  Services - messages, voice notes, images, documents, account
                  entries. As between you and us, Your Content remains yours.
                  You grant us a limited, worldwide, royalty-free licence to
                  process Your Content solely to operate the Services for you
                  (for example, to send your message to an AI provider, return
                  the reply to your device, and store recent conversation
                  history where the Service requires it).
                </p>
                <p className="mt-3">
                  We do not use Your Content to train AI models. Details of
                  what we collect, why, how long we keep it, and who we share
                  it with are in our{' '}
                  <Link
                    href="/privacy/"
                    className="font-medium text-brand-700 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </Section>

              <Section id="third-parties" title="13. Third-party services">
                <p>
                  The Services depend on third-party providers including (but
                  not limited to) Google Gemini, Sarvam AI, Meta WhatsApp
                  Business API, Twilio, Neon (PostgreSQL hosting), and Render
                  (application hosting). Your use of the Services is also
                  subject to those providers&rsquo; own terms. We are not
                  responsible for outages or actions of third-party providers
                  beyond our reasonable control.
                </p>
              </Section>

              <Section id="termination" title="14. Suspension & termination">
                <p>
                  We may suspend or terminate your access (in whole or in part,
                  with or without notice) if you breach these terms, if we are
                  required to do so by law, or if we discontinue a Service. You
                  may stop using the Services at any time. Sections that by
                  their nature should survive termination (IP, disclaimers,
                  liability, indemnity, governing law) will survive.
                </p>
              </Section>

              <Section id="disclaimer" title="15. Disclaimer of warranties">
                <p>
                  THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
                  AVAILABLE&rdquo;, WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                  IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                  A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT, TO THE
                  MAXIMUM EXTENT PERMITTED BY LAW.
                </p>
              </Section>

              <Section id="liability" title="16. Limitation of liability">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, CODING RYDER WILL NOT
                  BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF
                  PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR IN
                  CONNECTION WITH YOUR USE OF THE SERVICES. OUR TOTAL
                  AGGREGATE LIABILITY FOR ANY CLAIM RELATING TO THE SERVICES
                  WILL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS
                  PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR INR 1,000,
                  WHICHEVER IS GREATER.
                </p>
              </Section>

              <Section id="indemnity" title="17. Indemnity">
                <p>
                  You agree to indemnify and hold Coding Ryder harmless from
                  claims, damages, liabilities, costs, and expenses (including
                  reasonable legal fees) arising out of your breach of these
                  terms, your misuse of the Services, or your violation of any
                  law or third-party right.
                </p>
              </Section>

              <Section id="governing-law" title="18. Governing law & jurisdiction">
                <p>
                  These terms are governed by the laws of India. Subject to
                  applicable law, the courts at Bengaluru, Karnataka shall have
                  exclusive jurisdiction over any dispute arising out of or in
                  connection with these terms.
                </p>
              </Section>

              <Section id="changes" title="19. Changes to these terms">
                <p>
                  We may update these terms from time to time. The updated
                  version takes effect on the date marked at the top of this
                  page. If the changes are material we will make a reasonable
                  effort to notify you (for example via in-app notice or
                  email). Continued use of the Services after the effective
                  date constitutes acceptance.
                </p>
              </Section>

              <Section id="contact" title="20. Contact">
                <p>
                  Questions about these terms? Email{' '}
                  <a
                    href="mailto:connect@codingryder.com"
                    className="font-medium text-brand-700 hover:underline"
                  >
                    connect@codingryder.com
                  </a>
                  .
                </p>
                <div className="mt-6">
                  <a
                    href="mailto:connect@codingryder.com"
                    className="btn-primary"
                  >
                    <Mail className="h-4 w-4" aria-hidden />
                    connect@codingryder.com
                  </a>
                </div>
              </Section>
            </div>

            <p className="mt-12 text-xs text-slate-500">
              See also our{' '}
              <Link
                href="/privacy/"
                className="font-medium text-brand-700 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}
