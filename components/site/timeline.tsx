import { journey } from '@/lib/site-data'

export function Timeline() {
  return (
    <div>
      <h3 className="eyebrow">Academic journey</h3>
      <ol className="relative mt-8 grid gap-10 md:grid-cols-4 md:gap-8">
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-rule md:left-0 md:top-[7px] md:h-px md:w-full"
        />
        {journey.map((step, i) => {
          const isCurrent = i === journey.length - 1
          return (
            <li key={step.label} className="relative pl-10 md:pl-0 md:pt-10">
              <span
                aria-hidden="true"
                className={
                  isCurrent
                    ? 'absolute left-0 top-1 size-[15px] rounded-full bg-primary md:top-0'
                    : 'absolute left-0 top-1 size-[15px] rounded-full border border-foreground/40 bg-background md:top-0'
                }
              />
              <p className="font-serif text-3xl text-primary">{step.label}</p>
              <p className="mt-2 font-serif text-xl leading-snug">{step.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
