'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { publications, researchAreas, type ResearchArea } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { SectionHeading, formatYear } from './primitives'

export function ResearchAreas() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="research" aria-labelledby="research-title" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeading
        index="iii."
        eyebrow="Research"
        id="research-title"
        title="Fields of inquiry"
        lede="Four overlapping areas organise the research. Open each to see its recurring themes and representative publications."
      />

      <ul className="mt-16 border-b border-rule">
        {researchAreas.map((area, i) => (
          <ResearchRow
            key={area.title}
            area={area}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </ul>
    </section>
  )
}

function ResearchRow({ area, open, onToggle }: { area: ResearchArea; open: boolean; onToggle: () => void }) {
  const panelId = `research-panel-${area.numeral}`
  const related = area.related
    .map((id) => publications.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <li className="group border-t border-rule">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="grid w-full grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-8 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring md:grid-cols-[6rem_1fr_auto] md:py-10"
        >
          <span
            className={cn(
              'font-serif text-xl italic transition-colors duration-300 md:text-2xl',
              open ? 'text-primary' : 'text-muted-foreground group-hover:text-primary',
            )}
          >
            {area.numeral}
          </span>
          <span
            className={cn(
              'font-serif text-3xl leading-tight tracking-tight transition-all duration-500 md:text-5xl',
              open ? 'text-primary' : 'group-hover:translate-x-2',
            )}
          >
            {area.title}
          </span>
          <Plus
            aria-hidden="true"
            className={cn(
              'size-5 text-muted-foreground transition-transform duration-500 md:size-6',
              open && 'rotate-45 text-primary',
            )}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-label={area.title}
        className={cn(
          'grid transition-[grid-template-rows] duration-500 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden" inert={!open}>
          <div className="grid gap-10 pb-12 md:grid-cols-[6rem_1fr_1fr] md:gap-10">
            <div className="hidden md:block" />
            <div>
              <p className="max-w-md text-lg leading-relaxed text-foreground/85 text-pretty">{area.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {area.themes.map((theme) => (
                  <li key={theme} className="border border-rule px-3 py-1.5 text-sm text-muted-foreground">
                    {theme}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Representative work</p>
              <ul className="mt-4 divide-y divide-rule border-y border-rule">
                {related.map((pub) => {
                  const href = pub.pdf ?? pub.link ?? (pub.doi ? `https://doi.org/${pub.doi}` : undefined)
                  return (
                    <li key={pub.id} className="py-3">
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-serif text-lg leading-snug hover:text-primary"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <span className="font-serif text-lg leading-snug">{pub.title}</span>
                      )}
                      <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {pub.type} &middot; {formatYear(pub.year)}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
