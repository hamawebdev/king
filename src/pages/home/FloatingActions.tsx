import { BuyBar, WhatsAppBubble as BrandWhatsAppBubble } from '@/components/brand'
import { WHATSAPP_HREF } from '@/lib/site'
import { ROUTES } from './data'
import { barAccentClass } from './FloatingActions.parts'

const STICKY = {
  oldPrice: '108€',
  price: '59€',
  label: 'Accès 12 mois · −45%',
  whatsapp: 'WhatsApp',
  cta: 'Abonner',
}

/** Round WhatsApp shortcut pinned to the bottom-right corner (tablet and desktop; phones use the buy bar). */
export function WhatsAppBubble({ dataSection = 'home-floating-whatsapp' }: { dataSection?: string }) {
  return (
    <BrandWhatsAppBubble
      label="Contacter sur WhatsApp"
      href={WHATSAPP_HREF}
      dataSection={dataSection}
      className="transition-[background-color,translate] motion-safe:hover:-translate-y-px max-md:hidden"
    />
  )
}

/** Phone buy bar: struck price, offer price and the 12-month label, WhatsApp and the subscribe action. */
export function MobileBuyBar() {
  return (
    <BuyBar
      dataSection="home-floating-buybar"
      old={STICKY.oldPrice}
      price={STICKY.price}
      label={STICKY.label}
      labelVisible
      waLabel={STICKY.whatsapp}
      waHref={WHATSAPP_HREF}
      cta={{ label: STICKY.cta, to: ROUTES.p12 }}
      className={barAccentClass}
    />
  )
}
