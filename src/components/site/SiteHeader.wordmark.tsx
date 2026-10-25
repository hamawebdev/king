import { cn } from '@/lib/utils'

/** Text wordmark per spec: « Nova » in slate, « Stream. » in brand blue. Inherits font size from className. */
export function Wordmark({ onDark, className }: { onDark?: boolean; className?: string }) {
  return (
    <span className={cn('font-sans font-extrabold tracking-tight whitespace-nowrap', className)}>
      <span className={onDark ? 'text-white' : 'text-heading'}>Nova</span>
      <span className={onDark ? 'text-blue-400' : 'text-brand'}>Stream.</span>
    </span>
  )
}
