import { lazy } from 'react'
import { useParams } from 'react-router'
import { useChrome } from '@/components/site/chrome-context'
import { Landing } from './product/Landing'
import { Related } from './product/Related'
import { PRODUCTS, type Product as ProductData } from './product/data'

// Same lazy chunk as the router's 404 route.
const NotFound = lazy(() => import('./NotFound'))

// WooCommerce single product. On the original only the description tab's landing block and the related
// products loop are visible; the gallery, summary, tabs and reviews are hidden by the page's own CSS.
function ProductPage({ product }: { product: ProductData }) {
  const { addToCart } = useChrome()
  // "Acheter maintenant" adds the product locally and opens the side cart; nothing is submitted.
  const buy = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({ id: product.id, name: product.name, price: product.price })
  }

  return (
    <div>
      {/* Description tab panel spacing (15px / 20px); the renewal page's builder container adds 10px each way. */}
      <div className={product.padded ? 'pt-[25px] pb-[30px]' : 'pt-[15px] pb-5'}>
        <Landing product={product} onBuy={buy} />
      </div>
      <Related slugs={product.related} />
    </div>
  )
}

export default function Product() {
  const { slug } = useParams()
  const product = slug ? PRODUCTS[slug] : undefined
  // Unknown slug: WordPress answers with the theme's 404 page.
  if (!product) return <NotFound />
  return <ProductPage key={product.slug} product={product} />
}
