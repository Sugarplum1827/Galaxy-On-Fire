'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' }
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf' // Make sure this file exists in /public
    link.download = 'Randolf_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-cosmic-purple group-hover:text-cosmic-cyan transition-colors" />
                <div className="absolute inset-0 blur-sm bg-cosmic-purple/50 group-hover:bg-cosmic-cyan/50 transition-colors" />
              </div>
              <span className="text-lg font-bold tracking-wider text-white">
                GALAXY OF FIRE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-white'
                        : 'text-muted-foreground hover:text-white'
                    )}
                  >
                    {link.label}

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan"
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.6
                        }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Desktop Download Button */}
            <div className="hidden md:flex items-center gap-4">
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white border border-cosmic-purple/50 rounded-lg hover:bg-cosmic-purple/10 hover:border-cosmic-purple transition-all"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/5"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-sm font-medium transition-all',
                      isActive
                        ? 'bg-cosmic-purple/20 text-white border border-cosmic-purple/30'
                        : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}

              {/* Mobile Download Button */}
              <button
                onClick={handleDownloadCV}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-4 text-sm font-medium text-white border border-cosmic-purple/50 rounded-lg hover:bg-cosmic-purple/10 transition-all"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
