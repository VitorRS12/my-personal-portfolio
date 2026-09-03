'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ButtonProps {
    href?: string
    variant?: 'primary' | 'secondary' 
    className?: string
    children: React.ReactNode
}

export function Button({ href, variant = 'primary', className, children }: ButtonProps) {
    const styles = cn(
        'cursor-target inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors',
    variant === 'primary'
    ? 'bg-accent text-background hover:bg-accent/90'
      : 'border border-border text-text-primary hover:border-accent/50',
    className
    )

    if (href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        )
    }

    return <button className={styles}>{children}</button>
}