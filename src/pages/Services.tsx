import { ResellerHero } from './theme/heroes'
import { ResellerSteps } from './services/Steps'
import { ResellerBand } from './theme/bands'

// Reseller page ("Revendeur"): hero, four numbered steps separated by dashed waves, then the
// navy contact band with the question form. All copy is placeholder text.

export default function Services() {
  return (
    <div className="bt mfp mfp-services">
      <ResellerHero />
      <ResellerSteps />
      <ResellerBand />
    </div>
  )
}
