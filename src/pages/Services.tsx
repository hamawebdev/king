import { ResellerHero } from './theme/heroes'
import { ResellerSteps } from './services/Steps'
import { ResellerBand } from './theme/bands'

// Reseller page ("Revendeur"): hero, four numbered steps separated by dashed waves, then the
// sand contact band (vault panel and question form). All copy is placeholder text.

export default function Services() {
  return (
    <div className="overflow-x-clip bg-paper font-sans leading-[1.65] text-ink-body antialiased">
      <ResellerHero />
      <ResellerSteps />
      <ResellerBand />
    </div>
  )
}
