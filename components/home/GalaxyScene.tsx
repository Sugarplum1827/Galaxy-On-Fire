'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2, FileCode, Braces, Database, GitBranch, Palette,
  Server, Globe, Flame, Terminal, Wind, BarChart3, Binary,
  Mail, X, Send, ExternalLink, Sparkles
} from 'lucide-react'
import siteData from '@/lib/data/site.json'

/* ─── icon map ─────────────────────────────────────────────── */
const skillIcons: Record<string, React.ElementType> = {
  react: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
    </svg>
  ),
  python: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 2c-1.5 0-3 .5-3.5 1.5v2c0 1 1 1.5 3.5 1.5s3.5-.5 3.5-1.5v-2C15.5 2.5 14 2 12 2Zm0 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
      <path d="M5 7v7c0 2 1 3 3 3h1v3c0 2 1 3 3 3h2c2 0 3-1 3-3v-3h1c2 0 3-1 3-3V7c0-2-1-3-3-3h-1V7c0 2-1 3-3 3h-2C9 10 8 9 8 7V4H7C5 4 5 5 5 7Z"/>
      <circle cx="12" cy="18" r="1"/>
    </svg>
  ),
  nodejs: Server,
  javascript: Braces,
  typescript: FileCode,
  sql: Database,
  html: Globe,
  css: Palette,
  sass: Wind,
  firebase: Flame,
  git: GitBranch,
  figma: Palette,
  tailwind: Wind,
  express: Terminal,
  pandas: BarChart3,
  numpy: Binary,
}

type SkillEntry = typeof siteData.skills[0]

/* ─── Skill Orb ─────────────────────────────────────────────── */
function SkillOrb({
  skill, index, onClick
}: { skill: SkillEntry; index: number; onClick: () => void }) {
  const Icon = skillIcons[skill.icon] || Code2
  const ORBIT_RADIUS = 200
  const angle = (index / siteData.skills.length) * 360 - 90
    const x =
      Math.cos((angle * Math.PI) / 180) * ORBIT_RADIUS
      const y =
        Math.sin((angle * Math.PI) / 180) * ORBIT_RADIUS

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + index * 0.07, type: 'spring', stiffness: 100 }}
      className="absolute"
      style={{
        left: `calc(50% + ${x - 28}px)`, // move left
        top: `calc(50% + ${y - 30}px)`,  // move up
        transform: 'translate(-50%,-50%)'
      }}
    >
      <motion.button onClick={onClick} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className="relative group cursor-pointer">
        <div className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity" style={{ backgroundColor: skill.color }} />
        <div className="relative w-16 h-16 rounded-full border-2 flex items-center justify-center glass" style={{ borderColor: `${skill.color}50` }}>
          <div style={{ color: skill.color }}><Icon /></div>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-medium glass" style={{ color: skill.color }}>
          Lv. {skill.level}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded glass text-xs font-medium whitespace-nowrap border border-white/10 pointer-events-none"
        >
          {skill.name}
        </motion.div>
      </motion.button>
    </motion.div>
  )
}

/* ─── Skill Detail Modal ────────────────────────────────────── */
function SkillModal({ skill, onClose }: { skill: SkillEntry; onClose: () => void }) {
  const Icon = skillIcons[skill.icon] || Code2
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-sm glass border border-white/10 rounded-2xl p-6 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute inset-0 opacity-20 blur-3xl" style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)` }} />
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/10 transition-colors"><X className="w-4 h-4" /></button>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center glass border" style={{ borderColor: `${skill.color}30` }}>
              <div style={{ color: skill.color }} className="scale-125"><Icon /></div>
            </div>
            <div>
              <h3 className="text-lg font-bold">{skill.name}</h3>
              <span className="px-2 py-0.5 rounded text-xs font-medium" style={{ backgroundColor: `${skill.color}20`, color: skill.color }}>
                Level {skill.level}
              </span>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-muted-foreground">Proficiency</span>
              <span style={{ color: skill.color }}>{skill.level}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }} animate={{ width: `${skill.level}%` }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full" style={{ backgroundColor: skill.color }}
              />
            </div>
          </div>
          <a href="/skills" className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg glass border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">
            <ExternalLink className="w-4 h-4" />
            View All Skills
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─── Contact Modal ─────────────────────────────────────────── */
function ContactModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-md glass border border-white/10 rounded-2xl p-6 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-br from-cosmic-cyan via-cosmic-purple to-cosmic-blue" />
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/10 transition-colors"><X className="w-4 h-4" /></button>
        <div className="relative z-10">
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="w-14 h-14 mx-auto mb-3 rounded-full glass border border-cosmic-cyan/30 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cosmic-cyan" />
                </motion.div>
                <h3 className="text-lg font-bold mb-1">Summon the Creator</h3>
                <p className="text-sm text-muted-foreground">Let&apos;s build something legendary together</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 focus:border-cosmic-cyan/50 focus:outline-none bg-transparent text-sm" placeholder="Your Name" />
                <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 focus:border-cosmic-cyan/50 focus:outline-none bg-transparent text-sm" placeholder="your@email.com" />
                <textarea required rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2.5 rounded-lg glass border border-white/10 focus:border-cosmic-cyan/50 focus:outline-none bg-transparent text-sm resize-none" placeholder="What brings you to my universe?" />
                <button type="submit" disabled={submitting} className="w-full py-3 rounded-lg bg-gradient-to-r from-cosmic-purple to-cosmic-cyan text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50">
                  {submitting ? (
                    <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" />Send Message</>
                  )}
                </button>
              </form>
            </>
          ) : (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cosmic-green/20 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-cosmic-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Message Received!</h3>
              <p className="text-sm text-muted-foreground mb-6">Your transmission has reached the creator.</p>
              <button onClick={onClose} className="px-6 py-2 rounded-lg glass border border-white/10 hover:bg-white/5 transition-colors text-sm">Close Portal</button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─── Main GalaxyScene ───────────────────────────────────────── */
export function GalaxyScene() {
  const [selectedSkill, setSelectedSkill] = useState<SkillEntry | null>(null)
  const [showContact, setShowContact] = useState(false)
  const { skills, orb } = siteData

  return (
    <div className="relative w-full h-full min-h-[600px] flex items-center justify-center">
      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[160, 200, 240, 280].map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.2, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="absolute rounded-full border border-cosmic-purple/30"
            style={{ width: r * 2, height: r * 2 }}
          />
        ))}
      </div>

      {/* Cosmic figure — z-10 so orb can sit above it */}
      <div className="relative z-10">
        <CosmicFigure />
      </div>

      {/* Clickable glowing orb — z-20 so it renders above the figure */}
      <div className="absolute z-20" style={{ top: '52%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {/* Outer glow */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute -inset-8 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, rgba(249,115,22,0.2) 50%, transparent 70%)' }}
        />
        {/* Middle glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="absolute -inset-4 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.6) 0%, rgba(249,115,22,0.3) 60%, transparent 100%)' }}
        />

        {orb.clickable ? (
          <motion.a
            href={orb.clickHref}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex flex-col items-center gap-2 cursor-pointer group"
            title={orb.clickLabel}
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px 10px rgba(251,191,36,0.5), 0 0 40px 20px rgba(249,115,22,0.3)',
                  '0 0 30px 15px rgba(251,191,36,0.7), 0 0 60px 30px rgba(249,115,22,0.5)',
                  '0 0 20px 10px rgba(251,191,36,0.5), 0 0 40px 20px rgba(249,115,22,0.3)',
                ]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-10 h-10 rounded-full"
              style={{ background: 'radial-gradient(circle at 40% 30%, #fef3c7, #fbbf24 40%, #f97316 80%)' }}
            />
            {/* Light rays */}
            {[0, 60, 120, 180, 240, 300].map(deg => (
              <motion.div
                key={deg}
                animate={{ opacity: [0.3, 0.7, 0.3], scaleY: [0.8, 1.2, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: deg / 360 }}
                className="absolute w-0.5 h-7 origin-bottom pointer-events-none"
                style={{ background: 'linear-gradient(to top, #f97316, transparent)', transform: `rotate(${deg}deg)`, left: 'calc(50% - 1px)', bottom: '50%' }}
              />
            ))}
            {/* Hover label */}
            <span className="absolute -bottom-7 text-[10px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium tracking-wide">
              {orb.clickLabel}
            </span>
          </motion.a>
        ) : (
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px 10px rgba(251,191,36,0.5), 0 0 40px 20px rgba(249,115,22,0.3)',
                '0 0 30px 15px rgba(251,191,36,0.7), 0 0 60px 30px rgba(249,115,22,0.5)',
                '0 0 20px 10px rgba(251,191,36,0.5), 0 0 40px 20px rgba(249,115,22,0.3)',
              ]
            }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-10 h-10 rounded-full"
            style={{ background: 'radial-gradient(circle at 40% 30%, #fef3c7, #fbbf24 40%, #f97316 80%)' }}
          />
        )}
      </div>

      {/* Skill Orbs — z-30 so they stay above everything */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {skills.map((skill, i) => (
          <div key={skill.id} className="pointer-events-auto">
            <SkillOrb skill={skill} index={i} onClick={() => setSelectedSkill(skill)} />
          </div>
        ))}
      </div>

      {/* Contact button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
        className="absolute z-30"
        style={{
          left: '45%',
          top: '60%',
          transform:
            'translate(-50%, -50%) translateY(170px)',
        }}
      >
        <motion.button
          onClick={() => setShowContact(true)}
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-1.5 group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full glass border border-cosmic-cyan/30 flex items-center justify-center group-hover:border-cosmic-cyan/60 transition-colors">
            <Mail className="w-5 h-5 text-cosmic-cyan" />
          </div>
          <span className="text-[10px] text-cosmic-cyan uppercase tracking-wider">Contact</span>
        </motion.button>
      </motion.div>

      {/* Modals */}
      <AnimatePresence>
        {selectedSkill && <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      </AnimatePresence>
    </div>
  )
}

/* ─── Cosmic Figure ─────────────────────────────────────────── */
function CosmicFigure() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="relative w-[320px] h-[400px]"
    >
      {/* Arcane rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: 'linear' }} className="absolute w-[380px] h-[380px] rounded-full border border-cosmic-cyan/20" />
        <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 45, ease: 'linear' }} className="absolute w-[340px] h-[340px] rounded-full border border-cosmic-purple/30">
          {[0, 120, 240].map(deg => (
            <div key={deg} className="absolute w-3 h-3 border-t-2 border-l-2 border-cosmic-cyan/50" style={{ transform: `rotate(${deg}deg) translateY(-170px) rotate(45deg)`, left: '50%', top: '50%' }} />
          ))}
        </motion.div>
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: 'linear' }} className="absolute w-[300px] h-[300px] rounded-full border-2 border-cosmic-purple/40">
          {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
            <motion.div key={deg} animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: deg / 360 }} className="absolute w-2 h-2 rounded-full bg-cosmic-cyan/60" style={{ transform: `rotate(${deg}deg) translateY(-150px)`, left: 'calc(50% - 4px)', top: 'calc(50% - 4px)' }} />
          ))}
        </motion.div>
        <motion.div animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.95, 1.05, 0.95] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} className="absolute w-[200px] h-[200px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,200,100,0.15) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)' }} />
        <motion.div animate={{ rotate: -360, opacity: [0.3, 0.5, 0.3] }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }} className="absolute w-[260px] h-[260px]">
          <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,5 95,90 5,90" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="0.5" /></svg>
        </motion.div>
      </div>

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{ width: 2 + Math.random() * 4, height: 2 + Math.random() * 4, left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%`, backgroundColor: i % 3 === 0 ? '#f97316' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4' }}
          animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0], y: [0, -30 - Math.random() * 20], x: [0, (Math.random() - 0.5) * 20] }}
          transition={{ repeat: Infinity, duration: 3 + Math.random() * 2, delay: i * 0.2, ease: 'easeOut' }}
        />
      ))}

      {/* SVG figure — no orb drawn here (orb is separate above) */}
      <div className="relative w-full h-full flex items-center justify-center z-10">
        <svg viewBox="0 0 200 320" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <linearGradient id="hoodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e1e3f"/>
              <stop offset="30%" stopColor="#12122a"/>
              <stop offset="100%" stopColor="#08081a"/>
            </linearGradient>
            <linearGradient id="robeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#12122a"/>
              <stop offset="50%" stopColor="#0a0a18"/>
              <stop offset="100%" stopColor="transparent"/>
            </linearGradient>
            <linearGradient id="robeHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2"/>
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          {/* Hood */}
          <path d="M100 25 C70 25 50 50 48 80 L46 100 C46 108 52 115 60 115 L140 115 C148 115 154 108 154 100 L152 80 C150 50 130 25 100 25 Z" fill="url(#hoodGradient)"/>
          <path d="M100 25 L95 5 L100 0 L105 5 L100 25" fill="url(#hoodGradient)"/>
          <path d="M100 25 C70 25 50 50 48 80 L46 100" fill="none" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.5"/>
          <path d="M100 25 C130 25 150 50 152 80 L154 100" fill="none" stroke="#06b6d4" strokeWidth="0.5" opacity="0.5"/>
          {/* Face void */}
          <ellipse cx="100" cy="75" rx="30" ry="22" fill="#000"/>
          {/* Shoulders */}
          <path d="M60 115 C40 120 30 130 25 145 L20 165 L55 155 L60 115" fill="url(#hoodGradient)"/>
          <path d="M140 115 C160 120 170 130 175 145 L180 165 L145 155 L140 115" fill="url(#hoodGradient)"/>
          {/* Robe */}
          <path d="M55 155 L35 320 L165 320 L145 155 L130 145 L100 140 L70 145 L55 155 Z" fill="url(#robeGradient)"/>
          <path d="M85 150 L80 320 L120 320 L115 150 Q100 145 85 150 Z" fill="url(#robeHighlight)" opacity="0.5"/>
          <path d="M70 145 L100 155 L130 145 L120 125 L100 130 L80 125 Z" fill="url(#robeHighlight)" stroke="#f97316" strokeWidth="0.5" opacity="0.6"/>
          {/* Robe folds */}
          <path d="M60 160 Q55 240 45 320" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2"/>
          <path d="M100 155 L100 320" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2"/>
          <path d="M140 160 Q145 240 155 320" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2"/>
          {/* Arms */}
          <path d="M55 155 Q35 160 30 175 Q25 185 35 195 Q50 200 65 190 L75 180" fill="url(#hoodGradient)" stroke="#8b5cf6" strokeWidth="0.3" opacity="0.8"/>
          <path d="M145 155 Q165 160 170 175 Q175 185 165 195 Q150 200 135 190 L125 180" fill="url(#hoodGradient)" stroke="#06b6d4" strokeWidth="0.3" opacity="0.8"/>
          {/* Hands */}
          <ellipse cx="70" cy="190" rx="12" ry="8" fill="url(#hoodGradient)"/>
          <ellipse cx="130" cy="190" rx="12" ry="8" fill="url(#hoodGradient)"/>
        </svg>
      </div>

      {/* Base smoke */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[80px] overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div key={i} className="absolute bottom-0 rounded-full opacity-30"
            style={{ width: 60 + Math.random() * 80, height: 20 + Math.random() * 30, left: `${i * 12 - 10}%`, background: `radial-gradient(ellipse at center, ${i % 2 === 0 ? 'rgba(139,92,246,0.4)' : 'rgba(6,182,212,0.3)'} 0%, transparent 70%)` }}
            animate={{ x: [0, (Math.random() - 0.5) * 30, 0], y: [0, -10, 0], scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 3 + Math.random() * 2, delay: i * 0.3, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </motion.div>
  )
}
