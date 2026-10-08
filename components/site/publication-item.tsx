import { ArrowUpRight, FileDown } from 'lucide-react'
import type { Publication } from '@/lib/site-data'
import { formatYear } from './primitives'

const typeLabel: Record<Publication['type'], string> = {
  Book: 'Book',
  Article: 'Journal article',
  Chapter: 'Book chapter',
  Encyclopaedia: 'Encyclopaedia entry',
  Review: 'Review',
  Other: 'Other',
}

function ExternalLink({ href, children, icon = 'arrow' }: { href: string; children: React.ReactNode; icon?: 'arrow' | 'pdf' }) {
  const Icon = icon === 'pdf' ? FileDown : ArrowUpRight
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:text-foreground"
    >
      <Icon className="size-3.5" aria-hidden="true" />
      {children}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

export function PublicationItem({ pub }: { pub: Publication }) {
  return (
    <article className="grid gap-3 py-7 md:grid-cols-[5.5rem_1fr_12rem] md:gap-8">
      <p className="font-serif text-2xl leading-none text-primary md:pt-1">{formatYear(pub.year)}</p>
      <div>
        <p className="eyebrow">{typeLabel[pub.type]}</p>
        <h3 className="mt-2 font-serif text-xl leading-snug text-balance md:text-[1.4rem]">{pub.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">{pub.authors}</p>
        <p className="text-sm italic leading-relaxed text-muted-foreground">{pub.venue}</p>
        {pub.note && <p className="mt-1 text-xs text-muted-foreground">{pub.note}</p>}
        {pub.doi && (
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            DOI:{' '}
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-rule underline-offset-2 hover:text-primary"
            >
              {pub.doi}
            </a>
          </p>
        )}
      </div>
      <div className="flex flex-wrap items-start gap-x-5 gap-y-2 md:flex-col md:items-end md:pt-6">
        {pub.pdf && (
          <ExternalLink href={pub.pdf} icon="pdf">
            Download PDF
          </ExternalLink>
        )}
        {pub.link && <ExternalLink href={pub.link}>Publisher / link</ExternalLink>}
        {pub.doi && !pub.link && <ExternalLink href={`https://doi.org/${pub.doi}`}>View DOI</ExternalLink>}
      </div>
    </article>
  )
}
