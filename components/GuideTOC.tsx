'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface TocItem {
  n: number;
  id: string;
  title: string;
  sub: string;
}

export type GuideAccent = 'emerald' | 'brand' | 'amber' | 'sky';

const accentStyles: Record<
  GuideAccent,
  {
    badgeIdle: string;
    badgeActive: string;
    activeText: string;
    activeBg: string;
    activeBorder: string;
  }
> = {
  emerald: {
    badgeIdle: 'bg-emerald-50 text-emerald-700',
    badgeActive: 'bg-emerald-600 text-white',
    activeText: 'text-emerald-700',
    activeBg: 'bg-emerald-50',
    activeBorder: 'border-emerald-500',
  },
  brand: {
    badgeIdle: 'bg-brand-50 text-brand-700',
    badgeActive: 'bg-brand-600 text-white',
    activeText: 'text-brand-700',
    activeBg: 'bg-brand-50',
    activeBorder: 'border-brand-500',
  },
  amber: {
    badgeIdle: 'bg-amber-50 text-amber-700',
    badgeActive: 'bg-amber-600 text-white',
    activeText: 'text-amber-700',
    activeBg: 'bg-amber-50',
    activeBorder: 'border-amber-500',
  },
  sky: {
    badgeIdle: 'bg-sky-50 text-sky-700',
    badgeActive: 'bg-sky-600 text-white',
    activeText: 'text-sky-700',
    activeBg: 'bg-sky-50',
    activeBorder: 'border-sky-500',
  },
};

export default function GuideTOC({
  items,
  accent,
}: {
  items: TocItem[];
  accent: GuideAccent;
}) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '');
  const styles = accentStyles[accent];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActiveId(topmost.target.id);
      },
      {
        rootMargin: '-15% 0px -70% 0px',
        threshold: 0,
      },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const renderItem = (t: TocItem) => {
    const isActive = activeId === t.id;
    return (
      <li key={t.id}>
        <a
          href={`#${t.id}`}
          className={`flex items-center gap-3 rounded-lg border-l-2 px-3 py-2 text-sm transition ${
            isActive
              ? `${styles.activeBg} ${styles.activeBorder} ${styles.activeText} font-semibold`
              : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          <span
            className={`inline-flex h-6 w-6 flex-none items-center justify-center rounded-md text-[11px] font-semibold ${
              isActive ? styles.badgeActive : styles.badgeIdle
            }`}
          >
            {t.n}
          </span>
          <span className="line-clamp-2 leading-snug">{t.title}</span>
        </a>
      </li>
    );
  };

  return (
    <>
      {/* Mobile: collapsible TOC at top */}
      <details className="group lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm">
          <span>On this page</span>
          <ChevronDown
            className="h-4 w-4 text-slate-500 transition group-open:rotate-180"
            aria-hidden
          />
        </summary>
        <nav className="mt-3 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <ol className="space-y-1">{items.map(renderItem)}</ol>
        </nav>
      </details>

      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
          <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            On this page
          </p>
          <nav className="mt-3">
            <ol className="space-y-0.5">{items.map(renderItem)}</ol>
          </nav>
        </div>
      </aside>
    </>
  );
}
