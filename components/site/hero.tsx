import { profile } from '@/lib/site-data'
import { ButtonLink } from './primitives'
import { Portrait } from './portrait'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-12 md:px-10 md:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="eyebrow mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            {profile.role}, {profile.institution}
          </p>
          <h1
            id="hero-title"
            className="font-serif text-[clamp(3.75rem,11vw,9.5rem)] leading-[0.88] tracking-[-0.03em]"
          >
            Ramon
            <br />
            <span className="italic text-primary">Harvey</span>
          </h1>
          <p className="mt-10 max-w-xl font-serif text-2xl leading-snug text-balance md:text-3xl">
            {profile.tagline}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Ramon Harvey works across Islamic theology, Qur&apos;anic studies and philosophy, with a particular focus
            on the thought of Ab&#363; Man&#7779;&#363;r al-M&#257;tur&#299;d&#299; and the M&#257;tur&#299;d&#299;
            tradition &mdash; read in conversation with analytic philosophy and Husserlian phenomenology.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="/publications">Explore Publications</ButtonLink>
            <ButtonLink href="/#about" variant="outline">
              About Ramon
            </ButtonLink>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-6 -top-24 select-none font-serif text-[22rem] leading-none text-primary/[0.07] md:-left-16"
          >
            &ldquo;
          </span>
          <div className="relative ml-auto max-w-md lg:mt-6">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 hidden h-full w-full border border-rule md:block" aria-hidden="true" />
              <Portrait priority className="relative" />
            </div>
            <p className="mt-4 flex md:mt-8 items-center justify-between font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span>Dr {profile.name}</span>
              <span>{profile.institution}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
