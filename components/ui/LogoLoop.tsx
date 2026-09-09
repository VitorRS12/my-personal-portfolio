'use client'

import { useCallback, useEffect, useMemo, useRef, useState, memo, type ReactNode, type CSSProperties } from 'react'

interface LogoItem {
  node: ReactNode
  title?: string
  href?: string
}

interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right'
  logoHeight?: number
  gap?: number
  fadeOut?: boolean
  scaleOnHover?: boolean
  ariaLabel?: string
  className?: string
}

const SMOOTH_TAU = 0.25
const MIN_COPIES = 2
const COPY_HEADROOM = 2

export const LogoLoop = memo(function LogoLoop({
  logos,
  speed = 50,
  direction = 'left',
  logoHeight = 24,
  gap = 32,
  fadeOut = true,
  scaleOnHover = true,
  ariaLabel = 'Tecnologias',
  className = '',
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const seqRef = useRef<HTMLUListElement>(null)

  const [seqWidth, setSeqWidth] = useState(0)
  const [copyCount, setCopyCount] = useState(MIN_COPIES)
  const [isHovered, setIsHovered] = useState(false)

  const targetVelocity = useMemo(
    () => Math.abs(speed) * (direction === 'left' ? 1 : -1),
    [speed, direction]
  )

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0
    const sequenceWidth = seqRef.current?.getBoundingClientRect().width ?? 0
    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth))
      setCopyCount(
        Math.max(MIN_COPIES, Math.ceil(containerWidth / sequenceWidth) + COPY_HEADROOM)
      )
    }
  }, [])

  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [updateDimensions, logos, gap, logoHeight])

  const rafRef = useRef<number | null>(null)
  const lastTimestampRef = useRef<number | null>(null)
  const offsetRef = useRef(0)
  const velocityRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp
      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000
      lastTimestampRef.current = timestamp

      const target = isHovered ? 0 : targetVelocity
      const easingFactor = 1 - Math.exp(-deltaTime / SMOOTH_TAU)
      velocityRef.current += (target - velocityRef.current) * easingFactor

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth
        offsetRef.current = nextOffset
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      lastTimestampRef.current = null
    }
  }, [targetVelocity, seqWidth, isHovered])

  const fadeStyle: CSSProperties = { ['--fade-color' as string]: 'var(--color-card)' }

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={ariaLabel}
      className={`relative overflow-hidden ${className}`}
      style={fadeStyle}
    >
      {fadeOut && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[var(--fade-color)] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[var(--fade-color)] to-transparent" />
        </>
      )}
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {Array.from({ length: copyCount }).map((_, copyIndex) => (
          <ul
            key={copyIndex}
            ref={copyIndex === 0 ? seqRef : undefined}
            aria-hidden={copyIndex > 0}
            className="flex items-center"
          >
            {logos.map((item, i) => (
              <li
                key={`${copyIndex}-${i}`}
                title={item.title}
                style={{ fontSize: logoHeight, marginRight: gap }}
                className={`cursor-target shrink-0 text-text-secondary transition-transform ${
                  scaleOnHover ? 'hover:scale-125 hover:text-accent' : ''
                }`}
              >
                {item.node}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
})