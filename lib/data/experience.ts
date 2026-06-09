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
    id: 'automation-associate',
    title: 'Automation Associate',
    company: 'Building the Future',
    type: 'work',
    location: 'Remote',
    startDate: 'Oct 2025',
    endDate: 'Feb 2026',
    description: 'Designed and implemented end-to-end automation pipelines integrating CRM, accounting, and HR platforms to enable data-driven operational workflows.',
    highlights: [
      'Built data pipelines integrating SharePoint, Xero, and CRM platforms via Zapier and Power Automate',
      'Applied Python scripting and WebSocket protocols for real-time data feeds and cross-system sync',
      'Identified operational inefficiencies through data analysis and modeled scalable automation solutions',
      'Developed structured reporting outputs surfacing actionable insights for HR, accounting, and sales stakeholders',
      'Communicated data findings through clear, narrative-driven presentations to non-technical audiences'
    ],
    skills: ['Python', 'Power Automate', 'Zapier', 'WebSocket', 'SharePoint', 'Xero']
  },
  {
    id: 'hr-associate',
    title: 'Human Resources Associate',
    company: 'Building the Future',
    type: 'work',
    location: 'Remote',
    startDate: 'Oct 2025',
    endDate: 'Feb 2026',
    description: 'Managed structured recruitment databases and applied data analytics to improve hiring pipeline visibility and strategic sourcing decisions.',
    highlights: [
      'Built and maintained structured recruitment databases in Excel and Monday.com',
      'Designed candidate tracking systems capturing pipeline metrics for data-driven hiring analysis',
      'Performed exploratory data analysis on recruitment data to uncover trends and inform sourcing strategy'
    ],
    skills: ['Excel', 'Monday.com', 'EDA', 'Data Management', 'SQL']
  },
  {
    id: 'earist-2021',
    title: 'BS Computer Science',
    company: 'EARIST',
    type: 'education',
    location: 'Manila, Philippines',
    startDate: '2021',
    endDate: 'Present',
    description: 'Pursuing a degree in Computer Science with a specialization in Data Science, machine learning, and business process automation.',
    highlights: [
      'Data Science specialization — ML, statistical modeling, predictive analytics',
      'Hands-on projects in Python, R, SQL, and C++',
      'Built capstone projects in financial analytics and automation',
      'Active contributor to data and tech communities'
    ],
    skills: ['Python', 'R', 'SQL', 'C++', 'Machine Learning', 'Data Science']
  },
  {
    id: 'trading-strategy-tester',
    title: '1st Place – Financial Analytics Hackathon',
    company: 'TechFest 2024',
    type: 'achievement',
    location: 'Manila, Philippines',
    startDate: '2024',
    endDate: '2024',
    description: 'Built a full-featured trading strategy backtesting application with portfolio optimization and Monte Carlo risk simulation.',
    highlights: [
      'Implemented 7+ trading strategies (SMA, EMA, RSI, MACD, Bollinger Bands)',
      'Portfolio optimization using Modern Portfolio Theory',
      'Monte Carlo simulation for risk scenario modeling',
      'Deployed live on Streamlit'
    ],
    skills: ['Python', 'pandas', 'NumPy', 'Monte Carlo', 'Plotly', 'Streamlit']
  },
  {
    id: 'volatility-forecaster',
    title: 'GARCH Volatility Forecasting App',
    company: 'Personal Project',
    type: 'achievement',
    location: 'Remote',
    startDate: '2024',
    endDate: '2024',
    description: 'Developed a financial volatility forecasting tool using GARCH(1,1) models with real-time Yahoo Finance data integration.',
    highlights: [
      'GARCH(1,1) model fitting with the arch library',
      'Real-time stock data via Yahoo Finance API',
      'Interactive Plotly visualizations and model diagnostics',
      'Deployed live on Streamlit'
    ],
    skills: ['Python', 'GARCH', 'pandas', 'NumPy', 'Plotly', 'statsmodels']
  }
]

export const experienceStats = {
  totalYears: 3,
  projectsCompleted: 11,
  certificationsEarned: 3,
  hackathonsWon: 1
}
