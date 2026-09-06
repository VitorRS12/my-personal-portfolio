import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const siteUrl = 'https://edelsonvitor.dev' // troque pelo dominio quando tiver 

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Edelson Vitor - Desenvovolvedor Full Stack",
  description: 
    "Desenvolvedor full-stack especializado em sistemas web industriais. React, Next.js, TypeScript e SQL.",
  keywords: [
    'Edelson Vitor',
    'React',
    'Next.js',
    'TypeScript',
    'sistemas industriais',
  ],
  authors:[{name: 'Edelson Vitor'}],
  openGraph: {
    title: 'Edelson Vitor - Analista e desenvolvedor de Sistemas',
    description: 
      'Desenvolvedor especializado em sistemas industriais. React, Next.js, TypeScript e SQL',
    url: siteUrl,
    siteName: 'Edelson Vitor',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Edelson Vitor - Analista e Desenvolvedor de Sistemas' 
      },
    ],
  },
  twitter:{
    card: 'summary_large_image',
    title: 'Edelson Vitor - Analista e Desenvolvedor de Sistemas',
    description:
      'Desenvolvedor full-stack especializado em sistemas web industriais.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ 
  children, 
}: {
  children: React.ReactNode 
}) {
  return (
    <html
      lang= "pt-br"
      className={`${GeistSans.variable} ${GeistMono.variable}`}> 
      <body>{children}</body>
    </html>
  );
}
