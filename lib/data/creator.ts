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
  name: 'Jacob',
  title: 'Data Science & Full Stack Developer',
  level: 95,
  location: 'Manila, Philippines',
  status: 'Building Legends',
  missionStatement: 'Turning raw data into actionable intelligence and building systems that automate, predict, and create real-world impact.',
  currentMission: 'Building data-driven applications and intelligent automation systems that leave an impact.',
  aiAssistantMessage: 'Welcome back, creator. The universe is ready for your next command.',
  stats: {
    skillsMastered: 16,
    projectsBuilt: 11,
    yearsExperience: 3
  },
  expertise: [
    { name: 'Data Science & ML',     percentage: 95, color: '#7c3aed' },
    { name: 'Backend Development',   percentage: 90, color: '#3b82f6' },
    { name: 'Data Analytics',        percentage: 96, color: '#22d3ee' },
    { name: 'Business Automation',   percentage: 92, color: '#ec4899' },
    { name: 'Problem Solving',       percentage: 97, color: '#10b981' }
  ],
  characterStats: [
    { name: 'Analytical Thinking', value: 99, color: '#7c3aed' },
    { name: 'Problem Solving',     value: 97, color: '#3b82f6' },
    { name: 'Adaptability',        value: 93, color: '#22d3ee' },
    { name: 'Communication',       value: 90, color: '#ec4899' },
    { name: 'Consistency',         value: 95, color: '#10b981' }
  ],
  achievements: [
    {
      id: 'data-explorer',
      name: 'Data Explorer',
      description: 'Began the journey into data science and analytics',
      icon: 'compass'
    },
    {
      id: 'model-builder',
      name: 'Model Builder',
      description: 'Built predictive models with scikit-learn and TensorFlow',
      icon: 'brain'
    },
    {
      id: 'automation-architect',
      name: 'Automation Architect',
      description: 'Designed end-to-end automation pipelines for real organisations',
      icon: 'settings'
    },
    {
      id: 'finance-analyst',
      name: 'Finance Analyst',
      description: 'Applied GARCH and Monte Carlo to real market data',
      icon: 'trending-up'
    },
    {
      id: 'storyteller',
      name: 'Data Storyteller',
      description: 'Translated complex data into insights for non-technical stakeholders',
      icon: 'bar-chart'
    }
  ],
  socialLinks: [
    { platform: 'GitHub',   url: 'https://github.com/Sugarplum1827',                              icon: 'github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/jacob-randolf-salayo-216893361/',   icon: 'linkedin' },
    { platform: 'Kaggle',   url: 'https://www.kaggle.com/randolfsalayo',                          icon: 'kaggle' },
    { platform: 'Email',    url: 'mailto:jsnovawebstudio@gmail.com',                              icon: 'mail' }
  ],
  timeline: [
    {
      year: '2021',
      title: 'Started Computer Science at EARIST',
      description: 'Began exploring programming, databases, and data fundamentals.'
    },
    {
      year: '2022',
      title: 'Discovered Data Science & Analytics',
      description: 'Dove deep into Python, R, pandas, and the power of statistical storytelling.'
    },
    {
      year: '2023',
      title: 'Built ML models and data projects',
      description: 'Applied predictive modeling, EDA, and feature engineering to real datasets.'
    },
    {
      year: '2024',
      title: 'Financial analytics and open-source tools',
      description: 'Built GARCH volatility forecasting and trading strategy backtesting platforms.'
    },
    {
      year: '2025',
      title: 'Professional automation and data engineering',
      description: 'Designed enterprise automation pipelines integrating SharePoint, Xero, and CRM platforms for real-world organisations.'
    }
  ]
}

export const philosophy = {
  quote: '"Data is not numbers. Data is the story of what happened."',
  author: creator.name
}
