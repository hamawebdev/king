import { WHATSAPP_HREF } from '@/lib/site'
import { Attr, BigNum, Col, DashWave, Hr, Section, SepBadge, SepDashes, Wrap } from './theme/builder'
import { StepBlob } from './theme/art'
import { FormCard, HeroSection, HeroTitle, NavySection } from './theme/sections'

// Reseller page ("Revendeur"): hero, four numbered steps separated by dashed waves, then the
// navy contact band with the question form. All copy is placeholder text.

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

export default function Services() {
  return (
    <div className="bt mfp mfp-services">
      <HeroSection variant="target" layout="centered" tablet={['1-2', '1-3']} photoMobileAlign="left">
        <HeroTitle>
          Vendez avec <span className="mfp-themecolor">NOVASTREAM</span>
        </HeroTitle>
      </HeroSection>

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

      <NavySection>
        <Wrap d="1" gap={10} className="mfp-navy-head">
          <Col>
            <Attr mobileAlign="center" className="al-center">
              <SepBadge dark />
              <Hr />
              <h2>
                <span className="mfp-white">Contactez-Nous</span>
              </h2>
              <SepDashes dark />
              <Hr />
            </Attr>
          </Col>
          <Col kind="button">
            <a className="mfp-btn mfp-btn--s3 mfp-btn--sun" href={WHATSAPP_HREF}>
              Whatsapp
            </a>
          </Col>
          <Col kind="divider">
            <Hr mb={30} />
          </Col>
        </Wrap>
        <FormCard heading="Un mot pour l'équipe ?" idPrefix="reseller-form" />
      </NavySection>
    </div>
  )
}
