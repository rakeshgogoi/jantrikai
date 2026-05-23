import Link from 'next/link';
import { Mail, Globe, Linkedin } from 'lucide-react';

const productLinks = [
  { href: '/web/', label: 'Jantra Web' },
  { href: '/bot/', label: 'Jantra Bot' },
  { href: '/civic/', label: 'Jantra Civic' },
];

const companyLinks = [
  { href: '/about/', label: 'About' },
  { href: 'https://codingryder.com', label: 'Coding Ryder', external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-lg font-bold tracking-tight text-slate-900">
              Jantrik <span className="text-brand-600">AI</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              A multilingual AI platform built for India and the world. From a CRE
              product family by{' '}
              <a
                className="text-brand-700 hover:underline"
                href="https://codingryder.com"
              >
                Coding Ryder Enterprises
              </a>
              .
            </p>
            <div className="mt-5 flex items-center gap-4 text-slate-500">
              <a
                href="mailto:connect@codingryder.com"
                aria-label="Email"
                className="transition hover:text-brand-700"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://codingryder.com"
                aria-label="Website"
                className="transition hover:text-brand-700"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rakesh-gogoi/"
                aria-label="LinkedIn"
                className="transition hover:text-brand-700"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Products</h4>
            <ul className="mt-4 space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) =>
                link.external ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition hover:text-brand-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
              <li>
                <a
                  href="mailto:connect@codingryder.com"
                  className="text-sm text-slate-600 transition hover:text-brand-700"
                >
                  connect@codingryder.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Coding Ryder Enterprises. All rights reserved.</p>
          <p>Made in India · for India and the world.</p>
        </div>
      </div>
    </footer>
  );
}
