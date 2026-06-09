export interface Project {
  id: string
  name: string
  subtitle: string
  description: string
  category: 'web' | '3d' | 'uiux' | 'games' | 'tools' | 'data'
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  images: string[]
  gradient: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'trading-strategy-tester',
    name: 'Trading Strategy Tester',
    subtitle: 'Financial Backtesting Platform',
    description: 'A comprehensive web-based trading strategy backtesting application built with Streamlit. Test and analyze 7+ strategies (SMA, EMA, RSI, MACD, Bollinger Bands) on live or custom financial data, with portfolio optimization via Modern Portfolio Theory and Monte Carlo risk simulation.',
    category: 'data',
    techStack: ['python', 'streamlit', 'pandas', 'numpy', 'plotly', 'backtrader', 'scipy'],
    liveUrl: 'https://trading-strategy-tester.streamlit.app',
    githubUrl: 'https://github.com/Sugarplum1827/Trading-Strategy-Tester',
    images: ['/projects/trading-strategy-tester.jpg'],
    gradient: 'from-green-500 via-cyan-500 to-blue-500',
    featured: true
  },
  {
    id: 'volatility-forecaster',
    name: 'Volatility Forecaster',
    subtitle: 'GARCH Financial Analytics',
    description: 'A Streamlit web application for financial volatility forecasting using GARCH(1,1) models. Fetches real-time stock data from Yahoo Finance, fits GARCH models to capture volatility clustering, and generates 1–20 day ahead forecasts with interactive diagnostics and CSV export.',
    category: 'data',
    techStack: ['python', 'streamlit', 'pandas', 'numpy', 'plotly', 'arch', 'statsmodels'],
    liveUrl: 'https://volatility-forecaster.streamlit.app',
    githubUrl: 'https://github.com/Sugarplum1827/Volatility-Forecaster',
    images: ['/projects/volatility-forecaster.jpg'],
    gradient: 'from-purple-600 via-pink-500 to-red-500',
    featured: true
  },
  {
    id: 'portfolio-emulator',
    name: 'GBA Portfolio Emulator',
    subtitle: 'Interactive Retro Portfolio',
    description: 'A web-based Game Boy Advance (GBA) emulator that showcases an interactive portfolio — featuring a custom top-down map, animated character, NPC dialogs, and enterable buildings. A nostalgic, retro-style personal brand experience running entirely in the browser.',
    category: 'games',
    techStack: ['javascript', 'html', 'css', 'gba-js', 'web-audio'],
    liveUrl: 'https://sugarplum1827.github.io/Porfolio-Emulator/',
    githubUrl: 'https://github.com/Sugarplum1827/Porfolio-Emulator',
    images: ['/projects/portfolio-emulator.jpg'],
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    featured: true
  },
  {
    id: 'booking-system',
    name: 'Booking System',
    subtitle: 'Web App',
    description: 'A full-featured booking and reservation management system built with PHP, enabling users to schedule, manage, and track appointments or reservations.',
    category: 'web',
    techStack: ['php', 'html', 'css', 'javascript', 'mysql'],
    githubUrl: 'https://github.com/Sugarplum1827/Booking-system',
    images: ['/projects/booking-system.jpg'],
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    featured: false
  },
  {
    id: 'askhelp',
    name: 'AskHelp',
    subtitle: 'Q&A Platform',
    description: 'A community-driven question and answer platform built with PHP, designed to help users ask, respond to, and discover solutions to technical and general queries.',
    category: 'web',
    techStack: ['php', 'html', 'css', 'javascript', 'mysql'],
    githubUrl: 'https://github.com/Sugarplum1827/askhelp',
    images: ['/projects/askhelp.jpg'],
    gradient: 'from-cyan-500 via-blue-500 to-purple-500',
    featured: false
  }
]

export const projectCategories = [
  { id: 'all', name: 'All' },
  { id: 'data', name: 'Data Science' },
  { id: 'web', name: 'Web Apps' },
  { id: 'games', name: 'Games' },
  { id: '3d', name: '3D' },
  { id: 'uiux', name: 'UI/UX' },
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
