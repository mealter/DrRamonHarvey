import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { EB_Garamond, Source_Sans_3 } from 'next/font/google'
import { siteUrl } from '@/lib/site-data'
import './globals.css'

const garamond = EB_Garamond({
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-source-sans',
  display: 'swap',
})

const description =
  'Dr Ramon Harvey is a scholar of Islamic theology, Qur\u2019anic studies and Islamic philosophy, with a particular focus on the M\u0101tur\u012Bd\u012B intellectual tradition. Books, publications, research and teaching.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dr Ramon Harvey \u2014 Islamic Theology, Philosophy & Qur\u2019anic Studies',
    template: '%s \u2014 Dr Ramon Harvey',
  },
  description,
  authors: [{ name: 'Ramon Harvey' }],
  keywords: [
    'Ramon Harvey',
    'M\u0101tur\u012Bd\u012B',
    'Maturidi theology',
    'Islamic theology',
    'Qur\u2019anic studies',
    'Islamic philosophy',
    'kalam',
    'Cambridge Muslim College',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Dr Ramon Harvey',
    title: 'Dr Ramon Harvey \u2014 Islamic Theology, Philosophy & Qur\u2019anic Studies',
    description,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RamonIHarvey',
    creator: '@RamonIHarvey',
    title: 'Dr Ramon Harvey',
    description,
  },
}

export const viewport: Viewport = {
  themeColor: '#f6f1e7',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${garamond.variable} ${sourceSans.variable}`}>
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
