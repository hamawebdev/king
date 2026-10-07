import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

// Shopping cart outline (the checkout empty-cart notice still uses it; the chrome now uses Tabler icons).
export function CartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 28 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 2h3.4l3.3 11.2h14.6l3.2-8.2H6.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.2 8.4h11.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="10.4" cy="17.3" r="1.7" fill="currentColor" />
      <circle cx="19.6" cy="17.3" r="1.7" fill="currentColor" />
    </svg>
  )
}
