'use client'

import { useSyncExternalStore } from 'react'
import { profile } from '@/lib/site-data'

const subscribe = () => () => {}

/** Assembles the address only in the browser so it isn't present in the static HTML. */
export function EmailLink({ className }: { className?: string }) {
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false)
  const { user, domain } = profile.emailParts

  if (!hydrated) {
    return (
      <span className={className}>
        {user} [at] {domain}
      </span>
    )
  }

  const address = `${user}@${domain}`
  return (
    <a href={`mailto:${address}`} className={className}>
      {address}
    </a>
  )
}
