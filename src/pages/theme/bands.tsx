import type { ReactNode } from 'react'
import { WHATSAPP_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Attr, Col, Hr, Section, SepBadge, SepDashes, WaveTop, Wrap } from './builder'
import { NavyArcs } from './art'
import { ContactFormCard } from './ContactFormCard'

// Navy bands closing the four theme pages: the shared band with its wavy white top edge, the
// white form card, then one component per page with its exact content.

/** White rounded card holding the question form (inside a navy band). */
function FormCard({ heading, idPrefix, tabletHalf }: { heading: string; idPrefix: string; tabletHalf?: boolean }) {
  return (
    <Wrap
      d="1"
      t={tabletHalf ? '1-2' : '1'}
      className="mfp-formcard"
      style={{ padding: '50px 50px 10px', backgroundColor: '#ffffff', borderRadius: 32 }}
      innerStyle={{ justifyContent: 'center' }}
    >
      <Col>
        <Attr align="center" mobileAlign="center">
          <h4>
            {heading}
            <br />
          </h4>
          <ContactFormCard idPrefix={idPrefix} />
        </Attr>
      </Col>
    </Wrap>
  )
}

/** Navy band with the wavy white top edge. */
function NavySection({
  dataSection,
  children,
  decor,
  rev,
  className,
}: {
  /** data-section id of the band. */
  dataSection: string
  children?: ReactNode
  decor?: ReactNode
  rev?: boolean
  className?: string
}) {
  return (
    <Section
      rev={rev}
      className={cn('mfp-navy', className)}
      style={{ paddingTop: 100, paddingBottom: 60, backgroundColor: '#181349' }}
      before={
        <>
          {decor}
          <WaveTop />
        </>
      }
      dataSection={dataSection}
    >
      {children}
    </Section>
  )
}

/** Shop: question form, with the drifting yellow arcs behind it. */
export function ShopBand() {
  return (
    <NavySection dataSection="shop-band" decor={<NavyArcs />}>
      <FormCard heading="Un mot pour l'équipe ?" idPrefix="shop-form" />
    </NavySection>
  )
}

/** Reseller: "Contactez-Nous" head with the Whatsapp button, then the question form. */
export function ResellerBand() {
  return (
    <NavySection dataSection="reseller-band">
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
  )
}

/** Downloads: a short empty band. */
export function DownloadBand() {
  return (
    <NavySection dataSection="download-band">
      <Wrap d="1" />
    </NavySection>
  )
}

/** Contact: e-mail form (half width on tablets); the wraps stack in reverse on phones. */
export function ContactBand() {
  return (
    <NavySection dataSection="contact-band" rev>
      <FormCard heading="Laissez-nous un mot." idPrefix="contact-form" tabletHalf />
    </NavySection>
  )
}
