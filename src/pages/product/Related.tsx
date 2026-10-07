import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { formatEuro, useChrome } from '@/components/site/chrome-context'
import { BoxShot } from './BoxShot'
import { PRODUCTS, type Product } from './data'
import './product.css'

// WooCommerce "related products" loop under the landing block, styled like the theme's shop loop:
// 3 columns from 960px, 2 columns below (the second item floats right under 768px).

const RELATED_TITLE = 'Produits similaires'

const productPath = (slug: string) => `/produit/${slug}/`

// Theme heading scale (h3 / h4) per breakpoint.
const H3 =
  'mb-[15px] font-zen text-[48px] leading-[55px] font-bold text-heading bt-md:text-[41px] bt-md:leading-[47px] bt-sm:text-[36px] bt-sm:leading-[41px] bt-xs:text-[29px] bt-xs:leading-[33px]'
const H4 =
  'mb-[3px] font-zen text-[32px] leading-[42px] font-bold text-heading bt-md:text-[27px] bt-md:leading-[36px] bt-sm:text-[24px] bt-sm:leading-[32px] bt-xs:text-[19px] bt-xs:leading-[25px]'

// Hover (or tap) on the picture: it lifts by 15px, a light veil fades in and the action bar slides up.
const LIFT = 'group-hover/frame:-top-[15px] group-data-[hover=true]/frame:-top-[15px]'
const VEIL = 'group-hover/frame:opacity-100 group-data-[hover=true]/frame:opacity-100'
const BAR = 'group-hover/frame:bottom-0 group-data-[hover=true]/frame:bottom-0'
const ACTION =
  'group/btn relative flex w-full flex-1 items-center justify-center bg-white text-[#161922] transition-all duration-100 ease-in-out'
const ICON =
  'w-8 fill-none stroke-[#161922] stroke-[1.5] [stroke-miterlimit:10] group-hover/btn:stroke-[#091284] group-focus/btn:stroke-[#091284]'

function BagIcon({ hidden }: { hidden?: boolean }) {
  return (
    <svg viewBox="0 0 26 26" aria-hidden="true" className={`${ICON} ${hidden ? 'invisible' : ''}`}>
      <polygon points="20.4 20.4 5.6 20.4 6.83 10.53 19.17 10.53 20.4 20.4" />
      <path d="M9.3,10.53V9.3a3.7,3.7,0,1,1,7.4,0v1.23" />
    </svg>
  )
}

function ChainIcon() {
  return (
    <svg viewBox="0 0 26 26" aria-hidden="true" className={ICON}>
      <path d="M10.17,8.76l2.12-2.12a5,5,0,0,1,7.07,0h0a5,5,0,0,1,0,7.07l-2.12,2.12" />
      <path d="M15.83,17.24l-2.12,2.12a5,5,0,0,1-7.07,0h0a5,5,0,0,1,0-7.07l2.12-2.12" />
      <line x1="10.17" y1="15.83" x2="15.83" y2="10.17" />
    </svg>
  )
}

function Star() {
  return (
    <svg viewBox="0 0 20 19" aria-hidden="true" className="h-[0.92em] w-[1.08em] flex-none">
      <path d="M10 0l2.94 6.1 6.56.86-4.8 4.6 1.2 6.54L10 14.95 4.1 18.1l1.2-6.54L.5 6.96l6.56-.86z" fill="currentColor" />
    </svg>
  )
}

function RelatedItem({ product }: { product: Product }) {
  const { addToCart } = useChrome()
  const [tapped, setTapped] = useState(false)
  const [loading, setLoading] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])

  // AJAX add-to-cart on the original: the bag button spins, then the side cart opens.
  const onAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    timer.current = window.setTimeout(() => {
      setLoading(false)
      addToCart({ id: product.id, name: product.name, price: product.price })
    }, 450)
  }

  const to = productPath(product.slug)
  return (
    <li className="relative float-left mx-[1%] mb-5 w-[31.3%] text-center min-[960px]:nth-[3n+1]:clear-both min-[768px]:bt-md:w-[48%] bt-md:nth-[odd]:clear-both bt-sm:mx-0 bt-sm:w-[48%] bt-sm:nth-[2n]:float-right">
      <div
        className="group/frame block overflow-hidden leading-[0]"
        data-hover={tapped}
        onTouchStart={() => setTapped((v) => !v)}
      >
        <div className="relative overflow-hidden">
          <Link to={to} tabIndex={-1} className="block">
            <div className="absolute left-0 z-[2] h-full w-full">
              <div className={`absolute left-0 z-[3] h-full w-full bg-black/15 opacity-0 transition-all duration-300 ease-in-out ${VEIL}`} />
            </div>
            <BoxShot label={product.name} className={`top-0 mb-[-15px] w-full transition-all duration-300 ease-in-out ${LIFT}`} />
          </Link>
          <div className={`absolute -bottom-[60px] left-0 z-[4] flex h-[60px] w-full overflow-hidden transition-all duration-300 ease-in-out ${BAR}`}>
            <a
              href={to}
              rel="nofollow"
              tabIndex={-1}
              aria-label={`Ajouter « ${product.name} » au panier`}
              onClick={onAdd}
              className={`${ACTION} border-r border-transparent`}
            >
              <BagIcon hidden={loading} />
              {loading && (
                <span className="absolute top-1/2 left-1/2 -mt-2.5 -ml-2.5 size-5 animate-[product-spin_1.5s_linear_infinite] rounded-full border-2 border-[#161922] border-b-transparent" />
              )}
            </a>
            <Link to={to} tabIndex={-1} aria-label={product.name} className={ACTION}>
              <ChainIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-[15px]">
        <h4 className={H4}>
          <Link to={to}>{product.name}</Link>
        </h4>
        {product.rated && (
          <div
            role="img"
            aria-label="Note 5.00 sur 5"
            className="mb-[7px] inline-flex h-[1em] w-[5.4em] items-center align-text-bottom text-[14px] leading-none text-[#0026ff]"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} />
            ))}
          </div>
        )}
        <span className="mb-[7px] block text-[18px] text-[#0026ff]">{formatEuro(product.price)}</span>
      </div>
    </li>
  )
}

export function Related({ slugs }: { slugs: string[] }) {
  const items = slugs.map((s) => PRODUCTS[s]).filter(Boolean)
  return (
    <section data-section="product-related" className="clear-both mt-[30px] border-t border-[rgba(0,0,0,0.08)] pt-[15px]">
      <h3 className={H3}>{RELATED_TITLE}</h3>
      <ul className="m-0 flow-root list-none p-0">
        {items.map((p) => (
          <RelatedItem key={p.slug} product={p} />
        ))}
      </ul>
    </section>
  )
}
