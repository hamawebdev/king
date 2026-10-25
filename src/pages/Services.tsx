import { Handshake, MessagesSquare, Headset } from 'lucide-react'
import { Card, Section, SectionHeading, WaButton } from '@/components/kit'
import { IncludedMetrics } from './home/sections/PricingTable'
import { PageHero } from './theme/PageHero'
import { usePageTitle } from '@/lib/usePageTitle'

/** Spec S15 footer: the reseller WhatsApp message, word for word. */
const RESELLER_MESSAGE = 'Bonjour NovaStream, je souhaite des informations sur le programme Revendeur'

const STEPS = [
  {
    icon: MessagesSquare,
    title: 'Écrivez-nous sur WhatsApp',
    text: 'Présentez votre activité et vos besoins à un conseiller NovaStream, en français, 7j/7.',
  },
  {
    icon: Handshake,
    title: 'Recevez les conditions du programme',
    text: 'Le conseiller vous détaille les conditions revendeur et le mode de règlement (PayPal ou Virement Bancaire Instantané SEPA).',
  },
  {
    icon: Headset,
    title: 'Un accompagnement dédié',
    text: 'Activation de vos clients, renouvellements et support technique : vous gardez une ligne directe avec notre équipe.',
  },
]

// Reseller page (« Revendeur »): the programme is handled 1-to-1 on WhatsApp.
export default function Services() {
  usePageTitle('Programme Revendeur King 365 TV | NovaStream')
  return (
    <div className="overflow-x-clip">
      <PageHero
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Revendeur' }]}
        eyebrow="Programme Revendeur · Distributeur Agréé King 365 TV"
        title="Devenez Revendeur King 365 TV avec NovaStream"
        subtitle="Proposez l’abonnement King 365 TV à vos propres clients, avec l’appui d’un distributeur agréé et d’un conseiller dédié sur WhatsApp."
      >
        <WaButton message={RESELLER_MESSAGE} size="lg">
          Demander les informations Revendeur
        </WaButton>
      </PageHero>

      <Section tone="mist-fade" aria-labelledby="revendeur-etapes">
        <SectionHeading id="revendeur-etapes" eyebrow="Comment ça marche" title="Trois étapes, un seul interlocuteur" />
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <Card as="li" key={title} className="flex flex-col gap-4 p-6 sm:p-7">
              <span className="flex items-center justify-between">
                <span aria-hidden="true" className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-semibold text-slate-400 tabular-nums">0{i + 1}</span>
              </span>
              <h3 className="text-lg font-semibold text-heading">{title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-body">{text}</p>
            </Card>
          ))}
        </ol>
      </Section>

      <Section>
        <IncludedMetrics headingAs="h2" />
        <div className="mt-12 flex justify-center">
          <WaButton message={RESELLER_MESSAGE} size="lg">
            Demander les informations Revendeur
          </WaButton>
        </div>
      </Section>
    </div>
  )
}
