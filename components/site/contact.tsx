import { ArrowUpRight } from 'lucide-react'
import { profile, profileLinks } from '@/lib/site-data'
import { EmailLink } from './email-link'
import { SubscribeForm } from './subscribe-form'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-rule bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-7">
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-background/60">
            <span className="mr-3 font-serif text-sm font-normal normal-case tracking-normal text-[oklch(0.8_0.07_25)]">
              vii.
            </span>
            Contact
          </p>
          <h2 id="contact-title" className="mt-8 font-serif text-5xl leading-[1.02] tracking-tight text-balance md:text-7xl">
            Correspondence <span className="italic text-[oklch(0.8_0.07_25)]">&amp;</span> enquiries
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-background/75 text-pretty">
            For questions and correspondence, Twitter / X is the best way for members of the public to reach Ramon.
            He can also be contacted by email.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={profile.twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background px-5 py-3 font-sans text-sm font-semibold tracking-wide text-foreground transition-colors hover:bg-[oklch(0.8_0.07_25)]"
            >
              {profile.twitter.handle}
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">on Twitter / X (opens in a new tab)</span>
            </a>
            <EmailLink className="font-serif text-xl text-background underline decoration-background/30 underline-offset-[6px] hover:decoration-background" />
          </div>

          <div id="subscribe" className="relative mt-16 max-w-xl border-t border-background/20 pt-10">
            <h3 className="font-serif text-2xl tracking-tight text-background md:text-3xl">
              Stay informed of new work
            </h3>
            <div className="mt-6">
              <SubscribeForm />
            </div>
          </div>
        </div>

        <nav aria-label="Academic profiles" className="md:col-span-4 md:col-start-9">
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-background/60">
            Profiles &amp; affiliations
          </p>
          <ul className="mt-6 border-t border-background/20">
            {profileLinks.map((link) => (
              <li key={link.href} className="border-b border-background/20">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 py-4 text-background/85 transition-colors hover:text-background"
                >
                  <span className="font-serif text-lg leading-snug">{link.label}</span>
                  <ArrowUpRight
                    className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
