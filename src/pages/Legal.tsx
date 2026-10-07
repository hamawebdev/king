import type { ComponentType } from 'react'
import { Section } from '@/components/brand'
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

// One paper section holding the document (DIRECTION §9.7): title, then a sticky table of contents from xl.
export default function Legal({ doc }: { doc: LegalDoc }) {
  const Content = DOCS[doc]
  return (
    <Section zone="paper" dataSection="legal-doc" data-doc={doc} rhythm="none" container={false}>
      <Content />
    </Section>
  )
}
