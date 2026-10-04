import { useChrome } from '@/components/site/chrome-context'
import { CheckoutForm } from './checkout/CheckoutForm'
import { EmptyCart } from './checkout/EmptyCart'
import './checkout/checkout.css'

// WooCommerce checkout inside the theme's page template. No archived capture exists: layout follows the
// theme's WooCommerce stylesheet ("cart step 2") and the site's custom checkout rule.
export default function Checkout() {
  const { cartItems } = useChrome()
  const empty = cartItems.length === 0
  return (
    <div className="bt co-page">
      <div className={`co-section${empty ? ' is-empty' : ''}`}>
        <div className="co-wrapper">
          <div className="co-content">{empty ? <EmptyCart /> : <CheckoutForm items={cartItems} />}</div>
        </div>
      </div>
    </div>
  )
}
