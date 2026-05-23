import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const siteUrl = 'https://jantrik.ai';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Jantrik AI — AI that speaks your language',
    template: '%s · Jantrik AI',
  },
  description:
    'A multilingual AI platform built for India and the world. Three products — Jantra Bot, Jantra Civic, Jantra Web — across 19 languages.',
  applicationName: 'Jantrik AI',
  authors: [{ name: 'Coding Ryder Enterprises', url: 'https://codingryder.com' }],
  keywords: [
    'multilingual AI',
    'Indian languages AI',
    'AI assistant',
    'Jantra Bot',
    'Jantra Web',
    'Jantra Civic',
    'WhatsApp AI',
    'regional language AI',
    'Coding Ryder',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Jantrik AI',
    title: 'Jantrik AI — AI that speaks your language',
    description:
      'A multilingual AI platform built for India and the world. Jantra Bot, Jantra Civic, Jantra Web.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jantrik AI — AI that speaks your language',
    description:
      'A multilingual AI platform built for India and the world. Jantra Bot, Jantra Civic, Jantra Web.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
