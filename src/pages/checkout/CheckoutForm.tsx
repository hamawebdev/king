import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router'
import { Button, Coffret, FormCard, Input, Select, Textarea, fieldClass, linkClass, type CoffretVariant } from '@/components/brand'
import { formatEuro, type CartItem } from '@/components/site/chrome-context'
import { cn } from '@/lib/utils'
import { Alert, type AlertType } from './Alert'
import { Slide } from './Slide'
import {
  BILLING_FIELDS,
  COUNTRIES,
  DEFAULT_COUNTRY,
  PAYMENT_METHODS,
  fieldErrorMessage,
  validateField,
  type CheckoutField,
  type FieldError,
} from './fields'

type Notice = { id: number; type: AlertType; content: ReactNode }
type RowState = 'invalid' | 'validated' | undefined

let noticeId = 0
const notice = (type: AlertType, content: ReactNode): Notice => ({ id: ++noticeId, type, content })

function Required() {
  return (
    <>
      {' '}
      <span className="text-ink-muted" aria-hidden="true">
        *
      </span>
    </>
  )
}

function Optional() {
  return (
    <>
      {' '}
      <span className="font-normal text-ink-muted">(facultatif)</span>
    </>
  )
}

function Notices({ items, onClose, className }: { items: Notice[]; onClose: (id: number) => void; className?: string }) {
  if (!items.length) return null
  return (
    <div className={cn('grid gap-3', className)}>
      {items.map((n) => (
        <Alert key={n.id} type={n.type} onClose={() => onClose(n.id)}>
          {n.content}
        </Alert>
      ))}
    </div>
  )
}

const STEPS = ['Panier', 'Paiement', 'Commande terminée'] as const
const CURRENT_STEP = 1

const stepCircle = {
  done: 'border border-evergreen-600 bg-evergreen-100 text-evergreen-700',
  current: 'bg-ink text-ivory',
  todo: 'border border-hairline-strong bg-ivory text-brass-700',
} as const
const stepLabel = {
  done: 'font-medium text-ink-soft',
  current: 'font-semibold text-ink',
  todo: 'font-medium text-ink-muted',
} as const

/** Step line: numerals in circles joined by rules (brass for the path already taken). */
function Steps() {
  return (
    <ol className="grid w-full max-w-[600px] grid-cols-3 md:flex md:items-center md:gap-4">
      {STEPS.map((label, i) => {
        const state = i < CURRENT_STEP ? 'done' : i === CURRENT_STEP ? 'current' : 'todo'
        return (
          <li
            key={label}
            aria-current={state === 'current' ? 'step' : undefined}
            className={cn(
              'relative flex flex-col items-center gap-2.5 text-center md:flex-1 md:flex-row md:gap-3 md:text-start md:last:flex-none',
              // phone: a connector from the previous circle to this one; from md: a rule after each label
              'max-md:not-first:before:absolute max-md:not-first:before:top-4 max-md:not-first:before:right-1/2 max-md:not-first:before:left-[-50%] max-md:not-first:before:h-px',
              'md:not-last:after:block md:not-last:after:h-px md:not-last:after:min-w-6 md:not-last:after:flex-1',
              i <= CURRENT_STEP ? 'max-md:before:bg-brass-500' : 'max-md:before:bg-hairline-strong',
              i < CURRENT_STEP ? 'md:after:bg-brass-500' : 'md:after:bg-hairline-strong',
            )}
          >
            <span
              className={cn(
                'relative z-[1] grid size-8 shrink-0 place-items-center rounded-full font-display text-[1.0625rem] leading-none italic',
                stepCircle[state],
              )}
            >
              {i + 1}
            </span>
            <span className={cn('font-sans text-meta', stepLabel[state])}>{label}</span>
          </li>
        )
      })}
    </ol>
  )
}

/** Coffret thumbnail of an order line, from the product id ("abonnement-24-mois", "renouvellement-12-mois"). */
function thumbOf(id: string): { months: string; variant: CoffretVariant } {
  const months = /(\d+)-mois/.exec(id)?.[1] ?? '12'
  if (id.startsWith('renouvellement')) return { months, variant: 'renew' }
  return { months, variant: (['3', '6', '12', '24'] as const).find((v) => v === months) ?? '12' }
}

const METHOD_ICON: Record<string, string> = { card: 'ti-credit-card', bacs: 'ti-building-bank' }

// Stock WooCommerce checkout (theme "step 2" layout). Front-end only: validation runs locally and nothing is sent.
export function CheckoutForm({ items }: { items: CartItem[] }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const [values, setValues] = useState<Record<string, string>>({ billing_country: DEFAULT_COUNTRY })
  const [rows, setRows] = useState<Record<string, RowState>>({})
  const [payment, setPayment] = useState(PAYMENT_METHODS[0].id)
  const [terms, setTerms] = useState(false)
  const [notes, setNotes] = useState('')
  const [couponOpen, setCouponOpen] = useState(false)
  const [coupon, setCoupon] = useState('')
  const [couponNotices, setCouponNotices] = useState<Notice[]>([])
  const [formNotices, setFormNotices] = useState<Notice[]>([])
  const [processing, setProcessing] = useState(false)
  const noticesRef = useRef<HTMLDivElement>(null)

  const country = values.billing_country ?? DEFAULT_COUNTRY
  const setValue = (id: string, value: string) => setValues((v) => ({ ...v, [id]: value }))

  // checkout.js validates a row when it loses focus or changes.
  const validateRow = (field: CheckoutField, value = values[field.id] ?? '') => {
    const error = validateField(field, value, country)
    const state: RowState = error ? 'invalid' : field.required || value.trim() ? 'validated' : undefined
    setRows((r) => ({ ...r, [field.id]: state }))
    return error
  }

  const scrollToNotices = () => {
    window.requestAnimationFrame(() => {
      const el = noticesRef.current
      if (!el) return
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' })
    })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (processing) return
    const errors: { field: CheckoutField; error: FieldError }[] = []
    const nextRows: Record<string, RowState> = {}
    for (const field of BILLING_FIELDS) {
      const value = values[field.id] ?? ''
      const error = validateField(field, value, country)
      if (error) errors.push({ field, error })
      nextRows[field.id] = error ? 'invalid' : field.required || value.trim() ? 'validated' : undefined
    }
    nextRows.terms = terms ? 'validated' : 'invalid'
    setRows(nextRows)

    // One alert listing every problem, like WooCommerce's error notice.
    const messages: ReactNode[] = errors.map(({ field, error }) => {
      const msg = fieldErrorMessage(field, error)
      return (
        <li key={field.id}>
          <strong>{msg.name}</strong>
          {msg.rest}
        </li>
      )
    })
    if (!terms) {
      messages.push(<li key="terms">Veuillez lire et accepter les conditions générales pour poursuivre votre commande.</li>)
    }

    if (messages.length) {
      setFormNotices([notice('error', <ul className="grid gap-1.5">{messages}</ul>)])
      scrollToNotices()
      return
    }
    // Valid form: show the usual processing overlay, then explain that nothing was sent.
    setFormNotices([])
    setProcessing(true)
    window.setTimeout(() => {
      setProcessing(false)
      setFormNotices([
        notice('info', 'Boutique de démonstration : aucune commande n’a été transmise et aucun paiement n’a été demandé.'),
      ])
      scrollToNotices()
    }, 1200)
  }

  const applyCoupon = (e: FormEvent) => {
    e.preventDefault()
    const code = coupon.trim()
    setCouponNotices([
      code
        ? notice('error', `Le code promo « ${code} » n’existe pas !`)
        : notice('error', 'Veuillez saisir un code promo.'),
    ])
    setCouponOpen(false)
  }

  const thClass = 'pb-3 font-sans text-meta font-semibold text-ink-muted'

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-hairline pb-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <Steps />
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-meta font-medium text-ink-soft lg:justify-end lg:text-end">
          <i className="ti ti-ticket shrink-0 text-[18px] text-evergreen-600" aria-hidden="true" />
          <span>Vous avez un code promo ?</span>{' '}
          <a
            href="#"
            className={cn(linkClass, 'font-semibold')}
            aria-expanded={couponOpen}
            aria-controls="checkout-coupon"
            onClick={(e) => {
              e.preventDefault()
              setCouponOpen((o) => !o)
            }}
          >
            Cliquez ici pour saisir votre code
          </a>
        </p>
      </div>

      <Notices
        className="mt-5"
        items={couponNotices}
        onClose={(id) => setCouponNotices((n) => n.filter((x) => x.id !== id))}
      />

      <Slide open={couponOpen}>
        <div className="pt-5">
          <form
            id="checkout-coupon"
            className="rounded-card border border-hairline bg-ivory p-5 md:p-6 lg:ml-auto lg:max-w-[560px]"
            onSubmit={applyCoupon}
            noValidate
          >
            <p className="font-sans text-small text-ink-soft">Si vous avez un code promo, merci de l’appliquer ci-dessous.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Input
                label="Code promo :"
                labelHidden
                id="coupon_code"
                name="coupon_code"
                placeholder="Code promo"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" variant="secondary" className="shrink-0">
                Appliquer le code promo
              </Button>
            </div>
          </form>
        </div>
      </Slide>

      <form
        className="relative mt-8 grid gap-8 md:mt-10 lg:grid-cols-12 lg:items-start lg:gap-x-10 xl:gap-x-14"
        onSubmit={onSubmit}
        noValidate
        aria-busy={processing || undefined}
      >
        <div ref={noticesRef} className="empty:hidden lg:col-span-12">
          <Notices items={formNotices} onClose={(id) => setFormNotices((n) => n.filter((x) => x.id !== id))} />
        </div>

        <div className="lg:col-span-7" id="customer_details">
          <FormCard className="max-md:p-4">
            <h2 className="font-display text-display-sm text-ink">Détails de facturation</h2>
            <div className="mt-6 grid gap-5 md:mt-7 md:grid-cols-2 md:gap-x-4">
              {BILLING_FIELDS.map((field) => {
                const value = values[field.id] ?? ''
                const state = rows[field.id]
                const common = {
                  id: field.id,
                  name: field.id,
                  label: (
                    <>
                      {field.label}
                      {field.required ? <Required /> : <Optional />}
                    </>
                  ),
                  labelHidden: field.hiddenLabel,
                  requiredMark: false,
                  autoComplete: field.autoComplete,
                  value,
                  'aria-invalid': state === 'invalid' || undefined,
                  className: field.row === 'wide' ? 'md:col-span-2' : undefined,
                }
                const validated = state === 'validated' ? 'border-evergreen-600' : undefined
                return field.kind === 'country' ? (
                  <Select
                    key={field.id}
                    {...common}
                    selectClassName={validated}
                    onChange={(e) => {
                      setValue(field.id, e.target.value)
                      validateRow(field, e.target.value)
                    }}
                  >
                    <option value="">Sélectionnez un pays / une région…</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Select>
                ) : (
                  <Input
                    key={field.id}
                    {...common}
                    type={field.kind === 'email' ? 'email' : field.kind === 'tel' ? 'tel' : 'text'}
                    placeholder={field.placeholder}
                    inputClassName={cn(
                      validated,
                      // the long address-2 placeholder (its only visible text) must not be cut on phones
                      field.hiddenLabel && 'max-[380px]:placeholder:text-[0.8125rem] min-[381px]:max-md:placeholder:text-[0.9375rem]',
                    )}
                    onChange={(e) => setValue(field.id, e.target.value)}
                    onBlur={(e) => validateRow(field, e.target.value)}
                  />
                )
              })}
            </div>

            <div className="mt-10 border-t border-hairline pt-8">
              <h2 className="font-display text-display-sm text-ink">Informations complémentaires</h2>
              <Textarea
                className="mt-6"
                id="order_comments"
                name="order_comments"
                label={
                  <>
                    Notes de commande
                    <Optional />
                  </>
                }
                requiredMark={false}
                placeholder="Commentaires concernant votre commande, ex. : consignes de livraison."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </FormCard>
        </div>

        <div
          className={cn(
            'relative rounded-panel border border-hairline-deep bg-sand p-card lg:col-span-5',
            // sticky only when the whole summary fits under the header
            'lg:[@media(min-height:940px)]:sticky lg:[@media(min-height:940px)]:top-24',
            'before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-brass-500',
          )}
          id="order_review"
        >
          <h2 className="font-display text-display-sm text-ink">Votre commande</h2>
          <table className="mt-4 w-full border-collapse font-sans tabular-nums">
            <thead>
              <tr className="border-b border-ink">
                <th className={cn(thClass, 'text-start')}>Produit</th>
                <th className={cn(thClass, 'text-end')}>Sous-total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const thumb = thumbOf(item.id)
                return (
                  <tr key={item.id} className="border-b border-hairline-deep">
                    <td className="py-3.5 pr-4">
                      <span className="flex items-center gap-3.5">
                        <Coffret size="thumb" months={thumb.months} plan={item.name} variant={thumb.variant} />
                        <span className="text-[0.9375rem] leading-snug font-semibold text-ink">
                          {item.name}{' '}
                          <strong className="font-medium whitespace-nowrap text-ink-muted">
                            ×{' '}{item.qty}
                          </strong>
                        </span>
                      </span>
                    </td>
                    <td className="py-3.5 text-end text-small font-semibold text-ink">{formatEuro(item.price * item.qty)}</td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr>
                <th className="pt-4 pb-2 text-start text-small font-normal text-ink-soft">Sous-total</th>
                <td className="pt-4 pb-2 text-end text-small text-ink-soft">{formatEuro(total)}</td>
              </tr>
              <tr className="border-t border-hairline-deep">
                <th className="pt-3 text-start align-baseline text-base font-semibold text-ink">Total</th>
                <td className="pt-3 text-end align-baseline">
                  <strong className="price-num text-price-md font-medium text-ink">{formatEuro(total)}</strong>
                </td>
              </tr>
            </tfoot>
          </table>

          <div className="mt-6" id="payment">
            <ul className="grid gap-3">
              {PAYMENT_METHODS.map((m) => {
                const active = payment === m.id
                return (
                  <li
                    key={m.id}
                    className={cn(
                      'cursor-pointer rounded-card border border-hairline-strong bg-ivory px-5 py-4 transition-colors duration-180 ease-calm',
                      'has-[:checked]:border-2 has-[:checked]:border-evergreen-700 has-[:checked]:bg-evergreen-100 has-[:checked]:px-[19px] has-[:checked]:py-[15px]',
                    )}
                    onClick={() => setPayment(m.id)}
                  >
                    <label htmlFor={`payment_method_${m.id}`} className="flex cursor-pointer items-center gap-3">
                      <input
                        id={`payment_method_${m.id}`}
                        type="radio"
                        className={fieldClass.radio}
                        name="payment_method"
                        value={m.id}
                        checked={active}
                        onChange={() => setPayment(m.id)}
                      />
                      <span className="font-sans font-semibold text-ink">{m.title}</span>
                      <i
                        className={cn(
                          'ti ml-auto shrink-0 text-[20px]',
                          METHOD_ICON[m.id] ?? 'ti-wallet',
                          active ? 'text-evergreen-700' : 'text-evergreen-600',
                        )}
                        aria-hidden="true"
                      />
                    </label>
                    <Slide open={active} duration={230}>
                      <p className="pt-2.5 pl-8 font-sans text-small text-evergreen-700">{m.description}</p>
                    </Slide>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6">
              <label className="flex cursor-pointer items-start gap-3 font-sans text-small text-ink-soft">
                <input
                  type="checkbox"
                  name="terms"
                  className={cn(fieldClass.check, 'mt-0.5')}
                  aria-invalid={rows.terms === 'invalid' || undefined}
                  checked={terms}
                  onChange={(e) => {
                    setTerms(e.target.checked)
                    setRows((r) => ({ ...r, terms: e.target.checked ? 'validated' : 'invalid' }))
                  }}
                />
                <span>
                  <span>
                    J’ai lu et j’accepte les{' '}
                    <Link to="/conditions-generales-de-vente/" target="_blank" className={linkClass}>
                      conditions générales
                    </Link>{' '}
                    du site web
                  </span>
                  <Required />
                </span>
              </label>

              <Button type="submit" id="place_order" size="lg" full iconStart="ti-lock" loading={processing} className="mt-5">
                Commander
              </Button>

              <div className="mt-3.5 flex gap-2.5 font-sans text-micro font-medium text-ink-muted">
                <i className="ti ti-shield-lock mt-px shrink-0 text-[16px] text-evergreen-600" aria-hidden="true" />
                <p>
                  Vos données personnelles seront utilisées pour traiter votre commande, vous accompagner au cours de
                  votre visite du site web, et pour d’autres raisons décrites dans notre{' '}
                  <Link to="/politique-de-confidentialite/" className={linkClass}>
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {processing && <div className="absolute inset-0 z-10 cursor-wait rounded-panel bg-paper/55" aria-hidden="true" />}
      </form>
    </div>
  )
}
