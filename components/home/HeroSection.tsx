'use client'

import { motion } from 'framer-motion'
import { MapPin, Zap, Github, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react'
import { creator } from '@/lib/data/creator'

export function HeroSection() {
  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Main Hero Content */}
      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground tracking-widest uppercase"
        >
          Welcome to my Universe
        </motion.p>

        <div className="space-y-1">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            I AM
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-glow-purple"
          >
            CREATOR.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-glow-purple"
          >
            DREAMER.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-muted-foreground"
          >
            CODE. DESIGN.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight gradient-cosmic-text"
          >
            DESTROY LIMITS.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-muted-foreground max-w-sm leading-relaxed"
        >
          I build digital experiences that combine creativity, code, and purpose.
          Let&apos;s create something legendary.
        </motion.p>

        <motion.a
          href="/projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02, x: 5 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-6 py-3 glass glass-hover rounded-lg border border-white/10 hover:border-cosmic-purple/50 transition-all group"
        >
          <span className="text-sm font-medium tracking-wider uppercase">
            Explore My Work
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>

      {/* Status Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="space-y-3"
      >
        {/* Location Card */}
        <div className="glass rounded-lg p-3 inline-flex items-center gap-3 border border-white/5">
          <div className="w-8 h-8 rounded-full bg-cosmic-blue/20 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-cosmic-blue" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Current Location
            </p>
            <p className="text-sm font-medium">{creator.location}</p>
          </div>
        </div>

        {/* Status Card */}
        <div className="glass rounded-lg p-3 inline-flex items-center gap-3 border border-white/5">
          <div className="w-8 h-8 rounded-full bg-cosmic-purple/20 flex items-center justify-center">
            <Zap className="w-4 h-4 text-cosmic-purple" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Status
            </p>
            <p className="text-sm font-medium">{creator.status}</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="glass rounded-lg p-4 border border-white/5">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
            Follow Me
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: creator.socialLinks[0]?.url },
              { icon: Linkedin, href: creator.socialLinks[1]?.url },
              { icon: Twitter, href: creator.socialLinks[2]?.url },
              { icon: Instagram, href: creator.socialLinks[3]?.url }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
