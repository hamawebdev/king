import { Section, SectionHeading, WaButton } from '@/components/kit'
import { FAQ_ITEMS } from '@/pages/home/sections/Faq.data'
import { FaqList } from '@/pages/home/sections/Faq.list'
import type { SectionTone } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'

const fr = { title: 'Questions fréquentes', eyebrow: 'FAQ · NovaStream', more: 'Une autre question ? Écrivez-nous' }

const COPY: Localized<typeof fr> = {
  fr,
  en: { title: 'Frequently Asked Questions', eyebrow: 'FAQ · NovaStream', more: 'Another question? Message us' },
  de: { title: 'Häufige Fragen', eyebrow: 'FAQ · NovaStream', more: 'Noch eine Frage? Schreiben Sie uns' },
  es: { title: 'Preguntas frecuentes', eyebrow: 'FAQ · NovaStream', more: '¿Tienes otra pregunta? Escríbenos' },
  pt: { title: 'Perguntas frequentes', eyebrow: 'FAQ · NovaStream', more: 'Tem outra pergunta? Escreva-nos' },
  fi: { title: 'Usein kysytyt kysymykset', eyebrow: 'UKK · NovaStream', more: 'Onko sinulla muuta kysyttävää? Kirjoita meille' },
}

type FaqBlockProps = {
  /** FAQ_ITEMS ids (spec S14), in display order. */
  ids: string[]
  title?: string
  eyebrow?: string
  tone?: SectionTone
}

/** A band with a subset of the 20 approved FAQ answers (spec S14), plus a WhatsApp way out. */
export function FaqBlock({ ids, title, eyebrow, tone = 'white' }: FaqBlockProps) {
  const t = useCopy(COPY)
  const items = ids.map((id) => FAQ_ITEMS.find((i) => i.id === id)).filter((i) => i !== undefined)
  return (
    <Section tone={tone} aria-labelledby="faq-title">
      <SectionHeading id="faq-title" eyebrow={eyebrow ?? t.eyebrow} title={title ?? t.title} />
      <FaqList items={items} className="mx-auto mt-10 max-w-3xl" />
      <div className="mt-10 flex justify-center">
        <WaButton>{t.more}</WaButton>
      </div>
    </Section>
  )
}
