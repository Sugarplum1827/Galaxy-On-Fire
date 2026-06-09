'use client'

import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/home/HeroSection'
import { GalaxyScene } from '@/components/home/GalaxyScene'
import { UniverseSummaryPanel } from '@/components/layout/UniverseSummaryPanel'

const StarField = dynamic(
  () => import('@/components/three/StarField').then(mod => mod.StarField),
  { ssr: false }
)

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />

      <div className="relative z-10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Desktop layout ── */}
          <div className="hidden lg:flex flex-col min-h-screen">

            {/* Top row: left (orb) + right (hero text bottom-anchored) */}
            <div className="flex flex-1 gap-8 xl:gap-12 items-stretch">

              {/* Left: Welcome label + Galaxy Scene */}
              <div className="flex-1 flex flex-col">
                {/* Welcome label sits above the scene */}
                <div className="pt-8 pb-2">
                  <p className="text-sm text-muted-foreground tracking-widest uppercase">
                    Welcome to my Universe
                  </p>
                </div>
                {/* Galaxy scene fills remaining space */}
                <div className="flex-1 relative">
                  <GalaxyScene />
                </div>
              </div>

              {/* Right: Hero text pinned to bottom */}
              <div className="w-[380px] xl:w-[420px] flex flex-col justify-end pb-12 pt-8">
                <HeroSection />
              </div>
            </div>

            {/* Bottom: Universe Summary Panel — full width, crosswise */}
            <div className="py-8 border-t border-white/5">
              <UniverseSummaryPanel />
            </div>
          </div>

          {/* ── Mobile / Tablet ── */}
          <div className="lg:hidden flex flex-col">
            <div className="pt-6 pb-2 text-center">
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                Welcome to my Universe
              </p>
            </div>
            <div className="relative h-[420px] sm:h-[500px] -mx-4">
              <GalaxyScene />
            </div>
            <div className="py-8 flex flex-col items-center text-center">
              <HeroSection />
            </div>
            <div className="py-6 border-t border-white/5">
              <UniverseSummaryPanel />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
