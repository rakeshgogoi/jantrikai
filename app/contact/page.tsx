import type { Metadata } from 'next';
import { Mail, Globe } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Jantrik AI',
  description:
    'Get in touch with the Jantrik AI team for partnerships, press, language requests, or just to say hello. Reach us at connect@codingryder.com.',
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: 'Contact Jantrik AI',
    description:
      'Get in touch for partnerships, press, language requests, or just to say hello.',
    url: '/contact/',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-page section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">Contact</span>
            <h1 className="heading-display mt-5">Let&apos;s talk.</h1>
            <p className="prose-lead mt-5">
              Partnerships, press, language requests, or just a hello — we&apos;d
              love to hear from you. Drop a note below and we&apos;ll get back
              to you soon.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <ContactForm />

            <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-slate-600 sm:flex-row sm:gap-6">
              <a
                href="mailto:connect@codingryder.com"
                className="inline-flex items-center gap-2 hover:text-brand-700"
              >
                <Mail className="h-4 w-4" aria-hidden />
                connect@codingryder.com
              </a>
              <a
                href="https://codingryder.com"
                className="inline-flex items-center gap-2 hover:text-brand-700"
              >
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
