import { BRAND } from '@/lib/site'
import { Callout, DocLayout, H2, HelpCard, Mail, P } from './shared'

// Refund schedule, set like a statement: period on the left, share returned on the right (text kept verbatim).
const SCHEDULE: [string, string][] = [
  ['Jusqu’à 14 jours :', '85%'],
  ['Après 1 mois :', '65%'],
  ['Après 2 mois :', '40%'],
  ['Après 3 mois :', '25%'],
  ['Après 4 mois :', '20%'],
  ['Après 6 mois :', '12%'],
]

// Politique de remboursement: placeholder text, block structure mirrors the original document.
export function RefundContent() {
  return (
    <DocLayout
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
        votre premier achat, une garantie que peu de services comparables accordent aujourd’hui à leurs clients, quel
        que soit l’appareil utilisé.
      </P>
      <H2 id="points-a-respecter">Points à respecter :</H2>
      <P>
        Une panne liée à votre propre matériel ne peut donner lieu à un remboursement que si vous acceptez notre
        assistance et appliquez les réglages que nous vous indiquons. Si le problème persiste malgré tout, nous
        procéderons au remboursement, à condition de nous transmettre un justificatif du dysfonctionnement, idéalement
        sous forme de vidéo. Avant toute demande liée à un souci technique, merci de nous écrire afin que notre équipe
        puisse intervenir : nous répondons à chaque message en moins de 12 heures.
      </P>
      <Callout icon="ti-alert-triangle">
        <h3 className="font-display text-title text-z-fg [text-wrap:pretty]">
          Important : merci de ne pas ouvrir de contestation auprès de votre banque ou de votre prestataire de paiement
          pour obtenir un remboursement, car nous serions tenus de transmettre le détail de votre commande, ce qui peut
          entraîner des frais pouvant atteindre 1500 € à votre charge
        </h3>
        <p className="mt-4 font-sans text-copy leading-[1.7] text-ink">
          <strong className="font-semibold">
            Toute demande de remboursement acceptée entraîne la fermeture définitive du compte et l’impossibilité de
            souscrire à nouveau un abonnement !
          </strong>
        </p>
      </Callout>
      <ul className="mt-10 max-w-[68ch] border-t border-ink">
        {SCHEDULE.map(([when, pct]) => (
          <li
            key={when}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-hairline py-4"
          >
            <span className="font-sans text-copy text-ink-body">{when}</span>
            <span className="text-right">
              <span className="price-num text-stat-md">{pct}</span>{' '}
              <span className="font-sans text-meta font-medium text-ink-muted">du prix restitué</span>
            </span>
          </li>
        ))}
      </ul>
      <P className="mt-8">Toute demande s’effectue auprès de notre équipe</P>
      <P>
        Les frais retenus par votre prestataire de paiement lors de l’achat ne sont pas restitués et restent à la charge
        du client
      </P>
      <P>
        Pour un paiement par carte bancaire, la somme due est en principe recréditée sur le compte associé à la carte
        utilisée dans un délai maximal de 20 jours ouvrés après validation.
      </P>
      <P>Dans certains cas particuliers, ce délai peut toutefois être prolongé et atteindre jusqu’à 90 jours.</P>
      <P>
        Si vous éprouvez des difficultés pour commander, activer ou renouveler un accès, notre équipe se tient prête à
        vous accompagner.
      </P>
      <HelpCard id="une-question" heading="Une question ?">
        <P>
          Pour toute interrogation au sujet de ces règles de remboursement, vous pouvez nous écrire : <Mail />
        </P>
      </HelpCard>
    </DocLayout>
  )
}
