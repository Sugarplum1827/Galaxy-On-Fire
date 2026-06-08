'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Trophy,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  Check
} from 'lucide-react'
import { experiences, experienceStats, type Experience } from '@/lib/data/experience'
import { cn } from '@/lib/utils'

const typeIcons: Record<Experience['type'], React.ElementType> = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
  achievement: Trophy
}

const typeColors: Record<Experience['type'], string> = {
  work: '#7c3aed',
  education: '#3b82f6',
  certification: '#22d3ee',
  achievement: '#fbbf24'
}

const typeLabels: Record<Experience['type'], string> = {
  work: 'Work Experience',
  education: 'Education',
  certification: 'Certification',
  achievement: 'Achievement'
}

export default function ExperiencePage() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<Experience['type'] | 'all'>('all')

  const filteredExperiences = filter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === filter)

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            THE <span className="gradient-cosmic-text">JOURNEY</span> SO FAR
          </h1>
          <p className="text-muted-foreground text-lg">Experience. Learn. Evolve.</p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 border border-white/5 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-cosmic-purple">{experienceStats.totalYears}+</p>
              <p className="text-xs text-muted-foreground uppercase">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cosmic-blue">{experienceStats.projectsCompleted}+</p>
              <p className="text-xs text-muted-foreground uppercase">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cosmic-cyan">{experienceStats.certificationsEarned}</p>
              <p className="text-xs text-muted-foreground uppercase">Certifications</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cosmic-gold">{experienceStats.hackathonsWon}</p>
              <p className="text-xs text-muted-foreground uppercase">Hackathons Won</p>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <button
            onClick={() => setFilter('all')}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              filter === 'all'
                ? 'bg-white/10 text-white border border-white/20'
                : 'text-muted-foreground hover:text-white hover:bg-white/5'
            )}
          >
            All
          </button>
          {(Object.keys(typeLabels) as Experience['type'][]).map((type) => {
            const Icon = typeIcons[type]
            return (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
                  filter === type
                    ? 'text-white border'
                    : 'text-muted-foreground hover:text-white hover:bg-white/5'
                )}
                style={{
                  backgroundColor: filter === type ? `${typeColors[type]}20` : undefined,
                  borderColor: filter === type ? `${typeColors[type]}50` : undefined
                }}
              >
                <Icon className="w-4 h-4" style={{ color: typeColors[type] }} />
                <span>{typeLabels[type]}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cosmic-purple via-cosmic-blue to-cosmic-cyan md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8">
            {filteredExperiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
                isExpanded={expandedId === experience.id}
                onToggle={() => setExpandedId(expandedId === experience.id ? null : experience.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TimelineItem({ 
  experience, 
  index, 
  isExpanded, 
  onToggle 
}: { 
  experience: Experience
  index: number
  isExpanded: boolean
  onToggle: () => void 
}) {
  const Icon = typeIcons[experience.type]
  const color = typeColors[experience.type]
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + index * 0.1 }}
      className={cn(
        'relative grid md:grid-cols-2 gap-4 md:gap-8',
        isEven ? 'md:text-right' : ''
      )}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full border-2 bg-background md:-translate-x-1/2 z-10"
        style={{ borderColor: color }}
      >
        <div className="absolute inset-1 rounded-full" style={{ backgroundColor: color }} />
      </div>

      {/* Content - positioned based on even/odd */}
      <div className={cn(
        'pl-8 md:pl-0',
        isEven ? 'md:pr-12' : 'md:col-start-2 md:pl-12'
      )}>
        <motion.div
          className="glass rounded-xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors cursor-pointer"
          onClick={onToggle}
        >
          <div className="p-5">
            {/* Header */}
            <div className={cn('flex items-start gap-4', isEven ? 'md:flex-row-reverse' : '')}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${color}20` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div className={cn('flex-1', isEven ? 'md:text-right' : '')}>
                <span 
                  className="text-xs font-medium px-2 py-1 rounded-full"
                  style={{ backgroundColor: `${color}20`, color }}
                >
                  {typeLabels[experience.type]}
                </span>
                <h3 className="text-lg font-bold mt-2">{experience.title}</h3>
                <p className="text-sm text-foreground/80">{experience.company}</p>
              </div>
            </div>

            {/* Meta info */}
            <div className={cn(
              'flex flex-wrap gap-4 mt-4 text-xs text-muted-foreground',
              isEven ? 'md:justify-end' : ''
            )}>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{experience.startDate} - {experience.endDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{experience.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className={cn(
              'text-sm text-muted-foreground mt-4',
              isEven ? 'md:text-right' : ''
            )}>
              {experience.description}
            </p>

            {/* Expand button */}
            <button
              className={cn(
                'flex items-center gap-1 text-xs mt-4 hover:text-white transition-colors',
                isEven ? 'md:ml-auto' : ''
              )}
              style={{ color }}
            >
              <span>{isExpanded ? 'Show less' : 'Show more'}</span>
              {isExpanded ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
          </div>

          {/* Expanded content */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 border-t border-white/5">
              {/* Highlights */}
              <div className="mt-4">
                <h4 className={cn(
                  'text-sm font-medium mb-3',
                  isEven ? 'md:text-right' : ''
                )}>
                  Key Highlights
                </h4>
                <ul className={cn('space-y-2', isEven ? 'md:text-right' : '')}>
                  {experience.highlights.map((highlight, i) => (
                    <li key={i} className={cn(
                      'flex items-start gap-2 text-sm text-muted-foreground',
                      isEven ? 'md:flex-row-reverse' : ''
                    )}>
                      <Check className="w-4 h-4 text-cosmic-green flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mt-4">
                <h4 className={cn(
                  'text-sm font-medium mb-3',
                  isEven ? 'md:text-right' : ''
                )}>
                  Skills Used
                </h4>
                <div className={cn(
                  'flex flex-wrap gap-2',
                  isEven ? 'md:justify-end' : ''
                )}>
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs rounded-full glass border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Empty column for alignment */}
      <div className={cn(
        'hidden md:block',
        isEven ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'
      )} />
    </motion.div>
  )
}
