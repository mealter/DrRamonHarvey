'use server'

import { db } from '@/lib/db'
import { subscribers } from '@/lib/db/schema'

export type SubscribeState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function subscribe(_prev: SubscribeState, formData: FormData): Promise<SubscribeState> {
  // Honeypot: real visitors never see or fill this field.
  if (String(formData.get('company') ?? '').length > 0) {
    return { status: 'success', message: 'Thank you — you are on the list.' }
  }

  const email = String(formData.get('email') ?? '').trim().toLowerCase()
  const name = String(formData.get('name') ?? '').trim().slice(0, 120)

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  try {
    const inserted = await db
      .insert(subscribers)
      .values({ email, name: name || null })
      .onConflictDoNothing({ target: subscribers.email })
      .returning({ id: subscribers.id })

    return {
      status: 'success',
      message:
        inserted.length > 0
          ? 'Thank you — you are on the list.'
          : 'You are already subscribed. Thank you.',
    }
  } catch (error) {
    console.error('Subscribe failed:', error)
    return { status: 'error', message: 'Something went wrong. Please try again shortly.' }
  }
}
