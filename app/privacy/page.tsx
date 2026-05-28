import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const EFFECTIVE_DATE = '28 May 2026';

export const metadata: Metadata = {
  title: 'Privacy Policy - Jantrik AI',
  description:
    'How Jantrik AI collects, uses, shares, and retains your data across Jantra Web, Jantra Bot, and Jantra Civic.',
  alternates: { canonical: '/privacy/' },
  openGraph: {
    title: 'Privacy Policy - Jantrik AI',
    description:
      'Data practices for Jantra Web, Jantra Bot, and Jantra Civic.',
    url: '/privacy/',
    type: 'website',
  },
};

const sections = [
  { id: 'summary', title: 'TL;DR' },
  { id: 'who-we-are', title: '1. Who we are' },
  { id: 'scope', title: '2. Scope' },
  { id: 'what-we-collect', title: '3. What we collect' },
  { id: 'how-we-use', title: '4. How we use your data' },
  { id: 'no-training', title: '5. We do not train AI models on your data' },
  { id: 'processors', title: '6. Third-party processors' },
  { id: 'product-bot', title: '7. Jantra Bot - specifics' },
  { id: 'product-civic', title: '8. Jantra Civic - specifics' },
  { id: 'product-web', title: '9. Jantra Web - specifics' },
  { id: 'retention', title: '10. How long we keep your data' },
  { id: 'sharing', title: '11. When we share your data' },
  { id: 'transfers', title: '12. International transfers' },
  { id: 'security', title: '13. Security' },
  { id: 'your-rights', title: '14. Your rights' },
  { id: 'children', title: '15. Children' },
  { id: 'cookies', title: '16. Cookies & similar technologies' },
  { id: 'changes', title: '17. Changes to this policy' },
  { id: 'contact', title: '18. Contact' },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-page section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">Legal</span>
            <h1 className="heading-display mt-5">Privacy Policy</h1>
            <p className="prose-lead mt-5 !leading-7 sm:!leading-8">
              How we handle data across Jantrik AI, Jantra Web, Jantra Bot,
              and Jantra Civic - written to be readable, not just compliant.
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
              <Section id="summary" title="TL;DR">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    We collect the minimum needed to make each Service work -
                    your identifier (WhatsApp number or Jantra Web sign-in),
                    your messages/queries, and your preferences.
                  </li>
                  <li>
                    We send your inputs to AI providers (Google Gemini, Sarvam
                    AI) to generate responses. We do not use your data to
                    train AI models.
                  </li>
                  <li>
                    Voice notes and images are processed in transit and not
                    retained after a response is generated. Only the text
                    description or transcription is stored in your recent
                    conversation history.
                  </li>
                  <li>
                    You can clear your Jantra Bot conversation history any
                    time with the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">/clear</code> command.
                  </li>
                  <li>
                    Contact{' '}
                    <a
                      href="mailto:connect@codingryder.com"
                      className="font-medium text-brand-700 hover:underline"
                    >
                      connect@codingryder.com
                    </a>{' '}
                    to access, export, or delete your data.
                  </li>
                </ul>
              </Section>

              <Section id="who-we-are" title="1. Who we are">
                <p>
                  This Privacy Policy applies to services operated by{' '}
                  <strong>Coding Ryder Enterprises</strong> (&ldquo;Coding
                  Ryder&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). For the
                  purposes of the Digital Personal Data Protection Act, 2023
                  (DPDP Act), Coding Ryder is the &ldquo;Data Fiduciary&rdquo;
                  in respect of personal data processed through the Services.
                </p>
              </Section>

              <Section id="scope" title="2. Scope">
                <p>
                  This policy covers the following Services:
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>
                    <strong>Jantrik AI</strong> -{' '}
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                      jantrikai.com
                    </code>{' '}
                    (this marketing site).
                  </li>
                  <li>
                    <strong>Jantra Web</strong> -{' '}
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                      jantraweb.codingryder.com
                    </code>
                    .
                  </li>
                  <li>
                    <strong>Jantra Bot</strong> - delivered via WhatsApp at{' '}
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                      jantrabot.codingryder.com
                    </code>
                    .
                  </li>
                  <li>
                    <strong>Jantra Civic</strong> - delivered via WhatsApp at{' '}
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                      jantracivic.codingryder.com
                    </code>
                    .
                  </li>
                </ul>
              </Section>

              <Section id="what-we-collect" title="3. What we collect">
                <p>The categories of data we collect:</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>
                    <strong>Identifier</strong> - your WhatsApp phone number
                    (Bot/Civic) or your Jantra Web sign-in identifier (e.g.
                    email or OAuth ID).
                  </li>
                  <li>
                    <strong>Preferences</strong> - chosen language, active
                    mode, plan tier.
                  </li>
                  <li>
                    <strong>Your inputs</strong> - text messages, voice notes
                    (transient), images (transient), documents you upload
                    (transient).
                  </li>
                  <li>
                    <strong>Service outputs</strong> - AI responses,
                    transcriptions, extracted text, OCR results stored in your
                    recent conversation/history.
                  </li>
                  <li>
                    <strong>Usage data</strong> - timestamps, mode usage
                    counts, daily/lifetime quotas, error logs (for debugging).
                  </li>
                  <li>
                    <strong>Payment metadata (Jantra Web paid plans)</strong>{' '}
                    - subscription status, plan, billing cycle. Card and bank
                    details are processed by our payment provider; we do not
                    store them on our systems.
                  </li>
                  <li>
                    <strong>Marketing-site analytics (jantrikai.com)</strong>{' '}
                    - basic pageview information collected by Google Search
                    Console verification and standard web logs.
                  </li>
                </ul>
                <p className="mt-3">
                  We do not knowingly collect sensitive personal data (such as
                  financial account credentials, health data, biometric data,
                  or government IDs). If you send such data to a Service
                  voluntarily (e.g. in a chat message or a document), it will
                  be processed as described in this policy and you can request
                  deletion at any time.
                </p>
              </Section>

              <Section id="how-we-use" title="4. How we use your data">
                <p>We process your data for the following purposes:</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>
                    To operate the Services - sending your input to AI
                    providers, returning responses, maintaining recent
                    conversation context, applying your language and mode
                    preferences;
                  </li>
                  <li>
                    To enforce free/paid quotas and rate limits;
                  </li>
                  <li>
                    To process payments and manage Jantra Web subscriptions;
                  </li>
                  <li>
                    To investigate bugs, abuse, and security incidents;
                  </li>
                  <li>
                    To improve the Services (in aggregate, non-identifying
                    form);
                  </li>
                  <li>
                    To comply with applicable laws and respond to lawful
                    requests from authorities.
                  </li>
                </ul>
              </Section>

              <Section
                id="no-training"
                title="5. We do not train AI models on your data"
              >
                <p>
                  Coding Ryder does not train, fine-tune, or otherwise build
                  AI models on the content of your messages, voice notes,
                  images, or documents. Our third-party AI providers (Google
                  Gemini, Sarvam AI) process inputs in real time to generate a
                  response under their own data-handling policies; we use
                  their APIs in a configuration where end-user content is not
                  used by them for model training.
                </p>
              </Section>

              <Section id="processors" title="6. Third-party processors">
                <p>
                  We rely on the following providers to deliver the Services.
                  Each is bound by its own privacy and security commitments.
                </p>
                <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="min-w-full divide-y divide-slate-200 text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900">
                          Provider
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900">
                          Purpose
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900">
                          Used by
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {[
                        {
                          p: 'Google Gemini',
                          u: 'AI language model & vision (image understanding)',
                          s: 'Web, Bot, Civic',
                        },
                        {
                          p: 'Sarvam AI',
                          u: 'Voice transcription (Indian languages)',
                          s: 'Bot, Civic',
                        },
                        {
                          p: 'Meta - WhatsApp Business API',
                          u: 'Message delivery on WhatsApp',
                          s: 'Bot, Civic',
                        },
                        {
                          p: 'Twilio',
                          u: 'WhatsApp Business API routing',
                          s: 'Bot, Civic',
                        },
                        {
                          p: 'Neon',
                          u: 'PostgreSQL database hosting',
                          s: 'Web, Bot, Civic',
                        },
                        {
                          p: 'Render',
                          u: 'Application hosting',
                          s: 'Web, Bot, Civic',
                        },
                        {
                          p: 'Payment gateway',
                          u: 'Subscription payments (cards, UPI, netbanking)',
                          s: 'Web (paid plans)',
                        },
                      ].map((row) => (
                        <tr key={row.p}>
                          <td className="px-4 py-3 font-medium text-slate-900">
                            {row.p}
                          </td>
                          <td className="px-4 py-3 text-slate-700">{row.u}</td>
                          <td className="px-4 py-3 text-slate-700">{row.s}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3">
                  This list may change as we add or replace providers; we will
                  keep this page reasonably up to date.
                </p>
              </Section>

              <Section id="product-bot" title="7. Jantra Bot - specifics">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    Your <strong>WhatsApp phone number</strong> is your
                    identifier. No separate account is created.
                  </li>
                  <li>
                    <strong>Text messages</strong> are sent to Google Gemini
                    to generate a reply. Recent Assistant-mode conversation is
                    stored so follow-up questions stay in context. You can
                    wipe it any time with{' '}
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                      /clear
                    </code>
                    .
                  </li>
                  <li>
                    <strong>Voice notes</strong> are sent to Sarvam AI for
                    transcription. The audio is not retained by Jantra Bot
                    after the transcription is returned; only the resulting
                    text is stored in your conversation history.
                  </li>
                  <li>
                    <strong>Images</strong> are sent to Google Gemini for
                    description. The image is not retained by Jantra Bot
                    after the response is returned; only the resulting text
                    description is stored.
                  </li>
                  <li>
                    <strong>Accounts mode</strong> records expense/income
                    entries you submit. You can export them as CSV any time
                    or ask us to delete them by emailing us.
                  </li>
                </ul>
              </Section>

              <Section id="product-civic" title="8. Jantra Civic - specifics">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    Same data model as Jantra Bot - WhatsApp number as
                    identifier; text/voice handled identically.
                  </li>
                  <li>
                    To personalise scheme suggestions you may share
                    profile information voluntarily (state, age group,
                    occupation category). You can update or delete these at
                    any time.
                  </li>
                  <li>
                    Government scheme and representative data is aggregated
                    from public sources and is not personal data. Verify with
                    the official authority before acting on it (see our{' '}
                    <Link
                      href="/terms/#civic-disclaimer"
                      className="font-medium text-brand-700 hover:underline"
                    >
                      Terms
                    </Link>
                    ).
                  </li>
                </ul>
              </Section>

              <Section id="product-web" title="9. Jantra Web - specifics">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    A sign-in is required for some features. We store your
                    sign-in identifier, language and mode preferences, plan
                    tier, and quota counters.
                  </li>
                  <li>
                    <strong>Statement scans:</strong> uploaded bank statements,
                    UPI screenshots, and card statements are sent to Google
                    Gemini for extraction. We do not retain the source file
                    after extraction; the structured CSV output is returned to
                    your browser. We strongly advise redacting account
                    numbers before uploading.
                  </li>
                  <li>
                    <strong>Handwriting OCR:</strong> images you upload are
                    sent to Google Gemini for OCR. Source images are not
                    retained after processing; only the text output is stored
                    in your session/history.
                  </li>
                  <li>
                    <strong>Payments:</strong> handled by our payment provider.
                    We see only subscription metadata (plan, status, billing
                    period). We never receive or store your full card or bank
                    credentials.
                  </li>
                </ul>
              </Section>

              <Section id="retention" title="10. How long we keep your data">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    <strong>Voice notes &amp; images:</strong> not retained
                    after processing.
                  </li>
                  <li>
                    <strong>Conversation history (text):</strong> retained on
                    a rolling basis while the account is active. Bot/Civic
                    users can wipe Assistant context with{' '}
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                      /clear
                    </code>
                    .
                  </li>
                  <li>
                    <strong>Account &amp; preferences:</strong> retained while
                    your account is active and for up to 12 months after
                    deletion or last activity, after which it is purged or
                    anonymised.
                  </li>
                  <li>
                    <strong>Payment records (Jantra Web):</strong> retained
                    as required by Indian tax and accounting law (typically 7
                    years).
                  </li>
                  <li>
                    <strong>Logs &amp; backups:</strong> short-term retention
                    (30-90 days) for security and operational purposes.
                  </li>
                </ul>
              </Section>

              <Section id="sharing" title="11. When we share your data">
                <p>We do not sell your personal data. We share data only:</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>
                    With the processors listed in Section 6, strictly to
                    operate the Services;
                  </li>
                  <li>
                    To comply with valid legal process or government request
                    where we are required by law to do so;
                  </li>
                  <li>
                    To protect the rights, property, or safety of Coding
                    Ryder, our users, or the public, where we reasonably
                    believe it is necessary;
                  </li>
                  <li>
                    In connection with a business transfer (merger,
                    acquisition, or asset sale) - subject to this policy
                    continuing to apply.
                  </li>
                </ul>
              </Section>

              <Section id="transfers" title="12. International transfers">
                <p>
                  Some of our processors operate servers outside India
                  (notably the United States). When we transfer personal data
                  outside India, we rely on contractual safeguards with the
                  processor and limit data sharing to what is necessary to
                  operate the Services.
                </p>
              </Section>

              <Section id="security" title="13. Security">
                <p>
                  We use commercially reasonable safeguards - encrypted
                  transport (TLS), access controls on our hosting and
                  database, principle-of-least-privilege for credentials,
                  and routine patching. No service is perfectly secure; we
                  encourage you to use strong sign-in credentials for Jantra
                  Web and to avoid sharing sensitive data you are not
                  comfortable transmitting.
                </p>
              </Section>

              <Section id="your-rights" title="14. Your rights">
                <p>Subject to applicable law, you have the right to:</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>Access the personal data we hold about you;</li>
                  <li>Correct inaccurate or incomplete data;</li>
                  <li>Delete your data (right to erasure);</li>
                  <li>Withdraw consent where processing relies on consent;</li>
                  <li>Receive a copy of your data in a portable format;</li>
                  <li>
                    Lodge a complaint with the Data Protection Board of India
                    or your relevant supervisory authority.
                  </li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, email{' '}
                  <a
                    href="mailto:connect@codingryder.com"
                    className="font-medium text-brand-700 hover:underline"
                  >
                    connect@codingryder.com
                  </a>{' '}
                  from the address (or with the WhatsApp number) associated
                  with your use of the Service. We will respond within a
                  reasonable timeframe, typically 30 days.
                </p>
              </Section>

              <Section id="children" title="15. Children">
                <p>
                  The Services are not directed at children under 13. We do
                  not knowingly collect personal data from children under 13.
                  Users between 13 and 18 must have a parent or
                  guardian&rsquo;s consent. If you believe a child under 13
                  has used a Service, contact us and we will delete the
                  associated data.
                </p>
              </Section>

              <Section id="cookies" title="16. Cookies & similar technologies">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    <strong>Marketing site &amp; Jantra Web:</strong> we use
                    a small number of strictly necessary cookies (e.g.
                    session, sign-in, language preference) and basic
                    analytics. No third-party advertising cookies.
                  </li>
                  <li>
                    <strong>Jantra Bot &amp; Jantra Civic:</strong> no
                    cookies; the Services run entirely inside WhatsApp.
                  </li>
                </ul>
              </Section>

              <Section id="changes" title="17. Changes to this policy">
                <p>
                  We may update this policy from time to time. The updated
                  version takes effect on the date marked at the top of this
                  page. If the changes are material we will make a reasonable
                  effort to notify you in advance (for example via in-app
                  notice or email).
                </p>
              </Section>

              <Section id="contact" title="18. Contact">
                <p>
                  Privacy questions, data requests, or complaints:
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5">
                  <li>
                    Email:{' '}
                    <a
                      href="mailto:connect@codingryder.com"
                      className="font-medium text-brand-700 hover:underline"
                    >
                      connect@codingryder.com
                    </a>
                  </li>
                  <li>Data Fiduciary: Coding Ryder Enterprises, India</li>
                </ul>
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
                href="/terms/"
                className="font-medium text-brand-700 hover:underline"
              >
                Terms &amp; Conditions
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
