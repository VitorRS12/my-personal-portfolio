import {Award } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import{ FadeIn } from '@/components/motion/FadeIn'
import { certificationsData } from '@/data/certifications'


export function Certifications() {
  return (
    <section id="certifications" className="flex min-h-screen items-center justify-center">
      <FadeIn>
        <h2 className="font-mono text-sm text-accent">Certificações</h2>
      </FadeIn>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {certificationsData.map((cert, i) => (
          <FadeIn key={cert.name} delay={i * 0.1}>
            <Card className="cursor-target flex items-statr gap-3">
              <Award size={20} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-text-primary">
                  {cert.name}
                </p>
                <p className="text-xs text-text-secondary">{cert.issuer}</p>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}