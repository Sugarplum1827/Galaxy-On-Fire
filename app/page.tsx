'use client'

import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/home/HeroSection'
import { GalaxyScene } from '@/components/home/GalaxyScene'
import { UniverseSummaryPanel } from '@/components/layout/UniverseSummaryPanel'

// Lazy load Three.js to avoid SSR issues
const StarField = dynamic(
  () => import('@/components/three/StarField').then(mod => mod.StarField),
  { ssr: false }
)

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Three.js Background */}
      <StarField />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Desktop: Side-by-side ── */}
          <div className="hidden lg:flex min-h-screen gap-6 xl:gap-10 items-stretch">

            {/* Left column: orb + welcome label + hero text stacked top→bottom */}
            <div className="flex-1 flex flex-col min-h-screen">

              {/* Center scene — takes all available space above the label */}
              <div className="flex-1 relative flex items-center justify-center">
                <GalaxyScene />
              </div>

              {/* Welcome label — sits just above the hero text */}
              <div className="py-3 px-2">
                <p className="text-sm text-muted-foreground tracking-widest uppercase">
                  Welcome to my Universe
                </p>
              </div>

              {/* Hero text — anchored to the bottom */}
              <div className="pb-10 px-2">
                <HeroSection />
              </div>
            </div>

            {/* Right column: Universe Summary Panel */}
            <div
              className="w-[320px] xl:w-[360px] py-8 overflow-y-auto scrollbar-hide"
              style={{ maxHeight: '100vh' }}
            >
              <UniverseSummaryPanel />
            </div>
          </div>

          {/* ── Mobile / Tablet ── */}
          <div className="lg:hidden flex flex-col">
            {/* Galaxy Scene */}
            <div className="relative h-[400px] sm:h-[500px] -mx-4">
              <GalaxyScene />
            </div>

            {/* Welcome label */}
            <div className="pt-4 pb-1 text-center">
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                Welcome to my Universe
              </p>
            </div>

            {/* Hero Section */}
            <div className="py-6 flex flex-col items-center text-center">
              <HeroSection />
            </div>

            {/* Universe Summary Panel */}
            <div className="py-6 flex flex-col items-center">
              <div className="w-full max-w-lg">
                <UniverseSummaryPanel />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
