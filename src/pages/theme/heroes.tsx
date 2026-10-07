import type { ReactNode } from 'react'
import { BRAND_UPPER } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Attr, Col, Hr, Section, SepBadge, SepDashes, Wrap, type Frac } from './builder'
import { HeroBlob, HeroWord } from './art'

// Heroes of the four theme pages: the shared hero layout, then one component per page with its
// exact title markup (shop, reseller, downloads, contact).

type HeroProps = {
  /** data-section id of the hero. */
  dataSection: string
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
function HeroSection({
  dataSection,
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
      dataSection={dataSection}
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
function HeroTitle({ children, badge = true }: { children: ReactNode; badge?: boolean }) {
  return (
    <>
      {badge && <SepBadge />}
      <Hr />
      <h1>{children}</h1>
      <SepDashes />
    </>
  )
}

/** Shop ("Boutique"): 2/3 title next to the phone photo. */
export function ShopHero() {
  return (
    <HeroSection dataSection="shop-hero" variant="phone" layout="shop" tablet={['2-3', '1-3']} bottomPad={100}>
      <HeroTitle>
        Des formules pensées <span className="mfp-themecolor">pour chaque salon.</span>
      </HeroTitle>
    </HeroSection>
  )
}

/** Reseller ("Revendeur"): centred title, the photo aligns left on phones. */
export function ResellerHero() {
  return (
    <HeroSection
      dataSection="reseller-hero"
      variant="target"
      layout="centered"
      tablet={['1-2', '1-3']}
      photoMobileAlign="left"
    >
      <HeroTitle>
        Vendez avec <span className="mfp-themecolor">NOVASTREAM</span>
      </HeroTitle>
    </HeroSection>
  )
}

/** Downloads ("Télécharger"). */
export function DownloadHero() {
  return (
    <HeroSection dataSection="download-hero" variant="duo" layout="centered" tablet={['1-3', '1-2']}>
      <HeroTitle>
        Vos Applications <span className="mfp-themecolor">{BRAND_UPPER}</span>
      </HeroTitle>
    </HeroSection>
  )
}

/** Contact: no badge above the title, and the giant pale word behind the section. */
export function ContactHero() {
  return (
    <HeroSection
      dataSection="contact-hero"
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
  )
}
