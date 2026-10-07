import { Attr, Col, Hr, Section, SepBadge, SepDashes, Wrap } from '../theme/builder'
import { EdgeArcs } from '../theme/art'

// Downloads: the three installation guides and the empty spacer section after them. They are
// sibling sections, so a plain wrapper (no class, no style) carries the section hook.

const GUIDES = [
  {
    title: 'Guide Smart TV',
    rule: false,
    arcs: true,
    text: "RÉGLAGES D'IMAGE CONSEILLÉS : activez le mode cinéma de votre téléviseur et désactivez le lissage de mouvement dans Paramètres->Image->Réglages-experts pour un rendu naturel. Ouvrez ensuite http://novastream.example/aide/image-et-son pour comparer les profils proposés selon la taille de votre écran, puis choisissez celui qui convient à votre pièce, à sa lumière et à vos habitudes.",
  },
  {
    title: 'Lecteur KODI',
    rule: true,
    arcs: false,
    text: "Astuces : (Pour une navigation plus agréable) RACCOURCIS : 1-Touche Menu : affiche la liste des catégories sans quitter la lecture en cours. 2-Touche Info : ouvre la fiche du programme avec sa durée, son résumé et les épisodes suivants. 3-Appui long sur OK : ajoute la chaîne à vos favoris, accessibles ensuite depuis Accueil->Favoris->Chaînes. 4-Touches de couleur : passent d'un thème d'affichage à l'autre, du plus clair au plus contrasté. 5-Retour deux fois : revient directement à l'accueil, quel que soit l'écran où vous vous trouvez. 6-Touche Stop : met la lecture en pause.",
  },
  {
    title: 'Appli pour iOS',
    rule: true,
    arcs: true,
    text: "Astuce : sur iPhone et iPad, l'écran d'accueil peut afficher un widget qui présente vos programmes favoris du jour. Pour l'ajouter, procédez ainsi : •Maintenez le doigt sur une zone vide de l'écran •Touchez le bouton d'ajout en haut à gauche •Choisissez NovaStream puis la taille du widget",
  },
]

export function DownloadGuides() {
  return (
    <div data-section="download-guides">
      {GUIDES.map((g) => (
        <Section key={g.title} style={{ paddingTop: 100 }} before={g.arcs ? <EdgeArcs anchor="bottom" /> : undefined}>
          <Wrap d="1-4" t="2-5">
            <Col d="1" t="5-6">
              <Attr mobileAlign="center">
                <SepBadge />
                {g.rule && <Hr />}
                <h2>{g.title}</h2>
                <SepDashes />
              </Attr>
            </Col>
          </Wrap>
          <Wrap d="3-4" t="3-5">
            <Col>
              <Attr mobileAlign="center">
                <h5>{g.text}</h5>
              </Attr>
            </Col>
          </Wrap>
        </Section>
      ))}

      <Section nmh style={{ paddingBottom: 100 }}>
        {/* Empty "move up" wrap of the original: only the section's bottom padding shows. */}
        <Wrap d="1" gap={0} />
      </Section>
    </div>
  )
}
