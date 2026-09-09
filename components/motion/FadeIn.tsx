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
            initial={{ opacity: 0, y: 12, scale:0.96, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, scale:1, filter: 'blur(0px)'}}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

