import { Link } from 'react-router'
import { Contact, DocLayout, H2, P, UL, Wa } from './shared'

// Politique de confidentialité.
export function PrivacyContent() {
  return (
    <DocLayout title="Politique de confidentialité">
      <H2 id="donnees-recueillies">Les données personnelles recueillies</H2>
      <P>Voici les données que nous pouvons enregistrer :</P>
      <UL cols>
        <li>Nom</li>
        <li>Prénom</li>
        <li>Adresse postale</li>
        <li>Code postal</li>
        <li>Adresse e-mail</li>
        <li>Numéro de téléphone mobile ou fixe</li>
        <li>Pays</li>
        <li>Date de naissance</li>
      </UL>
      <P>
        Ces données nous parviennent principalement lors de vos échanges avec nos conseillers sur WhatsApp (commande,
        activation, assistance). Le site enregistre aussi quelques préférences dans votre navigateur, décrites
        ci-dessous.
      </P>
      <H2 id="collecte">Collecte et utilisation</H2>
      <P>Les échanges suivants nous permettent d’obtenir vos informations personnelles :</P>
      <UL>
        <li>Conversation WhatsApp avec votre conseiller (commande, renouvellement, activation)</li>
        <li>Envoi de vos identifiants par e-mail</li>
      </UL>
      <P>
        Le règlement se fait par PayPal ou par Virement Bancaire Instantané SEPA : aucune donnée de carte bancaire n’est
        saisie ni conservée par le site.
      </P>
      <P>Les informations obtenues de cette manière servent aux objectifs ci-dessous :</P>
      <UL>
        <li>Traitement des commandes et des renouvellements</li>
        <li>Assistance technique</li>
      </UL>
      <H2 id="cookies">Cookies et préférences</H2>
      <P>Lors de votre navigation, le site enregistre uniquement dans votre navigateur (stockage local) :</P>
      <UL>
        <li>Votre acceptation du bandeau cookies, pour ne plus l’afficher</li>
        <li>La langue choisie dans le sélecteur de langue</li>
      </UL>
      <P>
        Ces informations restent sur votre appareil et servent uniquement à mémoriser vos préférences d’affichage. Vous
        pouvez les effacer à tout moment depuis les réglages de votre navigateur.
      </P>
      <H2 id="refus-et-suppression">Refus et suppression des données</H2>
      <P>Vous pouvez à tout moment vous opposer à l’utilisation de vos informations ou en demander la suppression.</P>
      <P>
        Le droit de refus désigne la faculté, pour chaque utilisateur, de s’opposer à ce que ses données soient
        exploitées pour certains des objectifs annoncés au moment où elles ont été recueillies.
      </P>
      <P>
        Le droit de suppression désigne quant à lui la faculté de demander que ses données soient effacées d’un
        fichier, par exemple d’une liste d’envoi de lettres d’information ou d’offres commerciales ciblées.
      </P>
      <P>Pour faire valoir ces droits, contactez-nous :</P>
      <Contact>
        <p>
          <span className="lbl">WhatsApp :</span> <Wa bare />
        </p>
        <p>
          <span className="lbl">Rubrique en ligne :</span>{' '}
          <Link to="/contact/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            page Contact
          </Link>
        </p>
      </Contact>
      <H2 id="consultation">Consultation</H2>
      <P>
        Toute personne concernée peut obtenir la communication des informations la concernant, en demander la
        correction ou réclamer leur effacement lorsqu’elles sont inexactes.
      </P>
      <P>Les demandes sont à adresser :</P>
      <Contact>
        <p>
          <span className="lbl">WhatsApp :</span> <Wa bare />
        </p>
        <p>
          <span className="lbl">Rubrique en ligne :</span>{' '}
          <Link to="/contact/" className="font-medium text-brand underline underline-offset-2 hover:text-brand-hover">
            page Contact
          </Link>
        </p>
      </Contact>
      <H2 id="stockage">Stockage</H2>
      <P>
        Vos informations sont hébergées sur des serveurs protégés et ne sont accessibles qu’à un nombre restreint de
        collaborateurs, eux-mêmes soumis à une stricte obligation de discrétion et à des contrôles réguliers.
      </P>
      <P>
        Plusieurs dispositifs complémentaires veillent au quotidien à la bonne protection de vos données, en
        particulier :
      </P>
      <UL cols>
        <li>Chiffrement des échanges (TLS)</li>
        <li>Authentification renforcée des administrateurs</li>
        <li>Contrôle des accès – équipe habilitée</li>
        <li>Contrôle des accès – titulaire du compte</li>
        <li>Supervision permanente du réseau</li>
        <li>Copies de sauvegarde</li>
        <li>Certificats numériques à jour</li>
        <li>Mots de passe chiffrés</li>
        <li>Pare-feu applicatif</li>
      </UL>
      <P>
        Nous adaptons régulièrement nos outils afin de suivre l’évolution des technologies et de préserver la
        confidentialité de vos opérations. Il convient néanmoins de rappeler qu’aucun dispositif ne peut offrir une
        protection absolue : tout transfert d’informations sur Internet comporte une part de risque qu’il est
        impossible d’éliminer totalement, quelles que soient les précautions prises.
      </P>
    </DocLayout>
  )
}
