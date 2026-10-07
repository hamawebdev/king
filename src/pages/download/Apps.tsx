import { BRAND_UPPER } from '@/lib/site'
import { Attr, Col, Section, Wrap } from '../theme/builder'
import { AppBox, EdgeArcs } from '../theme/art'

// Downloads: the two application boxes with their V2 / V3 buttons, then the introduction.

const INTRO =
  "Toutes nos applications partagent le même compte : commencez un film sur le téléviseur du salon et terminez-le sur votre téléphone dans le train, à la seconde près. Chaque version reçoit des améliorations régulières, installées automatiquement en arrière-plan. Les fichiers proposés ci-dessous sont vérifiés et ne contiennent aucune publicité. Vos favoris, votre historique et vos préférences d'affichage vous suivent d'un appareil à l'autre. Pour un confort optimal, nous recommandons une connexion stable et un écran récent, mais la lecture s'adapte aussi aux réseaux plus modestes."

export function DownloadApps() {
  return (
    <Section dataSection="download-apps" style={{ paddingTop: 100 }} before={<EdgeArcs anchor="bottom" />}>
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
  )
}
