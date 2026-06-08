'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Monitor, 
  Server, 
  Database, 
  BarChart3, 
  Wrench,
  Layers,
  X,
  Check,
  Star
} from 'lucide-react'
import { skills, skillCategories, getSkillsByCategory, type Skill } from '@/lib/data/skills'
import { cn } from '@/lib/utils'

const categoryIcons: Record<string, React.ElementType> = {
  all: Layers,
  frontend: Monitor,
  backend: Server,
  database: Database,
  data: BarChart3,
  tools: Wrench
}

// Constellation positions for skills
const constellationPositions: Record<string, { x: number; y: number }> = {
  react: { x: 50, y: 20 },
  typescript: { x: 70, y: 35 },
  javascript: { x: 30, y: 35 },
  html: { x: 20, y: 50 },
  css: { x: 40, y: 55 },
  tailwind: { x: 60, y: 50 },
  nodejs: { x: 75, y: 55 },
  python: { x: 50, y: 65 },
  sql: { x: 65, y: 75 },
  pandas: { x: 35, y: 75 },
  numpy: { x: 50, y: 85 },
  firebase: { x: 80, y: 70 },
  sass: { x: 25, y: 65 },
  git: { x: 85, y: 45 },
  figma: { x: 15, y: 35 },
  express: { x: 80, y: 25 }
}

// Connections between skills (constellation lines)
const connections = [
  ['react', 'typescript'],
  ['react', 'javascript'],
  ['javascript', 'html'],
  ['html', 'css'],
  ['css', 'tailwind'],
  ['tailwind', 'react'],
  ['nodejs', 'typescript'],
  ['nodejs', 'express'],
  ['python', 'pandas'],
  ['python', 'numpy'],
  ['pandas', 'sql'],
  ['sql', 'firebase'],
  ['nodejs', 'firebase'],
  ['css', 'sass'],
  ['git', 'nodejs'],
  ['figma', 'css']
]

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  const filteredSkills = getSkillsByCategory(selectedCategory)

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            THE <span className="gradient-cosmic-text">CONSTELLATION</span> ARCHIVE
          </h1>
          <p className="text-muted-foreground text-lg">Explore. Learn. Master.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Left Sidebar - Categories & Skill List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Categories */}
            <div className="glass rounded-xl p-4 border border-white/5">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {skillCategories.map((category) => {
                  const Icon = categoryIcons[category.id] || Layers
                  const isActive = selectedCategory === category.id
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        'flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all',
                        isActive
                          ? 'bg-cosmic-purple/20 text-white border border-cosmic-purple/30'
                          : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Top Skills List */}
            <div className="glass rounded-xl p-4 border border-white/5">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Top Skills
              </h3>
              <div className="space-y-2">
                {skills.slice(0, 6).map((skill, index) => (
                  <motion.button
                    key={skill.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    onClick={() => setSelectedSkill(skill)}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                      <span className="text-sm">{skill.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Experience Level Legend */}
            <div className="glass rounded-xl p-4 border border-white/5">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Experience Level
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-cosmic-gold" fill="currentColor" />
                  <span>Expert 5</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-cosmic-purple" fill="currentColor" />
                  <span>Advanced 3</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-cosmic-blue" fill="currentColor" />
                  <span>Intermediate 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-muted-foreground" />
                  <span>Beginner 1</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Constellation Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl border border-white/5 p-6 min-h-[600px] relative overflow-hidden"
          >
            {/* Grid Background */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />

            {/* Constellation Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {connections.map(([from, to], index) => {
                const fromPos = constellationPositions[from]
                const toPos = constellationPositions[to]
                if (!fromPos || !toPos) return null

                const fromSkill = skills.find(s => s.id === from)
                const toSkill = skills.find(s => s.id === to)
                
                // Check if both skills are in filtered list
                const isVisible = 
                  selectedCategory === 'all' || 
                  (filteredSkills.some(s => s.id === from) && filteredSkills.some(s => s.id === to))

                if (!isVisible) return null

                return (
                  <motion.line
                    key={`${from}-${to}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                    x1={`${fromPos.x}%`}
                    y1={`${fromPos.y}%`}
                    x2={`${toPos.x}%`}
                    y2={`${toPos.y}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                  />
                )
              })}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>

            {/* Skill Nodes */}
            {filteredSkills.map((skill, index) => {
              const position = constellationPositions[skill.id]
              if (!position) return null

              const starLevel = skill.level >= 90 ? 'expert' : skill.level >= 80 ? 'advanced' : 'intermediate'

              return (
                <motion.button
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  onClick={() => setSelectedSkill(skill)}
                  className="absolute group"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 blur-lg opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: skill.color }}
                  />

                  {/* Star node */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="relative w-12 h-12 rounded-full glass border flex items-center justify-center cursor-pointer"
                    style={{ borderColor: `${skill.color}50` }}
                  >
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </motion.div>

                  {/* Skill name */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-center">
                    <p className="text-xs font-medium whitespace-nowrap" style={{ color: skill.color }}>
                      {skill.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground">Lv. {skill.level}</p>
                  </div>
                </motion.button>
              )
            })}

            {/* Click instruction */}
            <div className="absolute bottom-4 right-4 text-xs text-muted-foreground">
              Click on any star to explore
            </div>
          </motion.div>
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <SkillDetailModal
              skill={selectedSkill}
              onClose={() => setSelectedSkill(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function SkillDetailModal({ skill, onClose }: { skill: Skill; onClose: () => void }) {
  const relatedSkillsData = skill.relatedSkills
    .map(id => skills.find(s => s.id === id))
    .filter(Boolean) as Skill[]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass rounded-2xl border border-white/10 p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-xl glass border flex items-center justify-center"
              style={{ borderColor: `${skill.color}50` }}
            >
              <div
                className="w-10 h-10 rounded-lg"
                style={{ backgroundColor: skill.color }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">← Back to Constellation</span>
              </div>
              <h2 className="text-2xl font-bold">{skill.name}</h2>
              <p className="text-sm text-muted-foreground capitalize">{skill.category}</p>
              <p className="text-xs mt-1" style={{ color: skill.color }}>
                Level {skill.level} (Expert)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Description */}
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Highly Used', 'Performance Focused', 'Component Based'].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full glass border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Used in Projects */}
            <div>
              <h4 className="text-sm font-medium mb-3">Used in Projects</h4>
              <div className="grid grid-cols-3 gap-2">
                {skill.projects.map((project) => (
                  <div
                    key={project}
                    className="glass rounded-lg p-3 text-center border border-white/5"
                  >
                    <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-cosmic-purple/30 to-cosmic-blue/30 mb-2" />
                    <p className="text-xs font-medium truncate">{project}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Proficiency & Experience */}
            <div className="flex gap-4">
              <div className="flex-1 glass rounded-xl p-4 text-center border border-white/5">
                <p className="text-xs text-muted-foreground uppercase mb-1">Proficiency</p>
                <p className="text-3xl font-bold" style={{ color: skill.color }}>
                  {skill.level}%
                </p>
                <p className="text-xs text-muted-foreground">Expert</p>
              </div>
              <div className="flex-1 glass rounded-xl p-4 text-center border border-white/5">
                <p className="text-xs text-muted-foreground uppercase mb-1">Experience</p>
                <p className="text-3xl font-bold">{skill.yearsExperience}+</p>
                <p className="text-xs text-muted-foreground">Years</p>
              </div>
            </div>

            {/* Skill Insights */}
            <div className="glass rounded-xl p-4 border border-white/5">
              <h4 className="text-sm font-medium mb-3">Skill Insights</h4>
              <ul className="space-y-2">
                {skill.insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-cosmic-green flex-shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Skills */}
            <div className="glass rounded-xl p-4 border border-white/5">
              <h4 className="text-sm font-medium mb-3">Related Skills</h4>
              <div className="flex flex-wrap gap-2">
                {relatedSkillsData.map((relSkill) => (
                  <div
                    key={relSkill.id}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-white/10"
                  >
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: relSkill.color }}
                    />
                    <span className="text-xs">{relSkill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
