import { Code, Reveal, Section } from '@/components/brand'
import { GuideAside, GuideCard, GuideLabel, GuideLine, GuideStep, GuideSteps, KeyName, ShortcutRow } from './Guides.parts'

// Downloads: the three setup guides (DIRECTION §9.5, zone I, text column, the first guide open).
// Every guide keeps its full text; the long paragraphs are only split into their own steps,
// shortcuts and bullets. French spacing uses U+00A0 before ":".

const NB = ' '

const SHORTCUTS = [
  { n: '1', key: 'Touche Menu', text: 'affiche la liste des catégories sans quitter la lecture en cours.' },
  { n: '2', key: 'Touche Info', text: 'ouvre la fiche du programme avec sa durée, son résumé et les épisodes suivants.' },
  {
    n: '3',
    key: 'Appui long sur OK',
    text: (
      <>
        ajoute la chaîne à vos favoris, accessibles ensuite depuis <Code>Accueil-&gt;Favoris-&gt;Chaînes</Code>.
      </>
    ),
  },
  { n: '4', key: 'Touches de couleur', text: "passent d'un thème d'affichage à l'autre, du plus clair au plus contrasté." },
  { n: '5', key: 'Retour deux fois', text: "revient directement à l'accueil, quel que soit l'écran où vous vous trouvez." },
  { n: '6', key: 'Touche Stop', text: 'met la lecture en pause.' },
]

const WIDGET_STEPS = [
  "Maintenez le doigt sur une zone vide de l'écran",
  "Touchez le bouton d'ajout en haut à gauche",
  'Choisissez NovaStream puis la taille du widget',
]

export function DownloadGuides() {
  return (
    <Section zone="ivory" dataSection="download-guides" container="text" containerClassName="grid gap-4 md:gap-5">
      <Reveal index={0}>
        <GuideCard icon="ti-device-tv" title="Guide Smart TV" defaultOpen>
          <GuideLabel>RÉGLAGES D'IMAGE CONSEILLÉS{NB}:</GuideLabel>
          <GuideSteps ordered>
            <GuideStep marker="pos">
              activez le mode cinéma de votre téléviseur et désactivez le lissage de mouvement dans{' '}
              <Code>Paramètres-&gt;Image-&gt;Réglages-experts</Code> pour un rendu naturel.
            </GuideStep>
            <GuideStep marker="pos">
              Ouvrez ensuite <Code>http://novastream.example/aide/image-et-son</Code> pour comparer les profils proposés selon
              la taille de votre écran, puis choisissez celui qui convient à votre pièce, à sa lumière et à vos habitudes.
            </GuideStep>
          </GuideSteps>
        </GuideCard>
      </Reveal>

      <Reveal index={1}>
        <GuideCard icon="ti-device-remote" title="Lecteur KODI">
          <GuideLine className="mb-6">
            <KeyName>Astuces{NB}:</KeyName> (Pour une navigation plus agréable)
          </GuideLine>
          <GuideLabel>RACCOURCIS{NB}:</GuideLabel>
          <GuideSteps ordered>
            {SHORTCUTS.map((s) => (
              <ShortcutRow key={s.n} keyName={`${s.n}-${s.key}${NB}:`}>
                {s.text}
              </ShortcutRow>
            ))}
          </GuideSteps>
        </GuideCard>
      </Reveal>

      <Reveal index={2}>
        <GuideCard icon="ti-device-mobile" title="Appli pour iOS">
          <GuideAside>
            <strong className="font-semibold">Astuce{NB}:</strong> sur iPhone et iPad, l'écran d'accueil peut afficher un
            widget qui présente vos programmes favoris du jour.
          </GuideAside>
          <GuideLine className="mt-6 mb-3 font-semibold text-z-fg">Pour l'ajouter, procédez ainsi{NB}:</GuideLine>
          <GuideSteps>
            {WIDGET_STEPS.map((t) => (
              <GuideStep key={t} marker="bullet">
                {t}
              </GuideStep>
            ))}
          </GuideSteps>
        </GuideCard>
      </Reveal>
    </Section>
  )
}
