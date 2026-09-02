'use client'

import { motion } from 'framer-motion'

interface FadeInProps {
    children: React.ReactNode
    delay?: number
    className?: string
}

export function FadeIn({children, delay, className}: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay || 0, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

