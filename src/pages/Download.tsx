import { DownloadHero } from './theme/heroes'
import { DownloadApps } from './download/Apps'
import { DownloadGuides } from './download/Guides'
import { DownloadBand } from './theme/bands'

// Downloads page ("Télécharger"): hero, the two application boxes with their buttons, an
// introduction and three installation guides, then a short vault band. Placeholder copy.

export default function Download() {
  return (
    <div className="overflow-x-clip bg-paper font-sans leading-[1.65] text-ink-body antialiased">
      <DownloadHero />
      <DownloadApps />
      <DownloadGuides />
      <DownloadBand />
    </div>
  )
}
