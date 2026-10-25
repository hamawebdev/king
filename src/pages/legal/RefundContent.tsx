import { BRAND } from '@/lib/site'
import { Callout, DocLayout, H2, HelpCard, P, Wa } from './shared'
import { PackList } from './PackList'

// Refund schedule, set like a statement: period on the left, share returned on the right.
const SCHEDULE: [string, string][] = [
  ['Jusqu’à 14 jours :', '85%'],
  ['Après 30 jours :', '65%'],
  ['Après 60 jours :', '40%'],
  ['Après 90 jours :', '25%'],
  ['Après 120 jours :', '20%'],
  ['Après 180 jours :', '12%'],
]

// Politique de remboursement.
export function RefundContent() {
  return (
    <DocLayout
      crumb="Politique de remboursement"
      title="Nos règles de remboursement"
      lead={
        <p>
          Merci de prendre connaissance des règles ci-dessous avant toute commande. Elles décrivent les modalités de
          remboursement appliquées par {BRAND}.
        </p>
      }
    >
      <P>
        Nous mettons le plus grand soin à faire fonctionner notre service, mais chaque installation est différente et
        de nombreux facteurs extérieurs peuvent influencer la qualité de la diffusion chez vous. Si le service ne
        répond pas à vos attentes ou si un incident technique que nous ne parvenons pas à corriger vous empêche de
        l’utiliser normalement, nous vous rembourserons la totalité de votre commande dans les 14 jours qui suivent
        votre premier achat, quel que soit l’appareil utilisé.
      </P>
      <P>Ces règles s’appliquent aux quatre formules {BRAND} :</P>
      <PackList />
      <H2 id="points-a-respecter">Points à respecter</H2>
      <P>
        Une panne liée à votre propre matériel ne peut donner lieu à un remboursement que si vous acceptez notre
        assistance et appliquez les réglages que nous vous indiquons. Si le problème persiste malgré tout, nous
        procéderons au remboursement, à condition de nous transmettre un justificatif du dysfonctionnement, idéalement
        sous forme de vidéo. Avant toute demande liée à un souci technique, merci de nous écrire sur WhatsApp afin que
        notre équipe puisse intervenir.
      </P>
      <Callout>
        <h3 className="text-lg leading-snug font-semibold text-heading text-pretty">
          Important : merci de ne pas ouvrir de litige auprès de PayPal ou de votre banque pour obtenir un remboursement,
          car nous serions tenus de transmettre le détail de votre commande, ce qui peut entraîner des frais pouvant
          atteindre 1500 € à votre charge
        </h3>
        <p className="mt-4 text-base leading-[1.75] text-heading">
          <strong className="font-semibold">
            Toute demande de remboursement acceptée entraîne la fermeture définitive du compte et l’impossibilité de
            souscrire à nouveau un abonnement !
          </strong>
        </p>
      </Callout>
      <H2 id="bareme">Barème de remboursement</H2>
      <ul className="mt-6 max-w-[68ch] border-t border-heading">
        {SCHEDULE.map(([when, pct]) => (
          <li key={when} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4">
            <span className="text-base text-body">{when}</span>
            <span className="text-right">
              <span className="text-2xl font-bold tracking-tight text-heading tabular-nums">{pct}</span>{' '}
              <span className="text-sm font-medium text-slate-500">du prix restitué</span>
            </span>
          </li>
        ))}
      </ul>
      <H2 id="modalites">Modalités</H2>
      <P>Toute demande s’effectue auprès de notre équipe, par écrit sur WhatsApp.</P>
      <P>
        Le remboursement est effectué par le moyen utilisé lors du règlement : sur votre compte PayPal, ou par virement
        SEPA sur le compte bancaire d’origine pour un règlement par Virement Bancaire Instantané SEPA, en principe dans
        un délai maximal de 20 jours ouvrés après validation.
      </P>
      <P>
        Les frais retenus par votre prestataire de paiement lors de l’achat ne sont pas restitués et restent à la charge
        du client.
      </P>
      <P>
        Si vous éprouvez des difficultés pour commander, activer ou renouveler un accès, notre équipe se tient prête à
        vous accompagner.
      </P>
      <HelpCard id="une-question" heading="Une question ?">
        <P>
          Pour toute interrogation au sujet de ces règles de remboursement, écrivez-nous sur <Wa />.
        </P>
      </HelpCard>
    </DocLayout>
  )
}
