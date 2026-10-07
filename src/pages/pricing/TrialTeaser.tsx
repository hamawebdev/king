import { Link } from 'react-router'
import { Placeholder } from '@/components/site/Placeholder'
import { WHATSAPP_HREF } from '@/lib/site'
import { Attr, Col, Hr, Section, SepBadge, SepDashes, Wrap } from '../theme/builder'

// Shop: "Découverte 24h" free-trial teaser on the cream band, the title next to the illustration.

/** Illustration box of the teaser (325 × 239 artwork, centred in its column). */
function TeaserArt() {
  return (
    <span className="mfp-art" style={{ width: 325, maxWidth: '100%', aspectRatio: '325 / 239' }}>
      <Placeholder tone="illustration" label="Illustration" className="absolute inset-0 rounded-[14px]" />
    </span>
  )
}

export function ShopTrial() {
  return (
    <Section dataSection="shop-trial" style={{ paddingTop: 100, paddingBottom: 60, backgroundColor: '#fff7f2' }}>
      <Wrap d="1">
        <Col d="1-2">
          <Attr className="mfp-trial">
            <SepBadge />
            <Hr />
            <h2>
              <span className="mfp-themecolor">Découverte 24h</span>
              <br />
              Offre NovaStream
            </h2>
            <SepDashes />
            <Hr />
            <p />
            <p>
              <span className="mfp-hl">
                <Link to="/contact/" className="mfp-btn mfp-btn--theme">
                  Email
                </Link>
                {' \u00a0'}
              </span>
              <span className="mfp-hl2">
                <a className="mfp-btn mfp-btn--theme" href={WHATSAPP_HREF}>
                  Whatsapp
                </a>
              </span>
              <br />
            </p>
          </Attr>
        </Col>
        <Col d="1-2" kind="image">
          <TeaserArt />
        </Col>
      </Wrap>
    </Section>
  )
}
