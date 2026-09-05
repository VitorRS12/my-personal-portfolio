'use client'

import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ContactForm () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => { 
        e.preventDefault()
        //Implementação real de envio fica para uma etapa futura 
        console.log({ name, email, message })
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="text-sm texte-text-secondary">
                    Nome
                </label>
                <input 
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-text-primary outline-none transition-colors focus:border-accent"
                />
            </div>
            <div>
                <label htmlFor="email" className="text-sm text-text-secondary">
                    E-mail
                </label>
                <input 
                id="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-text-primary outline-none transition-colors focus:border-accent"
                />
            <div>
                <label htmlFor="message" className="text-sm text-text-secondary">
                    Mensagem
                </label>
                <input 
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-text-primary outline-none transition-colors focus:border-accent"
                />
            </div>

            <Button className="w-full sm:w-auto">
                Enviar mensagem <Send size={16} className="ml-2" />
            </Button>
            </div>
        </form>
    )
}