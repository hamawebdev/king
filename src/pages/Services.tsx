import { Handshake, MessagesSquare, Headset } from 'lucide-react'
import { Card, Section, SectionHeading, WaButton } from '@/components/kit'
import { IncludedMetrics } from './home/sections/PricingTable'
import { PageHero } from './theme/PageHero'
import { useCopy, type Localized } from '@/lib/i18n'
import { usePageTitle } from '@/lib/usePageTitle'

/** Spec S15 footer: the reseller WhatsApp message, word for word. */
const RESELLER_MESSAGE = 'Bonjour NovaStream, je souhaite des informations sur le programme Revendeur'

const STEP_ICONS = [MessagesSquare, Handshake, Headset]

const fr = {
  pageTitle: 'Programme Revendeur King 365 TV | NovaStream',
  home: 'Accueil',
  crumb: 'Revendeur',
  eyebrow: 'Programme Revendeur · Distributeur Agréé King 365 TV',
  title: 'Devenez Revendeur King 365 TV avec NovaStream',
  subtitle:
    'Proposez l’abonnement King 365 TV à vos propres clients, avec l’appui d’un distributeur agréé et d’un conseiller dédié sur WhatsApp.',
  cta: 'Demander les informations Revendeur',
  stepsEyebrow: 'Comment ça marche',
  stepsTitle: 'Trois étapes, un seul interlocuteur',
  steps: [
    {
      title: 'Écrivez-nous sur WhatsApp',
      text: 'Présentez votre activité et vos besoins à un conseiller NovaStream, en français, 7j/7.',
    },
    {
      title: 'Recevez les conditions du programme',
      text: 'Le conseiller vous détaille les conditions revendeur et le mode de règlement (PayPal ou Virement Bancaire Instantané SEPA).',
    },
    {
      title: 'Un accompagnement dédié',
      text: 'Activation de vos clients, renouvellements et support technique : vous gardez une ligne directe avec notre équipe.',
    },
  ],
}

const COPY: Localized<typeof fr> = {
  fr,
  en: {
    pageTitle: 'King 365 TV Reseller Program | NovaStream',
    home: 'Home',
    crumb: 'Reseller',
    eyebrow: 'Reseller Program · Authorized King 365 TV Distributor',
    title: 'Become a King 365 TV Reseller with NovaStream',
    subtitle:
      'Offer the King 365 TV subscription to your own customers, backed by an authorized distributor and a dedicated advisor on WhatsApp.',
    cta: 'Request Reseller Information',
    stepsEyebrow: 'How It Works',
    stepsTitle: 'Three Steps, One Single Contact',
    steps: [
      {
        title: 'Message Us on WhatsApp',
        text: 'Tell a NovaStream advisor about your business and your needs — in French, 7 days a week.',
      },
      {
        title: 'Receive the Program Terms',
        text: 'Your advisor walks you through the reseller terms and the payment method (PayPal or instant SEPA bank transfer).',
      },
      {
        title: 'Dedicated Support',
        text: 'Customer activations, renewals and technical support: you keep a direct line to our team.',
      },
    ],
  },
  de: {
    pageTitle: 'King 365 TV Wiederverkäufer-Programm | NovaStream',
    home: 'Startseite',
    crumb: 'Wiederverkäufer',
    eyebrow: 'Wiederverkäufer-Programm · Autorisierter King 365 TV Vertriebspartner',
    title: 'Werden Sie King 365 TV Wiederverkäufer mit NovaStream',
    subtitle:
      'Bieten Sie das King 365 TV Abonnement Ihren eigenen Kunden an – mit der Unterstützung eines autorisierten Vertriebspartners und eines persönlichen Beraters auf WhatsApp.',
    cta: 'Informationen für Wiederverkäufer anfordern',
    stepsEyebrow: 'So funktioniert es',
    stepsTitle: 'Drei Schritte, ein einziger Ansprechpartner',
    steps: [
      {
        title: 'Schreiben Sie uns auf WhatsApp',
        text: 'Stellen Sie einem NovaStream-Berater Ihr Geschäft und Ihren Bedarf vor – auf Französisch, 7 Tage die Woche.',
      },
      {
        title: 'Erhalten Sie die Programmbedingungen',
        text: 'Ihr Berater erläutert Ihnen die Konditionen für Wiederverkäufer und die Zahlungsweise (PayPal oder SEPA-Echtzeitüberweisung).',
      },
      {
        title: 'Persönliche Betreuung',
        text: 'Aktivierung Ihrer Kunden, Verlängerungen und technischer Support: Sie behalten einen direkten Draht zu unserem Team.',
      },
    ],
  },
  es: {
    pageTitle: 'Programa de Revendedores King 365 TV | NovaStream',
    home: 'Inicio',
    crumb: 'Revendedor',
    eyebrow: 'Programa de Revendedores · Distribuidor Autorizado King 365 TV',
    title: 'Hazte revendedor de King 365 TV con NovaStream',
    subtitle:
      'Ofrece la suscripción King 365 TV a tus propios clientes, con el respaldo de un distribuidor autorizado y de un asesor dedicado en WhatsApp.',
    cta: 'Solicitar información para revendedores',
    stepsEyebrow: 'Cómo funciona',
    stepsTitle: 'Tres pasos, un único interlocutor',
    steps: [
      {
        title: 'Escríbenos por WhatsApp',
        text: 'Presenta tu actividad y tus necesidades a un asesor NovaStream, en francés, 7 días a la semana.',
      },
      {
        title: 'Recibe las condiciones del programa',
        text: 'El asesor te detalla las condiciones para revendedores y la forma de pago (PayPal o transferencia bancaria inmediata SEPA).',
      },
      {
        title: 'Un acompañamiento dedicado',
        text: 'Activación de tus clientes, renovaciones y soporte técnico: mantienes una línea directa con nuestro equipo.',
      },
    ],
  },
  pt: {
    pageTitle: 'Programa de Revendedores King 365 TV | NovaStream',
    home: 'Início',
    crumb: 'Revendedor',
    eyebrow: 'Programa de Revendedores · Distribuidor Autorizado King 365 TV',
    title: 'Torne-se revendedor King 365 TV com a NovaStream',
    subtitle:
      'Disponibilize a subscrição King 365 TV aos seus próprios clientes, com o apoio de um distribuidor autorizado e de um consultor dedicado no WhatsApp.',
    cta: 'Pedir informações para revendedores',
    stepsEyebrow: 'Como funciona',
    stepsTitle: 'Três passos, um único interlocutor',
    steps: [
      {
        title: 'Escreva-nos no WhatsApp',
        text: 'Apresente a sua atividade e as suas necessidades a um consultor NovaStream, em francês, 7 dias por semana.',
      },
      {
        title: 'Receba as condições do programa',
        text: 'O consultor explica-lhe as condições para revendedores e o modo de pagamento (PayPal ou transferência bancária imediata SEPA).',
      },
      {
        title: 'Um acompanhamento dedicado',
        text: 'Ativação dos seus clientes, renovações e suporte técnico: mantém uma linha direta com a nossa equipa.',
      },
    ],
  },
  // « King 365 TV -sana »: NBSP before the hyphen and a word joiner (U+2060) after it keep the compound on one line.
  fi: {
    pageTitle: 'King 365 TV -⁠jälleenmyyjäohjelma | NovaStream',
    home: 'Etusivu',
    crumb: 'Jälleenmyyjä',
    eyebrow: 'Jälleenmyyjäohjelma · Valtuutettu King 365 TV -⁠jälleenmyyjä',
    title: 'Ryhdy King 365 TV -⁠jälleenmyyjäksi NovaStreamin kanssa',
    subtitle:
      'Tarjoa King 365 TV -⁠tilausta omille asiakkaillesi valtuutetun jälleenmyyjän ja oman asiakasneuvojan tuella WhatsAppissa.',
    cta: 'Pyydä tietoa jälleenmyyjille',
    stepsEyebrow: 'Näin se toimii',
    stepsTitle: 'Kolme vaihetta, yksi yhteyshenkilö',
    steps: [
      {
        title: 'Kirjoita meille WhatsAppissa',
        text: 'Kerro NovaStreamin asiakasneuvojalle toiminnastasi ja tarpeistasi – ranskaksi, 7 päivää viikossa.',
      },
      {
        title: 'Saat ohjelman ehdot',
        text: 'Asiakasneuvoja käy kanssasi läpi jälleenmyyjän ehdot ja maksutavan (PayPal tai SEPA-pikasiirto).',
      },
      {
        title: 'Henkilökohtainen tuki',
        text: 'Asiakkaidesi aktivoinnit, uusimiset ja tekninen tuki: sinulla on suora yhteys tiimiimme.',
      },
    ],
  },
}

// Reseller page (« Revendeur »): the programme is handled 1-to-1 on WhatsApp.
export default function Services() {
  const t = useCopy(COPY)
  usePageTitle(t.pageTitle)
  const steps = t.steps.map((step, i) => ({ ...step, icon: STEP_ICONS[i] }))
  return (
    <div className="overflow-x-clip">
      <PageHero
        crumbs={[{ label: t.home, to: '/' }, { label: t.crumb }]}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      >
        <WaButton message={RESELLER_MESSAGE} size="lg">
          {t.cta}
        </WaButton>
      </PageHero>

      <Section tone="mist-fade" aria-labelledby="revendeur-etapes">
        <SectionHeading id="revendeur-etapes" eyebrow={t.stepsEyebrow} title={t.stepsTitle} />
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Card as="li" key={i} className="flex flex-col gap-4 p-6 sm:p-7">
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
            {t.cta}
          </WaButton>
        </div>
      </Section>
    </div>
  )
}
