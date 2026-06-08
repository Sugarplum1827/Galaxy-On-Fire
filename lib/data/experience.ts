export interface Experience {
  id: string
  title: string
  company: string
  type: 'work' | 'education' | 'certification' | 'achievement'
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string
  highlights: string[]
  skills: string[]
  logo?: string
}

export const experiences: Experience[] = [
  {
    id: 'current-role',
    title: 'Full Stack Developer',
    company: 'Building the Future',
    type: 'work',
    location: 'Remote / Earth',
    startDate: '2024',
    endDate: 'Present',
    description: 'Crafting innovative web applications and digital experiences that push the boundaries of what is possible on the web.',
    highlights: [
      'Developed 10+ production-ready web applications',
      'Implemented real-time features using WebSockets',
      'Led frontend architecture decisions',
      'Mentored junior developers'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS']
  },
  {
    id: 'internship-2023',
    title: 'Software Development Intern',
    company: 'Tech Innovation Lab',
    type: 'work',
    location: 'Manila, Philippines',
    startDate: '2023',
    endDate: '2024',
    description: 'Gained hands-on experience in agile development environments, contributing to real-world projects.',
    highlights: [
      'Built data visualization dashboards',
      'Contributed to microservices architecture',
      'Automated deployment pipelines',
      'Participated in code reviews'
    ],
    skills: ['Python', 'React', 'Docker', 'Git', 'Agile']
  },
  {
    id: 'earist-2021',
    title: 'BS Information Technology',
    company: 'EARIST',
    type: 'education',
    location: 'Manila, Philippines',
    startDate: '2021',
    endDate: '2025',
    description: 'Pursuing a degree in Information Technology with a focus on software development and data analytics.',
    highlights: [
      'Dean\'s List - Multiple semesters',
      'Led student tech organization',
      'Built capstone projects',
      'Data Analytics specialization'
    ],
    skills: ['Programming', 'Database', 'Networking', 'Data Science']
  },
  {
    id: 'cert-aws',
    title: 'AWS Cloud Practitioner',
    company: 'Amazon Web Services',
    type: 'certification',
    location: 'Online',
    startDate: '2023',
    endDate: '2023',
    description: 'Demonstrated foundational knowledge of AWS cloud services and architecture.',
    highlights: [
      'Cloud computing fundamentals',
      'AWS core services',
      'Security best practices',
      'Pricing and support'
    ],
    skills: ['AWS', 'Cloud', 'Security', 'Infrastructure']
  },
  {
    id: 'cert-react',
    title: 'Meta React Developer',
    company: 'Meta',
    type: 'certification',
    location: 'Online',
    startDate: '2023',
    endDate: '2023',
    description: 'Professional certification in React development from Meta (formerly Facebook).',
    highlights: [
      'Advanced React patterns',
      'State management',
      'Testing strategies',
      'Performance optimization'
    ],
    skills: ['React', 'JavaScript', 'Testing', 'Performance']
  },
  {
    id: 'hackathon-win',
    title: '1st Place - University Hackathon',
    company: 'TechFest 2023',
    type: 'achievement',
    location: 'Manila, Philippines',
    startDate: '2023',
    endDate: '2023',
    description: 'Won first place in a 48-hour hackathon with an innovative AI-powered solution.',
    highlights: [
      'Built AI-powered application',
      'Presented to industry judges',
      'Collaborated with 4-person team',
      'Completed in 48 hours'
    ],
    skills: ['AI/ML', 'Teamwork', 'Presentation', 'Problem Solving']
  }
]

export const experienceStats = {
  totalYears: 3,
  projectsCompleted: 15,
  certificationsEarned: 5,
  hackathonsWon: 2
}
