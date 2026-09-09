'use client'

import { useEffect, useRef } from 'react'

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]|;:,.?!@#$%^&*'

export function MatrixRain({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = canvas?.parentElement
    if (!canvas || !container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const fontSize = 14
    let columns = 0
    let drops: number[] = []
    let animationId: number
    let resizeObserver: ResizeObserver

    const setup = () => {
      const dpr = window.devicePixelRatio || 1
      const { width, height } = container.getBoundingClientRect()
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      const newColumns = Math.floor(width / fontSize)
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops.push(Math.random() * -100)
        }
      }

      drops = drops.slice(0, newColumns)
      while (drops.length < newColumns) {
        drops.push(Math.random() * -100)
      }
      columns = newColumns
    }

    setup()
    resizeObserver = new ResizeObserver(setup)
    resizeObserver.observe(container)

    const draw = () => {
      const { width, height } = container.getBoundingClientRect()

      ctx.fillStyle = 'rgba(9, 9, 11, 0.06)'
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < columns; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)] ?? ' '
        const currentDrop = drops[i] ?? 0
        const y = currentDrop * fontSize
        const x = i * fontSize

        const alpha = Math.random() > 0.95 ? 1 : Math.random() * 0.5 + 0.1

        ctx.fillStyle =
          Math.random() > 0.98
            ? `rgba(255, 255, 255, ${alpha})`
            : `rgba(34, 211, 238, ${alpha})`

        ctx.fillText(char, x, y)

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] = (drops[i] ?? 0) + 0.5
      }
      animationId = requestAnimationFrame(draw)
    }
    
    animationId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  )
}