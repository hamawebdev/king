import { Link } from 'react-router'
import { CartIcon } from '@/components/site/icons'

// WooCommerce empty-cart state as the theme lays it out: faded cart icon, notice, "return to shop" button.
export function EmptyCart() {
  return (
    <div className="co-empty">
      <div className="co-empty__icon">
        <CartIcon />
      </div>
      <p className="co-empty__notice">Votre panier est actuellement vide.</p>
      <p className="co-empty__return">
        <Link to="/pricing/" className="bt-button">
          Retour à la boutique
        </Link>
      </p>
    </div>
  )
}
