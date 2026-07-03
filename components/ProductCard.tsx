import Link from 'next/link';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  accent?: 'indigo' | 'amber' | 'emerald' | 'sky';
}

const accentMap = {
  indigo: 'from-brand-500 to-brand-700',
  amber:  'from-amber-500 to-orange-600',
  emerald: 'from-emerald-500 to-teal-600',
  sky:    'from-sky-500 to-sky-700',
} as const;

export default function ProductCard({
  name,
  tagline,
  description,
  href,
  icon: Icon,
  badge,
  accent = 'indigo',
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
    >
      <div
        className={clsx(
          'inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm',
          accentMap[accent]
        )}
      >
        <Icon className="h-6 w-6" aria-hidden />
      </div>

      <div className="mt-5 flex items-center gap-2">
        <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
        {badge && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
            {badge}
          </span>
        )}
      </div>

      <p className="mt-1 text-sm font-medium text-brand-700">{tagline}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 transition group-hover:text-brand-700">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
