import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Aura, Card, Container, Section, SectionHeading } from '@/components/kit'
import { ActivationSteps, ReassuranceBox } from './home/sections/Activation'
import { ACTIVATION_HEAD } from './home/sections/Activation.data'
import { GuaranteeStrip } from './home/sections/Installation'
import { PricingTable } from './home/sections/PricingTable'
import { FaqBlock } from './theme/FaqBlock'
import { Breadcrumbs } from './theme/PageHero'
import { usePageTitle } from '@/lib/usePageTitle'

// Shop (« Boutique »): the official 4-pack table (S10) with the guarantee strip (S11) under it, the
// 4-step activation protocol, the 6 included commitments, a FAQ subset (S14) and the reseller link.
export default function Pricing() {
  usePageTitle('Boutique — King 365 TV Abonnement Officiel | NovaStream')
  return (
    <div className="overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-canvas pt-8 pb-16 md:pt-10 md:pb-24">
        <Aura variant="hero" />
        <Container>
          <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Boutique' }]} className="mb-10 flex justify-center md:mb-14" />
          <PricingTable headingAs="h1" id="formules" />
          <GuaranteeStrip className="mt-8" />
        </Container>
      </section>

      <Section tone="mist" aria-labelledby="activation-title">
        <SectionHeading id="activation-title" eyebrow={ACTIVATION_HEAD.badge} title={ACTIVATION_HEAD.title} subtitle={ACTIVATION_HEAD.subtitle} />
        <ActivationSteps className="mt-12" />
        <ReassuranceBox className="mt-12" />
      </Section>

      <FaqBlock ids={['commander', 'delai', 'renouveler', 'memes-identifiants', 'essai', 'multi-ecrans']} />

      <Section className="pt-0 md:pt-0">
        <Card as={Link} to="/services/" interactive className="group flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <span>
            <span className="block text-lg font-semibold text-heading">Programme Revendeur NovaStream</span>
            <span className="mt-1 block text-[0.9375rem] text-body">Vous souhaitez revendre des abonnements King 365 TV ? Découvrez le programme.</span>
          </span>
          <span className="inline-flex items-center gap-2 font-semibold text-brand">
            En savoir plus <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Card>
      </Section>
    </div>
  )
}
