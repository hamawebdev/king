import { Route, Routes } from 'react-router'
import { SiteLayout } from '@/components/site/SiteLayout'
import Home from '@/pages/Home'
import Pricing from '@/pages/Pricing'
import Services from '@/pages/Services'
import Download from '@/pages/Download'
import Contact from '@/pages/Contact'
import Product from '@/pages/Product'
import Legal from '@/pages/Legal'
import Checkout from '@/pages/Checkout'
import NotFound from '@/pages/NotFound'

// Paths mirror the original site's URLs.
function App() {
  return (
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
  )
}

export default App
