import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { SUPPORT_EMAIL_HREF } from '@/lib/site'
import { CountTile, DeviceCard, MilestoneCard, PlanCard, QualityTile, ReviewCard } from './home/cards'
import {
  APP,
  CHANNELS,
  COMPAT,
  CTA,
  DISCOVER,
  FAQ,
  FAQ_HEAD,
  FEATURES,
  FEATURES_HEAD,
  GUIDES,
  GUIDES_EXTRA,
  GUIDES_HEAD,
  PLAN_FEATURES,
  PLAN_FLAG,
  PLANS,
  PLANS_HEAD,
  PLANS_TRUST,
  PREMIUM,
  REVIEWS,
  ROUTES,
  SPORT,
  TIMELINE,
  VOD,
  WHY,
  type Guide,
} from './home/data'
import { MobileBuyBar, WhatsAppBubble } from './home/FloatingActions'
import { GuideRow } from './home/GuideRow'
import { Hero, ProofStrip } from './home/Hero'
import {
  BAND,
  BAND_TIGHT,
  COLUMN,
  SPLIT,
  SPLIT_TEXT,
  SPLIT_TITLE,
  TILE,
  TINT,
  TITLE,
  TITLE_FACE,
  buttonClass,
  cx,
} from './home/styles'
import {
  Accent,
  ChipRow,
  CheckList,
  Eyebrow,
  FeatureGrid,
  GlyphPanel,
  PillList,
  RowLabel,
  SectionHead,
  StatGrid,
} from './home/ui'
import './home/decor.css'

/** Title with highlighted words in the middle. */
function accented(start: string, accent: string, end = ''): ReactNode {
  return (
    <>
      {start}
      <Accent>{accent}</Accent>
      {end}
    </>
  )
}

/** Four columns, two below 980px, one below 680px. */
const QUAD_GRID = 'grid grid-cols-[repeat(4,1fr)] lp-lg:grid-cols-[repeat(2,1fr)] lp-md:grid-cols-[1fr]'

function GuideBody({ guide }: { guide: Guide }) {
  return (
    <>
      <div className="mb-[14px] flex flex-wrap gap-[7px]">
        {guide.tags.map((tag) => (
          <span key={tag} className="rounded-[8px] bg-lp-blue-soft px-[11px] py-[4px] text-[12.5px] font-bold text-lp-blue-d">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-[6px] mb-[14px] grid gap-[11px]">
        {guide.steps.map((step, index) => (
          <div key={step} className="flex items-start gap-[13px]">
            <span className="grid size-[28px] flex-none place-items-center rounded-[8px] bg-lp-blue font-archivo text-[13px] font-extrabold text-white">
              {index + 1}
            </span>
            <div>{step}</div>
          </div>
        ))}
      </div>
      <div className="rounded-[11px] border border-[#c9dcff] bg-lp-blue-soft px-[15px] py-[12px] text-[13.5px] text-[#1a3a78]">
        <b className="font-bold text-lp-blue-d">Conseil :</b> {guide.tip}
      </div>
    </>
  )
}

export default function Home() {
  return (
    <div className="overflow-x-hidden scroll-smooth bg-white font-jakarta leading-[1.6] text-lp-ink antialiased lp-md:pb-[76px]">
      <Hero />
      <ProofStrip />

      {/* Features */}
      <section className={BAND}>
        <div className={COLUMN}>
          <SectionHead
            eyebrow={FEATURES_HEAD.eyebrow}
            title={accented(FEATURES_HEAD.titleStart, FEATURES_HEAD.titleBlue)}
            text={FEATURES_HEAD.text}
          />
          <FeatureGrid items={FEATURES} columns={4} />
        </div>
      </section>

      {/* App */}
      <section id="telecharger" className={cx(BAND_TIGHT, TINT)}>
        <div className={cx(COLUMN, SPLIT)}>
          <div>
            <Eyebrow>{APP.eyebrow}</Eyebrow>
            <h2 className={cx(SPLIT_TITLE, 'mt-[16px] mb-[12px]')}>{accented(`${APP.title} `, APP.titleBlue)}</h2>
            <p className={SPLIT_TEXT}>{APP.text}</p>
            <CheckList items={APP.checks} className="mb-[22px]" />
            <PillList items={APP.pills} />
          </div>
          <GlyphPanel icon="ti-player-play" fill="royal" />
        </div>
      </section>

      {/* Channels and picture quality */}
      <section className={BAND}>
        <div className={COLUMN}>
          <SectionHead
            eyebrow={CHANNELS.eyebrow}
            title={accented(CHANNELS.titleStart, CHANNELS.titleBlue, CHANNELS.titleEnd)}
            text={CHANNELS.text}
          />
          <div className="my-[32px] grid grid-cols-[repeat(4,1fr)] gap-[16px] lp-lg:grid-cols-[repeat(2,1fr)] lp-md:grid-cols-[1fr]">
            {CHANNELS.qualities.map((quality) => (
              <QualityTile key={quality.value} {...quality} />
            ))}
          </div>
          <RowLabel className="mt-[26px]">{CHANNELS.catsTitle}</RowLabel>
          <ChipRow items={CHANNELS.cats} />
        </div>
      </section>

      {/* Discover: figures, reasons, themes */}
      <section className={cx(BAND_TIGHT, TINT)}>
        <div className={COLUMN}>
          <SectionHead
            eyebrow={DISCOVER.eyebrow}
            title={accented(DISCOVER.titleStart, DISCOVER.titleBlue)}
            text={DISCOVER.text}
          />
          <StatGrid items={DISCOVER.stats} className="mb-[54px]" />
          <SectionHead minor title={DISCOVER.subTitle} />
          <FeatureGrid items={DISCOVER.cards} columns={3} />
          <ChipRow items={DISCOVER.cats} className="mt-[40px]" />
        </div>
      </section>

      {/* Milestones */}
      <section className={BAND}>
        <div className={COLUMN}>
          <SectionHead title={accented(TIMELINE.titleStart, TIMELINE.titleBlue)} />
          <div className={cx(QUAD_GRID, 'gap-[20px]')}>
            {TIMELINE.items.map((step) => (
              <MilestoneCard key={step.yr} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Sport */}
      <section className={cx(BAND_TIGHT, TINT)}>
        <div className={cx(COLUMN, SPLIT)}>
          <div>
            <Eyebrow>{SPORT.eyebrow}</Eyebrow>
            <h2 className={cx(SPLIT_TITLE, 'mt-[14px] mb-[16px]')}>{SPORT.title}</h2>
            <p className={SPLIT_TEXT}>{SPORT.text}</p>
            <PillList items={SPORT.pills} />
          </div>
          <GlyphPanel icon="ti-ball-football" fill="bright" />
        </div>
      </section>

      {/* On-demand catalogue */}
      <section className={BAND}>
        <div className={cx(COLUMN, SPLIT)}>
          <GlyphPanel icon="ti-movie" fill="night" />
          <div>
            <Eyebrow>{VOD.eyebrow}</Eyebrow>
            <h2 className={cx(SPLIT_TITLE, 'mt-[14px] mb-[16px]')}>{VOD.title}</h2>
            <p className={SPLIT_TEXT}>{VOD.text}</p>
            <CheckList items={VOD.checks.map((label) => ({ icon: 'ti-check', label }))} />
          </div>
        </div>
        <div className={cx(COLUMN, 'mt-[40px]')}>
          <div className="mt-[8px] grid grid-cols-[repeat(4,1fr)] gap-[14px] lp-lg:grid-cols-[repeat(2,1fr)] lp-sm:grid-cols-[1fr]">
            {VOD.movies.map((genre) => (
              <CountTile key={genre.label} {...genre} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className={BAND_TIGHT}>
        <div className={COLUMN}>
          <div className="hm-orb relative overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#2563eb,#143a96)] p-[58px] text-center text-white lp-lg:px-[22px] lp-lg:py-[40px] lp-md:px-[18px] lp-md:py-[32px]">
            <h2
              className={cx(
                TITLE_FACE,
                'relative z-[2] mb-[14px] text-[length:clamp(28px,4vw,42px)] font-extrabold text-white lp-sm:text-[24px]',
              )}
            >
              {CTA.title}
            </h2>
            <p className="relative z-[2] mx-auto mb-[28px] max-w-[640px] text-[18px] text-[#d7e4ff] lp-md:text-[16px]">
              {CTA.text}
            </p>
            <div className="relative z-[2] flex flex-wrap justify-center gap-[13px]">
              <Link to={ROUTES.p12} className={buttonClass('light', 'lg')}>
                {CTA.primary}
              </Link>
              <Link to={ROUTES.renew} className={buttonClass('ghost', 'md')}>
                {CTA.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="abonnements" className={cx(BAND_TIGHT, TINT)}>
        <div className={COLUMN}>
          <SectionHead
            eyebrow={PLANS_HEAD.eyebrow}
            title={accented(PLANS_HEAD.titleStart, PLANS_HEAD.titleBlue)}
            text={PLANS_HEAD.text}
          />
          <div className={cx(QUAD_GRID, 'items-stretch gap-[20px]')}>
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} features={PLAN_FEATURES} flag={PLAN_FLAG} />
            ))}
          </div>
          <div className="mt-[28px] flex flex-wrap items-center justify-center gap-[18px] text-[13.5px] font-bold text-lp-dim">
            <span className="flex items-center gap-[7px]">
              <i className="ti ti-lock text-[16px] text-lp-blue" /> {PLANS_TRUST.secure}
            </span>
            <span className="flex items-center gap-[7px]">
              <i className="ti ti-bolt text-[16px] text-lp-blue" /> {PLANS_TRUST.fast}
            </span>
            <span className="flex items-center gap-[7px]">
              {PLANS_TRUST.pay}{' '}
              {PLANS_TRUST.methods.map((method) => (
                <b
                  key={method}
                  className="ml-[5px] rounded-[5px] bg-lp-soft2 px-[8px] py-[3px] text-[11px] font-extrabold text-lp-ink"
                >
                  {method}
                </b>
              ))}
            </span>
          </div>
        </div>
      </section>

      {/* Device compatibility */}
      <section className={BAND}>
        <div className={COLUMN}>
          <SectionHead
            eyebrow={COMPAT.eyebrow}
            title={accented(COMPAT.titleStart, COMPAT.titleBlue)}
            text={COMPAT.text}
          />
          <div className={cx(QUAD_GRID, 'gap-[18px]')}>
            {COMPAT.items.map((device) => (
              <DeviceCard key={device.title} device={device} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium figures and supported players */}
      <section className={cx(BAND_TIGHT, TINT)}>
        <div className={COLUMN}>
          <SectionHead title={accented(PREMIUM.titleStart, PREMIUM.titleBlue, PREMIUM.titleEnd)} />
          <StatGrid items={PREMIUM.stats} className="mb-[46px]" />
          <RowLabel className="mb-[20px]">{PREMIUM.appsTitle}</RowLabel>
          <div className="flex flex-wrap justify-center gap-[10px]">
            {PREMIUM.apps.map((app) => (
              <span
                key={app.label}
                className={cx(TILE, 'flex items-center gap-[8px] rounded-[12px] px-[17px] py-[11px] text-[14px] font-bold')}
              >
                <i className={cx('ti', app.icon, 'text-[17px] text-lp-blue')} /> {app.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Installation guides */}
      <section id="contact" className={BAND}>
        <div className={COLUMN}>
          <SectionHead
            eyebrow={GUIDES_HEAD.eyebrow}
            title={accented(GUIDES_HEAD.titleStart, GUIDES_HEAD.titleBlue, GUIDES_HEAD.titleEnd)}
            text={GUIDES_HEAD.text}
          />
          <StatGrid items={GUIDES_HEAD.stats} trio className="mx-auto mb-[46px] max-w-[720px]" />
          <div className="mx-auto grid max-w-[900px] gap-[11px]">
            {GUIDES.map((guide, index) => (
              <GuideRow key={guide.title} title={guide.title} icon={guide.icon} initiallyOpen={index === 0}>
                <GuideBody guide={guide} />
              </GuideRow>
            ))}
          </div>
          <RowLabel className="mt-[46px] mb-[18px]">{GUIDES_EXTRA.featsTitle}</RowLabel>
          <ChipRow items={GUIDES_EXTRA.feats} />
          <FeatureGrid items={GUIDES_EXTRA.apps} columns={3} className="mt-[42px]" />
          <div className="mt-[44px] text-center">
            <h3 className={cx(TITLE, 'mb-[10px] text-[24px]')}>{GUIDES_EXTRA.helpTitle}</h3>
            <p className="mb-[20px] text-lp-muted">{GUIDES_EXTRA.helpText}</p>
            <a href={SUPPORT_EMAIL_HREF} className={buttonClass('solid', 'md')}>
              {GUIDES_EXTRA.helpCta}
            </a>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className={cx(BAND_TIGHT, TINT)}>
        <div className={COLUMN}>
          <SectionHead eyebrow={WHY.eyebrow} title={accented(WHY.titleStart, WHY.titleBlue, WHY.titleEnd)} text={WHY.text} />
          <FeatureGrid items={WHY.cards} columns={3} />
        </div>
      </section>

      {/* Reviews */}
      <section className={BAND}>
        <div className={COLUMN}>
          <SectionHead
            eyebrow={REVIEWS.eyebrow}
            title={accented(REVIEWS.titleStart, REVIEWS.titleBlue)}
            text={REVIEWS.text}
          />
          <StatGrid items={REVIEWS.stats} trio className="mx-auto mb-[44px] max-w-[680px]" />
          <div className="grid grid-cols-[repeat(3,1fr)] gap-[20px] lp-lg:grid-cols-[1fr]">
            {REVIEWS.items.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
          <ChipRow items={REVIEWS.cats} className="mt-[40px]" />
        </div>
      </section>

      {/* FAQ: every answer is shown */}
      <section className={cx(BAND_TIGHT, TINT)}>
        <div className={COLUMN}>
          <SectionHead
            eyebrow={FAQ_HEAD.eyebrow}
            title={accented(FAQ_HEAD.titleStart, FAQ_HEAD.titleBlue)}
            text={FAQ_HEAD.text}
          />
          <div className="mx-auto grid max-w-[900px] gap-[11px]">
            {FAQ.map((item) => (
              <GuideRow key={item.q} title={item.q} pinned>
                {item.a}
              </GuideRow>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppBubble />
      <MobileBuyBar />
    </div>
  )
}
