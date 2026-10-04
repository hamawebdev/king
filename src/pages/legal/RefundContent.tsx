import { BRAND } from '@/lib/site'
import { LEGAL_EMAIL } from './shared'

// Politique de remboursement: placeholder text, block structure mirrors the original document.
export function RefundContent() {
  return (
    <>
      <p>
        Merci de prendre connaissance des règles ci-dessous avant toute commande. Elles décrivent les modalités de
        remboursement appliquées par {BRAND}.
      </p>
      <h2>Nos règles de remboursement</h2>
      <p>
        Nous mettons le plus grand soin à faire fonctionner notre service, mais chaque installation est différente et
        de nombreux facteurs extérieurs peuvent influencer la qualité de la diffusion chez vous. Si le service ne
        répond pas à vos attentes ou si un incident technique que nous ne parvenons pas à corriger vous empêche de
        l’utiliser normalement, nous vous rembourserons la totalité de votre commande dans les 14 jours qui suivent
        votre premier achat, une garantie que peu de services comparables accordent aujourd’hui à leurs clients, quel
        que soit l’appareil utilisé.
      </p>
      <h2>Points à respecter :</h2>
      <p>
        Une panne liée à votre propre matériel ne peut donner lieu à un remboursement que si vous acceptez notre
        assistance et appliquez les réglages que nous vous indiquons. Si le problème persiste malgré tout, nous
        procéderons au remboursement, à condition de nous transmettre un justificatif du dysfonctionnement, idéalement
        sous forme de vidéo. Avant toute demande liée à un souci technique, merci de nous écrire afin que notre équipe
        puisse intervenir : nous répondons à chaque message en moins de 12 heures.
      </p>
      <h4>
        <strong>
          Important : merci de ne pas ouvrir de contestation auprès de votre banque ou de votre prestataire de paiement
          pour obtenir un remboursement, car nous serions tenus de transmettre le détail de votre commande, ce qui peut
          entraîner des frais pouvant atteindre 1500 €
        </strong>{' '}
        à votre charge
      </h4>
      <p>
        <strong>
          Toute demande de remboursement acceptée entraîne la fermeture définitive du compte et l’impossibilité de
          souscrire à nouveau un abonnement !
        </strong>
      </p>
      <p>Jusqu’à 14 jours : 85% du prix restitué</p>
      <p>Après 1 mois : 65% du prix restitué</p>
      <p>Après 2 mois : 40% du prix restitué</p>
      <p>Après 3 mois : 25% du prix restitué</p>
      <p>Après 4 mois : 20% du prix restitué</p>
      <p>Après 6 mois : 12% du prix restitué</p>
      <p>Toute demande s’effectue auprès de notre équipe</p>
      <p>
        Les frais retenus par votre prestataire de paiement lors de l’achat ne sont pas restitués et restent à la charge
        du client
      </p>
      <p>
        Pour un paiement par carte bancaire, la somme due est en principe recréditée sur le compte associé à la carte
        utilisée dans un délai maximal de 20 jours ouvrés après validation.
      </p>
      <p>Dans certains cas particuliers, ce délai peut toutefois être prolongé et atteindre jusqu’à 90 jours.</p>
      <p>
        Si vous éprouvez des difficultés pour commander, activer ou renouveler un accès, notre équipe se tient prête à
        vous accompagner.
      </p>
      <p>Une question ?</p>
      <p>Pour toute interrogation au sujet de ces règles de remboursement, vous pouvez nous écrire : {LEGAL_EMAIL}</p>
    </>
  )
}
