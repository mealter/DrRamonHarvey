import { publications } from '@/lib/site-data'
import { ButtonLink, SectionHeading } from './primitives'
import { PublicationsArchive } from './publications-archive'

export function SelectedPublications() {
  return (
    <section id="publications" aria-labelledby="publications-title" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeading
        index="iv."
        eyebrow="Publications"
        id="publications-title"
        title="The archive"
        lede={`${publications.length} books, articles, chapters, encyclopaedia entries and reviews. Filter by type or search by title, journal or co-author.`}
        aside={
          <ButtonLink href="/publications" variant="text" className="shrink-0">
            Full archive
          </ButtonLink>
        }
      />
      <div className="mt-14">
        <PublicationsArchive limit={8} />
      </div>
    </section>
  )
}
