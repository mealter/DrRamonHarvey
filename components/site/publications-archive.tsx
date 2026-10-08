'use client'

import { useDeferredValue, useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { publicationTypeLabels, publications, type PublicationType } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { PublicationItem } from './publication-item'
import { ButtonLink } from './primitives'

type Filter = 'All' | PublicationType

const filters: Filter[] = ['All', 'Book', 'Article', 'Chapter', 'Encyclopaedia', 'Review', 'Other']

const normalize = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f\u02BE\u02BF\u2018\u2019']/g, '')
    .toLowerCase()

export function PublicationsArchive({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<Filter>('All')
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const sorted = useMemo(
    () => [...publications].sort((a, b) => b.year - a.year),
    [],
  )

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([['All', publications.length]])
    for (const p of publications) map.set(p.type, (map.get(p.type) ?? 0) + 1)
    return map
  }, [])

  const results = useMemo(() => {
    const q = normalize(deferredQuery.trim())
    return sorted.filter((p) => {
      if (filter !== 'All' && p.type !== filter) return false
      if (!q) return true
      return normalize(`${p.title} ${p.venue} ${p.authors} ${p.year} ${p.note ?? ''}`).includes(q)
    })
  }, [sorted, filter, deferredQuery])

  const isFiltering = filter !== 'All' || deferredQuery.trim() !== ''
  const visible = limit && !isFiltering ? results.slice(0, limit) : results
  const hiddenCount = results.length - visible.length

  return (
    <div>
      <div className="flex flex-col gap-6 border-y border-rule py-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by publication type" className="-mx-1 flex flex-wrap gap-1">
          {filters.map((f) => {
            const active = filter === f
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f)}
                className={cn(
                  'inline-flex items-baseline gap-1.5 px-3 py-2 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.12em] transition-colors',
                  active ? 'bg-foreground text-background' : 'text-foreground/70 hover:text-primary',
                )}
              >
                {f === 'All' ? 'All' : publicationTypeLabels[f]}
                <span className={cn('text-[0.7rem] font-normal', active ? 'text-background/70' : 'text-muted-foreground')}>
                  {counts.get(f) ?? 0}
                </span>
              </button>
            )
          })}
        </div>

        <div className="relative w-full lg:w-80">
          <label htmlFor="publication-search" className="sr-only">
            Search publications
          </label>
          <Search className="pointer-events-none absolute left-0 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            id="publication-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search publications..."
            className="w-full border-0 border-b border-foreground/30 bg-transparent py-2 pl-7 pr-8 font-serif text-lg placeholder:text-muted-foreground focus:border-primary focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-primary"
            >
              <X className="size-4" aria-hidden="true" />
              <span className="sr-only">Clear search</span>
            </button>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        {results.length === 0
          ? 'No publications match your search.'
          : `Showing ${visible.length} of ${results.length} ${results.length === 1 ? 'publication' : 'publications'}`}
      </p>

      {visible.length > 0 && (
        <ul className="mt-2 divide-y divide-rule border-b border-rule">
          {visible.map((pub) => (
            <li key={pub.id}>
              <PublicationItem pub={pub} />
            </li>
          ))}
        </ul>
      )}

      {hiddenCount > 0 && (
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/publications" variant="outline">
            View all {results.length} publications
          </ButtonLink>
        </div>
      )}
    </div>
  )
}
