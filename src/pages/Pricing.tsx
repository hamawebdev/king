import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Aura, Card, Container, Section, SectionHeading } from '@/components/kit'
import { ActivationSteps, ReassuranceBox } from './home/sections/Activation'
import { useActivationHead } from './home/sections/Activation.data'
import { GuaranteeStrip } from './home/sections/Installation'
import { PricingTable } from './home/sections/PricingTable'
import { FaqBlock } from './theme/FaqBlock'
import { Breadcrumbs } from './theme/PageHero'
import { useCopy, type Localized } from '@/lib/i18n'
import { usePageTitle } from '@/lib/usePageTitle'

const fr = {
  pageTitle: 'Boutique — King 365 TV Abonnement Officiel | NovaStream',
  home: 'Accueil',
  shop: 'Boutique',
  resellerTitle: 'Programme Revendeur NovaStream',
  resellerText: 'Vous souhaitez revendre des abonnements King 365 TV ? Découvrez le programme.',
  more: 'En savoir plus',
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    pageTitle: 'Shop — Official King 365 TV Subscription | NovaStream',
    home: 'Home',
    shop: 'Shop',
    resellerTitle: 'NovaStream Reseller Program',
    resellerText: 'Want to resell King 365 TV subscriptions? Discover the program.',
    more: 'Learn more',
  },
  de: {
    pageTitle: 'Shop — Offizielles King 365 TV Abonnement | NovaStream',
    home: 'Startseite',
    shop: 'Shop',
    resellerTitle: 'NovaStream Wiederverkäufer-Programm',
    resellerText: 'Sie möchten King 365 TV Abonnements weiterverkaufen? Entdecken Sie das Programm.',
    more: 'Mehr erfahren',
  },
  es: {
    pageTitle: 'Tienda — Suscripción Oficial King 365 TV | NovaStream',
    home: 'Inicio',
    shop: 'Tienda',
    resellerTitle: 'Programa de Revendedores NovaStream',
    resellerText: '¿Quieres revender suscripciones King 365 TV? Descubre el programa.',
    more: 'Más información',
  },
  pt: {
    pageTitle: 'Loja — Subscrição Oficial King 365 TV | NovaStream',
    home: 'Início',
    shop: 'Loja',
    resellerTitle: 'Programa de Revendedores NovaStream',
    resellerText: 'Pretende revender subscrições King 365 TV? Conheça o programa.',
    more: 'Saber mais',
  },
  // « King 365 TV -sana »: NBSP before the hyphen and a word joiner (U+2060) after it keep the compound on one line.
  fi: {
    pageTitle: 'Kauppa — Virallinen King 365 TV -⁠tilaus | NovaStream',
    home: 'Etusivu',
    shop: 'Kauppa',
    resellerTitle: 'NovaStreamin jälleenmyyjäohjelma',
    resellerText: 'Haluatko myydä King 365 TV -⁠tilauksia eteenpäin? Tutustu ohjelmaan.',
    more: 'Lue lisää',
  },
}

// Shop (« Boutique »): the official 4-pack table (S10) with the guarantee strip (S11) under it, the
// 4-step activation protocol, the 6 included commitments, a FAQ subset (S14) and the reseller link.
export default function Pricing() {
  const t = useCopy(COPY)
  usePageTitle(t.pageTitle)
  const activationHead = useActivationHead()
  return (
    <div className="overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-canvas pt-8 pb-16 md:pt-10 md:pb-24">
        <Aura variant="hero" />
        <Container>
          <Breadcrumbs items={[{ label: t.home, to: '/' }, { label: t.shop }]} className="mb-10 flex justify-center md:mb-14" />
          <PricingTable headingAs="h1" id="formules" />
          <GuaranteeStrip className="mt-8" />
        </Container>
      </section>

      <Section tone="mist" aria-labelledby="activation-title">
        <SectionHeading id="activation-title" eyebrow={activationHead.badge} title={activationHead.title} subtitle={activationHead.subtitle} />
        <ActivationSteps className="mt-12" />
        <ReassuranceBox className="mt-12" />
      </Section>

      <FaqBlock ids={['commander', 'delai', 'renouveler', 'memes-identifiants', 'essai', 'multi-ecrans']} />

      <Section className="pt-0 md:pt-0">
        <Card as={Link} to="/services/" interactive className="group flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <span>
            <span className="block text-lg font-semibold text-heading">{t.resellerTitle}</span>
            <span className="mt-1 block text-[0.9375rem] text-body">{t.resellerText}</span>
          </span>
          <span className="inline-flex items-center gap-2 font-semibold text-brand">
            {t.more} <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Card>
      </Section>
    </div>
  )
}
