import { Link } from 'react-router'
import { Placeholder } from '@/components/site/Placeholder'
import { WHATSAPP_HREF } from '@/lib/site'
import { Attr, Col, Hr, Section, Wrap } from '../theme/builder'

// Shop: "Devenir Revendeur" teaser, the illustration next to the title and its contact buttons.

/** Illustration box of the teaser (325 × 239 artwork, centred in its column). */
function TeaserArt() {
  return (
    <span className="mfp-art" style={{ width: 325, maxWidth: '100%', aspectRatio: '325 / 239' }}>
      <Placeholder tone="illustration" label="Illustration" className="absolute inset-0 rounded-[14px]" />
    </span>
  )
}

/** Email + Whatsapp pair of theme buttons (separated by a space and a no-break space). */
function ContactButtons() {
  return (
    <>
      <Link to="/contact/" className="mfp-btn mfp-btn--theme">
        Email
      </Link>
      {' \u00a0'}
      <span>
        <a className="mfp-btn mfp-btn--theme" href={WHATSAPP_HREF}>
          Whatsapp
        </a>
      </span>
    </>
  )
}

export function ShopReseller() {
  return (
    <Section dataSection="shop-reseller" eqh rev style={{ paddingTop: 180, paddingBottom: 140 }}>
      <Wrap d="1" middle style={{ padding: '0 2%' }}>
        <Col d="1-2" kind="image">
          <TeaserArt />
        </Col>
        <Col d="1-2">
          <Attr mobileAlign="center">
            <h2>
              <span className="mfp-light">Devenir Revendeur</span>
              <br />
              Offre NovaStream
            </h2>
            <Hr mb={15} />
            <ContactButtons />
          </Attr>
        </Col>
      </Wrap>
    </Section>
  )
}
