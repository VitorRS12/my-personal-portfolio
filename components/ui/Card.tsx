import { cn } from '@/lib/utils'
import React from 'react';

interface CardProps {
    className?: string
    children: React.ReactNode
} 

export function Card({ className, children}: CardProps) {
    return(
        <div 
            className={cn(
                'rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50',
                className
            )}
        >
            {children}
        </div>
    )
}