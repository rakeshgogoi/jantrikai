import type { Metadata } from 'next';
import FeedbackForm from '@/components/FeedbackForm';

export const metadata: Metadata = {
  title: 'Jantra Bot Feedback',
  description:
    'Tell us how we can make Jantra Bot better. Share your rating, what you like, and the features you would like to see.',
  alternates: { canonical: '/feedback/' },
  openGraph: {
    title: 'Jantra Bot Feedback',
    description: 'Tell us how we can make Jantra Bot better.',
    url: '/feedback/',
    type: 'website',
  },
};

export default function FeedbackPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-page section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">Feedback</span>
            <h1 className="heading-display mt-5">Share your feedback</h1>
            <p className="prose-lead mt-5">
              Tell us how we can make Jantra Bot better - it takes a minute.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <FeedbackForm />
            <p className="mt-6 text-center text-xs text-slate-500">
              Your answers are stored securely and used only to improve Jantra Bot. See our{' '}
              <a href="/privacy/" className="underline hover:text-brand-700">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
