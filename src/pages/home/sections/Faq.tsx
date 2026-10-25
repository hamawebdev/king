import { Section, SectionHeading, WaButton } from '@/components/kit'
import { WHATSAPP_DISPLAY } from '@/lib/site'
import { FaqList } from './Faq.list'

/**
 * Section 14 — « Vos Questions Fréquentes – NOVASTREAM » (20 Q&As).
 * Split screen per the spec: title column on the left (sticky on desktop), accordion list on the right;
 * a single column on phone. Data: FAQ_ITEMS in ./Faq.data, list: FaqList in ./Faq.list (reused on inner pages).
 */
export function HomeFaq() {
  return (
    <Section id="faq" aria-labelledby="faq-title" className="scroll-mt-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            align="left"
            eyebrow="AIDE & SUPPORT NOVASTREAM"
            title="Vos Questions Fréquentes – NOVASTREAM"
            subtitle="Tout ce qu'il faut savoir avant, pendant et après la commande de votre abonnement King 365 TV auprès de votre distributeur agréé NovaStream."
          />
          <div className="mt-8 hidden flex-wrap items-center gap-x-4 gap-y-2 lg:flex">
            <WaButton>Contactez-nous</WaButton>
            <span className="text-sm text-body tabular-nums">{WHATSAPP_DISPLAY}</span>
          </div>
        </div>
        <FaqList />
      </div>
    </Section>
  )
}
