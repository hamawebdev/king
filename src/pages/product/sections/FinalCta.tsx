import type { Product } from '../data'
import { BUY, HEADING, SECTION, TITLE_SIZE, WRAP } from '../styles'

const FINAL_CTA = {
  title: 'Vos soirées télé méritent mieux',
  text: 'Choisissez votre durée, recevez vos accès par e-mail et installez-vous dès ce soir.',
}

// Closing call to action
export function FinalCta({ product: p, onBuy }: { product: Product; onBuy: (e: React.MouseEvent) => void }) {
  return (
    <section data-section="product-final-cta" className={`${SECTION} bg-lp-soft`}>
      <div className={`${WRAP} text-center`}>
        <h2 className={`${HEADING} mb-3 font-extrabold text-heading ${TITLE_SIZE}`}>{FINAL_CTA.title}</h2>
        <p className="mb-[22px] text-[16px] text-lp-muted">{FINAL_CTA.text}</p>
        <a href="/checkout/" onClick={onBuy} className={`${BUY} inline-flex gap-[9px] rounded-[13px] px-[30px] py-4 text-[16px]`}>
          Acheter maintenant — {p.price}€
        </a>
      </div>
    </section>
  )
}
