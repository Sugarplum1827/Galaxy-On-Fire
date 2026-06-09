'use client'

import { motion } from 'framer-motion'
import {
  User, Target, Sparkles, Code2, Server, BarChart3, Palette, Lightbulb
} from 'lucide-react'
import siteData from '@/lib/data/site.json'

const { creator } = siteData

const expertiseIcons = [Code2, Server, BarChart3, Palette, Lightbulb]

export function UniverseSummaryPanel() {
  return (
    <div className="space-y-4">
      {/* Panel title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-0.5"
      >
        <h2 className="text-base font-bold tracking-widest uppercase">Universe Summary Panel</h2>
        <p className="text-xs text-muted-foreground">Your interactive overview</p>
      </motion.div>

      {/* ── Row 1: Profile · Mission · Stats (3 columns) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-4 border border-white/5 space-y-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full glass border border-cosmic-purple/30 flex items-center justify-center shrink-0">
              <User className="w-5 h-5 text-cosmic-purple" />
            </div>
            <div>
              <h3 className="font-bold">{creator.name}</h3>
              <p className="text-xs text-muted-foreground leading-tight">{creator.title}</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cosmic-cyan/30 bg-cosmic-cyan/10">
            <Sparkles className="w-3 h-3 text-cosmic-cyan" />
            <span className="text-xs font-medium text-cosmic-cyan">
              CREATOR LEVEL {creator.level}
            </span>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass rounded-xl p-4 border border-white/5 space-y-2"
        >
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-cosmic-purple" />
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Mission Statement
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {creator.missionStatement}
          </p>
        </motion.div>

        {/* Universe Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-4 border border-white/5 space-y-3"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Universe Stats
          </span>
          <div className="grid grid-cols-4 gap-1 text-center">
            <div>
              <p className="text-xl font-bold">{creator.stats.skillsMastered}</p>
              <p className="text-[9px] text-muted-foreground uppercase leading-tight">Skills<br/>Mastered</p>
            </div>
            <div>
              <p className="text-xl font-bold">{creator.stats.projectsBuilt}+</p>
              <p className="text-[9px] text-muted-foreground uppercase leading-tight">Projects<br/>Built</p>
            </div>
            <div>
              <p className="text-xl font-bold">{creator.stats.yearsExperience}+</p>
              <p className="text-[9px] text-muted-foreground uppercase leading-tight">Years<br/>Exp.</p>
            </div>
            <div>
              <p className="text-xl font-bold text-cosmic-cyan">∞</p>
              <p className="text-[9px] text-muted-foreground uppercase leading-tight">Possi-<br/>bilities</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Row 2: Core Expertise full width ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="glass rounded-xl p-4 border border-white/5 space-y-3"
      >
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Core Expertise
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-x-6 gap-y-3">
          {creator.expertise.map((exp, i) => {
            const Icon = expertiseIcons[i] || Code2
            return (
              <div key={exp.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-3 h-3 shrink-0" style={{ color: exp.color }} />
                    <span className="truncate">{exp.name}</span>
                  </div>
                  <span className="text-muted-foreground ml-1">{exp.percentage}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${exp.percentage}%` }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.8 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: exp.color }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
