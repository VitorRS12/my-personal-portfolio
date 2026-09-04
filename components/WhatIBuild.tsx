import { whatIBuildData } from '@/data/whatibuild'
import { Section } from '@/components/ui/Section' 
import { FadeIn } from '@/components/motion/FadeIn'
import { Card } from '@/components/ui/Card'


export function WhatIBuild() {
  return (
    <Section id="what-i-build">
      <FadeIn>
        <h2 className="font-mono text-sm text-accent">O que eu construo</h2>
      </FadeIn>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {whatIBuildData.map((item, i) => {
          const Icon = item.icons
          return (
            <FadeIn key={item.title} delay={i * 0.1}>
              <Card className="cursor-target h-full">
                <Icon size={24} className="text-accent" />
                <h3 className="mt-4 font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {item.description}
                </p>
              </Card>
            </FadeIn>
          )
        })}
      </div>
    </Section>
  )
}