import { useState, useEffect, useRef, useCallback } from 'react'

export function useActiveSection<T extends string>(sections: readonly T[]) {
  const [activeSection, setActiveSection] = useState<T>(sections[0])
  const sectionElements = useRef<Map<string, HTMLElement>>(new Map())
  const refCallbacks = useRef<Map<string, (el: HTMLElement | null) => void>>(new Map())

  const sectionRef = useCallback((id: string) => {
    let callback = refCallbacks.current.get(id)
    if (!callback) {
      callback = (el: HTMLElement | null) => {
        if (el) sectionElements.current.set(id, el)
        else sectionElements.current.delete(id)
      }
      refCallbacks.current.set(id, callback)
    }
    return callback
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as T)
          }
        })
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    )

    sectionElements.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return { activeSection, sectionRef }
}
