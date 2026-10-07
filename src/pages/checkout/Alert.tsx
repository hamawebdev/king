import type { ReactNode } from 'react'
import { noticeClass } from '@/components/brand'
import { cn } from '@/lib/utils'

export type AlertType = 'error' | 'info' | 'success'

const ICON: Record<AlertType, string> = {
  error: 'ti-alert-circle',
  info: 'ti-info-circle',
  success: 'ti-circle-check',
}

// Checkout notice (DIRECTION §6.14): errors on alert-100, information and success on evergreen-100.
export function Alert({ type, children, onClose }: { type: AlertType; children: ReactNode; onClose: () => void }) {
  return (
    <div className={cn(noticeClass[type === 'error' ? 'error' : 'success'], 'items-start')} role="alert">
      <i className={cn('ti mt-0.5 shrink-0 text-[18px]', ICON[type])} aria-hidden="true" />
      <div className="min-w-0 flex-1">{children}</div>
      <a
        className="-my-1 -mr-1.5 grid size-8 shrink-0 place-items-center rounded-control text-[16px] transition-colors duration-180 ease-calm hover:bg-current/10"
        href="#"
        aria-label="Fermer"
        onClick={(e) => {
          e.preventDefault()
          onClose()
        }}
      >
        <i className="ti ti-x" aria-hidden="true" />
      </a>
    </div>
  )
}
