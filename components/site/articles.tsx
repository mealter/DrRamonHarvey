import { FileDown, ArrowUpRight } from 'lucide-react'
import { featuredArticleIds, publications, type Publication } from '@/lib/site-data'
import { SectionHeading, formatYear } from './primitives'
import { Reveal } from './reveal'

function journalName(venue: string) {
  return venue.split(/\s\d|\s\(|,/)[0]
}

function ArticleCard({ pub }: { pub: Publication }) {
  return (
    <article className="group flex h-full flex-col border-t-2 border-foreground pt-6">
      <div className="flex items-baseline justify-between gap-4">
        <p className="eyebrow text-primary">{journalName(pub.venue)}</p>
        <p className="font-serif text-lg text-muted-foreground">{formatYear(pub.year)}</p>
      </div>
      <h3 className="mt-5 font-serif text-2xl leading-snug tracking-tight text-balance transition-colors duration-300 group-hover:text-primary">
        {pub.title}
      </h3>
      {pub.summary && (
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">{pub.summary}</p>
      )}
      <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
        {pub.authors !== 'Ramon Harvey' ? `${pub.authors} \u00B7 ` : ''}
        {pub.venue}
      </p>
      <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
        {pub.pdf && (
          <a
            href={pub.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/80 px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <FileDown className="size-4" aria-hidden="true" />
            Download PDF
            <span className="sr-only">: {pub.title} (opens in a new tab)</span>
          </a>
        )}
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:text-foreground"
          >
            DOI <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        )}
        {pub.note && <span className="text-xs text-muted-foreground">{pub.note}</span>}
      </div>
    </article>
  )
}

export function Articles() {
  const featured = featuredArticleIds
    .map((id) => publications.find((p) => p.id === id))
    .filter((p): p is Publication => Boolean(p))

  return (
    <section id="articles" aria-labelledby="articles-title" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading
          index="v."
          eyebrow="Articles & Papers"
          id="articles-title"
          title={
            <>
              Recent papers, <span className="italic text-primary">freely available</span>
            </>
          }
          lede={'A selection of recent journal articles. Most of Ramon Harvey\u2019s work can be downloaded directly from the author\u2019s archive.'}
        />
        <ul className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((pub, i) => (
            <Reveal as="li" key={pub.id} delay={(i % 3) * 90}>
              <ArticleCard pub={pub} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
