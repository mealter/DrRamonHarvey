import type { Metadata } from 'next'
import { PublicationsArchive } from '@/components/site/publications-archive'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Complete publications archive of Dr Ramon Harvey: books, journal articles, book chapters, encyclopaedia entries and reviews, with downloads where available.',
  alternates: { canonical: '/publications' },
}

export default function PublicationsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-7xl px-6 pb-28 pt-14 md:px-10 md:pt-20">
        <header className="grid gap-8 pb-14 md:grid-cols-12 md:gap-10">
          <p className="eyebrow md:col-span-3">Publications archive</p>
          <div className="md:col-span-9">
            <h1 className="font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
              Collected <span className="italic text-primary">writings</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Books, journal articles, chapters, encyclopaedia entries, reviews and other writing, listed from most
              recent. Download links point to the author&apos;s own archive at ramonharvey.com or to the publisher.
            </p>
          </div>
        </header>
        <PublicationsArchive />
      </main>
      <SiteFooter />
    </>
  )
}
