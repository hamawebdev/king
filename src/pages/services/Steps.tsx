import { Attr, BigNum, Col, DashWave, Hr, Section, SepDashes, Wrap } from '../theme/builder'
import { StepBlob } from '../theme/art'

// Reseller: the four numbered steps, separated by the three dashed-wave rows. They are sibling
// sections, so a plain wrapper (no class, no style) carries the section hook.

const STEP_TEXT = [
  "Une console claire pour suivre vos abonnés, leurs échéances et vos crédits restants, depuis n'importe quel écran.",
  'Créez un compte en quelques secondes, choisissez la durée et envoyez les accès à votre client par message privé. Tout est rangé par date et par statut, sans aucun tableur à tenir.',
  "Des statistiques détaillées présentent vos ventes mensuelles, vos meilleures journées et les comptes à relancer, accompagnées d'un récapitulatif hebdomadaire automatique.",
  'Personnalisez vos factures avec votre nom et votre logo, exportez-les en un clic et retrouvez chaque paiement dans un historique clair. Tarifs libres : fixez vos propres prix, ajustez vos marges et proposez des remises à vos meilleurs clients.',
]

function StepImage({ index }: { index: number }) {
  return (
    <Col kind="image">
      <StepBlob index={index} />
    </Col>
  )
}

function Separator({ flip }: { flip?: boolean }) {
  return (
    <Section full nmh nmv>
      <Wrap d="1">
        <Col kind="image">
          <DashWave flip={flip} />
        </Col>
      </Wrap>
    </Section>
  )
}

export function ResellerSteps() {
  return (
    <div data-section="reseller-steps">
      {/* Step 1 */}
      <Section style={{ paddingTop: 100 }}>
        <Wrap d="1-2" t="2-5">
          <StepImage index={0} />
        </Wrap>
        <Wrap d="1-2" t="3-5">
          <Col d="5-6" t="1">
            <Attr mobileAlign="center" className="mfp-step mfp-step--pad mfp-numbered">
              <BigNum n="01" side="right" />
              <h3>
                <br />
              </h3>
              <h3>OUTILS</h3>
              <div>
                <br />
              </div>
              <p>
                <SepDashes />
              </p>
              <Hr mb={15} />
              <p />
              <p style={{ fontSize: 19 }}>{STEP_TEXT[0]}</p>
            </Attr>
          </Col>
        </Wrap>
      </Section>

      <Separator />

      {/* Step 2 */}
      <Section rev>
        <Wrap d="1-2" t="3-5">
          <Col d="4-5" t="1">
            <Attr mobileAlign="center" className="mfp-step mfp-step--pad mfp-numbered">
              <BigNum n="02" side="left" />
              <div>
                <br />
              </div>
              <h3 />
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <p>
                <SepDashes />
              </p>
              <Hr mb={15} />
              <p />
              <p style={{ fontSize: 19 }}>{STEP_TEXT[1]}</p>
            </Attr>
          </Col>
        </Wrap>
        <Wrap d="1-2" t="2-5">
          <StepImage index={1} />
        </Wrap>
      </Section>

      <Separator flip />

      {/* Step 3 */}
      <Section>
        <Wrap d="3-5" t="2-5">
          <StepImage index={2} />
        </Wrap>
        <Wrap d="2-5" t="3-5">
          <Col>
            <Attr mobileAlign="center" className="mfp-step mfp-step--pad mfp-numbered">
              <BigNum n="03" side="right" />
              <div>
                <br />
              </div>
              <h3 />
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <p>
                <SepDashes />
              </p>
              <Hr mb={15} />
              <p />
              <p>{STEP_TEXT[2]}</p>
            </Attr>
          </Col>
        </Wrap>
      </Section>

      <Separator />

      {/* Step 4 */}
      <Section>
        <Wrap d="1-2" t="3-5">
          <Col d="5-6" t="1">
            <Attr mobileAlign="center" className="mfp-step mfp-step--pad mfp-numbered">
              <BigNum n="04" side="left" />
              <h3>
                <br />
              </h3>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <SepDashes />
              <Hr mb={15} />
              <p>{STEP_TEXT[3]}</p>
            </Attr>
          </Col>
        </Wrap>
        <Wrap d="1-2" t="2-5">
          <StepImage index={3} />
        </Wrap>
      </Section>
    </div>
  )
}
