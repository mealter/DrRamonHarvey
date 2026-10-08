import { About } from '@/components/site/about'
import { Articles } from '@/components/site/articles'
import { Contact } from '@/components/site/contact'
import { FeaturedBooks } from '@/components/site/featured-books'
import { Hero } from '@/components/site/hero'
import { ResearchAreas } from '@/components/site/research-areas'
import { SelectedPublications } from '@/components/site/selected-publications'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { Statement } from '@/components/site/statement'
import { Teaching } from '@/components/site/teaching'
import { profile, siteUrl } from '@/lib/site-data'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ramon Harvey',
  honorificPrefix: 'Dr',
  url: siteUrl,
  jobTitle: profile.role,
  worksFor: { '@type': 'CollegeOrUniversity', name: profile.institution, url: profile.institutionUrl },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'SOAS, University of London' },
    { '@type': 'CollegeOrUniversity', name: 'University of Nottingham' },
  ],
  sameAs: [profile.twitter.url],
  knowsAbout: ['Islamic theology', 'Qur\u2019anic studies', 'Islamic philosophy', 'M\u0101tur\u012Bd\u012B theology'],
}

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <div id="top" className="scroll-mt-24" />
        <Hero />
        <Statement />
        <FeaturedBooks />
        <About />
        <ResearchAreas />
        <SelectedPublications />
        <Articles />
        <Teaching />
        <Contact />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  )
}
