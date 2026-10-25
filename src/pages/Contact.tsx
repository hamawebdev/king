import { Link } from 'react-router'
import { ArrowRight, Download, Handshake, ShoppingBag } from 'lucide-react'
import { Card, Section, WaButton, WhatsAppIcon } from '@/components/kit'
import { WHATSAPP_DISPLAY, WA_CONTACT_MESSAGE, waLink, useNavLabels } from '@/lib/site'
import { FaqBlock } from './theme/FaqBlock'
import { PageHero } from './theme/PageHero'
import { PaymentNote } from './theme/PaymentNote'
import { useCopy, type Localized } from '@/lib/i18n'
import { usePageTitle } from '@/lib/usePageTitle'

const RESELLER_MESSAGE = 'Bonjour NovaStream, je souhaite des informations sur le programme Revendeur'

const SHORTCUTS = [
  { to: '/pricing/', icon: ShoppingBag },
  { to: '/muffin-builder-83/', icon: Download },
  { to: '/services/', icon: Handshake },
]

const fr = {
  pageTitle: 'Contact WhatsApp 24/7 | NovaStream',
  eyebrow: 'Assistance & Activation 7j/7',
  title: 'Contactez NovaStream',
  /** Around the phone number: « …sur WhatsApp ( » number « ) pour toute assistance. » */
  subtitleLead: 'Accès privilégié direct à un conseiller technique en français 24/7 sur WhatsApp (',
  subtitleTail: ') pour toute assistance.',
  lineTitle: 'Ligne WhatsApp Dédiée 1-to-1',
  lineText: 'Commande, renouvellement, récupération de code, installation : un seul numéro.',
  write: 'Écrire sur WhatsApp',
  reseller: 'Programme Revendeur',
  shortcuts: [
    { title: 'Commander ou renouveler', text: 'Les 4 formules officielles et leurs liens WhatsApp.' },
    { title: 'Installer l’application', text: 'Applications V2, V3, V4 et guides pour 9 appareils.' },
    { title: 'Devenir revendeur', text: 'Le programme Revendeur NovaStream.' },
  ],
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    pageTitle: 'WhatsApp Contact 24/7 | NovaStream',
    eyebrow: 'Support & Activation 7 Days a Week',
    title: 'Contact NovaStream',
    subtitleLead: 'Priority direct access to a French-speaking technical advisor 24/7 on WhatsApp (',
    subtitleTail: ') for any support you need.',
    lineTitle: 'Dedicated 1‑to‑1 WhatsApp Line',
    lineText: 'Orders, renewals, code recovery, installation: one single number.',
    write: 'Message Us on WhatsApp',
    reseller: 'Reseller Program',
    shortcuts: [
      { title: 'Order or Renew', text: 'The 4 official plans and their WhatsApp links.' },
      { title: 'Install the App', text: 'V2, V3 and V4 apps, plus guides for 9 devices.' },
      { title: 'Become a Reseller', text: 'The NovaStream Reseller Program.' },
    ],
  },
  de: {
    pageTitle: 'WhatsApp-Kontakt 24/7 | NovaStream',
    eyebrow: 'Support & Aktivierung 7 Tage die Woche',
    title: 'Kontaktieren Sie NovaStream',
    subtitleLead: 'Bevorzugter direkter Zugang zu einem französischsprachigen technischen Berater, rund um die Uhr auf WhatsApp (',
    subtitleTail: ') – für jede Art von Unterstützung.',
    lineTitle: 'Persönliche 1:1‑Linie auf WhatsApp',
    lineText: 'Bestellung, Verlängerung, Code-Wiederherstellung, Installation: eine einzige Nummer.',
    write: 'Auf WhatsApp schreiben',
    reseller: 'Wiederverkäufer-Programm',
    shortcuts: [
      { title: 'Bestellen oder verlängern', text: 'Die 4 offiziellen Pakete und ihre WhatsApp-Links.' },
      { title: 'App installieren', text: 'Apps V2, V3, V4 und Anleitungen für 9 Geräte.' },
      { title: 'Wiederverkäufer werden', text: 'Das NovaStream Wiederverkäufer-Programm.' },
    ],
  },
  es: {
    pageTitle: 'Contacto por WhatsApp 24/7 | NovaStream',
    eyebrow: 'Soporte y activación 7 días a la semana',
    title: 'Contacta con NovaStream',
    subtitleLead: 'Acceso directo y prioritario a un asesor técnico de habla francesa 24/7 por WhatsApp (',
    subtitleTail: ') para cualquier consulta de soporte.',
    lineTitle: 'Línea de WhatsApp dedicada 1 a 1',
    lineText: 'Pedidos, renovaciones, recuperación de código, instalación: un único número.',
    write: 'Escribir por WhatsApp',
    reseller: 'Programa de Revendedores',
    shortcuts: [
      { title: 'Pedir o renovar', text: 'Los 4 planes oficiales y sus enlaces de WhatsApp.' },
      { title: 'Instalar la aplicación', text: 'Aplicaciones V2, V3, V4 y guías para 9 dispositivos.' },
      { title: 'Hazte revendedor', text: 'El Programa de Revendedores NovaStream.' },
    ],
  },
  pt: {
    pageTitle: 'Contacto WhatsApp 24/7 | NovaStream',
    eyebrow: 'Suporte e ativação 7 dias por semana',
    title: 'Contacte a NovaStream',
    subtitleLead: 'Acesso direto e prioritário a um consultor técnico de língua francesa 24/7 no WhatsApp (',
    subtitleTail: ') para qualquer pedido de suporte.',
    lineTitle: 'Linha WhatsApp dedicada 1 para 1',
    lineText: 'Encomenda, renovação, recuperação de código, instalação: um único número.',
    write: 'Escrever no WhatsApp',
    reseller: 'Programa de Revendedores',
    shortcuts: [
      { title: 'Encomendar ou renovar', text: 'Os 4 planos oficiais e as respetivas ligações WhatsApp.' },
      { title: 'Instalar a aplicação', text: 'Aplicações V2, V3, V4 e guias para 9 dispositivos.' },
      { title: 'Tornar-se revendedor', text: 'O Programa de Revendedores NovaStream.' },
    ],
  },
  fi: {
    pageTitle: 'Yhteystiedot – WhatsApp 24/7 | NovaStream',
    eyebrow: 'Tuki ja aktivointi 7 päivää viikossa',
    title: 'Ota yhteyttä NovaStreamiin',
    subtitleLead: 'Suora etuoikeutettu yhteys ranskankieliseen tekniseen asiakasneuvojaan 24/7 WhatsAppissa (',
    subtitleTail: ') kaikissa tukiasioissa.',
    lineTitle: 'Oma henkilökohtainen WhatsApp-linja',
    lineText: 'Tilaus, uusiminen, koodin palautus, asennus: yksi ja sama numero.',
    write: 'Kirjoita WhatsAppissa',
    reseller: 'Jälleenmyyjäohjelma',
    shortcuts: [
      { title: 'Tilaa tai uusi', text: '4 virallista pakettia ja niiden WhatsApp-linkit.' },
      { title: 'Asenna sovellus', text: 'Sovellukset V2, V3, V4 ja oppaat 9 laitteelle.' },
      { title: 'Ryhdy jälleenmyyjäksi', text: 'NovaStreamin jälleenmyyjäohjelma.' },
    ],
  },
}

// Contact: WhatsApp is the only channel (spec: « Ligne WhatsApp Dédiée 1-to-1 »). No e-mail form.
export default function Contact() {
  const t = useCopy(COPY)
  const nav = useNavLabels()
  usePageTitle(t.pageTitle)
  const shortcuts = SHORTCUTS.map((link, i) => ({ ...link, ...t.shortcuts[i] }))
  return (
    <div className="overflow-x-clip">
      <PageHero
        crumbs={[{ label: nav.main.home, to: '/' }, { label: nav.main.contact }]}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={
          <>
            {t.subtitleLead}
            <span className="whitespace-nowrap">{WHATSAPP_DISPLAY}</span>
            {t.subtitleTail}
          </>
        }
      />

      <Section className="pt-0 md:pt-0">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <Card className="flex flex-col p-6 sm:p-8">
            <span aria-hidden="true" className="grid size-12 place-items-center rounded-xl bg-whatsapp/12 text-whatsapp-hover">
              <WhatsAppIcon className="size-6" />
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-heading">{t.lineTitle}</h2>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
              {t.lineText}
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
                {t.write}
              </WaButton>
              <WaButton message={RESELLER_MESSAGE} variant="outline" size="lg">
                {t.reseller}
              </WaButton>
            </div>
            <PaymentNote className="mt-8 border-t border-line pt-6" />
          </Card>

          <ul className="grid gap-4">
            {shortcuts.map(({ to, icon: Icon, title, text }) => (
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
