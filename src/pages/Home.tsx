import { MobileBuyBar, WhatsAppBubble } from './home/FloatingActions'
import { HomeApp } from './home/sections/App'
import { HomeChannels } from './home/sections/Channels'
import { HomeCompat } from './home/sections/Compat'
import { HomeCta } from './home/sections/Cta'
import { HomeDiscover } from './home/sections/Discover'
import { HomeFaq } from './home/sections/Faq'
import { HomeFeatures } from './home/sections/Features'
import { HomeGuides } from './home/sections/Guides'
import { HomeHero } from './home/sections/Hero'
import { HomeMilestones } from './home/sections/Milestones'
import { HomePlans } from './home/sections/Plans'
import { HomePremium } from './home/sections/Premium'
import { HomeReviews } from './home/sections/Reviews'
import { HomeSport } from './home/sections/Sport'
import { HomeVod } from './home/sections/Vod'
import { HomeWhy } from './home/sections/Why'
import './home/decor.css'

/** Home landing page: every band lives in its own module under ./home/sections, in page order here. */
export default function Home() {
  return (
    <div className="overflow-x-clip scroll-smooth bg-paper font-sans leading-[1.65] text-ink-body antialiased [:root:not(.has-buybar)_&]:lp-md:pb-[76px]">
      <HomeHero />
      <HomeFeatures />
      <HomeApp />
      <HomeChannels />
      <HomeDiscover />
      <HomeMilestones />
      <HomeSport />
      <HomeVod />
      <HomeCta />
      <HomePlans />
      <HomeCompat />
      <HomePremium />
      <HomeGuides />
      <HomeWhy />
      <HomeReviews />
      <HomeFaq />

      <WhatsAppBubble />
      <MobileBuyBar />
    </div>
  )
}
