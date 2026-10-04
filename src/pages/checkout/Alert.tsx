import type { ReactNode } from 'react'

export type AlertType = 'error' | 'info' | 'success'

// Theme alert box (BeTheme prints WooCommerce notices with its own alert markup). Icons are original drawings.
function AlertIcon({ type }: { type: AlertType }) {
  return (
    <svg viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <circle className="path" cx="15" cy="15" r="11.5" strokeWidth="1.5" />
      {type === 'success' ? (
        <path className="path" d="M10 15.4l3.4 3.4L20.2 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : type === 'info' ? (
        <path className="path" d="M15 13.5v7M15 9.5v1" strokeWidth="1.6" strokeLinecap="round" />
      ) : (
        <path className="path" d="M15 9v7.5M15 20v1" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  )
}

export function Alert({ type, children, onClose }: { type: AlertType; children: ReactNode; onClose: () => void }) {
  return (
    <div className={`co-alert co-alert--${type}`} role="alert">
      <div className="co-alert__icon">
        <AlertIcon type={type} />
      </div>
      <div className="co-alert__wrapper">{children}</div>
      <a
        className="co-alert__close"
        href="#"
        aria-label="Fermer"
        onClick={(e) => {
          e.preventDefault()
          onClose()
        }}
      >
        <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path className="path" d="M1.5 1.5l9 9M10.5 1.5l-9 9" strokeWidth="1.5" />
        </svg>
      </a>
    </div>
  )
}
