import { useState, useEffect } from 'react'

interface TypingOptions {
  speed?: number
  delay?: number
  enabled?: boolean
}

export function useTypingEffect(text: string, options: TypingOptions = {}) {
  const { speed = 60, delay = 300, enabled = true } = options
  const [displayedText, setDisplayedText] = useState(enabled ? '' : text)
  const [isComplete, setIsComplete] = useState(!enabled)

  useEffect(() => {
    if (!enabled) {
      setDisplayedText(text)
      setIsComplete(true)
      return
    }

    setDisplayedText('')
    setIsComplete(false)

    let intervalId: ReturnType<typeof setInterval> | undefined
    const delayId = setTimeout(() => {
      let index = 0
      intervalId = setInterval(() => {
        index++
        setDisplayedText(text.slice(0, index))
        if (index >= text.length) {
          clearInterval(intervalId)
          setIsComplete(true)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(delayId)
      if (intervalId !== undefined) clearInterval(intervalId)
    }
  }, [text, speed, delay, enabled])

  return { displayedText, isComplete }
}
