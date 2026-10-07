import type { ReactNode } from 'react'
import { HEADING, TITLE_SIZE } from './styles'

/** Small pill shown above section titles. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-lp-blue-soft px-[15px] py-[7px] text-[13px] font-extrabold tracking-[0.08em] text-lp-blue uppercase">
      {children}
    </span>
  )
}

/** Centred section intro: optional eyebrow, then the title with its second part highlighted. */
export function SectionHead({ eyebrow, title, spacing = 'mb-10' }: { eyebrow?: string; title: [string, string]; spacing?: string }) {
  return (
    <div className={`mx-auto max-w-[620px] text-center ${spacing}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`${HEADING} mt-3.5 mb-2.5 font-extrabold text-heading ${TITLE_SIZE}`}>
        {title[0]} <span className="text-lp-blue">{title[1]}</span>
      </h2>
    </div>
  )
}
