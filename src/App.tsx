import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { SiteLayout } from '@/components/site/SiteLayout'

const Home = lazy(() => import('@/pages/Home'))
const Pricing = lazy(() => import('@/pages/Pricing'))
const Services = lazy(() => import('@/pages/Services'))
const Download = lazy(() => import('@/pages/Download'))
const Contact = lazy(() => import('@/pages/Contact'))
const Product = lazy(() => import('@/pages/Product'))
const Legal = lazy(() => import('@/pages/Legal'))
const Checkout = lazy(() => import('@/pages/Checkout'))
const NotFound = lazy(() => import('@/pages/NotFound'))

// Paths mirror the original site's URLs.
function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="services" element={<Services />} />
          <Route path="muffin-builder-83" element={<Download />} />
          <Route path="contact" element={<Contact />} />
          <Route path="produit/:slug" element={<Product />} />
          <Route path="conditions-dutilisation" element={<Legal doc="cgu" />} />
          <Route path="conditions-generales-de-vente" element={<Legal doc="cgv" />} />
          <Route path="politique-de-confidentialite" element={<Legal doc="privacy" />} />
          <Route path="politique-de-remboursement" element={<Legal doc="refund" />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
