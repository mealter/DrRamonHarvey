import { education, profile, researchInterests } from '@/lib/site-data'
import { Portrait } from './portrait'
import { SectionHeading } from './primitives'
import { Reveal } from './reveal'
import { Timeline } from './timeline'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading index="ii." eyebrow="About" id="about-title" title="A scholar between scripture and reason" />

        <div className="mt-16 grid gap-14 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-4">
            <Portrait className="max-w-sm" />
          </Reveal>

          <div className="md:col-span-8 md:pl-6">
            <Reveal className="max-w-2xl space-y-6 text-lg leading-relaxed text-foreground/85 text-pretty">
              <p className="font-serif text-2xl leading-snug text-foreground first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-primary md:text-[1.7rem]">
                Dr Ramon Harvey is {profile.role} at{' '}
                <a
                  href={profile.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-rule underline-offset-4 hover:text-primary hover:decoration-primary"
                >
                  {profile.institution}
                </a>
                , where he is currently Academic Lead within the faculty and teaches Islamic theology on the BA
                programme.
              </p>
              <p>
                His research spans Islamic theology, Husserlian phenomenology, analytic philosophy and Qur&apos;anic
                studies, with sustained attention to Ab&#363; Man&#7779;&#363;r al-M&#257;tur&#299;d&#299; and the
                theological tradition that bears his name. Most of his publications are freely available to download.
              </p>
              <p>
                He is also series editor of{' '}
                <a
                  href={profile.seriesEditor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic underline decoration-rule underline-offset-4 hover:text-primary hover:decoration-primary"
                >
                  {profile.seriesEditor.title}
                </a>{' '}
                at {profile.seriesEditor.publisher}, which publishes original monographs and collected volumes on the
                Qur&apos;an, Hadith, Islamic theology and their supporting literatures, classical and contemporary.
              </p>
            </Reveal>

            <Reveal className="mt-14 grid gap-10 border-t border-rule pt-10 sm:grid-cols-2">
              <div>
                <h3 className="eyebrow">Research interests</h3>
                <ul className="mt-5 space-y-2.5">
                  {researchInterests.map((interest) => (
                    <li key={interest} className="flex items-baseline gap-3 font-serif text-xl">
                      <span className="h-px w-4 shrink-0 translate-y-[-0.3em] bg-primary" aria-hidden="true" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="eyebrow">Education</h3>
                <dl className="mt-5 divide-y divide-rule border-y border-rule">
                  {education.map((item) => (
                    <div key={item.degree} className="flex items-baseline gap-6 py-3.5">
                      <dt className="w-12 shrink-0 font-serif text-xl text-primary">{item.degree}</dt>
                      <dd className="text-base">{item.institution}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-24">
          <Timeline />
        </Reveal>
      </div>
    </section>
  )
}
