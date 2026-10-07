// Class recipes of the brand kit (DIRECTION « Réserve » §3–§7). Components in this folder are built from
// these strings; use them directly only for edge cases the components do not cover.
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { ButtonSize, ButtonVariant, ContainerSize, Rhythm, Zone } from './types'

/** Reset scope: redesigned markup starts from brand defaults even inside .bt / .mfp / .co-page wrappers. */
export const SCOPE = 'brand-scope'

/**
 * Roots of fixed / sticky chrome (no <Section>): reset scope + zone variables, never the vault texture.
 * dark = cookie bar, toasts, any fixed vault element; light = buy bar, drawer, side menu (no zone-ivory
 * hairlines: `.zone-ivory` adds a 1px border-block).
 */
export const fixedRootClass = {
  dark: 'brand-scope vault-plain',
  light: 'brand-scope zone-paper bg-ivory',
} as const

export const zoneClass: Record<Zone, string> = {
  paper: 'zone-paper',
  ivory: 'zone-ivory',
  sand: 'zone-sand',
  vault: 'zone-vault',
}

export const containerClass: Record<ContainerSize, string> = {
  content: 'mx-auto w-full max-w-content px-gutter',
  wide: 'mx-auto w-full max-w-wide px-gutter',
  text: 'mx-auto w-full max-w-text px-gutter',
}

export const rhythmClass: Record<Rhythm, string> = {
  section: 'py-section',
  sm: 'py-section-sm',
  hero: 'py-hero',
  none: '',
}

/** Type recipes (§3.2): face + scale token + zone colour. Copy as is; add layout classes around them. */
export const typo = {
  displayXl: 'font-display text-display-xl text-z-fg',
  displayLg: 'font-display text-display-lg text-z-fg',
  displayMd: 'font-display text-display-md text-z-fg',
  displaySm: 'font-display text-display-sm text-z-fg',
  titleLg: 'font-display text-title-lg text-z-fg',
  title: 'font-display text-title text-z-fg',
  lead: 'font-sans text-lead text-z-soft max-w-[56ch]',
  copy: 'font-sans text-copy text-z-body max-w-[66ch]',
  small: 'font-sans text-small text-z-soft',
  meta: 'font-sans text-meta font-medium text-z-muted',
  micro: 'font-sans text-micro font-medium text-z-muted',
  badge: 'font-sans text-badge uppercase',
  faq: 'font-sans text-faq text-z-fg',
  nav: 'font-sans text-[0.9375rem] leading-none font-medium',
  priceXl: 'price-num text-price-xl',
  priceLg: 'price-num text-price-lg',
  priceMd: 'price-num text-price-md',
  priceSm: 'price-num text-price-sm',
  statLg: 'price-num text-stat-lg',
  statMd: 'price-num text-stat-md',
} as const

/** Normalise a Tabler icon name: "lock" or "ti-lock" → "ti ti-lock". */
export function iconClass(name: string, extra?: string) {
  return cn('ti', name.startsWith('ti-') ? name : `ti-${name}`, 'shrink-0', extra)
}

// ── Buttons (§6.1) ──────────────────────────────────────────────────────────────────────────────

const BUTTON_BASE =
  'group/btn inline-flex items-center justify-center gap-2.5 text-center font-sans font-semibold leading-[1.2] tracking-[0.01em] ' +
  '[text-wrap:balance] border rounded-control select-none no-underline cursor-pointer ' +
  'transition-[background-color,border-color,color,box-shadow,transform] duration-180 ease-calm ' +
  'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-z-focus ' +
  'disabled:cursor-not-allowed aria-disabled:cursor-not-allowed aria-disabled:pointer-events-none'

const LIGHT_DISABLED =
  'disabled:bg-sand-deep disabled:text-ink-muted disabled:border-sand-deep disabled:shadow-none disabled:translate-y-0 ' +
  'aria-disabled:bg-sand-deep aria-disabled:text-ink-muted aria-disabled:border-sand-deep aria-disabled:shadow-none aria-disabled:translate-y-0'
const VAULT_DISABLED =
  'disabled:bg-vault-raised disabled:text-on-vault-muted disabled:border-vault-line disabled:shadow-none disabled:translate-y-0 ' +
  'aria-disabled:bg-vault-raised aria-disabled:text-on-vault-muted aria-disabled:border-vault-line aria-disabled:shadow-none aria-disabled:translate-y-0'
const LINK =
  'min-h-11 border-0 px-0 py-3 text-[0.9375rem] underline decoration-1 underline-offset-4 hover:decoration-2 ' +
  'disabled:text-ink-muted aria-disabled:text-ink-muted aria-disabled:no-underline'
/** The vault disabled set, applied only when a light-ground variant sits on vault (whatsapp, secondary). */
const VAULT_DISABLED_IN_ZONE =
  'vault:disabled:bg-vault-raised vault:disabled:text-on-vault-muted vault:disabled:border-vault-line ' +
  'vault:aria-disabled:bg-vault-raised vault:aria-disabled:text-on-vault-muted vault:aria-disabled:border-vault-line'

export const buttonVariants = cva(BUTTON_BASE, {
  variants: {
    // size first so the link/icon variants below can override its padding and height
    size: {
      sm: 'min-h-10 px-4 py-2 text-[0.875rem]',
      md: 'min-h-12 px-[22px] py-3 text-base',
      lg: 'min-h-14 px-7 py-3.5 text-[1.0625rem]',
    },
    variant: {
      primary:
        'bg-ink text-ivory border-ink hover:bg-evergreen-800 hover:border-evergreen-800 not-disabled:hover:shadow-lift motion-safe:not-disabled:hover:-translate-y-px ' +
        'active:bg-vault active:border-vault active:translate-y-0 active:shadow-none ' +
        LIGHT_DISABLED,
      // On vault, secondary and link fall back to the outline-vault / link-vault look (prefer those names).
      secondary:
        'bg-transparent text-ink border-ink hover:bg-ink/6 active:bg-ink/10 ' +
        'vault:text-on-vault vault:border-vault-outline vault:hover:bg-on-vault/8 vault:active:bg-on-vault/12 ' +
        LIGHT_DISABLED +
        ' ' +
        VAULT_DISABLED_IN_ZONE,
      link: LINK + ' text-evergreen-700 hover:text-ink vault:text-brass-300 vault:hover:text-on-vault vault:disabled:text-on-vault-muted vault:aria-disabled:text-on-vault-muted',
      brass:
        'bg-brass-500 text-vault border-brass-500 hover:bg-brass-400 hover:border-brass-400 not-disabled:hover:shadow-lift motion-safe:not-disabled:hover:-translate-y-px ' +
        'active:bg-brass-press active:border-brass-press active:translate-y-0 active:shadow-none ' +
        VAULT_DISABLED,
      ivory: 'bg-ivory text-ink border-ivory hover:bg-paper hover:border-paper active:bg-sand ' + VAULT_DISABLED,
      'outline-vault':
        'bg-transparent text-on-vault border-vault-outline hover:bg-on-vault/8 active:bg-on-vault/12 ' + VAULT_DISABLED,
      'link-vault': LINK + ' text-brass-300 hover:text-on-vault',
      whatsapp:
        'bg-whatsapp text-vault border-whatsapp hover:bg-whatsapp-hover hover:border-whatsapp-hover ' +
        LIGHT_DISABLED +
        ' ' +
        VAULT_DISABLED_IN_ZONE,
      icon:
        'size-11 min-h-0 p-0 text-[20px] bg-transparent text-ink border-hairline hover:bg-ivory hover:border-hairline-strong ' +
        'vault:text-on-vault vault:border-vault-line vault:hover:bg-vault-raised vault:hover:border-vault-line',
      'icon-vault': 'size-11 min-h-0 p-0 text-[20px] bg-transparent text-on-vault border-vault-line hover:bg-vault-raised',
    },
    full: { true: 'w-full', false: '' },
  },
  defaultVariants: { size: 'md', variant: 'primary', full: false },
})

/** Class string of a button (for edge cases: <label>, <summary>, third-party triggers …). */
export function buttonClass(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', extra?: string) {
  return cn(buttonVariants({ variant, size }), extra)
}

/** Icon size per button size (16 / 18 / 20 px). */
export const buttonIconSize: Record<ButtonSize, string> = {
  sm: 'text-[16px]',
  md: 'text-[18px]',
  lg: 'text-[20px]',
}

// ── Links (§6.2) ────────────────────────────────────────────────────────────────────────────────

/** Inline text link; turns brass on vault automatically. */
export const linkClass =
  'text-evergreen-700 underline decoration-1 underline-offset-3 transition-colors duration-180 ease-calm hover:text-ink hover:decoration-2 ' +
  'vault:text-brass-300 vault:hover:text-on-vault'

/** Footer and nav links: no underline at rest. */
export const navLinkClass = 'hover:underline underline-offset-4'

// ── Chrome (§9.0, §8 drawer and side menu) ──────────────────────────────────────────────────────

/** Sticky header bar. Add `headerClass.scrolled` once scrollY > 8 (the hairline always shows). */
export const headerClass = {
  base:
    'brand-scope zone-paper sticky top-0 z-40 border-b border-hairline transition-[background-color,box-shadow] duration-180 ease-calm',
  inner: 'mx-auto flex h-16 w-full max-w-wide items-center gap-6 px-gutter lg:h-[72px]',
  scrolled: 'bg-ivory shadow-lift',
} as const

/** Header nav link: Hanken 500 15px ink, underline on hover. Pair with navCurrentClass and aria-current="page". */
export const headerNavLinkClass =
  'inline-flex min-h-11 items-center font-sans text-[0.9375rem] leading-none font-medium text-ink decoration-1 transition-colors duration-180 ease-calm ' +
  'hover:underline underline-offset-4'

/** Current main-nav link (needs aria-current="page"): semibold, 1px brass-500 underline at offset 6px. */
export const navCurrentClass =
  'aria-[current=page]:font-semibold aria-[current=page]:underline aria-[current=page]:decoration-brass-500 aria-[current=page]:decoration-1 aria-[current=page]:underline-offset-[6px]'

/** Side-menu link: serif 28px, 56px rows with hairline separators; current = italic brass-700 (aria-current="page"). */
export const sideLinkClass =
  'flex min-h-14 items-center border-b border-hairline font-display text-[1.75rem] leading-tight font-medium text-ink ' +
  'transition-colors duration-180 ease-calm hover:text-evergreen-700 aria-[current=page]:italic aria-[current=page]:text-brass-700'

/**
 * Sliding panels from the right (z 70), 320ms ease-drawer. Closed: add `panelClosedClass`
 * (translate-x-full + invisible, so nothing inside is focusable). Trap focus, Esc closes, focus returns to the trigger.
 */
export const drawerClass =
  'brand-scope zone-paper bg-ivory fixed inset-y-0 right-0 z-[70] flex w-[min(420px,100vw)] flex-col border-l border-hairline shadow-float ' +
  'transition-[transform,visibility] duration-320 ease-drawer'
/** Mobile side menu panel: from the right, w-[min(86vw,360px)], ivory. */
export const sideMenuClass =
  'brand-scope zone-paper bg-ivory fixed inset-y-0 right-0 z-[70] flex w-[min(86vw,360px)] flex-col ' +
  'transition-[transform,visibility] duration-320 ease-drawer'
export const panelClosedClass = 'invisible translate-x-full'

/** Overlay under a drawer or side menu (z 60): vault at 48%, fades over 200ms. Closed: add `overlayClosedClass`. */
export const overlayClass = 'fixed inset-0 z-[60] bg-vault/48 transition-[opacity,visibility] duration-200 ease-calm'
export const overlayClosedClass = 'invisible pointer-events-none opacity-0'

// ── Cards (§6.3) ────────────────────────────────────────────────────────────────────────────────

export const cardClass = {
  /** Base card: hairline, zone card fill, no shadow at rest. */
  base: 'rounded-card border border-z-line bg-z-card p-card',
  /** Panel-radius card (plan, related, support, app box, order review). */
  panel: 'rounded-panel border border-z-line bg-z-card p-card',
  /** Hover for clickable cards only. */
  interactive:
    'transition-[transform,box-shadow,border-color] duration-180 ease-calm motion-safe:hover:-translate-y-0.5 hover:shadow-lift hover:border-hairline-deep',
  /** Contained dark panel (CTA, WhatsApp, trial teaser, downloads closing). */
  vaultPanel: 'panel-vault cert-frame rounded-panel shadow-float px-5 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16',
  /** Small vault box (FAQ help box): no certificate frame. */
  vaultPanelSm: 'panel-vault rounded-panel shadow-float p-6',
  /** Offer card / buy box. */
  recap:
    'relative panel-vault cert-frame rounded-panel shadow-float px-5 pt-9 pb-6 lg:px-9 lg:pt-10 lg:pb-8 ' +
    'before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-brass-500',
  /** Light order summary (checkout, cart). */
  orderSummary: 'rounded-panel border border-hairline-deep bg-sand p-card',
  /** Form card: forms always sit on a light card (ivory; paper on an ivory band). */
  form: 'rounded-panel border border-z-line bg-z-card p-card [--field-bg:var(--z-raised)]',
} as const

/** Feature tile (icon square), zone-aware. */
export const tileClass =
  'grid shrink-0 place-items-center rounded-control bg-evergreen-100 text-evergreen-700 ' +
  'vault:bg-vault-raised vault:text-brass-300 vault:border vault:border-vault-line'

/** Check list item icon on light / on vault. */
export const checkIconClass = 'ti ti-check shrink-0 text-[18px] mt-0.5 text-evergreen-600 vault:text-brass-500'

// ── Small labels (§6.5–§6.8, §6.15) ─────────────────────────────────────────────────────────────

export const ribbonClass =
  'absolute left-7 top-0 z-[2] -translate-y-1/2 inline-flex h-[26px] items-center gap-1.5 rounded-tag bg-brass-500 px-3 ' +
  'font-sans text-badge font-bold uppercase tracking-[0.12em] text-vault whitespace-nowrap'

export const savingChipVariants = cva(
  'inline-flex items-center rounded-tag font-sans font-bold tabular-nums leading-none bg-brass-100 text-brass-800 vault:bg-brass-300 vault:text-vault',
  {
    variants: {
      size: { md: 'h-[26px] px-2 text-[0.875rem]', lg: 'h-[30px] px-2.5 text-base' },
    },
    defaultVariants: { size: 'md' },
  },
)

export const neutralTagClass =
  'inline-flex h-[26px] items-center rounded-tag border border-z-line px-2 font-sans text-micro font-semibold text-z-soft'

export const chipVariants = cva(
  'inline-flex items-center gap-2 rounded-control border font-sans font-medium leading-tight ' +
    'border-z-line bg-z-card text-z-soft vault:bg-vault-raised vault:border-vault-line vault:text-on-vault',
  {
    variants: {
      size: { md: 'min-h-8 px-3 py-1 text-[0.875rem]', sm: 'min-h-[26px] px-2 py-0.5 text-micro' },
      selected: {
        true: 'bg-ink text-ivory border-ink vault:bg-ivory vault:text-ink vault:border-ivory',
        false: '',
      },
    },
    defaultVariants: { size: 'md', selected: false },
  },
)
export const chipIconClass = 'text-[16px] text-evergreen-700 vault:text-brass-300'

export const paymentBadgeClass =
  'inline-flex h-6 items-center rounded-tag border border-z-line bg-z-card px-2 font-sans text-badge font-bold uppercase tracking-[0.08em] text-ink-body ' +
  'vault:bg-transparent vault:border-vault-line vault:text-on-vault'

export const qualityStampClass = {
  base:
    'grid h-10 w-14 shrink-0 place-items-center rounded-tag border border-ink font-display text-lg leading-none font-semibold text-ink ' +
    'vault:border-vault-outline vault:text-on-vault',
  top: 'bg-vault text-brass-300 border-vault vault:bg-brass-500 vault:text-vault vault:border-brass-500',
} as const

export const statusDotClass =
  'inline-block size-2 shrink-0 rounded-full bg-evergreen-600 ring-[3px] ring-evergreen-100 vault:ring-evergreen-800'

export const cartCountClass =
  'absolute -top-1.5 -right-1.5 grid size-[18px] place-items-center rounded-full bg-brass-500 text-[11px] leading-none font-bold text-vault tabular-nums'

// ── Rows ────────────────────────────────────────────────────────────────────────────────────────

export const trustRowClass = 'flex flex-wrap gap-x-7 gap-y-3'
export const trustItemClass = 'inline-flex items-center gap-2 font-sans text-meta font-semibold text-z-muted'
export const guaranteeRowClass =
  'flex flex-wrap justify-center gap-x-5 gap-y-2 font-sans text-micro font-semibold text-z-fg'
export const infoRowClass =
  'flex items-center gap-2.5 rounded-control bg-z-raised px-3.5 py-2.5 font-sans text-meta font-semibold text-z-accent'

// ── Forms (§6.13) and notices (§6.14) ───────────────────────────────────────────────────────────

export const fieldClass = {
  field: 'grid gap-2',
  label: 'font-sans text-meta font-semibold text-ink',
  required: "after:ml-0.5 after:text-ink-muted after:content-['*']",
  helper: 'font-sans text-micro text-ink-muted',
  error: 'inline-flex items-center gap-1.5 font-sans text-micro text-alert',
  // The brand focus ring (2px evergreen-700, offset 3px) stays on every control; border and halo add to it.
  control:
    'min-h-12 w-full rounded-control border border-hairline-strong bg-[var(--field-bg,var(--color-ivory))] px-3.5 py-3 font-sans text-base text-ink-body ' +
    'placeholder:text-ink-muted transition-[border-color,box-shadow] duration-180 ease-calm ' +
    'focus:border-evergreen-700 focus:shadow-[0_0_0_3px_rgb(31_77_64/0.18)] ' +
    'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-evergreen-700 ' +
    'aria-invalid:border-alert disabled:cursor-not-allowed disabled:bg-sand-deep disabled:text-ink-muted',
  select: 'appearance-none pr-10',
  textarea: 'min-h-[140px] resize-y',
  check: 'brand-check',
  radio: 'brand-radio',
} as const

export const noticeClass = {
  success:
    'flex gap-3 rounded-card bg-evergreen-100 px-4 py-3.5 font-sans text-[0.9375rem] font-medium text-evergreen-700',
  error: 'flex gap-3 rounded-card bg-alert-100 px-4 py-3.5 font-sans text-[0.9375rem] font-medium text-alert',
} as const

/** Toast (sonner): plain vault (vault-plain: zone variables, brass focus ring, no texture), z 90 via the toaster. */
export const toastClass =
  'brand-scope vault-plain rounded-card shadow-float px-4 py-3.5 font-sans text-[0.9375rem] text-on-vault [&_i]:text-brass-300'

/** Cookie bar root (fixed, centred, above the buy bar when one is present). */
export const cookieBarClass =
  'brand-scope vault-plain fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-[720px] rounded-panel shadow-float px-6 py-5 ' +
  '[.has-buybar_&]:max-md:bottom-[88px]'

// ── Imagery (§7) ────────────────────────────────────────────────────────────────────────────────

/** Fill cycle of channel-mosaic tiles. */
export const MOSAIC_FILLS = ['bg-evergreen-800', 'bg-evergreen-700', 'bg-evergreen-900', 'bg-evergreen-600', 'bg-vault'] as const

/** Default mosaic glyphs (theme icons, no channel names). */
export const MOSAIC_ICONS = ['ti-ball-football', 'ti-movie', 'ti-news', 'ti-mood-kid', 'ti-world', 'ti-music'] as const

/** Sport mosaic glyphs (no team names). */
export const SPORT_ICONS = ['ti-ball-football', 'ti-ball-basketball', 'ti-ball-tennis', 'ti-play-football'] as const

/** Initials for a monogram, generated from an existing name ("Sarah Benali" → "SB"). */
export function initials(name: string) {
  const words = name.trim().split(/\s+/).filter(Boolean)
  const letters = words.length > 1 ? [words[0], words[words.length - 1]] : words
  return letters.map((w) => w.charAt(0).toLocaleUpperCase('fr')).join('')
}

/** Reveal stagger: 60 ms per item, capped at 4 items (180 ms). */
export function revealDelay(index = 0) {
  return `${Math.min(Math.max(index, 0), 3) * 60}ms`
}
