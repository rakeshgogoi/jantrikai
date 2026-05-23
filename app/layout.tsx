import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const siteUrl = 'https://jantrikai.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Jantrik AI — Multilingual AI for India in 19 languages',
    template: '%s · Jantrik AI',
  },
  description:
    'Jantrik AI builds multilingual AI products for India in 19 languages — Jantra Web (browser workspace), Jantra Bot (WhatsApp assistant), and Jantra Civic (government schemes & forms).',
  applicationName: 'Jantrik AI',
  authors: [{ name: 'Coding Ryder Enterprises', url: 'https://codingryder.com' }],
  creator: 'Coding Ryder Enterprises',
  publisher: 'Coding Ryder Enterprises',
  keywords: [
    'Jantrik AI',
    'multilingual AI India',
    'Indian languages AI assistant',
    'Hindi AI chatbot',
    'Tamil AI assistant',
    'Bengali AI',
    'Assamese AI',
    'Indic language AI',
    'WhatsApp AI bot India',
    'Jantra Bot',
    'Jantra Web',
    'Jantra Civic',
    'government schemes AI',
    'handwriting OCR Indic',
    'Sarvam AI',
    'Coding Ryder',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Jantrik AI',
    title: 'Jantrik AI — Multilingual AI for India in 19 languages',
    description:
      'Jantra Web, Jantra Bot, and Jantra Civic — three multilingual AI products for India, across 19 languages.',
    url: siteUrl,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jantrik AI — Multilingual AI for India in 19 languages',
    description:
      'Jantra Web, Jantra Bot, and Jantra Civic — three multilingual AI products for India, across 19 languages.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Jantrik AI',
  legalName: 'Coding Ryder Enterprises',
  url: siteUrl,
  logo: `${siteUrl}/icon`,
  sameAs: ['https://codingryder.com'],
  description:
    'Jantrik AI builds multilingual AI products for India across 19 languages.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'connect@codingryder.com',
    contactType: 'customer support',
    areaServed: 'IN',
    availableLanguage: [
      'English',
      'Hindi',
      'Bengali',
      'Tamil',
      'Telugu',
      'Marathi',
      'Gujarati',
      'Kannada',
      'Malayalam',
      'Punjabi',
      'Assamese',
      'Odia',
    ],
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Jantrik AI',
  url: siteUrl,
  publisher: {
    '@type': 'Organization',
    name: 'Jantrik AI',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
