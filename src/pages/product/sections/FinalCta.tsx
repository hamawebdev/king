import { ButtonA, ChannelMosaic, DeviceFrame, Reveal, Rosette, Section } from '@/components/brand'
import type { Product } from '../data'
import { routeHref } from '@/lib/site'

const FINAL_CTA = {
  title: 'Vos soirées télé méritent mieux',
  text: 'Choisissez votre durée, recevez vos accès par e-mail et installez-vous dès ce soir.',
}

// Closing call to action: a vault band (DIRECTION §9.2 #9). Text column on the left with the brass purchase
// action under it; on the right the guilloché rosette, behind empty space only (holding a framed TV from lg).
export function FinalCta({ product: p, onBuy }: { product: Product; onBuy: (e: React.MouseEvent) => void }) {
  return (
    <Section zone="vault" dataSection="product-final-cta" containerClassName="relative grid items-center gap-grid lg:grid-cols-12">
      {/* Tablet: the rosette is cropped by the band's right edge, beside the text column. */}
      <Rosette className="absolute top-1/2 -right-[200px] hidden w-[400px] -translate-y-1/2 opacity-[.12] md:block lg:hidden" />
      <div className="relative max-w-[560px] lg:col-span-7 lg:max-w-[640px]">
        <Reveal>
          <span aria-hidden="true" className="mb-6 block h-px w-7 bg-brass-500 md:mb-7" />
          <h2 className="font-display text-display-sm text-z-fg">{FINAL_CTA.title}</h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mt-4 max-w-[46ch] font-sans text-lead text-z-soft">{FINAL_CTA.text}</p>
        </Reveal>
        <div className="mt-8 md:mt-10">
          <ButtonA href={routeHref('/checkout/')} onClick={onBuy} variant="brass" size="lg" iconEnd="arrow" full className="sm:w-auto">
            Acheter maintenant — {p.price}€
          </ButtonA>
        </div>
      </div>
      {/* Desktop: a framed TV held inside the engraved rosette ("this is television" + "payment protected"). */}
      <div aria-hidden="true" className="relative hidden lg:col-span-5 lg:col-start-8 lg:grid lg:place-items-center">
        <Rosette className="absolute top-1/2 left-1/2 w-[500px] max-w-none xl:w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-[.12]" />
        <DeviceFrame className="w-full max-w-[360px]">
          <ChannelMosaic />
        </DeviceFrame>
      </div>
    </Section>
  )
}
