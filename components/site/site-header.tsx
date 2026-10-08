'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Wordmark } from './primitives'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-colors duration-300',
        scrolled || open
          ? 'border-rule bg-background/92 backdrop-blur-sm'
          : 'border-transparent bg-background',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link href="/#top" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" onClick={() => setOpen(false)}>
          <Wordmark />
          <span className="sr-only">, home</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative font-sans text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-foreground/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex size-10 items-center justify-center text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-rule bg-background px-6 pb-10 lg:hidden"
      >
        <ul className="flex flex-col">
          {navItems.map((item, i) => (
            <li key={item.href} className="border-b border-rule">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-5 font-serif text-3xl tracking-tight hover:text-primary"
              >
                {item.label}
                <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
