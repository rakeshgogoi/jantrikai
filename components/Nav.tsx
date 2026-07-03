'use client';

import Link from 'next/link';
import { Bot, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/web/', label: 'Jantra Web' },
  { href: '/bot/', label: 'Jantra Bot' },
  { href: '/world/', label: 'Jantra World' },
  { href: '/about/', label: 'About' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-slate-900"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-sm">
            <Bot className="h-4 w-4" aria-hidden />
          </span>
          <span className="text-base tracking-tight">
            Jantrik <span className="text-brand-600">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact/"
          className="hidden md:inline-flex btn-primary !py-2"
        >
          Contact
        </Link>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 top-16 z-30 bg-slate-900/20 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-16 z-40 border-b border-slate-200 bg-white shadow-lg md:hidden"
          >
            <nav className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-800 transition hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact/"
                className="btn-primary mt-3 w-full justify-center"
              >
                Contact
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
