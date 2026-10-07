import { ShopHero } from './theme/heroes'
import { ShopPlans } from './pricing/Plans'
import { ShopReseller } from './pricing/ResellerTeaser'
import { ShopTrial } from './pricing/TrialTeaser'
import { ShopBand } from './theme/bands'

// Shop page ("Boutique"): hero, three plan cards, reseller teaser, free-trial teaser and the
// question form on the navy band. All copy is placeholder text.

export default function Pricing() {
  return (
    <div className="bt mfp mfp-pricing">
      <ShopHero />
      <ShopPlans />
      <ShopReseller />
      <ShopTrial />
      <ShopBand />
    </div>
  )
}
