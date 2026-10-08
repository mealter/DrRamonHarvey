import { books } from '@/lib/site-data'
import { BookCard, BookFeature } from './book-card'
import { SectionHeading } from './primitives'
import { Reveal } from './reveal'

export function FeaturedBooks() {
  const sorted = [...books].sort((a, b) => b.year - a.year)
  const [lead, ...rest] = sorted

  return (
    <section id="books" aria-labelledby="books-title" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeading
        id="books-title"
        index="i."
        eyebrow="Featured Books"
        title={
          <>
            Monographs, editions <span className="italic text-primary">&amp;</span> collected volumes
          </>
        }
      />

      {lead && (
        <Reveal className="mt-16 md:mt-24">
          <BookFeature book={lead} />
        </Reveal>
      )}

      <ul className="mt-20 grid gap-x-10 gap-y-16 border-t border-rule pt-16 sm:grid-cols-2 lg:grid-cols-4 md:mt-28">
        {rest.map((book, i) => (
          <Reveal as="li" key={book.slug} delay={i * 90} className="flex">
            <BookCard book={book} />
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
