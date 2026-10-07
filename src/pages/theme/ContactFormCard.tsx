import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { Input, Textarea, buttonClass, noticeClass } from '@/components/brand'
import { cn } from '@/lib/utils'

// Contact Form 7 look-alike in the « Réserve » form recipe (DIRECTION §6.13). It validates on the client
// like the plugin does (tips on change, full check on submit, quiz answer) but never sends anything:
// after a short "submitting" spinner it shows the plugin's response message in place. The form has no
// visible labels in the content, so each placeholder doubles as a hidden label; the quiz keeps its own.

type Field = 'name' | 'phone' | 'email' | 'message' | 'quiz'
type Values = Record<Field, string>
type Errors = Partial<Record<Field, string>>
type Status = 'init' | 'submitting' | 'invalid' | 'sent'

// Placeholder captcha: same shape as the original (two 2-digit numbers).
const QUIZ = { label: '14+27=?', answer: '41' }

// Default plugin messages (the form is configured for the en_US locale).
const MSG = {
  required: 'Please fill out this field.',
  email: 'Please enter an email address.',
  tel: 'Please enter a telephone number.',
  quiz: 'The answer to the quiz is incorrect.',
  invalid: 'One or more fields have an error. Please check and try again.',
  sent: 'Thank you for your message. It has been sent.',
}

const EMPTY: Values = { name: '', phone: '', email: '', message: '', quiz: '' }

function check(field: Field, v: Values): string | undefined {
  const value = v[field].trim()
  switch (field) {
    case 'name':
      return value ? undefined : MSG.required
    case 'email':
      if (!value) return MSG.required
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? undefined : MSG.email
    case 'phone':
      return !value || /^[+]?[0-9() -]{6,}$/.test(value) ? undefined : MSG.tel
    case 'quiz':
      if (!value) return MSG.required
      return value === QUIZ.answer ? undefined : MSG.quiz
    default:
      return undefined
  }
}

/** Plugin tip (English, like the plugin), shown under its field by the kit's error slot. */
function tip(message?: string) {
  return message ? <span lang="en-US">{message}</span> : undefined
}

export function ContactFormCard({ idPrefix }: { idPrefix: string }) {
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('init')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const update = (field: Field) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [field]: e.target.value }
    setValues(next)
    // Like the plugin, a field that already shows a tip is re-checked while it is edited.
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: check(field, next) }))
  }

  // The plugin validates a control when its value is committed (change event).
  const commit = (field: Field) => () => {
    if (field === 'quiz') return
    if (!values[field] && !errors[field]) return
    setErrors((prev) => ({ ...prev, [field]: check(field, values) }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      const next: Errors = {}
      for (const f of ['name', 'phone', 'email', 'message', 'quiz'] as Field[]) {
        const err = check(f, values)
        if (err) next[f] = err
      }
      setErrors(next)
      if (Object.keys(next).length) {
        setStatus('invalid')
      } else {
        setStatus('sent')
        setValues(EMPTY)
      }
    }, 700)
  }

  const submitting = status === 'submitting'
  const output = status === 'invalid' ? MSG.invalid : status === 'sent' ? MSG.sent : ''
  const field = (name: Field) => ({
    id: `${idPrefix}-${name}`,
    name: `your-${name}`,
    value: values[name],
    onChange: update(name),
    onBlur: commit(name),
    error: tip(errors[name]),
  })

  return (
    <div className="relative">
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true" lang="en-US">
        {output}
      </div>
      <form
        className="grid items-start gap-x-4 gap-y-5 md:grid-cols-2"
        noValidate
        aria-label="Contact form"
        aria-busy={submitting || undefined}
        onSubmit={onSubmit}
      >
        <Input
          type="text"
          size={40}
          maxLength={400}
          autoComplete="name"
          label="Votre Nom*"
          labelHidden
          placeholder="Votre Nom*"
          aria-required="true"
          {...field('name')}
        />
        <Input
          type="tel"
          size={40}
          maxLength={400}
          autoComplete="tel"
          label="Téléphone*"
          labelHidden
          placeholder="Téléphone*"
          {...field('phone')}
        />
        <Input
          type="email"
          size={40}
          maxLength={400}
          autoComplete="email"
          label="E-mail*"
          labelHidden
          placeholder="E-mail*"
          aria-required="true"
          className="md:col-span-2"
          {...field('email')}
        />
        <Textarea
          cols={40}
          rows={6}
          maxLength={2000}
          label="Votre message"
          labelHidden
          placeholder="Votre message"
          className="md:col-span-2"
          {...field('message')}
        />
        <Input
          type="text"
          size={40}
          autoComplete="off"
          inputMode="numeric"
          label={QUIZ.label}
          requiredMark={false}
          aria-required="true"
          className="md:col-span-2 md:max-w-[16rem]"
          {...field('quiz')}
        />
        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-z-line pt-6 md:col-span-2">
          <input
            type="submit"
            value="Envoyer un message"
            className={buttonClass('primary', 'lg', 'w-full cursor-pointer sm:w-auto')}
          />
          <i
            aria-hidden="true"
            className={cn(
              'ti ti-loader-2 shrink-0 text-[20px] text-evergreen-700 motion-safe:animate-spin',
              !submitting && 'hidden',
            )}
          />
        </div>
        {output && (
          <div
            aria-hidden="true"
            lang="en-US"
            className={cn(status === 'sent' ? noticeClass.success : noticeClass.error, 'md:col-span-2')}
          >
            <i
              className={cn('ti mt-0.5 shrink-0 text-[18px]', status === 'sent' ? 'ti-circle-check' : 'ti-alert-circle')}
              aria-hidden="true"
            />
            <p>{output}</p>
          </div>
        )}
      </form>
    </div>
  )
}
