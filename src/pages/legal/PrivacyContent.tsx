import { SITE_DOMAIN } from '@/lib/site'
import { LEGAL_EMAIL } from './shared'

// Politique de confidentialité: placeholder text, block structure mirrors the original document.
export function PrivacyContent() {
  return (
    <>
      <h2>
        <strong>Les données personnelles recueillies</strong>
      </h2>
      <p>Voici les données que nous pouvons enregistrer :</p>
      <ul>
        <li>Nom</li>
        <li>Prénom</li>
        <li>Adresse postale</li>
        <li>Code postal</li>
        <li>Adresse e-mail</li>
        <li>Numéro de téléphone mobile ou fixe</li>
        <li>Pays</li>
        <li>Date de naissance</li>
      </ul>
      <p>
        Ces données nous parviennent principalement par l’intermédiaire des formulaires du site ainsi que lors de vos
        échanges avec nos services en ligne. Des cookies et des journaux techniques, présentés plus bas, contribuent
        également à recueillir certaines informations sur votre navigation et vos habitudes de visite.
      </p>
      <h2>
        <strong>Saisie et suivi de navigation :</strong>
      </h2>
      <p>Les formulaires suivants nous permettent d’obtenir vos informations personnelles :</p>
      <ul>
        <li>Formulaire de création d’espace client</li>
        <li>Formulaire de paiement</li>
      </ul>
      <p>Les informations obtenues de cette manière servent aux objectifs ci-dessous :</p>
      <ul>
        <li>Traitement des achats</li>
        <li>Échanges</li>
      </ul>
      <p>
        Certaines informations sont obtenues lors de votre navigation et de vos échanges avec les pages du site,
        selon les modalités suivantes :
      </p>
      <p>Ces informations sont exploitées pour les objectifs mentionnés ci-après :</p>
      <ul>
        <li>Avis clients</li>
      </ul>
      <h2>
        <strong>Refus et suppression des données</strong>
      </h2>
      <p>
        Vous pouvez à tout moment vous opposer à l’utilisation de vos informations ou en demander la suppression.
        <br />
        Le droit de refus désigne la faculté, pour chaque utilisateur, de s’opposer à ce que ses données soient
        exploitées pour certains des objectifs annoncés au moment où elles ont été recueillies.
      </p>
      <p>
        Le droit de suppression désigne quant à lui la faculté de demander que ses données soient effacées d’un
        fichier, par exemple d’une liste d’envoi de lettres d’information ou d’offres commerciales ciblées.
      </p>
      <p>
        Pour faire valoir ces droits, contactez-nous :
        <br />
        Courriel : {LEGAL_EMAIL}
        <br />
        Rubrique en ligne : {SITE_DOMAIN}
      </p>
      <h2>
        <strong>Consultation</strong>
      </h2>
      <p>
        Toute personne concernée peut obtenir la communication des informations la concernant, en demander la
        correction ou réclamer leur effacement lorsqu’elles sont inexactes.
        <br />
        Les demandes sont à adresser :
        <br />
        Courriel : {LEGAL_EMAIL}
        <br />
        Rubrique en ligne : {SITE_DOMAIN}
      </p>
      <h2>
        <strong>Stockage</strong>
      </h2>
      <p>
        Vos informations sont hébergées sur des serveurs protégés et ne sont accessibles qu’à un nombre restreint de
        collaborateurs, eux-mêmes soumis à une stricte obligation de discrétion et à des contrôles réguliers.
        <br />
        Plusieurs dispositifs complémentaires veillent au quotidien à la bonne protection de vos données, en
        particulier :
      </p>
      <ul>
        <li>Chiffrement des échanges (TLS)</li>
        <li>Authentification renforcée des administrateurs</li>
        <li>Contrôle des accès – équipe habilitée</li>
        <li>Contrôle des accès – titulaire du compte</li>
        <li>Supervision permanente du réseau</li>
        <li>Copies de sauvegarde</li>
        <li>Certificats numériques à jour</li>
        <li>Mots de passe chiffrés</li>
        <li>Pare-feu applicatif</li>
      </ul>
      <p>
        Nous adaptons régulièrement nos outils afin de suivre l’évolution des technologies et de préserver la
        confidentialité de vos opérations. Il convient néanmoins de rappeler qu’aucun dispositif ne peut offrir une
        protection absolue : tout transfert d’informations sur Internet comporte une part de risque qu’il est
        impossible d’éliminer totalement, quelles que soient les précautions prises.
      </p>
    </>
  )
}
