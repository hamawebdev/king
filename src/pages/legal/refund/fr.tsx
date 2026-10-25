import { BRAND } from '@/lib/site'
import { Callout, DocLayout, H2, HelpCard, P, ScheduleList, Wa } from '../shared'
import { PackList } from '../PackList'

// Refund schedule (days counted from activation). Contiguous ranges: the old schedule left days 15–30 undefined; they take the next tier (65%).
const SCHEDULE: [string, string][] = [
  ['Jusqu’au 14e jour :', '85%'],
  ['Du 15e au 60e jour :', '65%'],
  ['Du 61e au 90e jour :', '40%'],
  ['Du 91e au 120e jour :', '25%'],
  ['Du 121e au 180e jour :', '20%'],
  ['Au-delà de 180 jours :', '12%'],
]

// Politique de remboursement.
export function RefundFr() {
  return (
    <DocLayout
      title="Politique de remboursement"
      lead={
        <p>
          Nos règles de remboursement. Merci d’en prendre connaissance avant toute commande : elles décrivent les seules
          modalités d’annulation et de remboursement appliquées par {BRAND}.
        </p>
      }
    >
      <P>Ces règles s’appliquent aux quatre formules {BRAND} :</P>
      <PackList />
      <H2 id="garantie-technique">Garantie technique de 14 jours</H2>
      <P>
        Nous mettons le plus grand soin à faire fonctionner notre service, mais chaque installation est différente et
        de nombreux facteurs extérieurs peuvent influencer la qualité de la diffusion chez vous. Si un incident
        technique que nous ne parvenons pas à corriger vous empêche d’utiliser normalement le service, nous vous
        rembourserons la totalité de votre commande dans les 14 jours qui suivent votre premier achat, quel que soit
        l’appareil utilisé.
      </P>
      <P>En dehors de ce cas, toute demande de remboursement suit le barème ci-dessous.</P>
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
      <P>
        Pour toute autre demande, la part du prix restituée dépend du nombre de jours écoulés depuis l’activation de
        votre accès :
      </P>
      <ScheduleList rows={SCHEDULE} suffix="du prix restitué" />
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
