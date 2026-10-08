import Link from 'next/link'
import { navItems } from '@/lib/site-data'
import { Wordmark } from './primitives'

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-background/15 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <Link href="/#top" className="text-background">
          <Wordmark className="[&_span]:text-[oklch(0.8_0.07_25)]" />
        </Link>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-background/60 hover:text-background"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/publications"
                className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-background/60 hover:text-background"
              >
                Publications
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-xs text-background/50">&copy; {new Date().getFullYear()} Ramon Harvey</p>
      </div>
    </footer>
  )
}
