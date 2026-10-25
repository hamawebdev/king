import type { ComponentType } from 'react'
import { CguContent } from './legal/CguContent'
import { CgvContent } from './legal/CgvContent'
import { PrivacyContent } from './legal/PrivacyContent'
import { RefundContent } from './legal/RefundContent'

export type LegalDoc = 'cgu' | 'cgv' | 'privacy' | 'refund'

const DOCS: Record<LegalDoc, ComponentType> = {
  cgu: CguContent,
  cgv: CgvContent,
  privacy: PrivacyContent,
  refund: RefundContent,
}

// One legal document: aura header with the title, then a sticky table of contents from xl.
export default function Legal({ doc }: { doc: LegalDoc }) {
  const Content = DOCS[doc]
  return (
    <div data-section="legal-doc" data-doc={doc} className="overflow-x-clip bg-canvas">
      <Content />
    </div>
  )
}
