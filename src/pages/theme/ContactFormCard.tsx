import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { cn } from '@/lib/utils'

// Contact Form 7 look-alike. It validates on the client like the plugin does (tips on
// change, full check on submit, quiz answer) but never sends anything: after a short
// "submitting" spinner it shows the plugin's response message in place.

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

function Tip({ message }: { message?: string }) {
  if (!message) return null
  return (
    <span className="mfp-cf7-tip" aria-hidden="true">
      {message}
      <svg viewBox="0 0 8 8" fill="none">
        <path d="M1 1l6 6M7 1L1 7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  )
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

  const output = status === 'invalid' ? MSG.invalid : status === 'sent' ? MSG.sent : ''
  const field = (name: Field) => ({
    id: `${idPrefix}-${name}`,
    name: `your-${name}`,
    value: values[name],
    onChange: update(name),
    onBlur: commit(name),
    'aria-invalid': errors[name] ? true : false,
  })

  return (
    <div className="mfp-cf7" lang="en-US" dir="ltr">
      <div className="mfp-sr-only" role="status" aria-live="polite" aria-atomic="true">
        {output}
      </div>
      <form className={cn(status === 'submitting' && 'is-submitting')} noValidate aria-label="Contact form" onSubmit={onSubmit}>
        <div className="mfp-cf7-row">
          <p>
            <span className="mfp-cf7-wrap">
              <input type="text" size={40} maxLength={400} placeholder="Votre Nom*" aria-required="true" {...field('name')} />
              <Tip message={errors.name} />
            </span>
          </p>
        </div>
        <div className="mfp-cf7-row">
          <p>
            <span className="mfp-cf7-wrap">
              <input type="tel" size={40} maxLength={400} placeholder="Téléphone*" {...field('phone')} />
              <Tip message={errors.phone} />
            </span>
          </p>
        </div>
        <div className="mfp-cf7-row">
          <p>
            <span className="mfp-cf7-wrap">
              <input type="email" size={40} maxLength={400} placeholder="E-mail*" aria-required="true" {...field('email')} />
              <Tip message={errors.email} />
            </span>
          </p>
        </div>
        <div className="mfp-cf7-row">
          <p>
            <span className="mfp-cf7-wrap">
              <textarea cols={40} rows={6} maxLength={2000} placeholder="Votre message" {...field('message')} />
            </span>
          </p>
        </div>
        <div className="mfp-cf7-row">
          <p>
            <span className="mfp-cf7-wrap">
              <label>
                <span>{QUIZ.label}</span>{' '}
                <input type="text" size={40} autoComplete="off" aria-required="true" {...field('quiz')} />
              </label>
              <Tip message={errors.quiz} />
            </span>
          </p>
        </div>
        <div className="mfp-cf7-row">
          <p>
            <input className="mfp-btn mfp-btn--theme mfp-cf7-submit" type="submit" value="Envoyer un message" />
            <span className="mfp-cf7-spinner" />
          </p>
        </div>
        {output && (
          <div className="mfp-cf7-output" aria-hidden="true">
            {output}
          </div>
        )}
      </form>
    </div>
  )
}
