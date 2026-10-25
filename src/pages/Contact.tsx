import { Link } from 'react-router'
import { ArrowRight, Download, Handshake, ShoppingBag } from 'lucide-react'
import { Card, Section, WaButton, WhatsAppIcon } from '@/components/kit'
import { WHATSAPP_DISPLAY, WA_CONTACT_MESSAGE, waLink } from '@/lib/site'
import { FaqBlock } from './theme/FaqBlock'
import { PageHero } from './theme/PageHero'
import { PaymentNote } from './theme/PaymentNote'
import { usePageTitle } from '@/lib/usePageTitle'

const RESELLER_MESSAGE = 'Bonjour NovaStream, je souhaite des informations sur le programme Revendeur'

const SHORTCUTS = [
  { to: '/pricing/', icon: ShoppingBag, title: 'Commander ou renouveler', text: 'Les 4 formules officielles et leurs liens WhatsApp.' },
  { to: '/muffin-builder-83/', icon: Download, title: 'Installer l’application', text: 'Applications V2, V3, V4 et guides pour 9 appareils.' },
  { to: '/services/', icon: Handshake, title: 'Devenir revendeur', text: 'Le programme Revendeur NovaStream.' },
]

// Contact: WhatsApp is the only channel (spec: « Ligne WhatsApp Dédiée 1-to-1 »). No e-mail form.
export default function Contact() {
  usePageTitle('Contact WhatsApp 24/7 | NovaStream')
  return (
    <div className="overflow-x-clip">
      <PageHero
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Contact' }]}
        eyebrow="Assistance & Activation 7j/7"
        title="Contactez NovaStream"
        subtitle={
          <>
            Accès privilégié direct à un conseiller technique en français 24/7 sur WhatsApp (
            <span className="whitespace-nowrap">{WHATSAPP_DISPLAY}</span>) pour toute assistance.
          </>
        }
      />

      <Section className="pt-0 md:pt-0">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <Card className="flex flex-col p-6 sm:p-8">
            <span aria-hidden="true" className="grid size-12 place-items-center rounded-xl bg-whatsapp/12 text-whatsapp-hover">
              <WhatsAppIcon className="size-6" />
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-heading">Ligne WhatsApp Dédiée 1-to-1</h2>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
              Commande, renouvellement, récupération de code, installation : un seul numéro.
            </p>
            <a
              href={waLink(WA_CONTACT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-fit rounded-md text-3xl font-bold tracking-tight text-heading tabular-nums hover:text-brand sm:text-4xl"
            >
              {WHATSAPP_DISPLAY}
            </a>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WaButton message={WA_CONTACT_MESSAGE} size="lg">
                Écrire sur WhatsApp
              </WaButton>
              <WaButton message={RESELLER_MESSAGE} variant="outline" size="lg">
                Programme Revendeur
              </WaButton>
            </div>
            <PaymentNote className="mt-8 border-t border-line pt-6" />
          </Card>

          <ul className="grid gap-4">
            {SHORTCUTS.map(({ to, icon: Icon, title, text }) => (
              <li key={to}>
                <Card as={Link} to={to} interactive className="group flex h-full items-center gap-4 p-5 sm:p-6">
                  <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-heading">{title}</span>
                    <span className="mt-0.5 block text-sm text-body">{text}</span>
                  </span>
                  <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-brand" />
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FaqBlock tone="mist-fade" ids={['confiance', 'delai', 'email', 'renouveler']} />
    </div>
  )
}
