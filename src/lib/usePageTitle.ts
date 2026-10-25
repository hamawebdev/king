import { useEffect } from 'react'

/**
 * Sets document.title while the page is mounted, then restores the previous one. Pass the title in the current
 * language (e.g. from useCopy); it updates when the visitor switches language.
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
