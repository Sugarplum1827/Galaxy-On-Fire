export interface CreatorProfile {
  name: string
  title: string
  level: number
  location: string
  status: string
  missionStatement: string
  currentMission: string
  aiAssistantMessage: string
  stats: {
    skillsMastered: number
    projectsBuilt: number
    yearsExperience: number
  }
  expertise: {
    name: string
    percentage: number
    color: string
  }[]
  characterStats: {
    name: string
    value: number
    color: string
  }[]
  achievements: {
    id: string
    name: string
    description: string
    icon: string
  }[]
  socialLinks: {
    platform: string
    url: string
    icon: string
  }[]
  timeline: {
    year: string
    title: string
    description: string
  }[]
}

export const creator: CreatorProfile = {
  name: 'Jake',
  title: 'Full Stack & Data Analytics Developer',
  level: 95,
  location: 'Earth',
  status: 'Building Legends',
  missionStatement: 'Crafting interactive digital experiences that blend creativity, technology, and purpose to build a better tomorrow.',
  currentMission: 'Building legendary interfaces and intelligent systems that leave an impact.',
  aiAssistantMessage: 'Welcome back, creator. The universe is ready for your next command.',
  stats: {
    skillsMastered: 12,
    projectsBuilt: 15,
    yearsExperience: 3
  },
  expertise: [
    { name: 'Frontend Development', percentage: 95, color: '#7c3aed' },
    { name: 'Backend Development', percentage: 90, color: '#3b82f6' },
    { name: 'Data Analytics', percentage: 92, color: '#22d3ee' },
    { name: 'UI/UX Design', percentage: 88, color: '#ec4899' },
    { name: 'Problem Solving', percentage: 95, color: '#10b981' }
  ],
  characterStats: [
    { name: 'Creativity', value: 99, color: '#7c3aed' },
    { name: 'Problem Solving', value: 95, color: '#3b82f6' },
    { name: 'Adaptability', value: 92, color: '#22d3ee' },
    { name: 'Leadership', value: 88, color: '#ec4899' },
    { name: 'Consistency', value: 94, color: '#10b981' }
  ],
  achievements: [
    {
      id: 'early-explorer',
      name: 'Early Explorer',
      description: 'Started the coding journey',
      icon: 'compass'
    },
    {
      id: 'problem-solver',
      name: 'Problem Solver',
      description: 'Solved 100+ complex challenges',
      icon: 'puzzle'
    },
    {
      id: 'code-artisan',
      name: 'Code Artisan',
      description: 'Crafted beautiful, maintainable code',
      icon: 'code'
    },
    {
      id: 'ui-alchemist',
      name: 'UI Alchemist',
      description: 'Transformed designs into reality',
      icon: 'wand'
    },
    {
      id: 'logic-master',
      name: 'Logic Master',
      description: 'Mastered algorithmic thinking',
      icon: 'brain'
    }
  ],
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/jake', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/jake', icon: 'linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com/jake', icon: 'twitter' },
    { platform: 'Instagram', url: 'https://instagram.com/jake', icon: 'instagram' }
  ],
  timeline: [
    {
      year: '2021',
      title: 'Started my journey at EARIST',
      description: 'Began exploring the vast universe of programming and technology.'
    },
    {
      year: '2022',
      title: 'Explored Data Analytics & Visualization',
      description: 'Discovered the power of data and its ability to tell stories.'
    },
    {
      year: '2023',
      title: 'Built projects & joined internships',
      description: 'Applied knowledge in real-world scenarios and gained industry experience.'
    },
    {
      year: '2024',
      title: 'Full Stack Developer in the making',
      description: 'Mastering both frontend and backend technologies.'
    },
    {
      year: '2025',
      title: 'Building my universe and inspiring others',
      description: 'Creating impactful projects and sharing knowledge with the community.'
    }
  ]
}

export const philosophy = {
  quote: '"Code is not syntax. Code is worldbuilding."',
  author: creator.name
}
