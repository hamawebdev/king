import { useId, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { cardClass, fieldClass, noticeClass } from './recipes'

/** Light card that holds a form (ivory; paper on an ivory band). Fields inside take the contrasting fill. */
export function FormCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn(cardClass.form, className)}>{children}</div>
}

type FieldMeta = {
  /** Visible label (content string). */
  label: ReactNode
  /** Helper line under the control. */
  helper?: ReactNode
  /** Error message: sets aria-invalid and links it with aria-describedby. */
  error?: ReactNode
  /** Class for the field wrapper (grid placement). */
  className?: string
}

type FieldProps = FieldMeta & {
  id: string
  required?: boolean
  children: ReactNode
}

/** Label + control + helper + error. Use it to wrap a custom control; Input/Select/Textarea use it already. */
export function Field({ id, label, helper, error, required, className, children }: FieldProps) {
  return (
    <div className={cn(fieldClass.field, className)}>
      <label htmlFor={id} className={cn(fieldClass.label, required && fieldClass.required)}>
        {label}
      </label>
      {children}
      {helper != null && (
        <p id={`${id}-helper`} className={fieldClass.helper}>
          {helper}
        </p>
      )}
      {error != null && (
        <p id={`${id}-error`} className={fieldClass.error}>
          <i className="ti ti-alert-circle shrink-0 text-[16px]" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}

function describedBy(id: string, helper: unknown, error: unknown, own?: string) {
  return [own, helper != null ? `${id}-helper` : null, error != null ? `${id}-error` : null].filter(Boolean).join(' ') || undefined
}

type InputProps = FieldMeta & Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> & { inputClassName?: string }

/** Text input (16px, no iOS zoom) with label, helper and error wiring. */
export function Input({ label, helper, error, className, inputClassName, id, ...rest }: InputProps) {
  const auto = useId()
  const fid = id ?? auto
  return (
    <Field id={fid} label={label} helper={helper} error={error} required={rest.required} className={className}>
      <input
        {...rest}
        id={fid}
        aria-invalid={error != null ? true : rest['aria-invalid']}
        aria-describedby={describedBy(fid, helper, error, rest['aria-describedby'])}
        className={cn(fieldClass.control, inputClassName)}
      />
    </Field>
  )
}

type SelectProps = FieldMeta & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> & { selectClassName?: string }

/** Native select with a chevron. */
export function Select({ label, helper, error, className, selectClassName, id, children, ...rest }: SelectProps) {
  const auto = useId()
  const fid = id ?? auto
  return (
    <Field id={fid} label={label} helper={helper} error={error} required={rest.required} className={className}>
      <span className="relative block">
        <select
          {...rest}
          id={fid}
          aria-invalid={error != null ? true : rest['aria-invalid']}
          aria-describedby={describedBy(fid, helper, error, rest['aria-describedby'])}
          className={cn(fieldClass.control, fieldClass.select, selectClassName)}
        >
          {children}
        </select>
        <i className="ti ti-chevron-down pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-[18px] text-ink-muted" aria-hidden="true" />
      </span>
    </Field>
  )
}

type TextareaProps = FieldMeta & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> & { textareaClassName?: string }

/** Multi-line field (min 140px). */
export function Textarea({ label, helper, error, className, textareaClassName, id, ...rest }: TextareaProps) {
  const auto = useId()
  const fid = id ?? auto
  return (
    <Field id={fid} label={label} helper={helper} error={error} required={rest.required} className={className}>
      <textarea
        {...rest}
        id={fid}
        aria-invalid={error != null ? true : rest['aria-invalid']}
        aria-describedby={describedBy(fid, helper, error, rest['aria-describedby'])}
        className={cn(fieldClass.control, fieldClass.textarea, textareaClassName)}
      />
    </Field>
  )
}

type CheckProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'> & {
  label: ReactNode
  helper?: ReactNode
  error?: ReactNode
  className?: string
}

function CheckLike({ kind, label, helper, error, className, id, ...rest }: CheckProps & { kind: 'checkbox' | 'radio' }) {
  const auto = useId()
  const fid = id ?? auto
  return (
    <div className={cn('grid gap-1.5', className)}>
      <label htmlFor={fid} className="flex cursor-pointer items-start gap-3 font-sans text-small text-ink-soft">
        <input
          {...rest}
          id={fid}
          type={kind}
          aria-invalid={error != null ? true : rest['aria-invalid']}
          aria-describedby={describedBy(fid, helper, error, rest['aria-describedby'])}
          className={cn(kind === 'checkbox' ? fieldClass.check : fieldClass.radio, 'mt-0.5')}
        />
        <span>{label}</span>
      </label>
      {helper != null && (
        <p id={`${fid}-helper`} className={cn(fieldClass.helper, 'pl-8')}>
          {helper}
        </p>
      )}
      {error != null && (
        <p id={`${fid}-error`} className={cn(fieldClass.error, 'pl-8')}>
          <i className="ti ti-alert-circle shrink-0 text-[16px]" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}

/** Checkbox (20px, ink when checked, ivory tick). */
export function Checkbox(props: CheckProps) {
  return <CheckLike kind="checkbox" {...props} />
}

/** Radio (20px, ink when checked, ivory dot). */
export function Radio(props: CheckProps) {
  return <CheckLike kind="radio" {...props} />
}

type RadioCardProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'> & {
  label: ReactNode
  /** Right-aligned extra (payment badges). */
  aside?: ReactNode
  className?: string
}

/** Radio card (checkout payment methods): selected = 2px evergreen-700 border on evergreen-100, no jump. */
export function RadioCard({ label, aside, className, id, ...rest }: RadioCardProps) {
  const auto = useId()
  const fid = id ?? auto
  return (
    <label
      htmlFor={fid}
      className={cn(
        'flex cursor-pointer flex-wrap items-center gap-3 rounded-card border border-hairline-strong bg-ivory px-5 py-4 transition-colors duration-180 ease-calm',
        'has-[:checked]:border-2 has-[:checked]:border-evergreen-700 has-[:checked]:bg-evergreen-100 has-[:checked]:px-[19px] has-[:checked]:py-[15px]',
        className,
      )}
    >
      <input {...rest} id={fid} type="radio" className={fieldClass.radio} />
      <span className="font-sans font-semibold text-ink">{label}</span>
      {aside != null && <span className="ml-auto flex flex-wrap gap-2">{aside}</span>}
    </label>
  )
}

type NoticeProps = {
  tone: 'success' | 'error'
  children: ReactNode
  /** role="status" for success, role="alert" for errors by default. */
  role?: string
  className?: string
}

/** Inline notice (form result, empty cart, checkout alerts). */
export function Notice({ tone, children, role, className }: NoticeProps) {
  return (
    <div role={role ?? (tone === 'error' ? 'alert' : 'status')} className={cn(noticeClass[tone], className)}>
      <i className={cn('ti mt-0.5 shrink-0 text-[18px]', tone === 'error' ? 'ti-alert-circle' : 'ti-circle-check')} aria-hidden="true" />
      <div>{children}</div>
    </div>
  )
}
