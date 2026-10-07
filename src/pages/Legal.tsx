import type { ComponentType } from 'react'
import { CguContent } from './legal/CguContent'
import { CgvContent } from './legal/CgvContent'
import { PrivacyContent } from './legal/PrivacyContent'
import { RefundContent } from './legal/RefundContent'
import './legal/legal.css'

export type LegalDoc = 'cgu' | 'cgv' | 'privacy' | 'refund'

const DOCS: Record<LegalDoc, ComponentType> = {
  cgu: CguContent,
  cgv: CgvContent,
  privacy: PrivacyContent,
  refund: RefundContent,
}

// Theme default page template: one content section holding the document, no subheader.
export default function Legal({ doc }: { doc: LegalDoc }) {
  const Content = DOCS[doc]
  return (
    <div className="bt legal-page" data-doc={doc} data-section="legal-doc">
      <div className="legal-page__section">
        <div className="legal-page__wrapper">
          <div className="legal-page__content">
            <Content />
          </div>
        </div>
      </div>
    </div>
  )
}
