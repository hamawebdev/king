import { WHATSAPP_HREF } from '@/lib/site'
import { Attr, Col, Section, SepBadge, SepDashes, Wrap, Hr } from './theme/builder'
import { EdgeArcs, HeroWord, TeamBlob } from './theme/art'
import { FormCard, HeroSection, NavySection } from './theme/sections'

// Contact page: hero, three support team members, the WhatsApp call to action and the
// e-mail form on the navy band. Names and copy are placeholders.

const TEAM = [
  { name: 'Clara V.', rot: 0, h: 779 },
  { name: 'Moreau T.', rot: 24, h: 777 },
  { name: 'Gabrielle M.', rot: -18, h: 777 },
]

export default function Contact() {
  return (
    <div className="bt mfp mfp-contact">
      <HeroSection
        variant="smile"
        layout="centered"
        tablet={['1-3', '1-2']}
        decor={<HeroWord word="contact" />}
      >
        <Hr />
        <h1>
          <span className="mfp-themecolor">Besoin d'aide ?</span>
          <br />
          Notre équipe vous répond
        </h1>
        <SepDashes />
        <Hr mb={70} />
      </HeroSection>

      <Section before={<EdgeArcs anchor="center" />}>
        {TEAM.map((m) => (
          <Wrap key={m.name} d="1-3" t="1-3" gap={0} style={{ padding: '0 5%' }}>
            <Col kind="image">
              <TeamBlob rot={m.rot} h={m.h} />
            </Col>
            <Col>
              <Attr style={{ marginTop: -20, zIndex: 1, position: 'relative' }}>
                <p>
                  <span className="mfp-pill mfp-pill--purple">{m.name}</span>
                </p>
                <p>
                  <span className="mfp-pill">Support</span>
                </p>
              </Attr>
            </Col>
          </Wrap>
        ))}
        <Wrap d="1" gap={10}>
          <Col kind="image">
            <SepBadge />
          </Col>
          <Col>
            <Attr align="center">
              <h2>
                Réponse rapide
                <br />
                <span className="mfp-themecolor">par message instantané</span>{' '}
              </h2>
            </Attr>
          </Col>
          <Col kind="button">
            <a className="mfp-btn mfp-btn--s4 mfp-btn--green" href={WHATSAPP_HREF}>
              Whatsapp
            </a>
          </Col>
          <Col kind="image">
            <SepDashes />
          </Col>
        </Wrap>
      </Section>

      <NavySection rev>
        <FormCard heading="Laissez-nous un mot." idPrefix="contact-form" tabletHalf />
      </NavySection>
    </div>
  )
}
