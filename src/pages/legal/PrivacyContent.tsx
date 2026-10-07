import { SITE_DOMAIN } from '@/lib/site'
import { Contact, DocLayout, H2, Mail, P, UL } from './shared'

// Politique de confidentialité: placeholder text, block structure mirrors the original document.
export function PrivacyContent() {
  return (
    <DocLayout title="Les données personnelles recueillies">
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
        Ces données nous parviennent principalement par l’intermédiaire des formulaires du site ainsi que lors de vos
        échanges avec nos services en ligne. Des cookies et des journaux techniques, présentés plus bas, contribuent
        également à recueillir certaines informations sur votre navigation et vos habitudes de visite.
      </P>
      <H2 id="saisie-et-suivi">Saisie et suivi de navigation :</H2>
      <P>Les formulaires suivants nous permettent d’obtenir vos informations personnelles :</P>
      <UL>
        <li>Formulaire de création d’espace client</li>
        <li>Formulaire de paiement</li>
      </UL>
      <P>Les informations obtenues de cette manière servent aux objectifs ci-dessous :</P>
      <UL>
        <li>Traitement des achats</li>
        <li>Échanges</li>
      </UL>
      <P>
        Certaines informations sont obtenues lors de votre navigation et de vos échanges avec les pages du site,
        selon les modalités suivantes :
      </P>
      <P>Ces informations sont exploitées pour les objectifs mentionnés ci-après :</P>
      <UL>
        <li>Avis clients</li>
      </UL>
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
          <span className="lbl">Courriel :</span> <Mail />
        </p>
        <p>
          <span className="lbl">Rubrique en ligne :</span> <span className="font-medium text-ink">{SITE_DOMAIN}</span>
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
          <span className="lbl">Courriel :</span> <Mail />
        </p>
        <p>
          <span className="lbl">Rubrique en ligne :</span> <span className="font-medium text-ink">{SITE_DOMAIN}</span>
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
