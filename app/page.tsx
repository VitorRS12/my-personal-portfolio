import Image from "next/image"
import TargetCursor from '@/components/ui/TargetCursor'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { WhatIBuild } from '@/components/WhatIBuild'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Education } from '@/components/Education'
import { Certifications } from '@/components/Certifications'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ProfileOrbit } from "@/components/motion/ProfileOrbit"
import { Target } from "lucide-react"

export default function Home() {
  return (
    <>
    <ProfileOrbit />
    <TargetCursor
      targetSelector=".cursor-target"
      spinDuration={2}
      cursorColor="#fafafa"
      cursorColorOnTarget="#22d3ee" 
      hideDefaultCursor={true}
      />
      <Header />
      <ProfileOrbit />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
