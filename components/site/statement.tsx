import { profile } from '@/lib/site-data'
import { Reveal } from './reveal'

export function Statement() {
  return (
    <section aria-label="Introduction" className="border-y border-rule bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <p className="eyebrow md:col-span-3">Scripture &middot; Reason &middot; Tradition</p>
        <Reveal className="md:col-span-9">
          <p className="font-serif text-3xl leading-[1.25] tracking-tight text-balance md:text-[2.75rem]">
            A body of work that reads the classical inheritance of <em className="text-primary">kal&#257;m</em> and
            Qur&apos;anic scholarship as a living resource &mdash; bringing al-M&#257;tur&#299;d&#299; into dialogue
            with contemporary philosophy, ethics and the study of scripture.
          </p>
          <dl className="mt-12 grid gap-8 border-t border-rule pt-8 text-sm sm:grid-cols-2">
            <div>
              <dt className="eyebrow">Current role</dt>
              <dd className="mt-2 text-base leading-relaxed">
                {profile.role}, {profile.roleDetail},{' '}
                <a
                  href={profile.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-rule underline-offset-4 hover:text-primary hover:decoration-primary"
                >
                  {profile.institution}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Series editor</dt>
              <dd className="mt-2 text-base leading-relaxed">
                <a
                  href={profile.seriesEditor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic underline decoration-rule underline-offset-4 hover:text-primary hover:decoration-primary"
                >
                  {profile.seriesEditor.title}
                </a>
                , {profile.seriesEditor.publisher}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
