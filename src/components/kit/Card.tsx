import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type CardProps = ComponentPropsWithoutRef<'div'> & {
  /** Hover lift + deeper shadow (CleanShot card). */
  interactive?: boolean
  /** Element to render (default div): 'article', 'li', 'a' … */
  as?: ElementType
}

/** White card: rounded-2xl, 1px line border, soft layered shadow. No padding — add your own (e.g. p-6). */
export function Card({ interactive, as: Tag = 'div', className, ...props }: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-2xl border border-line bg-canvas text-body shadow-card',
        interactive &&
          'transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card-hover motion-reduce:hover:translate-y-0',
        className,
      )}
      {...props}
    />
  )
}

type PillProps = ComponentPropsWithoutRef<'span'> & { icon?: ReactNode }

/** Rounded-full chip for the spec's « Pills » rows (emoji or lucide icon first). */
export function Pill({ icon, className, children, ...props }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-3.5 py-1.5 text-sm font-medium text-heading shadow-card',
        className,
      )}
      {...props}
    >
      {icon ? (
        <span aria-hidden="true" className="inline-flex shrink-0 items-center text-[1.05em] leading-none">
          {icon}
        </span>
      ) : null}
      {children}
    </span>
  )
}
