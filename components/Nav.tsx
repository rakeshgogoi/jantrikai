import Link from 'next/link';
import { Bot } from 'lucide-react';

const navLinks = [
  { href: '/web/', label: 'Jantra Web' },
  { href: '/bot/', label: 'Jantra Bot' },
  { href: '/civic/', label: 'Jantra Civic' },
  { href: '/about/', label: 'About' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900">
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
      </div>
    </header>
  );
}
