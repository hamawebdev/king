import { Section, SectionHeading, WaButton } from '@/components/kit'
import { useCopy, type Localized } from '@/lib/i18n'
import { WHATSAPP_DISPLAY } from '@/lib/site'
import { FaqList } from './Faq.list'

const fr = {
  eyebrow: 'AIDE & SUPPORT NOVASTREAM',
  title: 'Vos Questions Fréquentes – NOVASTREAM',
  subtitle:
    "Tout ce qu'il faut savoir avant, pendant et après la commande de votre abonnement King 365 TV auprès de votre distributeur agréé NovaStream.",
  contact: 'Contactez-nous',
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    eyebrow: 'NOVASTREAM HELP & SUPPORT',
    title: 'Your Frequently Asked Questions – NOVASTREAM',
    subtitle:
      'Everything you need to know before, during and after ordering your King 365 TV subscription from your authorized distributor NovaStream.',
    contact: 'Contact us',
  },
  de: {
    eyebrow: 'NOVASTREAM HILFE & SUPPORT',
    title: 'Ihre häufigen Fragen – NOVASTREAM',
    subtitle:
      'Alles, was Sie vor, während und nach der Bestellung Ihres King 365 TV Abonnements bei Ihrem autorisierten Vertriebspartner NovaStream wissen müssen.',
    contact: 'Kontaktieren Sie uns',
  },
  es: {
    eyebrow: 'AYUDA Y SOPORTE NOVASTREAM',
    title: 'Tus preguntas frecuentes – NOVASTREAM',
    subtitle:
      'Todo lo que debes saber antes, durante y después de contratar tu suscripción a King 365 TV con tu distribuidor autorizado NovaStream.',
    contact: 'Contáctanos',
  },
  pt: {
    eyebrow: 'AJUDA E SUPORTE NOVASTREAM',
    title: 'As suas perguntas frequentes – NOVASTREAM',
    subtitle:
      'Tudo o que precisa de saber antes, durante e depois da encomenda da sua subscrição King 365 TV junto do seu distribuidor autorizado NovaStream.',
    contact: 'Contacte-nos',
  },
  fi: {
    eyebrow: 'NOVASTREAM-APU JA -TUKI',
    title: 'Usein kysytyt kysymykset – NOVASTREAM',
    subtitle:
      'Kaikki, mitä sinun tarvitsee tietää ennen King 365 TV\u00a0-tilauksesi tekemistä, sen aikana ja sen jälkeen – valtuutetulta jälleenmyyjältäsi NovaStreamilta.',
    contact: 'Ota yhteyttä',
  },
}

/**
 * Section 14 — « Vos Questions Fréquentes – NOVASTREAM » (20 Q&As).
 * Split screen per the spec: title column on the left (sticky on desktop), accordion list on the right;
 * a single column on phone. Data: FAQ_ITEMS in ./Faq.data, list: FaqList in ./Faq.list (reused on inner pages).
 */
export function HomeFaq() {
  const t = useCopy(COPY)
  return (
    <Section id="faq" aria-labelledby="faq-title" className="scroll-mt-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            align="left"
            eyebrow={t.eyebrow}
            title={t.title}
            subtitle={t.subtitle}
          />
          <div className="mt-8 hidden flex-wrap items-center gap-x-4 gap-y-2 lg:flex">
            <WaButton>{t.contact}</WaButton>
            <span className="text-sm text-body tabular-nums">{WHATSAPP_DISPLAY}</span>
          </div>
        </div>
        <FaqList />
      </div>
    </Section>
  )
}
