import { Link } from 'react-router'
import { BRAND_UPPER } from '@/lib/site'
import { CartIcon } from './icons'
import { formatEuro, useChrome } from './chrome-context'

// Side cart that slides in from the right. Front-end only: it lists items added locally.
export function CartDrawer() {
  const { cartOpen, setCartOpen, cartItems, removeFromCart } = useChrome()
  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <>
      <div
        className={`sc-cart-overlay${cartOpen ? ' is-open' : ''}`}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`sc-cart${cartOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-label="Panier"
        aria-hidden={!cartOpen}
        inert={!cartOpen}
      >
        <div className="sc-cart__header">
          <button type="button" className="sc-cart__close" aria-label="Fermer le panier" onClick={() => setCartOpen(false)}>
            <span>&#10005;</span>
          </button>
          <h3>
            <CartIcon />
            {BRAND_UPPER} BOUTIQUE EN LIGNE OFFICIELLE
          </h3>
        </div>
        <div className="sc-cart__content-wrapper">
          <div className="sc-cart__content">
            {cartItems.length === 0 ? (
              <div className="sc-cart__empty">
                <p className="sc-cart__empty-icon">
                  <CartIcon />
                </p>
                <p>Votre panier est vide pour le moment.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="sc-cart__product">
                  <div className="sc-cart__product-info">
                    <h6>{item.name}</h6>
                  </div>
                  <div className="sc-cart__product-price">{formatEuro(item.price * item.qty)}</div>
                  <div className="sc-cart__product-footer">
                    <span>Quantité : {item.qty}</span>
                    <span>
                      <button type="button" onClick={() => removeFromCart(item.id)}>
                        Retirer
                      </button>
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="sc-cart__footer">
          <div className="sc-cart__totals">
            <div className="sc-cart__row">
              Sous-total: <span>{formatEuro(total)}</span>
            </div>
            <div className="sc-cart__row sc-cart__row--total">
              Total: <strong>{formatEuro(total)}</strong>
            </div>
          </div>
          <div className="sc-cart__buttons">
            <Link to="/checkout/" className="bt-button" onClick={() => setCartOpen(false)}>
              Valider la commande
            </Link>
            {/* The original's "view cart" link points at the home page; kept as-is. */}
            <Link to="/" className="sc-cart__view" onClick={() => setCartOpen(false)}>
              Voir le panier
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
