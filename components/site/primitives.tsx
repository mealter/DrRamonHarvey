import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'outline' | 'text'
  external?: boolean
  className?: string
}

export function ButtonLink({ href, children, variant = 'solid', external, className }: ButtonLinkProps) {
  const isExternal = external ?? /^https?:\/\//.test(href)
  const Icon = isExternal ? ArrowUpRight : ArrowRight
  const classes = cn(
    'group inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring',
    variant === 'solid' &&
      'bg-primary px-5 py-3 text-primary-foreground hover:bg-foreground',
    variant === 'outline' &&
      'border border-foreground/80 px-5 py-3 text-foreground hover:border-primary hover:text-primary',
    variant === 'text' &&
      'border-b border-current pb-0.5 text-primary hover:text-foreground',
    className,
  )
  const content = (
    <>
      {children}
      <Icon
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </>
  )
  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}

type SectionHeadingProps = {
  index?: string
  eyebrow: string
  title: React.ReactNode
  lede?: React.ReactNode
  id?: string
  className?: string
  aside?: React.ReactNode
}

export function SectionHeading({ index, eyebrow, title, lede, id, className, aside }: SectionHeadingProps) {
  return (
    <header className={cn('grid gap-6 border-t border-rule pt-6 md:grid-cols-12 md:gap-10', className)}>
      <div className="md:col-span-3">
        <p className="eyebrow flex items-baseline gap-3">
          {index && <span className="font-serif text-sm font-normal normal-case tracking-normal text-primary">{index}</span>}
          {eyebrow}
        </p>
      </div>
      <div className="md:col-span-9">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            id={id}
            className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl"
          >
            {title}
          </h2>
          {aside}
        </div>
        {lede && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">{lede}</p>
        )}
      </div>
    </header>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('font-serif text-xl leading-none tracking-tight', className)}>
      Ramon <span className="italic text-primary">Harvey</span>
    </span>
  )
}

export function formatYear(year: number) {
  return year > 0 ? String(year) : 'n.d.'
}
