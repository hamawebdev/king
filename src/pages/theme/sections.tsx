import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { WHATSAPP_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Attr, CheckMark, Col, Hr, Section, SepBadge, SepDashes, WaveTop, Wrap, type Frac } from './builder'
import { HeroBlob } from './art'
import { ContactFormCard } from './ContactFormCard'
import { CountUp } from './CountUp'

// Larger building blocks shared by the four theme pages.

type HeroProps = {
  variant: 'phone' | 'target' | 'duo' | 'smile'
  /** Title block content (badge, heading, dashes…). */
  children: ReactNode
  /** 'shop': 2/3 title + 1/3 photo; 'centered': 1/6 spacer + 1/2 title + 1/3 photo. */
  layout: 'shop' | 'centered'
  /** Tablet widths of the title / photo wraps. */
  tablet: [Frac, Frac]
  /** Alignment of the photo block on phones. */
  photoMobileAlign?: 'left' | 'center'
  className?: string
  bottomPad?: number
  decor?: ReactNode
}

/** Hero: optional 1/6 spacer, title wrap (120px top padding) and the blob photo on the right. */
export function HeroSection({
  variant,
  children,
  layout,
  tablet,
  photoMobileAlign = 'center',
  className,
  bottomPad,
  decor,
}: HeroProps) {
  return (
    <Section
      full
      nmh
      nmv
      rev
      className={cn('mfp-hero', className)}
      style={bottomPad ? { paddingBottom: bottomPad } : undefined}
      before={decor}
    >
      {layout === 'centered' && (
        <Wrap d="1-6" t="1-6">
          <Col kind="placeholder" />
        </Wrap>
      )}
      <Wrap d={layout === 'shop' ? '2-3' : '1-2'} t={tablet[0]} middle style={{ padding: '120px 5% 0' }}>
        <Col>
          <Attr mobileAlign="center">{children}</Attr>
        </Col>
      </Wrap>
      <Wrap d="1-3" t={tablet[1]}>
        <Col>
          <Attr align="right" mobileAlign={photoMobileAlign}>
            <HeroBlob variant={variant} />
          </Attr>
        </Col>
      </Wrap>
    </Section>
  )
}

/** Hero title: badge, heading and the two dashes underneath. */
export function HeroTitle({ children, badge = true }: { children: ReactNode; badge?: boolean }) {
  return (
    <>
      {badge && <SepBadge />}
      <Hr />
      <h1>{children}</h1>
      <SepDashes />
    </>
  )
}

/** Email + Whatsapp pair of theme buttons (separated by a space and a no-break space). */
export function ContactButtons() {
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

export type Plan = { label: string; tone: 'turquoise' | 'yellow' | 'pink'; price: number; to: string }

/** Shop plan: cream card with a coloured pill, counted price, check list and the CTA. */
export function PriceCard({ plan, features }: { plan: Plan; features: string[] }) {
  return (
    <Wrap d="1-3" t="1-2" style={{ padding: '20px 1%' }}>
      <Col>
        <Attr align="center" className="mfp-card">
          <span className={`mfp-pill mfp-pill--${plan.tone}`}>{plan.label}</span>
          <div className="mfp-price">
            <CountUp to={plan.price} />€
          </div>
          <p>
            <span className="mfp-ink">TTC</span>
          </p>
          <Hr mb={15} />
          <ul className="mfp-checks">
            {features.map((f) => (
              <li key={f}>
                <CheckMark /> {f}
              </li>
            ))}
          </ul>
        </Attr>
      </Col>
      <Col kind="button">
        <Link to={plan.to} className="mfp-btn mfp-btn--s3 mfp-btn--navy">
          Abonner Maintenant
        </Link>
      </Col>
    </Wrap>
  )
}

/** White rounded card holding the question form (inside a navy band). */
export function FormCard({ heading, idPrefix, tabletHalf }: { heading: string; idPrefix: string; tabletHalf?: boolean }) {
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
export function NavySection({
  children,
  decor,
  rev,
  className,
}: {
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
    >
      {children}
    </Section>
  )
}
