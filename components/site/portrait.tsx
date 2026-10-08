import Image from 'next/image'
import { profile } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Portrait({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <figure className={cn('relative', className)}>
      <div className="relative aspect-4/5 w-full overflow-hidden bg-secondary">
        {profile.portrait ? (
          <Image
            src={profile.portrait}
            alt={`Portrait of ${profile.honorific} ${profile.name}`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        ) : (
          <div className="paper absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
            <div className="absolute inset-4 border border-rule" aria-hidden="true" />
            <span className="font-serif text-7xl italic text-primary/70 md:text-8xl" aria-hidden="true">
              RH
            </span>
            <span className="eyebrow">Portrait to follow</span>
            <span className="sr-only">Portrait placeholder for {profile.name}</span>
          </div>
        )}
      </div>
    </figure>
  )
}
