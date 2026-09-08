'use client'

import { useEffect, useState, type RefObject } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CircularText } from '@/components/ui/CircularText'

const SMALL_SIZE = 40
const CORNER_X = 24
const CORNER_Y = 12

interface ProfileOrbitProps {
  anchorRef: RefObject<HTMLDivElement | null>
}

export function ProfileOrbit({ anchorRef }: ProfileOrbitProps) {
  const { scrollY } = useScroll()
  const [anchor, setAnchor] = useState<{ x: number; y: number; size: number } | null>(null)

  useEffect(() => {
    const measure = () => {
      const el = anchorRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      // rect.width === 0 significa que o espaço reservado está 'hidden' (mobile) —
      // nesse caso, centraliza a foto manualmente no topo da tela
      if (rect.width === 0) {
        const fallbackSize = 200
        setAnchor({
          x: window.innerWidth / 2 - fallbackSize / 2,
          y: window.innerHeight * 0.22,
          size: fallbackSize,
        })
      } else {
        setAnchor({ x: rect.left, y: rect.top, size: rect.width })
      }
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [anchorRef])

  const progress = useTransform(scrollY, [0, 500], [0, 1], { clamp: true })

  const boxSize = anchor?.size ?? 200
  const scale = useTransform(progress, [0, 1], [1, SMALL_SIZE / boxSize])
  const textOpacity = useTransform(progress, [0.7, 1], [0, 1])
  const borderRadius = useTransform(progress, [0, 0.6, 1], ['16px', '50%', '50%'])
  const borderOpacity = useTransform(progress, [0, 0.6, 1], [0, 0, 1])
  const glowOpacity = useTransform(progress, [0, 0.3], [1, 0])

  const x = useTransform(progress, [0, 1], [anchor?.x ?? 0, CORNER_X])
  const y = useTransform(progress, [0, 1], [anchor?.y ?? 0, CORNER_Y])

  if (!anchor) return null

  return (
    <motion.div
      style={{ x, y, scale, width: boxSize, height: boxSize, transformOrigin: 'top left' }}
      className="pointer-events-none fixed left-0 top-0 z-[60]"
    >
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute -inset-8 -z-10 rounded-full bg-accent/25 blur-3xl"
      />

      <motion.div style={{ opacity: textOpacity }} className="absolute inset-0">
        <CircularText text="EDELSON * VITOR *" spinDuration={16} size={boxSize} fontSize={14} />
      </motion.div>

      <motion.div
        style={{ borderRadius }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          style={{ opacity: borderOpacity }}
          className="absolute inset-0 rounded-[inherit] border border-border"
        />
        <Image
          src="/images/profile.png"
          alt="Foto de Edelson Vitor"
          fill
          sizes={`${boxSize}px`}
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  )
}