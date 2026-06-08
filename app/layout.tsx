import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/layout/Navbar'
import './globals.css'

const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-geist'
})
const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Galaxy of Fire | Jake - Full Stack Developer',
  description: 'I AM CREATOR. DREAMER. CODE. DESIGN. DESTROY LIMITS. Building digital experiences that combine creativity, code, and purpose.',
  generator: 'v0.app',
  keywords: ['developer', 'portfolio', 'full stack', 'react', 'nextjs', 'typescript', 'data analytics'],
  authors: [{ name: 'Jake' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Galaxy of Fire | Jake - Full Stack Developer',
    description: 'Building digital experiences that combine creativity, code, and purpose.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0a0a14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
