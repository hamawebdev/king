// Tailwind class strings shared by the home landing components.
// Breakpoint variants come from src/index.css: lp-lg = max-width 980px, lp-md = 680px, lp-sm = 400px.
// Each fragment owns its properties, so fragments can be joined without conflicting utilities.

/** Joins class fragments and drops the falsy ones. */
export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(' ')
}

/** Typeface settings shared by all titles; size, weight, colour and spacing are added per use. */
export const TITLE_FACE = 'font-archivo leading-[1.1] tracking-[-0.025em]'
/** Default title: face + weight + colour. */
export const TITLE = `${TITLE_FACE} font-extrabold text-heading`

/** Centred 1180px column with side gutters. */
export const COLUMN = 'mx-auto max-w-[1180px] px-[28px] lp-md:px-[16px]'

/** Vertical rhythm of the page bands. */
export const BAND = 'relative py-[84px] lp-md:py-[46px]'
export const BAND_TIGHT = 'relative py-[64px] lp-md:py-[38px]'
export const TINT = 'bg-lp-soft'

/** Text + visual split used by the app, sport and catalogue bands. */
export const SPLIT = 'grid grid-cols-[repeat(2,1fr)] items-center gap-[50px] lp-lg:grid-cols-[1fr]'
export const SPLIT_TITLE = `${TITLE} text-[length:clamp(26px,3.4vw,38px)] lp-md:text-[26px]`
export const SPLIT_TEXT = 'mb-[22px] text-[16px] text-lp-muted'

/** Raised white tile with the light drop shadow (radius and padding are set per tile). */
export const TILE = 'border border-lp-line bg-white shadow-lp-sm'

/** Hover motion shared by cards that lift on hover. */
export const EASE_200 = 'transition-all duration-200 ease-[ease]'

const BUTTON_BASE = `inline-flex cursor-pointer items-center justify-center gap-[9px] rounded-[13px] border-[1.5px] font-extrabold ${EASE_200}`

const BUTTON_SIZES = {
  md: 'px-[30px] py-[15px] text-[15px]',
  lg: 'px-[34px] py-[18px] text-[17px]',
}

const GLOW_LIFT = 'shadow-[0_14px_30px_-12px_rgba(37,99,235,0.65)] hover:-translate-y-[2px]'

const BUTTON_TONES = {
  /** Main call to action: blue, glowing, lifts on hover. */
  primary: `border-transparent bg-lp-blue text-white hover:bg-lp-blue-d ${GLOW_LIFT}`,
  /** Secondary action on light backgrounds. */
  outline: 'border-lp-line bg-white text-lp-ink hover:border-lp-blue hover:text-lp-blue',
  /** Plain blue button without glow. */
  solid: 'border-transparent bg-lp-blue text-white hover:bg-lp-blue-d',
  /** Main action placed on the blue band. */
  light: `border-transparent bg-white text-lp-blue hover:bg-[#eef4ff] ${GLOW_LIFT}`,
  /** Secondary action placed on the blue band (no hover change, as on the original). */
  ghost: 'border-[rgba(255,255,255,0.45)] bg-transparent text-white',
}

export type ButtonTone = keyof typeof BUTTON_TONES
export type ButtonSize = keyof typeof BUTTON_SIZES

/** Button classes. Pass `null` as size when the call site provides its own padding and font size. */
export function buttonClass(tone: ButtonTone, size: ButtonSize | null, extra?: string) {
  return cx(BUTTON_BASE, BUTTON_TONES[tone], size && BUTTON_SIZES[size], extra)
}
