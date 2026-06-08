'use client'

import { motion } from 'framer-motion'
import { 
  User, 
  Target, 
  Sparkles, 
  Code2, 
  Server, 
  BarChart3, 
  Palette,
  Lightbulb,
  Mic
} from 'lucide-react'
import { creator } from '@/lib/data/creator'

export function UniverseSummaryPanel() {
  return (
    <div className="h-full flex flex-col gap-4 overflow-y-auto py-4 pr-2">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1"
      >
        <h2 className="text-lg font-bold tracking-wide">UNIVERSE SUMMARY PANEL</h2>
        <p className="text-xs text-muted-foreground">Your interactive overview</p>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-xl p-4 border border-white/5 space-y-3"
      >
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full glass border border-cosmic-purple/30 flex items-center justify-center">
            <User className="w-6 h-6 text-cosmic-purple" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{creator.name}</h3>
            <p className="text-xs text-muted-foreground">{creator.title}</p>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cosmic-cyan/30 bg-cosmic-cyan/10">
          <Sparkles className="w-3 h-3 text-cosmic-cyan" />
          <span className="text-xs font-medium text-cosmic-cyan">
            CREATOR LEVEL {creator.level}
          </span>
        </div>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-xl p-4 border border-white/5 space-y-2"
      >
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-cosmic-purple" />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Mission Statement
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {creator.missionStatement}
        </p>
      </motion.div>

      {/* Universe Stats */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-xl p-4 border border-white/5 space-y-3"
      >
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Universe Stats
        </span>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <p className="text-2xl font-bold">{creator.stats.skillsMastered}</p>
            <p className="text-[10px] text-muted-foreground uppercase">Skills Mastered</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{creator.stats.projectsBuilt}+</p>
            <p className="text-[10px] text-muted-foreground uppercase">Projects Built</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{creator.stats.yearsExperience}+</p>
            <p className="text-[10px] text-muted-foreground uppercase">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cosmic-cyan">∞</p>
            <p className="text-[10px] text-muted-foreground uppercase">Possibilities</p>
          </div>
        </div>
      </motion.div>

      {/* Core Expertise */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="glass rounded-xl p-4 border border-white/5 space-y-3"
      >
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Core Expertise
        </span>
        <div className="space-y-3">
          {creator.expertise.map((exp, index) => {
            const icons = [Code2, Server, BarChart3, Palette, Lightbulb]
            const Icon = icons[index] || Code2
            return (
              <div key={exp.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Icon className="w-3 h-3" style={{ color: exp.color }} />
                    <span>{exp.name}</span>
                  </div>
                  <span className="text-muted-foreground">{exp.percentage}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${exp.percentage}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className="h-full rounded-full progress-glow"
                    style={{ backgroundColor: exp.color }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Current Mission */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="glass rounded-xl p-4 border border-white/5 space-y-2"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Current Mission
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full bg-cosmic-green"
          />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {creator.currentMission}
        </p>
      </motion.div>

      {/* AI Assistant */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="glass rounded-xl p-4 border border-cosmic-purple/20 space-y-3"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-cosmic-purple/20 flex items-center justify-center">
            <Mic className="w-4 h-4 text-cosmic-purple" />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            AI Assistant
          </span>
        </div>
        <p className="text-sm text-foreground">
          {creator.aiAssistantMessage}
        </p>
        {/* Audio Wave Visualization */}
        <div className="flex items-center gap-1 h-6">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                height: [4, Math.random() * 16 + 4, 4]
              }}
              transition={{
                repeat: Infinity,
                duration: 0.5 + Math.random() * 0.5,
                delay: i * 0.05
              }}
              className="w-1 bg-cosmic-purple/50 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
