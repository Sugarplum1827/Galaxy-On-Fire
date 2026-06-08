'use client'

import { motion } from 'framer-motion'
import { 
  User, 
  Calendar, 
  Quote,
  Compass,
  Puzzle,
  Code2,
  Wand2,
  Brain,
  Sparkles
} from 'lucide-react'
import { creator, philosophy } from '@/lib/data/creator'

const achievementIcons: Record<string, React.ElementType> = {
  compass: Compass,
  puzzle: Puzzle,
  code: Code2,
  wand: Wand2,
  brain: Brain
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            ABOUT THE <span className="gradient-cosmic-text">CREATOR</span>
          </h1>
          <p className="text-muted-foreground text-lg">The Origin Story</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full glass border-2 border-cosmic-purple/30 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-blue flex items-center justify-center">
                      <User className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-cosmic-cyan/20 border border-cosmic-cyan/50 flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 text-cosmic-cyan" />
                  </motion.div>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">{creator.name}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{creator.title}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    A developer forged between creativity and logic. I believe in building products that
                    solve real problems and inspire millions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cosmic-purple" />
                Journey Timeline
              </h3>

              <div className="relative space-y-6">
                {/* Timeline line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cosmic-purple via-cosmic-blue to-cosmic-cyan" />

                {creator.timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="relative flex gap-4"
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 w-10 h-10 rounded-full glass border border-cosmic-purple/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-cosmic-purple">{item.year}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-6 border border-cosmic-cyan/20"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-cosmic-cyan flex-shrink-0" />
                <div>
                  <p className="text-lg font-medium italic text-foreground/90 mb-2">
                    {philosophy.quote}
                  </p>
                  <p className="text-sm text-muted-foreground">- {philosophy.author}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Character Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <h3 className="text-lg font-bold mb-6">Character Stats</h3>

              <div className="space-y-4">
                {creator.characterStats.map((stat, index) => (
                  <div key={stat.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{stat.name}</span>
                      <span className="font-mono" style={{ color: stat.color }}>
                        {stat.value}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.value}%` }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: stat.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Summary */}
              <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-cosmic-purple">
                    {creator.stats.skillsMastered}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase">Total Skills</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-cosmic-cyan">
                    {creator.stats.projectsBuilt}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase">Mastered</p>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <h3 className="text-lg font-bold mb-6">Achievements</h3>

              <div className="flex flex-wrap gap-4 justify-center">
                {creator.achievements.map((achievement, index) => {
                  const Icon = achievementIcons[achievement.icon] || Sparkles
                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="group relative"
                    >
                      <div className="w-16 h-16 rounded-full glass border border-cosmic-gold/30 flex items-center justify-center hover:border-cosmic-gold/60 transition-colors cursor-pointer">
                        <Icon className="w-6 h-6 text-cosmic-gold" />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg glass border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                        <p className="text-xs font-medium">{achievement.name}</p>
                        <p className="text-[10px] text-muted-foreground">{achievement.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Experience Level Indicator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <h3 className="text-lg font-bold mb-4">Experience Level</h3>
              
              <div className="flex items-center justify-center">
                <div className="relative w-40 h-40">
                  {/* Background circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="8"
                    />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: '0 440' }}
                      animate={{ strokeDasharray: `${(creator.level / 100) * 440} 440` }}
                      transition={{ delay: 0.8, duration: 1.5, ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold gradient-cosmic-text">
                      {creator.level}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase">Level</span>
                  </div>
                </div>
              </div>

              {/* Level Legend */}
              <div className="mt-4 flex justify-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cosmic-purple" />
                  <span className="text-muted-foreground">Expert 5</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cosmic-blue" />
                  <span className="text-muted-foreground">Advanced 3</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cosmic-cyan" />
                  <span className="text-muted-foreground">Intermediate 2</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
