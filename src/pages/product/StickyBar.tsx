import { BuyBar } from '@/components/brand'
import { WHATSAPP_HREF, routeHref } from '@/lib/site'
import { barAccentClass } from '../home/FloatingActions.parts'
import type { Product } from './data'

// Sticky buy bar, phones only. Slides away while the buy box is on screen (kit BuyBar).
export function StickyBar({ product: p, onBuy }: { product: Product; onBuy: (e: React.MouseEvent) => void }) {
  return (
    <BuyBar
      dataSection="product-stickybar"
      old={`${p.oldPrice}€`}
      price={`${p.price}€`}
      label={p.barLabel}
      waLabel="WhatsApp"
      waHref={WHATSAPP_HREF}
      waProps={{ target: '_blank', rel: 'noopener' }}
      cta={{ label: p.barCta, href: routeHref('/checkout/'), onClick: onBuy }}
      className={barAccentClass}
    />
  )
}
