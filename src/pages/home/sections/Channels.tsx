import { BRAND_UPPER } from "@/lib/site";
import {
  ChannelMosaic,
  Chip,
  DeviceFrame,
  Kw,
  QualityLadder,
  Reveal,
  Section,
  SectionHead,
} from "@/components/brand";
import type { QualityTier } from "@/components/brand";
import type { IconText } from "../data";

const CHANNELS = {
  eyebrow: "Édition 2026",
  titleStart: "Grille ",
  titleBlue: BRAND_UPPER,
  titleEnd: " TV",
  text: "Un large choix de programmes internationaux, des grandes chaînes nationales aux bouquets thématiques.",
  qualities: [
    { value: "4K", label: "Ultra HD" },
    { value: "FHD", label: "1080p" },
    { value: "HD", label: "720p" },
    { value: "SD", label: "480p" },
  ] as { value: QualityTier; label: string }[],
  catsTitle: "Thèmes au programme",
  cats: [
    { icon: "ti-ball-football", label: "Sports" },
    { icon: "ti-movie", label: "Films" },
    { icon: "ti-device-tv", label: "Séries" },
    { icon: "ti-news", label: "News" },
    { icon: "ti-mood-kid", label: "Jeunesse" },
    { icon: "ti-music", label: "Musique" },
  ] as IconText[],
};

/** The mosaic on screen shows the same theme glyphs as the chips below it. */
const MOSAIC_THEMES = CHANNELS.cats.map((cat) => cat.icon);

/** Channels and picture quality: TV frame with the channel mosaic, quality ladder, theme chips. */
export function HomeChannels() {
  return (
    <Section zone="paper" dataSection="home-channels">
      <SectionHead
        eyebrow={CHANNELS.eyebrow}
        title={
          <>
            {CHANNELS.titleStart}
            <Kw>{CHANNELS.titleBlue}</Kw>
            {CHANNELS.titleEnd}
          </>
        }
        lead={CHANNELS.text}
      />

      <div className="mt-head grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-grid">
        <Reveal className="pb-1.5 lg:col-span-7 lg:pr-10 xl:pr-14">
          <DeviceFrame kind="tv" className="w-full">
            <ChannelMosaic icons={MOSAIC_THEMES} step />
          </DeviceFrame>
        </Reveal>
        <Reveal index={1} className="lg:col-span-5">
          <QualityLadder
            as="p"
            className="md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:gap-x-10"
            rows={CHANNELS.qualities.map((q) => ({
              tier: q.value,
              name: q.label,
            }))}
          />
        </Reveal>
      </div>

      <Reveal
        index={2}
        className="mt-14 grid gap-y-5 border-t border-z-line pt-7 md:mt-16 lg:grid-cols-12 lg:items-center lg:gap-x-grid"
      >
        <h3 className="font-display text-title text-z-fg lg:col-span-4">
          {CHANNELS.catsTitle}
        </h3>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0 lg:col-span-8 lg:justify-end">
          {CHANNELS.cats.map((cat) => (
            <li key={cat.label}>
              <Chip icon={cat.icon}>{cat.label}</Chip>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
