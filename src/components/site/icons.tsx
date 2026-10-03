import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

// Shopping cart outline used in the header, side menu and cart drawer.
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

// Three thin lines (mobile menu toggle).
export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 22 16" fill="none" aria-hidden="true" {...props}>
      <path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

// Thin cross (side menu close).
export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

// Open chevron pointing up (back to top).
export function ChevronUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 12" fill="none" aria-hidden="true" {...props}>
      <path d="M1.5 10.5L10 2l8.5 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

// Line-art cookie (consent bar). Original drawing.
export function CookieIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M54.6 30.4c-4.6.9-8.5-2.6-8.1-7.1-4.6.6-8.3-3.3-7.4-7.9-1.9-2.3-2.6-4.7-2.4-7.4C34.5 7.7 33.3 7.6 32 7.6 18.5 7.6 7.6 18.5 7.6 32S18.5 56.4 32 56.4 56.4 45.5 56.4 32c0-.5 0-1.1-.1-1.6h-1.7z"
        stroke="#333"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="24" r="2.2" fill="#333" />
      <circle cx="19" cy="36" r="2.6" fill="#333" />
      <circle cx="30" cy="31" r="1.6" fill="#333" />
      <circle cx="27" cy="44" r="2.2" fill="#333" />
      <circle cx="39" cy="40" r="2.6" fill="#333" />
      <circle cx="44" cy="48" r="1.5" fill="#333" />
      <circle cx="33" cy="19" r="1.5" fill="#333" />
    </svg>
  )
}
