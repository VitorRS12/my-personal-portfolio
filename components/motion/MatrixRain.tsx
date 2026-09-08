'use client'

import { useEffect, useRef } from 'react'

const CHARS = '01アイウエオカキクケコ<>/{}[]#$%'

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

    const fontSize = 16
    let columns = 0
    let drops: number[] = []
    let animationId: number

    const setup = () => {
      const dpr = window.devicePixelRatio || 1
      const { width, height } = container.getBoundingClientRect()
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)

      columns = Math.floor(width / fontSize)
      drops = Array.from({ length: columns }, () => Math.random() * -50)
    }

    setup()
    const resizeObserver = new ResizeObserver(setup)
    resizeObserver.observe(container)

    let lastFrame = 0
    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw)
      if (timestamp - lastFrame < 60) return // ~16fps, suficiente para o efeito e leve na CPU
      lastFrame = timestamp

      const { width, height } = container.getBoundingClientRect()

      ctx.fillStyle = 'rgba(9, 9, 11, 0.08)'
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${fontSize}px monospace`

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)] ?? ' '
        const x = i * fontSize

        // caractere na "cabeça" da coluna, mais brilhante
        ctx.fillStyle = 'rgba(103, 232, 249, 0.7)'
        ctx.fillText(char, x, y * fontSize)

        if (y * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] = y + 1
      })
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