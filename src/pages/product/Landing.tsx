import type { Product } from './data'
import { Description } from './sections/Description'
import { Faq } from './sections/Faq'
import { FinalCta } from './sections/FinalCta'
import { Guarantees } from './sections/Guarantees'
import { Hero } from './sections/Hero'
import { Included } from './sections/Included'
import { Quality } from './sections/Quality'
import { Reviews } from './sections/Reviews'
import { StickyBar } from './StickyBar'

// Landing block shown on every product page. Breakpoints follow the original block: 900px (single column)
// and 600px (tighter sections + sticky buy bar), both inclusive max-width queries.

export function Landing({ product: p, onBuy }: { product: Product; onBuy: (e: React.MouseEvent) => void }) {
  return (
    <div className="w-full overflow-x-clip bg-paper font-sans leading-[1.65] text-ink-body antialiased">
      <Hero product={p} onBuy={onBuy} />
      <Description />
      <Included />
      <Quality />
      <Reviews />
      <Guarantees />
      <Faq />
      <FinalCta product={p} onBuy={onBuy} />
      <StickyBar product={p} onBuy={onBuy} />
    </div>
  )
}
