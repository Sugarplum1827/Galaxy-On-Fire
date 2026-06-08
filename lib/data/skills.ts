export interface Skill {
  id: string
  name: string
  icon: string
  level: number
  color: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'data'
  description: string
  yearsExperience: number
  projects: string[]
  relatedSkills: string[]
  insights: string[]
}

export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    icon: 'react',
    level: 95,
    color: '#61dafb',
    category: 'frontend',
    description: 'React is a JavaScript library for building user interfaces, especially single-page applications.',
    yearsExperience: 3,
    projects: ['Portalverse', 'Galaxy UI', 'Inferno UI'],
    relatedSkills: ['javascript', 'typescript', 'html', 'css'],
    insights: [
      'Strong in hooks and context API',
      'Component architecture expert',
      'State management (Redux, Zustand)',
      'Performance optimization',
      'Building reusable UI systems'
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'python',
    level: 96,
    color: '#3776ab',
    category: 'backend',
    description: 'Python is a versatile programming language used for web development, data science, and automation.',
    yearsExperience: 3,
    projects: ['Data Pipeline', 'ML Models', 'Automation Scripts'],
    relatedSkills: ['pandas', 'numpy', 'sql'],
    insights: [
      'Data analysis and visualization',
      'Machine learning fundamentals',
      'API development with FastAPI',
      'Automation and scripting',
      'Database integration'
    ]
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: 'nodejs',
    level: 90,
    color: '#339933',
    category: 'backend',
    description: 'Node.js is a JavaScript runtime for building scalable server-side applications.',
    yearsExperience: 2,
    projects: ['API Gateway', 'Real-time Chat', 'Microservices'],
    relatedSkills: ['javascript', 'typescript', 'express'],
    insights: [
      'RESTful API design',
      'Real-time applications with Socket.io',
      'Microservices architecture',
      'Authentication and security',
      'Database integration'
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'javascript',
    level: 90,
    color: '#f7df1e',
    category: 'frontend',
    description: 'JavaScript is the programming language of the web, enabling interactive and dynamic content.',
    yearsExperience: 3,
    projects: ['Interactive Dashboard', 'Browser Extensions', 'Game Engine'],
    relatedSkills: ['typescript', 'react', 'nodejs'],
    insights: [
      'ES6+ features mastery',
      'Async programming patterns',
      'DOM manipulation',
      'Event-driven architecture',
      'Module systems'
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'typescript',
    level: 90,
    color: '#3178c6',
    category: 'frontend',
    description: 'TypeScript adds static typing to JavaScript, improving code quality and developer experience.',
    yearsExperience: 2,
    projects: ['Enterprise App', 'Type-safe API', 'Component Library'],
    relatedSkills: ['javascript', 'react', 'nodejs'],
    insights: [
      'Advanced type systems',
      'Generic programming',
      'Type inference optimization',
      'Declaration files',
      'Strict mode configurations'
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: 'sql',
    level: 85,
    color: '#00758f',
    category: 'database',
    description: 'SQL is the standard language for managing and querying relational databases.',
    yearsExperience: 3,
    projects: ['Data Warehouse', 'Analytics Platform', 'Reporting System'],
    relatedSkills: ['python', 'nodejs', 'firebase'],
    insights: [
      'Complex query optimization',
      'Database design patterns',
      'Stored procedures',
      'Performance tuning',
      'Data modeling'
    ]
  },
  {
    id: 'html',
    name: 'HTML',
    icon: 'html',
    level: 95,
    color: '#e34f26',
    category: 'frontend',
    description: 'HTML is the standard markup language for creating web pages and web applications.',
    yearsExperience: 4,
    projects: ['Accessible UI', 'Semantic Markup', 'Email Templates'],
    relatedSkills: ['css', 'javascript', 'react'],
    insights: [
      'Semantic HTML5 elements',
      'Accessibility (ARIA)',
      'SEO best practices',
      'Form handling',
      'Canvas and SVG'
    ]
  },
  {
    id: 'css',
    name: 'CSS',
    icon: 'css',
    level: 90,
    color: '#264de4',
    category: 'frontend',
    description: 'CSS is the language used for describing the presentation and styling of web documents.',
    yearsExperience: 4,
    projects: ['Design System', 'Animation Library', 'Responsive Framework'],
    relatedSkills: ['html', 'sass', 'tailwind'],
    insights: [
      'CSS Grid and Flexbox mastery',
      'Custom properties (variables)',
      'Animations and transitions',
      'Responsive design patterns',
      'CSS-in-JS solutions'
    ]
  },
  {
    id: 'sass',
    name: 'Sass',
    icon: 'sass',
    level: 85,
    color: '#cc6699',
    category: 'frontend',
    description: 'Sass is a CSS preprocessor that adds variables, nesting, and mixins to CSS.',
    yearsExperience: 3,
    projects: ['Theme System', 'Component Styles', 'Brand Guidelines'],
    relatedSkills: ['css', 'html', 'react'],
    insights: [
      'Mixins and functions',
      'Modular architecture',
      'Theme management',
      'BEM methodology',
      'Build optimization'
    ]
  },
  {
    id: 'firebase',
    name: 'Firebase',
    icon: 'firebase',
    level: 88,
    color: '#ffca28',
    category: 'database',
    description: 'Firebase is a platform for building web and mobile applications with real-time features.',
    yearsExperience: 2,
    projects: ['Real-time App', 'Auth System', 'Cloud Functions'],
    relatedSkills: ['javascript', 'nodejs', 'sql'],
    insights: [
      'Firestore data modeling',
      'Authentication flows',
      'Cloud Functions',
      'Real-time listeners',
      'Security rules'
    ]
  },
  {
    id: 'git',
    name: 'Git',
    icon: 'git',
    level: 88,
    color: '#f05032',
    category: 'tools',
    description: 'Git is a distributed version control system for tracking changes in source code.',
    yearsExperience: 3,
    projects: ['CI/CD Pipeline', 'Monorepo Management', 'Open Source'],
    relatedSkills: ['github', 'nodejs', 'typescript'],
    insights: [
      'Branching strategies',
      'Merge conflict resolution',
      'Git hooks and automation',
      'Code review workflows',
      'Repository management'
    ]
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: 'figma',
    level: 85,
    color: '#f24e1e',
    category: 'tools',
    description: 'Figma is a collaborative design tool for creating user interfaces and prototypes.',
    yearsExperience: 2,
    projects: ['Design System', 'Prototype Gallery', 'Brand Assets'],
    relatedSkills: ['css', 'html', 'react'],
    insights: [
      'Component libraries',
      'Auto layout mastery',
      'Prototyping flows',
      'Design tokens',
      'Developer handoff'
    ]
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    icon: 'tailwind',
    level: 90,
    color: '#06b6d4',
    category: 'frontend',
    description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.',
    yearsExperience: 2,
    projects: ['UI Kit', 'Landing Pages', 'Dashboard'],
    relatedSkills: ['css', 'react', 'html'],
    insights: [
      'Utility-first workflow',
      'Custom configuration',
      'Component extraction',
      'Responsive design',
      'Dark mode implementation'
    ]
  },
  {
    id: 'express',
    name: 'Express',
    icon: 'express',
    level: 85,
    color: '#000000',
    category: 'backend',
    description: 'Express is a minimal and flexible Node.js web application framework.',
    yearsExperience: 2,
    projects: ['API Server', 'Middleware Stack', 'Auth Service'],
    relatedSkills: ['nodejs', 'javascript', 'typescript'],
    insights: [
      'Middleware patterns',
      'Route organization',
      'Error handling',
      'Security best practices',
      'Performance optimization'
    ]
  },
  {
    id: 'pandas',
    name: 'Pandas',
    icon: 'pandas',
    level: 88,
    color: '#150458',
    category: 'data',
    description: 'Pandas is a Python library for data manipulation and analysis.',
    yearsExperience: 2,
    projects: ['Data Pipeline', 'Analytics Dashboard', 'ETL Process'],
    relatedSkills: ['python', 'numpy', 'sql'],
    insights: [
      'DataFrame operations',
      'Data cleaning pipelines',
      'Time series analysis',
      'Merge and join operations',
      'Performance optimization'
    ]
  },
  {
    id: 'numpy',
    name: 'NumPy',
    icon: 'numpy',
    level: 85,
    color: '#013243',
    category: 'data',
    description: 'NumPy is a Python library for numerical computing with multi-dimensional arrays.',
    yearsExperience: 2,
    projects: ['Scientific Computing', 'ML Preprocessing', 'Statistical Analysis'],
    relatedSkills: ['python', 'pandas', 'sql'],
    insights: [
      'Array operations',
      'Linear algebra',
      'Statistical functions',
      'Broadcasting',
      'Memory optimization'
    ]
  }
]

export const skillCategories = [
  { id: 'all', name: 'All', icon: 'layers' },
  { id: 'frontend', name: 'Frontend', icon: 'monitor' },
  { id: 'backend', name: 'Backend', icon: 'server' },
  { id: 'database', name: 'Database', icon: 'database' },
  { id: 'data', name: 'Data Science', icon: 'bar-chart' },
  { id: 'tools', name: 'Tools & Others', icon: 'tool' }
]

export function getSkillById(id: string): Skill | undefined {
  return skills.find(skill => skill.id === id)
}

export function getSkillsByCategory(category: string): Skill[] {
  if (category === 'all') return skills
  return skills.filter(skill => skill.category === category)
}
