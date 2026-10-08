import { onlineCourse, profile, teachingAreas } from '@/lib/site-data'
import { ButtonLink, SectionHeading } from './primitives'
import { Reveal } from './reveal'

export function Teaching() {
  return (
    <section id="teaching" aria-labelledby="teaching-title" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeading
        index="vi."
        eyebrow="Teaching"
        id="teaching-title"
        title="Areas of teaching"
        lede={`Ramon Harvey teaches Islamic theology on the BA programme at ${profile.institution}, where he is also Academic Lead within the faculty.`}
      />

      <div className="mt-16 grid gap-14 md:grid-cols-12 md:gap-10">
        <ol className="md:col-span-8">
          {teachingAreas.map((area, i) => (
            <Reveal
              as="li"
              key={area.title}
              delay={i * 60}
              className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-t border-rule py-6 last:border-b md:grid-cols-[3.5rem_1fr_1fr] md:gap-8"
            >
              <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-primary md:text-3xl">
                {area.title}
              </h3>
              <p className="col-start-2 text-[0.95rem] leading-relaxed text-muted-foreground md:col-start-3">
                {area.detail}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="md:col-span-4">
          <aside className="border border-foreground/80 p-8" aria-labelledby="online-course-title">
            <p className="eyebrow text-primary">Online course</p>
            <h3 id="online-course-title" className="mt-4 font-serif text-3xl leading-tight">
              {onlineCourse.title}
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{onlineCourse.description}</p>
            <ButtonLink href={onlineCourse.href} className="mt-8">
              Course details
            </ButtonLink>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
