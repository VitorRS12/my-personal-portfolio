'use client'

import { useEffect } from 'react'
import { motion, useAnimation, useMotionValue, type MotionValue } from 'framer-motion'

interface CircularTextProps {
    text: string
    spinDuration?: number
    onHover?:'slowDown' | 'speedUp' | 'pause' | 'goBonkers' 
    size?: number // diâmetro em pixels
    fontSize?: number // tamanho da letra em pixels
    className?: string
}

const getRotationTransition = (duration: number, from: number, to: number) => ({
    from, to: from + 360,
    ease: 'linear' as const,
    duration, 
    type: 'tween' as const,
    repeat: Infinity,
})

export function CircularText({
    text,
    spinDuration = 20,
    size = 200,
    fontSize = 16,
    className = '',
}: CircularTextProps) {
    const letters = Array.from(text)
    const controls = useAnimation()
    const rotation: MotionValue<number> = useMotionValue(0)
    const radius = size / 2 

    useEffect(() => {
        const start = rotation.get()
        controls.start({
            rotate: start + 360,
            transition: getRotationTransition(spinDuration, start, start + 360),
        })
    }, [spinDuration, text, controls, rotation])

    return (
        <motion.div 
            className={`pointer-events-none relative m-0 origin-center rounded-full text-center font-bold text-text-primary ${className}`}
            style={{ width: size, height: size, rotate: rotation}}
        >
            {letters.map((letter, i) => {
                const angle = (360/letters.length) * i
                return (
                    <span 
                        key={i}
                        className="absolute left-1/2 top-1/2 origin-top-left"
                        style={{
                            fontSize,
                            transform: `rotate(${angle}deg) translate(0, -${radius}px)`,
                        }}
                    >
                        {letter}
                    </span>
                )
            })}
        </motion.div>
    )
}