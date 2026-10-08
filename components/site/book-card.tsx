import Image from 'next/image'
import type { Book } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { ButtonLink } from './primitives'

export function BookCover({ book, className, sizes }: { book: Book; className?: string; sizes?: string }) {
  return (
    <div
      className={cn(
        'relative aspect-[2/3] w-full overflow-hidden bg-secondary shadow-[0_1px_0_rgba(0,0,0,0.04),0_18px_30px_-18px_rgba(40,30,20,0.45)] transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_1px_0_rgba(0,0,0,0.04),0_28px_40px_-20px_rgba(40,30,20,0.5)]',
        className,
      )}
    >
      {book.cover ? (
        <Image
          src={book.cover}
          alt={`Cover of ${book.title}${book.subtitle ? `: ${book.subtitle}` : ''}`}
          fill
          sizes={sizes ?? '(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw'}
          className="object-cover"
        />
      ) : (
        <TypographicCover book={book} />
      )}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/15 to-transparent"
      />
    </div>
  )
}

function TypographicCover({ book }: { book: Book }) {
  return (
    <div className="paper absolute inset-0 flex flex-col justify-between bg-primary p-6 text-primary-foreground">
      <span className="eyebrow text-primary-foreground/70">{book.publisher}</span>
      <div>
        <p className="font-serif text-2xl leading-tight">{book.title}</p>
        {book.subtitle && <p className="mt-2 font-serif italic opacity-80">{book.subtitle}</p>}
      </div>
      <span className="font-sans text-xs uppercase tracking-[0.2em] opacity-80">{book.credit}</span>
    </div>
  )
}

function BookMeta({ book, large }: { book: Book; large?: boolean }) {
  return (
    <>
      <p className="eyebrow flex flex-wrap gap-x-3">
        <span className="text-primary">{book.role}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{book.year}</span>
      </p>
      <h3
        className={cn(
          'mt-3 font-serif leading-[1.08] tracking-tight text-balance',
          large ? 'text-4xl md:text-5xl' : 'text-2xl',
        )}
      >
        {book.title}
        {book.subtitle && (
          <span className={cn('block italic text-muted-foreground', large ? 'mt-2 text-2xl md:text-3xl' : 'mt-1 text-lg')}>
            {book.subtitle}
          </span>
        )}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-foreground/80">{book.credit}</p>
      <p className="mt-1 text-sm text-muted-foreground">
        {book.publisher}, {book.year}
      </p>
    </>
  )
}

function BookLinks({ book }: { book: Book }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
      {book.link && (
        <ButtonLink href={book.link.href} variant="text">
          {book.link.label}
        </ButtonLink>
      )}
      {book.extras?.map((extra) => (
        <ButtonLink key={extra.href} href={extra.href} variant="text" className="text-muted-foreground">
          {extra.label}
        </ButtonLink>
      ))}
    </div>
  )
}

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="group flex flex-col">
      <BookCover book={book} />
      <div className="mt-7 flex flex-1 flex-col">
        <BookMeta book={book} />
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">{book.description}</p>
        <div className="mt-auto">
          <BookLinks book={book} />
        </div>
      </div>
    </article>
  )
}

export function BookFeature({ book }: { book: Book }) {
  return (
    <article className="group grid items-center gap-10 md:grid-cols-12 md:gap-14">
      <div className="mx-auto w-full max-w-xs md:col-span-4 md:max-w-none">
        <BookCover book={book} sizes="(min-width: 768px) 30vw, 80vw" />
      </div>
      <div className="md:col-span-7 md:col-start-6">
        <p className="eyebrow mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-primary" aria-hidden="true" />
          Latest volume
        </p>
        <BookMeta book={book} large />
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">{book.description}</p>
        <BookLinks book={book} />
      </div>
    </article>
  )
}
