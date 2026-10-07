import { WHATSAPP_HREF } from '@/lib/site'
import type { Product } from './data'
import { BUY } from './styles'

// Sticky buy bar, phones only
export function StickyBar({ product: p, onBuy }: { product: Product; onBuy: (e: React.MouseEvent) => void }) {
  return (
    <div
      data-section="product-stickybar"
      className="fixed inset-x-0 bottom-0 z-[80] hidden items-center justify-between gap-3 border-t border-lp-line bg-white px-3.5 py-[11px] shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] [@media(max-width:600px)]:flex"
    >
      <div>
        <s className="mr-[5px] text-[13px] text-lp-dim">{p.oldPrice}€</s>
        <b className="font-archivo text-[22px] font-black">{p.price}€</b>
        <span className="hidden">{p.barLabel}</span>
      </div>
      <div className="flex flex-1 items-center gap-2">
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
          className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-[12px] bg-[#25d366] px-2 text-[13.5px] font-extrabold whitespace-nowrap text-white hover:bg-[#1ebe5b]"
        >
          <i className="ti ti-brand-whatsapp text-[18px]" /> WhatsApp
        </a>
        <a href="/checkout/" onClick={onBuy} className={`${BUY} flex h-12 flex-1 gap-1.5 rounded-[12px] px-2 text-[13.5px] whitespace-nowrap`}>
          {p.barCta}
        </a>
      </div>
    </div>
  )
}
