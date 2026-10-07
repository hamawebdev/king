import { Link } from 'react-router'
import { BRAND } from '@/lib/site'
import { ROUTES } from '../data'
import { BAND_TIGHT, COLUMN, TITLE_FACE, buttonClass, cx } from '../styles'

const CTA = {
  title: `Passez à ${BRAND} Dès Ce Soir`,
  text: `Une seule formule pour tout regarder, sur chacun de vos écrans. ${BRAND} rassemble chaînes en direct, grands matchs, films et séries dans une interface fluide. Dès 39€ par an.`,
  primary: 'Abonner Maintenant',
  secondary: 'Renouveler mon accès',
}

/** Call to action on the blue band. */
export function HomeCta() {
  return (
    <section data-section="home-cta" className={BAND_TIGHT}>
      <div className={COLUMN}>
        <div className="hm-orb relative overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#2563eb,#143a96)] p-[58px] text-center text-white lp-lg:px-[22px] lp-lg:py-[40px] lp-md:px-[18px] lp-md:py-[32px]">
          <h2
            className={cx(
              TITLE_FACE,
              'relative z-[2] mb-[14px] text-[length:clamp(28px,4vw,42px)] font-extrabold text-white lp-sm:text-[24px]',
            )}
          >
            {CTA.title}
          </h2>
          <p className="relative z-[2] mx-auto mb-[28px] max-w-[640px] text-[18px] text-[#d7e4ff] lp-md:text-[16px]">
            {CTA.text}
          </p>
          <div className="relative z-[2] flex flex-wrap justify-center gap-[13px]">
            <Link to={ROUTES.p12} className={buttonClass('light', 'lg')}>
              {CTA.primary}
            </Link>
            <Link to={ROUTES.renew} className={buttonClass('ghost', 'md')}>
              {CTA.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
