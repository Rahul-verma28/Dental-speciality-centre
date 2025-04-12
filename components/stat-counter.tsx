"use client"

import { useState, useEffect, useRef } from "react"

interface StatCounterProps {
  end: number
  suffix?: string
  label: string
  duration?: number
}

export default function StatCounter({ end, suffix = "", label, duration = 2000 }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true

      let startTime: number
      let animationFrameId: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)

        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step)
        }
      }

      animationFrameId = requestAnimationFrame(step)

      return () => cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible, end, duration])

  const formattedCount = count.toLocaleString()

  return (
    <div className="text-center" ref={countRef}>
      <div className="text-3xl font-bold md:text-4xl lg:text-5xl">
        {formattedCount}
        {suffix}
      </div>
      <div className="mt-2 text-xl md:text-base">{label}</div>
    </div>
  )
}
