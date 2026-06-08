export interface Project {
  id: string
  name: string
  subtitle: string
  description: string
  category: 'web' | '3d' | 'uiux' | 'games' | 'tools'
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  images: string[]
  gradient: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'portalverse',
    name: 'Portalverse',
    subtitle: 'Interactive 3D Web',
    description: 'An immersive 3D web experience that lets users explore interconnected portals in a virtual universe. Built with Three.js and React, featuring real-time rendering and physics.',
    category: '3d',
    techStack: ['react', 'typescript', 'threejs', 'webgl'],
    liveUrl: 'https://portalverse.dev',
    githubUrl: 'https://github.com/jake/portalverse',
    images: ['/projects/portalverse-1.jpg'],
    gradient: 'from-purple-600 via-pink-500 to-red-500',
    featured: true
  },
  {
    id: 'inferno-ui',
    name: 'Inferno UI',
    subtitle: 'Next Gen Dashboard',
    description: 'A futuristic dashboard UI kit with glassmorphism design, real-time data visualization, and dark mode support. Features 50+ customizable components.',
    category: 'uiux',
    techStack: ['react', 'typescript', 'tailwind', 'framer-motion'],
    liveUrl: 'https://inferno-ui.dev',
    githubUrl: 'https://github.com/jake/inferno-ui',
    images: ['/projects/inferno-ui-1.jpg'],
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    featured: true
  },
  {
    id: 'galaxy-ui',
    name: 'Galaxy UI',
    subtitle: 'UI/UX Showcase',
    description: 'A comprehensive UI component library with cosmic-themed design system. Includes documentation, Figma files, and accessibility-first components.',
    category: 'uiux',
    techStack: ['react', 'typescript', 'storybook', 'figma'],
    liveUrl: 'https://galaxy-ui.dev',
    githubUrl: 'https://github.com/jake/galaxy-ui',
    images: ['/projects/galaxy-ui-1.jpg'],
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    featured: true
  },
  {
    id: 'neural-quest',
    name: 'Neural Quest',
    subtitle: 'AI-Powered Game',
    description: 'A browser-based RPG game with AI-generated storylines and procedural content. Features neural network-driven NPC interactions.',
    category: 'games',
    techStack: ['typescript', 'phaser', 'nodejs', 'openai'],
    liveUrl: 'https://neural-quest.game',
    images: ['/projects/neural-quest-1.jpg'],
    gradient: 'from-green-500 via-cyan-500 to-blue-500',
    featured: false
  },
  {
    id: 'dataflow',
    name: 'DataFlow',
    subtitle: 'Analytics Platform',
    description: 'A real-time data analytics platform with customizable dashboards, automated reporting, and ML-powered insights.',
    category: 'web',
    techStack: ['react', 'python', 'pandas', 'postgresql'],
    liveUrl: 'https://dataflow.io',
    images: ['/projects/dataflow-1.jpg'],
    gradient: 'from-cyan-500 via-blue-500 to-purple-500',
    featured: false
  },
  {
    id: 'devtools-pro',
    name: 'DevTools Pro',
    subtitle: 'Developer Utilities',
    description: 'A collection of developer tools including code formatters, converters, and generators. Built for speed and efficiency.',
    category: 'tools',
    techStack: ['react', 'typescript', 'nodejs', 'electron'],
    githubUrl: 'https://github.com/jake/devtools-pro',
    images: ['/projects/devtools-1.jpg'],
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    featured: false
  }
]

export const projectCategories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web Apps' },
  { id: '3d', name: '3D' },
  { id: 'uiux', name: 'UI/UX' },
  { id: 'games', name: 'Games' },
  { id: 'tools', name: 'Tools' }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}
