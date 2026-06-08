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
          {/* Desktop: Three Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-[300px_1fr_320px] xl:grid-cols-[340px_1fr_360px] gap-6 xl:gap-10 min-h-screen items-start">
            {/* Left Column - Hero Section */}
            <div className="py-8 sticky top-0 max-h-screen overflow-y-auto scrollbar-hide">
              <HeroSection />
            </div>

            {/* Center - Galaxy Scene */}
            <div className="relative flex items-center justify-center min-h-screen">
              <GalaxyScene />
            </div>

            {/* Right Column - Universe Summary Panel */}
            <div className="py-8 overflow-y-auto scrollbar-hide" style={{ maxHeight: '100vh' }}>
              <UniverseSummaryPanel />
            </div>
          </div>

          {/* Tablet/Mobile Layout */}
          <div className="lg:hidden flex flex-col">
            {/* Hero Section */}
            <div className="py-10 flex flex-col items-center text-center">
              <HeroSection />
            </div>

            {/* Galaxy Scene - Simplified for mobile */}
            <div className="relative h-[400px] sm:h-[500px] -mx-4">
              <GalaxyScene />
            </div>

            {/* Universe Summary Panel */}
            <div className="py-10 flex flex-col items-center">
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
