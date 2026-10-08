'use client'

import { useActionState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { subscribe, type SubscribeState } from '@/app/actions/subscribe'

const initialState: SubscribeState = { status: 'idle', message: '' }

export function SubscribeForm() {
  const [state, formAction, pending] = useActionState(subscribe, initialState)

  if (state.status === 'success') {
    return (
      <p role="status" className="flex items-center gap-3 font-serif text-xl text-background">
        <Check className="size-5 text-[oklch(0.8_0.07_25)]" aria-hidden="true" />
        {state.message}
      </p>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="subscribe-name" className="sr-only">
          Name (optional)
        </label>
        <input
          id="subscribe-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Name (optional)"
          maxLength={120}
          className="h-12 w-full border border-background/30 bg-transparent px-4 font-sans text-base text-background placeholder:text-background/45 focus:border-background focus:outline-none sm:max-w-48"
        />
        <label htmlFor="subscribe-email" className="sr-only">
          Email address
        </label>
        <input
          id="subscribe-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          maxLength={254}
          aria-invalid={state.status === 'error'}
          aria-describedby="subscribe-message"
          className="h-12 w-full flex-1 border border-background/30 bg-transparent px-4 font-sans text-base text-background placeholder:text-background/45 focus:border-background focus:outline-none"
        />
        <div aria-hidden="true" className="absolute left-[-9999px]">
          <label htmlFor="subscribe-company">Company</label>
          <input id="subscribe-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 bg-background px-6 font-sans text-sm font-semibold tracking-wide text-foreground transition-colors hover:bg-[oklch(0.8_0.07_25)] disabled:opacity-60"
        >
          {pending ? 'Subscribing…' : 'Subscribe'}
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
      <p
        id="subscribe-message"
        role={state.status === 'error' ? 'alert' : undefined}
        className={
          state.status === 'error'
            ? 'font-sans text-sm text-[oklch(0.8_0.07_25)]'
            : 'font-sans text-sm text-background/55'
        }
      >
        {state.status === 'error'
          ? state.message
          : 'Occasional updates on new publications, articles and talks. Unsubscribe any time.'}
      </p>
    </form>
  )
}
