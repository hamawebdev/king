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
            ✕
          </button>
          <h3>
            <CartIcon />
            {BRAND_UPPER} BOUTIQUE EN LIGNE OFFICIELLE
          </h3>
        </div>
        <div className="sc-cart__content">
          {cartItems.length === 0 ? (
            <div className="sc-cart__empty">
              <p className="sc-cart__empty-icon">
                <CartIcon />
              </p>
              <p>Votre panier est vide pour le moment.</p>
            </div>
          ) : (
            <ul className="w-full self-start text-left">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-3 border-b border-black/5 py-3">
                  <span className="text-[#12263a]">
                    {item.name} × {item.qty}
                  </span>
                  <span className="flex items-center gap-3">
                    {formatEuro(item.price * item.qty)}
                    <button
                      type="button"
                      className="text-[#626262] hover:text-[#12263a]"
                      aria-label={`Retirer ${item.name}`}
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="sc-cart__footer">
          <div className="sc-cart__row">
            Sous-total: <span>{formatEuro(total)}</span>
          </div>
          <div className="sc-cart__row sc-cart__row--total">
            Total: <strong>{formatEuro(total)}</strong>
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
