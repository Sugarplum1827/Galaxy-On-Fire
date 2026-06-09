'use client'

import { motion } from 'framer-motion'
import { MapPin, Zap, Mail, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react'

import siteData from '@/lib/data/site.json'

const { hero, creator } = siteData

const socialIcons: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
}

function lineClass(style: string) {
  switch (style) {
    case 'glow-purple':  return 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-glow-purple'
    case 'muted':        return 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-muted-foreground'
    case 'gradient':     return 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight gradient-cosmic-text'
    default:             return 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight'
  }
}

export function HeroSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-6">
        {/* Headline lines */}
        <div className="space-y-1">
          {hero.lines.map((line, i) => (
            <motion.h1
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={lineClass(line.style)}
            >
              {line.text}
            </motion.h1>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="text-muted-foreground max-w-sm leading-relaxed"
        >
          {hero.subtext}
        </motion.p>

        <motion.a
          href={hero.ctaHref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          whileHover={{ scale: 1.02, x: 5 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-6 py-3 glass glass-hover rounded-lg border border-white/10 hover:border-cosmic-purple/50 transition-all group"
        >
          <span className="text-sm font-medium tracking-wider uppercase">{hero.ctaLabel}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>

      {/* Status cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95 }}
        className="space-y-3"
      >
        <div className="glass rounded-lg p-3 inline-flex items-center gap-3 border border-white/5">
          <div className="w-8 h-8 rounded-full bg-cosmic-blue/20 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-cosmic-blue" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Current Location</p>
            <p className="text-sm font-medium">{creator.location}</p>
          </div>
        </div>

        <div className="glass rounded-lg p-3 inline-flex items-center gap-3 border border-white/5">
          <div className="w-8 h-8 rounded-full bg-cosmic-purple/20 flex items-center justify-center">
            <Zap className="w-4 h-4 text-cosmic-purple" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Status</p>
            <p className="text-sm font-medium">{creator.status}</p>
          </div>
        </div>

        <div className="glass rounded-lg p-4 border border-white/5">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Follow Me</p>
          <div className="flex items-center justify-center gap-4 w-full">
            {creator.socialLinks.map((link, i) => {
              const Icon = socialIcons[link.icon] || Github
              return (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
