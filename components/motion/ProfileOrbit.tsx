'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CircularText } from '@/components/ui/CircularText'
import { MdBorderColor } from 'react-icons/md';

const BOX_SIZE = 200  // tamanho base do container (FOTO GRANDE)
const SMALL_SIZE = 40 // diâmetro do avatar final
const CORNER_X = 24   // alinhado ao px-6 do Header
const CORNER_Y = 12   // Centraliza verticalmente num header de ~64px
const DESKTOP_BREAKPOINT = 1024 
const DESKTOP_LEFT_OFFSET = 96 

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
    const isDesktop = width >= DESKTOP_BREAKPOINT

    const progress = useTransform(scrollY, [0, 500], [0, 1], { clamp: true })
    const scale = useTransform(progress, [0, 1], [1, SMALL_SIZE / BOX_SIZE])
    const textOpacity = useTransform(progress, [0.7, 1], [0, 1])
    const borderRadius = useTransform(progress, [0, 0.6, 1], ['16px', '50%', '50%'])
    const borderOpacity = useTransform(progress, [0, 0.6, 1], [0, 0, 1])

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
            <motion.div 
            style={{ opacity: textOpacity }} 
            className="absolute inset-0 overflow-hidden">
                <CircularText text="EDELSON * VITOR *" spinDuration={10} size={BOX_SIZE} fontSize={14} />
            </motion.div>

            <motion.div 
             style={{ borderRadius, borderColor: 'var(--color-border)' }}
             className="absolute inset-0 overflow-hidden"
             //bordar só aparece quando o avatar ficar pequeno
            >
                <motion.div style={{ opacity: borderOpacity }} className="absolute inset-0 rounded-[inherit] border border-border" />
                    <Image
                        src="/images/profile.jpg"
                        alt="Foto de Edelson Vitor"
                        fill
                        sizes="{`${BOX_SIZE}px`}"
                        className="object-contain"
                        priority
                    />
                </motion.div>
        </motion.div>
    )
} 
