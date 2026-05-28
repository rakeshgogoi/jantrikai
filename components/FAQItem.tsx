import { Plus } from 'lucide-react';
import type { GuideAccent } from './GuideTOC';

const accentStyles: Record<
  GuideAccent,
  { text: string; bg: string; ring: string }
> = {
  emerald: {
    text: 'text-emerald-700',
    bg: 'bg-emerald-50',
    ring: 'group-open:ring-emerald-200',
  },
  brand: {
    text: 'text-brand-700',
    bg: 'bg-brand-50',
    ring: 'group-open:ring-brand-200',
  },
  amber: {
    text: 'text-amber-700',
    bg: 'bg-amber-50',
    ring: 'group-open:ring-amber-200',
  },
};

export default function FAQItem({
  q,
  a,
  accent,
}: {
  q: string;
  a: string;
  accent: GuideAccent;
}) {
  const styles = accentStyles[accent];
  return (
    <details
      className={`group rounded-xl border border-slate-200 bg-white transition open:shadow-sm hover:border-slate-300 open:ring-1 open:ring-inset ${styles.ring}`}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
        <span className={`text-base font-semibold ${styles.text}`}>{q}</span>
        <span
          className={`mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full ${styles.bg} ${styles.text} transition group-open:rotate-45`}
        >
          <Plus className="h-4 w-4" aria-hidden />
        </span>
      </summary>
      <div className="border-t border-slate-100 px-5 py-4 text-sm leading-6 text-slate-700">
        {a}
      </div>
    </details>
  );
}
