import { lazy } from 'react'
import { Navigate, useParams } from 'react-router'
import { PACKS, legacyProductRedirect } from '@/lib/packs'
import { PackPage } from './product/PackPage'

// Same lazy chunk as the router's 404 route.
const NotFound = lazy(() => import('./NotFound'))

/** /produit/:slug — one page per pack; old catalogue slugs redirect (see LEGACY_PRODUCT_REDIRECTS). */
export default function Product() {
  const { slug = '' } = useParams()
  const pack = PACKS.find((p) => p.slug === slug)
  if (pack) return <PackPage key={pack.id} pack={pack} />
  const target = legacyProductRedirect(slug)
  if (target) return <Navigate to={target} replace />
  return <NotFound />
}
