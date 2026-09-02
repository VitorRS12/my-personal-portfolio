'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CircularText } from '@/components/ui/CircularText'

const BOX_SIZE = 200  // tamanho base do container (FOTO GRANDE)
const SMALL_SIZE = 40 // diâmetro do avatar final
const CORNER_X = 24   // alinhado ao px-6 do Header
const CORNER_Y = 12   // Centraliza verticalmente num header de ~64px

function useWindowSize() {
    const [size, setSize] = useState({ width: 0, height: 0 })
    useEffect(() => {
        const update = () => setSize({ width: window.innerWidth, height: window.innerHeight })
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])
    return size
}

export function ProfileOrbit() {
    const { scrollY } = useScroll()
    const { width, height } = useWindowSize()

    const progress = useTransform(scrollY, [0, 500], [0, 1], { clamp: true })
    const scale = useTransform(progress, [0, 1], [1, SMALL_SIZE / BOX_SIZE])
    const textOpacity = useTransform(progress, [0.7, 1], [0, 1])

    const initialX = width / 2 - BOX_SIZE / 2
    const initialY = height * 0.32 - BOX_SIZE / 2
    const x = useTransform(progress, [0, 1], [initialX, CORNER_X])
    const y = useTransform(progress, [0, 1], [initialY, CORNER_Y])

    if (!width) return null

    return (
        <motion.div
            style={{ x, y, scale, width: BOX_SIZE, height: BOX_SIZE, transformOrigin: 'top left' }}
            className=" pointer-events-none fixed left-0 top-0 z-60" 
        >
            <motion.div style={{ opacity: textOpacity }} className="absolute inset-0">
                <CircularText text="EDELSON * VITOR *" spinDuration={10} size={BOX_SIZE} fontSize={14} />
            </motion.div>

            <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-1/2 overflow-hidden rounded-full border border-border">
                <Image
                    src="/images/profile.jpg"
                    alt="Foto de Edelson Vitor"
                    fill
                    sizes="200px"
                    className="object-cover"
                    priority
                />
            </div>
        </motion.div>
    )
} 
