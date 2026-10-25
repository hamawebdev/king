import { cn } from '@/lib/utils'

export type ButtonVariant = 'brand' | 'outline' | 'ghost' | 'whatsapp'
export type ButtonSize = 'md' | 'lg'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-normal text-center leading-tight no-underline select-none ' +
  'transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out active:translate-y-px motion-reduce:active:translate-y-0 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

const VARIANTS: Record<ButtonVariant, string> = {
  brand: 'bg-brand text-white shadow-cta hover:bg-brand-hover',
  // « Contour Ardoise »: slate outline on white
  outline: 'border border-slate-300 bg-canvas text-heading shadow-card hover:border-slate-400 hover:bg-slate-50',
  ghost: 'text-brand hover:bg-brand-soft hover:text-brand-hover',
  whatsapp: 'bg-whatsapp text-white shadow-cta-wa hover:bg-whatsapp-hover focus-visible:outline-whatsapp-hover',
}

const SIZES: Record<ButtonSize, string> = {
  md: 'min-h-11 px-5 py-2.5 text-[0.9375rem]',
  lg: 'min-h-13 px-7 py-3 text-base',
}

/** Class string for a button-looking element (for the rare case you need it on your own element). */
export function buttonClasses({
  variant = 'brand',
  size = 'md',
  fullWidth,
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; fullWidth?: boolean; className?: string } = {}) {
  return cn(BASE, VARIANTS[variant], SIZES[size], fullWidth && 'w-full', className)
}
