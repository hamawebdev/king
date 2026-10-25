import { BRAND } from '@/lib/site'
import { Link } from 'react-router'
import { DocLayout, H2, P, Wa } from './shared'
import { PackList } from './PackList'

// Conditions générales de vente: four packs, orders and payment arranged 1-to-1 on WhatsApp.
export function CgvContent() {
  return (
    <DocLayout
      title="Conditions générales de vente"
      lead={
        <p>
          Les ventes sur {BRAND}. Les informations de ce site sont revues fréquemment pour refléter l’état actuel de nos
          offres.
        </p>
      }
    >
      <H2 id="formules">Formules proposées</H2>
      <P>
        {BRAND}, distributeur agréé King 365 TV, propose quatre formules d’abonnement, sans engagement masqué. Le prix
        indiqué couvre toute la durée de la formule :
      </P>
      <PackList />
      <H2 id="commande">Commande</H2>
      <P>
        Toute commande, tout renouvellement et toute activation se font directement avec un conseiller {BRAND} sur{' '}
        <Wa />. Le conseiller confirme avec vous la formule choisie et l’appareil à équiper avant le règlement.
      </P>
      <H2 id="modes-de-reglement">Modes de règlement acceptés</H2>
      <P>
        Le règlement est convenu avec votre conseiller sur WhatsApp, par PayPal (avec protection acheteur) ou par
        Virement Bancaire Instantané SEPA. Aucune coordonnée de carte bancaire n’est saisie ni conservée sur le site.
      </P>
      <P>
        Les frais prélevés par certains prestataires de paiement restent à votre charge et ne sont pas restitués en cas
        d’annulation.
      </P>
      <H2 id="activation">Activation</H2>
      <P>
        Vos identifiants (codes API Xtream et lien M3U) vous sont envoyés sur WhatsApp et par e-mail dès la validation
        du paiement : généralement en moins de 10 à 20 minutes pendant nos heures d’ouverture, et jusqu’à 1 à 2 heures
        en période de forte affluence.
      </P>
      <H2 id="fiabilite">Fiabilité</H2>
      <P>
        Nos équipes surveillent la disponibilité de la plateforme jour et nuit. Les coupures dues à la qualité de votre
        connexion internet ou à votre matériel échappent à notre contrôle et ne peuvent pas nous être imputées. Nous
        mettons tout en œuvre pour garantir une diffusion stable. Ces incidents extérieurs ne donnent droit à aucun
        remboursement.
      </P>
      <H2 id="support">Support</H2>
      <P>Notre équipe répond sur WhatsApp 7j/7 et vous accompagne sans frais pour configurer votre appareil ou votre TV.</P>
      <H2 id="annulation">Annulation / Règles de restitution</H2>
      <P>
        Les conditions d’annulation et de remboursement (garantie technique de 14 jours et barème de remboursement) sont
        fixées par notre{' '}
        <Link to="/politique-de-remboursement/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
          politique de remboursement
        </Link>
        , qui seule fait foi. Toute demande se fait par écrit sur WhatsApp en précisant la formule commandée.
      </P>
      <P>
        Un test est disponible dans certains cas pour une durée de 3 heures ou 24 heures avant de souscrire. En cas de
        difficulté technique, notre équipe se tient à votre disposition sur WhatsApp.
      </P>
      <H2 id="interdits">Interdits</H2>
      <P>
        Le partage de vos identifiants avec d’autres personnes est prohibé. Un code permet un écran actif à la fois :
        l’usage simultané d’un même accès sur plusieurs appareils, comme toute rediffusion du service, entraîne la
        résiliation immédiate, sans aucun remboursement.
      </P>
      <H2 id="donnees-personnelles">Respect de vos données personnelles</H2>
      <P>
        Aucune information vous concernant n’est cédée à des partenaires. Votre anonymat et votre vie privée sont pour
        nous une priorité absolue.
      </P>
      <P>
        Les informations de compte et les statistiques de connexion servent uniquement à des analyses internes
        destinées à dimensionner nos serveurs et à améliorer en continu la qualité du service que nous vous offrons.
      </P>
    </DocLayout>
  )
}
