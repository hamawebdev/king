import { BRAND_UPPER } from '@/lib/site'
import { Attr, Col, Hr, Section, SepBadge, SepDashes, Wrap } from './theme/builder'
import { AppBox, EdgeArcs } from './theme/art'
import { HeroSection, HeroTitle, NavySection } from './theme/sections'

// Downloads page ("Télécharger"): hero, the two application boxes with their buttons, an
// introduction and three installation guides, then a short navy band. Placeholder copy.

const INTRO =
  "Toutes nos applications partagent le même compte : commencez un film sur le téléviseur du salon et terminez-le sur votre téléphone dans le train, à la seconde près. Chaque version reçoit des améliorations régulières, installées automatiquement en arrière-plan. Les fichiers proposés ci-dessous sont vérifiés et ne contiennent aucune publicité. Vos favoris, votre historique et vos préférences d'affichage vous suivent d'un appareil à l'autre. Pour un confort optimal, nous recommandons une connexion stable et un écran récent, mais la lecture s'adapte aussi aux réseaux plus modestes."

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

export default function Download() {
  return (
    <div className="bt mfp mfp-download">
      <HeroSection variant="duo" layout="centered" tablet={['1-3', '1-2']}>
        <HeroTitle>
          Vos Applications <span className="mfp-themecolor">{BRAND_UPPER}</span>
        </HeroTitle>
      </HeroSection>

      <Section style={{ paddingTop: 100 }} before={<EdgeArcs anchor="bottom" />}>
        <Wrap d="1" t="3-5">
          <Col d="1-2" kind="image">
            <AppBox />
          </Col>
          <Col d="1-2" kind="image">
            <AppBox />
          </Col>
          <Col d="1-2" kind="button">
            <a className="mfp-btn mfp-btn--s4 mfp-btn--wine" href="#telecharger-v2">
              {BRAND_UPPER} V2
            </a>
          </Col>
          <Col d="1-2" kind="button">
            <a className="mfp-btn mfp-btn--s4 mfp-btn--wine2" href="#telecharger-v3">
              {BRAND_UPPER} V3
            </a>
          </Col>
          <Col>
            <Attr align="center" mobileAlign="center">
              <h5>{INTRO}</h5>
            </Attr>
          </Col>
        </Wrap>
      </Section>

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

      <NavySection>
        <Wrap d="1" />
      </NavySection>
    </div>
  )
}
