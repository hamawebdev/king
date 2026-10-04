import { BRAND } from '@/lib/site'

// Conditions générales de vente: placeholder text, block structure mirrors the original document.
export function CgvContent() {
  return (
    <>
      <h2>
        <strong>Les ventes sur </strong>
        {BRAND}
      </h2>
      <p>
        <strong>Les informations de ce site sont revues fréquemment pour refléter l’état actuel de nos offres</strong>
      </p>
      <h3>
        <strong>Fiabilité </strong>
      </h3>
      <p>
        Nos équipes surveillent la disponibilité de la plateforme jour et nuit. Les coupures dues à la qualité de votre
        connexion internet ou à votre matériel échappent à notre contrôle et ne peuvent pas nous être imputées. Nous
        mettons tout en œuvre pour garantir une diffusion stable. Ces incidents extérieurs ne donnent droit à aucun
        remboursement.
      </p>
      <h3>
        <strong>Support</strong>
      </h3>
      <p>Chaque message reçoit une réponse sous 24h, et sous 48h le week-end et les jours fériés.</p>
      <p>Notre équipe vous accompagne sans frais pour configurer votre appareil ou votre TV</p>
      <h3>
        <strong>Activation</strong>
      </h3>
      <p>Vos identifiants vous parviennent dans les 24h suivant le paiement</p>
      <p>Les appareils physiques sont expédiés sous 2 à 4 jours ouvrés</p>
      <h3>
        <strong>Modes de règlement acceptés </strong>
      </h3>
      <p>Le règlement s’effectue par carte bancaire ou virement .</p>
      <p>
        Les frais prélevés par certains prestataires de paiement restent à votre charge et ne sont pas restitués en cas
        d’annulation
      </p>
      <h3>
        <strong>Annulation / </strong>Règles de restitution
      </h3>
      <ul>
        <li>
          Vous disposez de 72 heures à compter du paiement pour renoncer à votre commande et être remboursé. Il suffit
          d’en faire la demande écrite par e-mail en précisant votre numéro de commande ; elle sera examinée par
          notre équipe dans un délai de 24 heures.
        </li>
      </ul>
      <ul>
        <li>
          Une fois le service activé et le délai de rétractation expiré, aucune somme ne peut être restituée, ce que
          nos outils de suivi permettent de constater de façon certaine.
        </li>
        <li>
          Nous vous conseillons d’essayer notre plateforme avant toute commande : un accès de démonstration de courte
          durée est offert à chaque nouveau client. En cas de difficulté technique, notre équipe se tient à votre
          disposition et répond à toutes vos questions par e-mail.
        </li>
      </ul>
      <h3>
        <strong>Interdits</strong>
      </h3>
      <p>
        Le partage de vos identifiants avec d’autres personnes est prohibé. Il en va de même pour l’usage d’un même
        accès sur plusieurs appareils ou pour toute rediffusion du service. Un tel manquement entraîne la résiliation
        immédiate, sans aucun remboursement.
      </p>
      <h3>
        <strong>Respect de vos données personnelles</strong>
      </h3>
      <p>
        Aucune information vous concernant n’est cédée à des partenaires. Votre anonymat et votre vie privée sont pour
        nous une priorité absolue.
      </p>
      <p>
        Les informations de compte et les statistiques de connexion servent uniquement à des analyses internes
        destinées à dimensionner nos serveurs et à améliorer en continu la qualité du service que nous vous offrons.
      </p>
    </>
  )
}
