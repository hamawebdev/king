import { Link } from 'react-router'
import { WHATSAPP_HREF } from '@/lib/site'
import { ROUTES, STICKY } from './data'
import { buttonClass } from './styles'

/** Round WhatsApp shortcut pinned to the bottom-right corner (hidden at 680px and below). */
export function WhatsAppBubble() {
  return (
    <a
      href={WHATSAPP_HREF}
      aria-label="Contacter sur WhatsApp"
      className="fixed right-[20px] bottom-[24px] z-[90] flex size-[58px] items-center justify-center rounded-full bg-[#25d366] text-[31px] text-white shadow-[0_10px_26px_-6px_rgba(37,211,102,0.65)] transition-all duration-200 ease-[ease] hover:-translate-y-[2px] hover:scale-105 hover:bg-[#1ebe5b] lp-md:hidden"
    >
      <i className="ti ti-brand-whatsapp" />
    </a>
  )
}

/** Bottom buy bar shown only at 680px and below. */
export function MobileBuyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] hidden items-center justify-between gap-[12px] border-t border-lp-line bg-white px-[14px] py-[11px] shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] lp-md:flex">
      <div>
        <s className="mr-[5px] text-[13px] text-lp-dim">{STICKY.oldPrice}</s>
        <b className="font-archivo text-[22px] font-black">{STICKY.price}</b>
        <span className="mt-[-3px] block text-[12px] text-lp-muted lp-sm:hidden">{STICKY.label}</span>
      </div>
      <div className="flex items-center gap-[8px]">
        <a
          href={WHATSAPP_HREF}
          aria-label="WhatsApp"
          className="flex flex-none items-center gap-[7px] rounded-[13px] bg-[#25d366] px-[15px] py-[12px] text-[14px] font-extrabold whitespace-nowrap text-white hover:bg-[#1ebe5b] lp-sm:px-[12px] lp-sm:py-[11px] lp-sm:text-[13px]"
        >
          <i className="ti ti-brand-whatsapp text-[20px]" /> {STICKY.whatsapp}
        </a>
        <Link
          to={ROUTES.p12}
          className={buttonClass(
            'primary',
            null,
            'px-[16px] py-[12px] text-[15px] whitespace-nowrap lp-sm:px-[12px] lp-sm:py-[11px] lp-sm:text-[13px]',
          )}
        >
          {STICKY.cta}
        </Link>
      </div>
    </div>
  )
}
