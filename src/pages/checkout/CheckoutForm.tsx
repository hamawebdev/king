import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router'
import { formatEuro, type CartItem } from '@/components/site/chrome-context'
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
      <span className="co-required" aria-hidden="true">
        *
      </span>
    </>
  )
}

function Notices({ items, onClose }: { items: Notice[]; onClose: (id: number) => void }) {
  if (!items.length) return null
  return (
    <div className="co-notices">
      {items.map((n) => (
        <Alert key={n.id} type={n.type} onClose={() => onClose(n.id)}>
          {n.content}
        </Alert>
      ))}
    </div>
  )
}

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
      setFormNotices([notice('error', <ul className="co-alert__list">{messages}</ul>)])
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

  return (
    <div className="co-woo">
      <ul className="co-steps">
        <li>
          <span className="co-steps__number">1</span>
          Panier
        </li>
        <li className="is-active">
          <span className="co-steps__number">2</span>
          Paiement
        </li>
        <li>
          <span className="co-steps__number">3</span>
          Commande terminée
        </li>
      </ul>

      <div className="co-coupon-toggle">
        <div className="co-coupon-toggle__info">
          Vous avez un code promo ?{' '}
          <a
            href="#"
            className="co-coupon-toggle__link"
            onClick={(e) => {
              e.preventDefault()
              setCouponOpen((o) => !o)
            }}
          >
            Cliquez ici pour saisir votre code
          </a>
        </div>
      </div>

      <Notices items={couponNotices} onClose={(id) => setCouponNotices((n) => n.filter((x) => x.id !== id))} />

      <Slide open={couponOpen}>
        <form className="co-coupon" onSubmit={applyCoupon} noValidate>
          <p>Si vous avez un code promo, merci de l’appliquer ci-dessous.</p>
          <p className="co-coupon__row">
            <label htmlFor="coupon_code" className="co-sr-only">
              Code promo :
            </label>
            <input
              type="text"
              id="coupon_code"
              name="coupon_code"
              className="co-input"
              placeholder="Code promo"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </p>
          <p className="co-coupon__row">
            <button type="submit" className="co-button">
              Appliquer le code promo
            </button>
          </p>
        </form>
      </Slide>

      <form className={`co-checkout${processing ? ' is-processing' : ''}`} onSubmit={onSubmit} noValidate>
        <div ref={noticesRef} className="co-notice-group">
          <Notices items={formNotices} onClose={(id) => setFormNotices((n) => n.filter((x) => x.id !== id))} />
        </div>

        <div className="co-customer" id="customer_details">
          <div className="co-billing">
            <h3>Détails de facturation</h3>
            <div className="co-fields">
              {BILLING_FIELDS.map((field) => {
                const value = values[field.id] ?? ''
                const state = rows[field.id]
                return (
                  <p
                    key={field.id}
                    className={`co-row co-row--${field.row}${state === 'invalid' ? ' is-invalid' : ''}${
                      state === 'validated' ? ' is-validated' : ''
                    }`}
                  >
                    <label htmlFor={field.id} className={field.hiddenLabel ? 'co-sr-only' : undefined}>
                      {field.label}
                      {field.required ? (
                        <Required />
                      ) : (
                        <>
                          {' '}
                          <span className="co-optional">(facultatif)</span>
                        </>
                      )}
                    </label>
                    {field.kind === 'country' ? (
                      <select
                        id={field.id}
                        name={field.id}
                        className="co-input co-select"
                        autoComplete={field.autoComplete}
                        value={value}
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
                      </select>
                    ) : (
                      <input
                        type={field.kind === 'email' ? 'email' : field.kind === 'tel' ? 'tel' : 'text'}
                        id={field.id}
                        name={field.id}
                        className="co-input"
                        placeholder={field.placeholder}
                        autoComplete={field.autoComplete}
                        value={value}
                        onChange={(e) => setValue(field.id, e.target.value)}
                        onBlur={(e) => validateRow(field, e.target.value)}
                      />
                    )}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="co-additional">
            <h3>Informations complémentaires</h3>
            <p className="co-row co-row--wide">
              <label htmlFor="order_comments">
                Notes de commande{' '}
                <span className="co-optional">(facultatif)</span>
              </label>
              <textarea
                id="order_comments"
                name="order_comments"
                className="co-input co-textarea"
                placeholder="Commentaires concernant votre commande, ex. : consignes de livraison."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </p>
          </div>
        </div>

        <div className="co-review" id="order_review">
          <h3 className="co-review__heading">Votre commande</h3>
          <table className="co-table">
            <thead>
              <tr>
                <th>Produit</th>
                <th>Sous-total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="co-table__name">
                    {item.name}
                    {' '}
                    <strong className="co-table__qty">×{' '}{item.qty}</strong>
                  </td>
                  <td>{formatEuro(item.price * item.qty)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Sous-total</th>
                <td>{formatEuro(total)}</td>
              </tr>
              <tr className="co-table__total">
                <th>Total</th>
                <td>
                  <strong>{formatEuro(total)}</strong>
                </td>
              </tr>
            </tfoot>
          </table>

          <div className="co-payment" id="payment">
            <ul className="co-methods">
              {PAYMENT_METHODS.map((m) => (
                <li
                  key={m.id}
                  className={payment === m.id ? 'is-active' : undefined}
                  onClick={() => setPayment(m.id)}
                >
                  <input
                    id={`payment_method_${m.id}`}
                    type="radio"
                    className="co-methods__radio"
                    name="payment_method"
                    value={m.id}
                    checked={payment === m.id}
                    onChange={() => setPayment(m.id)}
                  />
                  <label htmlFor={`payment_method_${m.id}`}>{m.title}</label>
                  <span className="co-methods__check" aria-hidden="true">
                    <svg viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.2l2.3 2.3 4.7-4.9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="co-methods__box">
                    <Slide open={payment === m.id} duration={230}>
                      <p>{m.description}</p>
                    </Slide>
                  </div>
                </li>
              ))}
            </ul>
            <div className="co-place-order">
              <div className="co-terms">
                <div className="co-privacy">
                  <p>
                    Vos données personnelles seront utilisées pour traiter votre commande, vous accompagner au cours de
                    votre visite du site web, et pour d’autres raisons décrites dans notre{' '}
                    <Link to="/politique-de-confidentialite/">politique de confidentialité</Link>.
                  </p>
                </div>
                <p
                  className={`co-row co-row--terms${rows.terms === 'invalid' ? ' is-invalid' : ''}${
                    rows.terms === 'validated' ? ' is-validated' : ''
                  }`}
                >
                  <label className="co-checkbox">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={terms}
                      onChange={(e) => {
                        setTerms(e.target.checked)
                        setRows((r) => ({ ...r, terms: e.target.checked ? 'validated' : 'invalid' }))
                      }}
                    />{' '}
                    <span>
                      J’ai lu et j’accepte les{' '}
                      <Link to="/conditions-generales-de-vente/" target="_blank">
                        conditions générales
                      </Link>{' '}
                      du site web
                    </span>
                    <Required />
                  </label>
                </p>
              </div>
              <button type="submit" className="co-button co-button--alt" id="place_order">
                Commander
              </button>
            </div>
          </div>
        </div>

        {processing && <div className="co-block-overlay" aria-hidden="true" />}
      </form>
    </div>
  )
}
