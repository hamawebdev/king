import { useEffect } from 'react'

/** Sets document.title while the page is mounted, then restores the previous one (the homepage keeps index.html's). */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
