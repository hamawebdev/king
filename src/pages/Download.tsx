import { DownloadHero } from './theme/heroes'
import { DownloadApps } from './download/Apps'
import { DownloadGuides } from './download/Guides'
import { DownloadBand } from './theme/bands'

// Downloads page ("Télécharger"): hero, the two application boxes with their buttons, an
// introduction and three installation guides, then a short navy band. Placeholder copy.

export default function Download() {
  return (
    <div className="bt mfp mfp-download">
      <DownloadHero />
      <DownloadApps />
      <DownloadGuides />
      <DownloadBand />
    </div>
  )
}
