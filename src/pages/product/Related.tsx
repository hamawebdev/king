import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { Coffret, RelatedCard, Reveal, Section, SectionHead, Stars } from '@/components/brand'
import type { CoffretVariant } from '@/components/brand'
import { formatEuro, useChrome } from '@/components/site/chrome-context'
import { PRODUCTS, type Product } from './data'

// Related products under the landing (DIRECTION §9.2 #10, §6.3-13): paper band, a catalogue head with a
// hairline running out to the right, then three ivory panels (coffret, title, rating, price, add to cart),
// 1 / 3 columns (three across already at tablet: a 2-up grid would orphan the third product). The add-to-cart link is always visible; the coffret links to the product (tabIndex -1, like
// the original image link) so the title link stays the single keyboard stop for the product.

const RELATED_TITLE = 'Produits similaires'

const productPath = (slug: string) => `/produit/${slug}/`

// Card: the kit's column card. From md the title keeps two lines of height so the prices line up across
// the row; the border deepens on hover while the coffret lifts 2px (motion-safe).
const CARD = 'group/rel transition-[border-color] duration-180 ease-calm hover:border-hairline-deep md:[&>h3]:min-h-[2.5em]'

// Coffret colourway and duration numeral (pseudo-content, no text node) from the product's own slug.
function boxOf(p: Product): { months: string; variant: CoffretVariant } {
  const months = p.slug.match(/(\d+)-mois/)?.[1] ?? '12'
  if (p.slug.startsWith('renouvellement')) return { months, variant: 'renew' }
  const variant: CoffretVariant = months === '3' || months === '6' || months === '24' ? months : '12'
  return { months, variant }
}

function RelatedItem({ product, index, reserveRating }: { product: Product; index: number; reserveRating: boolean }) {
  const { addToCart } = useChrome()
  const [loading, setLoading] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])

  // AJAX add-to-cart on the original: a short loading state, then the side cart opens.
  const onAdd = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    timer.current = window.setTimeout(() => {
      setLoading(false)
      addToCart({ id: product.id, name: product.name, price: product.price })
    }, 450)
  }

  const to = productPath(product.slug)
  const box = boxOf(product)
  return (
    <RelatedCard
      root="li"
      className={CARD}
      visual={
        <Link
          to={to}
          tabIndex={-1}
          aria-label={product.name}
          className="block pr-2 pb-2 transition-transform duration-180 ease-calm motion-safe:group-hover/rel:-translate-y-0.5"
        >
          <Reveal index={index}>
            <Coffret size="sm" months={box.months} plan={product.plan} variant={box.variant} />
          </Reveal>
        </Link>
      }
      title={product.name}
      to={to}
      price={formatEuro(product.price)}
      rating={
        product.rated ? (
          <Stars label="Note 5.00 sur 5" />
        ) : reserveRating ? (
          // Keeps prices on one baseline when a sibling card shows stars (hidden once cards stack).
          <Stars className="invisible max-md:hidden" />
        ) : undefined
      }
      action={{
        label: 'Ajouter au panier',
        ariaLabel: `Ajouter « ${product.name} » au panier`,
        href: to,
        onClick: onAdd,
        loading,
      }}
    />
  )
}

export function Related({ slugs }: { slugs: string[] }) {
  const items = slugs.map((s) => PRODUCTS[s]).filter(Boolean)
  const reserveRating = items.some((p) => p.rated)
  return (
    <Section zone="paper" dataSection="product-related">
      <div className="flex items-end gap-8">
        <SectionHead title={RELATED_TITLE} className="shrink-0" />
        <span aria-hidden="true" className="mb-[0.6em] hidden h-px flex-1 bg-z-line md:block" />
      </div>
      <ul className="mt-head grid list-none gap-grid p-0 md:grid-cols-3">
        {items.map((p, i) => (
          <RelatedItem key={p.slug} product={p} index={i} reserveRating={reserveRating} />
        ))}
      </ul>
    </Section>
  )
}
