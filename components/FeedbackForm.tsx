'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Star } from 'lucide-react';

// Submissions are stored by the Jantra Bot server (this site is a static
// export, so it can't save them itself). CORS there allows jantrikai.com only.
const FEEDBACK_ENDPOINT = 'https://jantrabot.onrender.com/feedback';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30';

function Label({ htmlFor, text, optional }: { htmlFor: string; text: string; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-900">
      {text}
      {optional && <span className="ml-1 font-normal text-slate-400">(optional)</span>}
    </label>
  );
}

export default function FeedbackForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!rating) {
      setStatus('error');
      setErrorMessage('Please choose a rating.');
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams(window.location.search);

    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch(FEEDBACK_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating,
          liked: data.get('liked'),
          improve: data.get('improve'),
          features: data.get('features'),
          name: data.get('name'),
          phone: data.get('phone'),
          website: data.get('website'),
          lang: params.get('lang'),
          source: params.get('src') || 'web',
        }),
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
        setRating(0);
      } else {
        setStatus('error');
        setErrorMessage(
          res.status === 429
            ? 'Too many submissions - please try again later.'
            : 'Something went wrong - please try again.',
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        'Could not reach the server - check your connection and try again.',
      );
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-600" aria-hidden />
        <h3 className="mt-4 text-lg font-semibold text-slate-900">Thank you!</h3>
        <p className="mt-2 text-sm text-slate-700">
          Your feedback helps us make Jantra Bot better.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Honeypot — hidden from people, filled in by bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <fieldset>
        <legend className="block text-sm font-medium text-slate-900">
          How would you rate Jantra Bot?
        </legend>
        <div className="mt-2 flex gap-2" role="radiogroup" aria-label="Rating">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={`${n} star${n > 1 ? 's' : ''}`}
              onClick={() => {
                setRating(n);
                if (status === 'error') setStatus('idle');
              }}
              className="rounded-lg p-1.5 transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
            >
              <Star
                className={`h-8 w-8 ${n <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
                aria-hidden
              />
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <Label htmlFor="liked" text="What do you like most?" optional />
        <textarea id="liked" name="liked" rows={3} maxLength={2000} className={inputClass} />
      </div>

      <div>
        <Label htmlFor="improve" text="What could we do better?" optional />
        <textarea id="improve" name="improve" rows={3} maxLength={2000} className={inputClass} />
      </div>

      <div>
        <Label htmlFor="features" text="Any feature you'd like to see?" optional />
        <textarea id="features" name="features" rows={3} maxLength={2000} className={inputClass} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" text="Name" optional />
          <input id="name" name="name" type="text" maxLength={100} autoComplete="name" className={inputClass} />
        </div>
        <div>
          <Label htmlFor="phone" text="WhatsApp number" optional />
          <input id="phone" name="phone" type="tel" maxLength={20} autoComplete="tel" className={inputClass} />
          <p className="mt-1 text-xs text-slate-500">
            Only if you&apos;d like us to follow up.
          </p>
        </div>
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Submit feedback'}
        {status !== 'sending' && <Send className="h-4 w-4" aria-hidden />}
      </button>
    </form>
  );
}
