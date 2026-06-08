'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { projects, projectCategories, getProjectsByCategory, type Project } from '@/lib/data/projects'
import { cn } from '@/lib/utils'

// Tech stack icon colors
const techColors: Record<string, string> = {
  react: '#61dafb',
  typescript: '#3178c6',
  javascript: '#f7df1e',
  threejs: '#000000',
  webgl: '#990000',
  tailwind: '#06b6d4',
  'framer-motion': '#0055ff',
  python: '#3776ab',
  pandas: '#150458',
  postgresql: '#336791',
  nodejs: '#339933',
  phaser: '#3398dc',
  openai: '#412991',
  storybook: '#ff4785',
  figma: '#f24e1e',
  electron: '#47848f'
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const filteredProjects = getProjectsByCategory(selectedCategory)

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            THE <span className="gradient-cosmic-text">MULTIVERSE</span> OF CREATIONS
          </h1>
          <p className="text-muted-foreground text-lg">Every project is a universe</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                selectedCategory === category.id
                  ? 'bg-cosmic-purple text-white'
                  : 'glass text-muted-foreground hover:text-white hover:bg-white/10'
              )}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-8 border border-white/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold gradient-cosmic-text">10+</p>
              <p className="text-sm text-muted-foreground uppercase mt-1">Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-cosmic-text">5+</p>
              <p className="text-sm text-muted-foreground uppercase mt-1">Tech Stacks</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-cosmic-text">3+</p>
              <p className="text-sm text-muted-foreground uppercase mt-1">Years Building</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-cosmic-cyan">∞</p>
              <p className="text-sm text-muted-foreground uppercase mt-1">Possibilities</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <motion.a
              href="https://github.com/jake"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-cosmic-purple rounded-lg text-white font-medium hover:bg-cosmic-purple/80 transition-colors"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1 }}
      className="group relative"
    >
      <div className="glass rounded-2xl border border-white/5 overflow-hidden hover:border-cosmic-purple/30 transition-all duration-300">
        {/* Planet Visualization */}
        <div className="relative h-48 flex items-center justify-center overflow-hidden">
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
          
          {/* Orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="w-32 h-32 rounded-full border border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
              className="absolute w-40 h-40 rounded-full border border-white/5"
            />
          </div>

          {/* Planet */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative z-10"
          >
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${project.gradient} shadow-lg`}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cosmic-gold flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-cosmic-black" />
              </div>
            )}
          </motion.div>

          {/* Stars */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full twinkle"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1">{project.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
          <p className="text-sm text-foreground/70 line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-[10px] rounded-full glass border border-white/10"
                style={{ color: techColors[tech] || '#fff' }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-cosmic-cyan hover:text-cosmic-cyan/80 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors"
              >
                <Github className="w-3 h-3" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
