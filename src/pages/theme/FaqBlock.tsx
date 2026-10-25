import { Section, SectionHeading, WaButton } from '@/components/kit'
import { FAQ_ITEMS } from '@/pages/home/sections/Faq.data'
import { FaqList } from '@/pages/home/sections/Faq.list'
import type { SectionTone } from '@/components/kit'

type FaqBlockProps = {
  /** FAQ_ITEMS ids (spec S14), in display order. */
  ids: string[]
  title?: string
  eyebrow?: string
  tone?: SectionTone
}

/** A band with a subset of the 20 approved FAQ answers (spec S14), plus a WhatsApp way out. */
export function FaqBlock({ ids, title = 'Questions fréquentes', eyebrow = 'FAQ · NovaStream', tone = 'white' }: FaqBlockProps) {
  const items = ids.map((id) => FAQ_ITEMS.find((i) => i.id === id)).filter((i) => i !== undefined)
  return (
    <Section tone={tone} aria-labelledby="faq-title">
      <SectionHeading id="faq-title" eyebrow={eyebrow} title={title} />
      <FaqList items={items} className="mx-auto mt-10 max-w-3xl" />
      <div className="mt-10 flex justify-center">
        <WaButton>Une autre question ? Écrivez-nous</WaButton>
      </div>
    </Section>
  )
}
