import { useCallback, useRef } from 'react'
import { BRAND_UPPER } from '@/lib/site'
import { cn } from '@/lib/utils'
import {
  Button,
  ButtonLink,
  Coffret,
  IconTile,
  drawerClass,
  overlayClass,
  overlayClosedClass,
  type CoffretVariant,
} from '@/components/brand'
import { formatEuro, useChrome, type CartItem } from './chrome-context'
import { closedPanel, usePanelFocus } from './SiteLayout.focus'

/** Coffret thumbnail of a cart line, from the product id ("abonnement-24-mois", "renouvellement-12-mois"). */
function thumbOf(id: string): { months: string; variant: CoffretVariant } {
  const months = /(\d+)-mois/.exec(id)?.[1] ?? '12'
  if (id.startsWith('renouvellement')) return { months, variant: 'renew' }
  const variant = (['3', '6', '12', '24'] as const).find((v) => v === months) ?? '12'
  return { months, variant }
}

const stepBtn =
  'grid size-8 place-items-center text-[16px] text-ink transition-colors duration-180 ease-calm hover:bg-sand active:bg-sand-deep'

function CartLine({ item, onQty, onRemove }: { item: CartItem; onQty: (qty: number) => void; onRemove: () => void }) {
  const thumb = thumbOf(item.id)
  return (
    <li className="grid grid-cols-[56px_minmax(0,1fr)_auto] gap-x-4 gap-y-3.5 border-b border-hairline py-5">
      <Coffret size="thumb" months={thumb.months} plan={item.name} variant={thumb.variant} />
      <div className="min-w-0">
        <h3 className="font-sans text-[0.9375rem] leading-snug font-semibold text-ink">{item.name}</h3>
        <p className="mt-1 font-sans text-meta font-medium text-ink-muted tabular-nums">
          {item.qty} × {formatEuro(item.price)}
        </p>
      </div>
      <p className="price-num text-price-sm text-ink">{formatEuro(item.price * item.qty)}</p>
      <div className="col-span-2 col-start-2 flex items-center justify-between gap-4">
        <div className="inline-flex items-stretch overflow-hidden rounded-control border border-hairline-strong bg-paper">
          <button type="button" className={stepBtn} aria-label="Diminuer la quantité" onClick={() => onQty(item.qty - 1)}>
            <i className="ti ti-minus" aria-hidden="true" />
          </button>
          <input
            type="number"
            min={1}
            value={item.qty}
            aria-label="Quantité"
            onChange={(e) => onQty(Number(e.target.value) || 1)}
            className={cn(
              'h-8 w-11 border-x border-hairline bg-ivory text-center font-sans text-base font-semibold text-ink tabular-nums',
              '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
            )}
          />
          <button type="button" className={stepBtn} aria-label="Augmenter la quantité" onClick={() => onQty(item.qty + 1)}>
            <i className="ti ti-plus" aria-hidden="true" />
          </button>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="min-h-8 font-sans text-meta font-medium text-alert underline decoration-1 underline-offset-3 transition-[text-decoration-thickness] hover:decoration-2"
        >
          Supprimer
        </button>
      </div>
    </li>
  )
}

// Cart drawer sliding in from the right (DIRECTION §9.0 chrome-cart). Front-end only: it lists items added locally.
export function CartDrawer() {
  const { cartOpen, setCartOpen, cartItems, removeFromCart, setQty } = useChrome()
  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)
  const panel = useRef<HTMLDivElement>(null)
  const close = useCallback(() => setCartOpen(false), [setCartOpen])
  usePanelFocus(cartOpen, panel, close)

  return (
    <>
      <div className={cn(overlayClass, !cartOpen && overlayClosedClass)} onClick={close} aria-hidden="true" />
      <div
        ref={panel}
        className={cn(drawerClass, !cartOpen && closedPanel)}
        data-section="chrome-cart"
        role="dialog"
        aria-modal={cartOpen || undefined}
        aria-label="Panier"
        aria-hidden={!cartOpen}
        inert={!cartOpen}
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-hairline px-5 pt-5 pb-5 md:px-7 md:pt-6">
          <h2 className="min-w-0">
            <span className="block font-display text-display-sm tracking-[0.01em] text-ink">{BRAND_UPPER}</span>{' '}
            <span className="mt-3 block">
              <span className="eyebrow leading-[1.5]">BOUTIQUE EN LIGNE OFFICIELLE</span>
            </span>
          </h2>
          <Button variant="icon" aria-label="Fermer le panier" className="-mr-1 shrink-0" onClick={close}>
            <i className="ti ti-x" aria-hidden="true" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 md:px-7">
          {cartItems.length === 0 ? (
            <div className="flex h-full min-h-60 flex-col items-center justify-center py-12 text-center">
              <IconTile icon="ti-shopping-cart" size={44} />
              <p className="mt-5 max-w-[28ch] font-sans text-copy text-ink-soft">Votre panier est vide pour le moment.</p>
            </div>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <CartLine
                  key={item.id}
                  item={item}
                  onQty={(qty) => setQty(item.id, qty)}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}
            </ul>
          )}
        </div>

        <div className="shrink-0 border-t border-hairline bg-paper px-5 pt-5 pb-[calc(16px+env(safe-area-inset-bottom))] md:px-7 md:pt-6">
          <dl className="grid gap-3 font-sans">
            <div className="flex items-baseline justify-between gap-4 text-small text-ink-soft">
              <dt>Sous-total:</dt>
              <dd className="tabular-nums">{formatEuro(total)}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-t border-hairline pt-3">
              <dt className="text-[0.9375rem] font-semibold text-ink">Total:</dt>
              <dd className="price-num text-price-md text-ink">{formatEuro(total)}</dd>
            </div>
          </dl>
          <div className="mt-5 grid gap-1">
            <ButtonLink to="/checkout/" size="lg" iconEnd="arrow" full onClick={close}>
              Valider la commande
            </ButtonLink>
            {/* The original's "view cart" link points at the home page; kept as-is. */}
            <ButtonLink to="/" variant="link" full onClick={close}>
              Voir le panier
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  )
}
