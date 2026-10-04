import { Fragment } from 'react'
import { Link, useLocation } from 'react-router'
import { FOOTER_NAV, LEGAL_NAV, SITE_DOMAIN } from '@/lib/site'
import { ChevronUpIcon } from './icons'

function LinkLines({ items }: { items: typeof FOOTER_NAV }) {
  return (
    <p>
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && <br />}
          <Link to={item.to}>{item.label}</Link>
        </Fragment>
      ))}
    </p>
  )
}

export function SiteFooter() {
  const { pathname } = useLocation()
  const elementorPage = pathname === '/' || pathname.startsWith('/produit/')

  return (
    <footer className={`sc-footer${elementorPage ? ' sc-footer--elementor' : ''}`} id="Footer">
      <div className="sc-footer__widgets">
        <div className="sc-footer__container">
          <div className="sc-footer__col">
            <img className="sc-footer__logo" src="/placeholder/logo.svg" alt="" width={136} height={76} />
          </div>
          <div className="sc-footer__col">
            <LinkLines items={FOOTER_NAV} />
          </div>
          <div className="sc-footer__col">
            <LinkLines items={LEGAL_NAV} />
          </div>
        </div>
      </div>
      <div className="sc-footer__copy">
        <div className="sc-footer__copy-inner">
          <button
            type="button"
            className="sc-backtop"
            aria-label="Retour en haut"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ChevronUpIcon />
          </button>
          <div className="sc-copyright">
            &copy; 2026<Link to="/">{SITE_DOMAIN}</Link> | Tous droits réservés
          </div>
        </div>
      </div>
    </footer>
  )
}
