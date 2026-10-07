import { Link } from 'react-router'
import { BRAND, FOOTER_NAV, LEGAL_NAV, SITE_DOMAIN, type NavItem } from '@/lib/site'
import { Button, Section, Wordmark } from '@/components/brand'

const footerLink =
  'inline-block py-1 font-sans text-[0.9375rem] leading-6 font-medium text-on-vault-muted underline-offset-4 decoration-1 ' +
  'transition-colors duration-180 ease-calm hover:text-on-vault hover:underline'

/** One link column, headed by a short brass rule (no title words: the content has none). */
function LinkColumn({ items }: { items: NavItem[] }) {
  return (
    <ul className="grid content-start gap-1 before:mb-4 before:block before:h-px before:w-7 before:bg-brass-500 before:content-['']">
      {items.map((item) => (
        <li key={item.label}>
          <Link to={item.to} className={footerLink}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function toTop() {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
}

// Vault footer band (DIRECTION §9.0 chrome-footer): wordmark, two link columns, ledger-style bottom row
// and a giant engraved wordmark (pseudo-content, decorative) behind it.
export function SiteFooter() {
  return (
    <Section
      as="footer"
      zone="vault"
      id="Footer"
      dataSection="chrome-footer"
      rhythm="none"
      container="wide"
      className="scroll-mt-0 pt-14 pb-8 md:pt-16"
          >
      {/* One grid so the single back-to-top button can sit by the wordmark on phone (clear of the fixed
          buy bar and WhatsApp bubble) and in the bottom row from md. */}
      <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6">
        <div className="col-[1/2] row-start-1 self-center lg:self-start">
          <span className="inline-flex" aria-hidden="true">
            <Wordmark tone="vault" size="footer" className="h-7 md:h-8" />
          </span>
        </div>

        <div className="col-[1/-1] row-start-2 mt-12 grid grid-cols-2 gap-x-6 sm:gap-x-grid lg:col-[2/3] lg:row-start-1 lg:mt-0 lg:grid-cols-[repeat(2,minmax(13rem,auto))] lg:gap-x-20">
          <LinkColumn items={FOOTER_NAV} />
          <LinkColumn items={LEGAL_NAV} />
        </div>

        <span
          aria-hidden="true"
          data-label={BRAND}
          className="pointer-events-none col-[1/-1] row-start-3 mt-14 block [contain:inline-size] font-display text-[clamp(4rem,12vw,11rem)] leading-[0.8] font-medium tracking-[-0.02em] whitespace-nowrap text-on-vault/[.07] select-none before:content-[attr(data-label)] md:mt-16"
        />

        <span aria-hidden="true" className="col-[1/-1] row-start-4 h-px self-start bg-vault-line" />
        <p className="col-[1/-1] row-start-4 self-center pt-6 font-sans text-micro font-medium text-on-vault-muted md:col-[1/2]">
          &copy; 2026{' '}
          <Link to="/" className="text-on-vault-muted underline-offset-4 transition-colors duration-180 ease-calm hover:text-on-vault hover:underline">
            {SITE_DOMAIN}
          </Link>{' '}
          | Tous droits réservés
        </p>
        <div className="col-[2/3] row-start-1 self-center justify-self-end md:row-start-4 md:pt-6">
          <Button variant="icon-vault" aria-label="Retour en haut" onClick={toTop}>
            <i className="ti ti-arrow-up" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </Section>
  )
}
