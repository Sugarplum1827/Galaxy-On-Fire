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
    id: 'python',
    name: 'Python',
    icon: 'python',
    level: 96,
    color: '#3776ab',
    category: 'data',
    description: 'Python is the backbone of data science, machine learning, and automation — versatile, powerful, and expressive.',
    yearsExperience: 3,
    projects: ['Trading Strategy Tester', 'Volatility Forecaster', 'Automation Pipelines'],
    relatedSkills: ['pandas', 'numpy', 'scikit-learn', 'tensorflow'],
    insights: [
      'Predictive modeling and EDA pipelines',
      'WebSocket automation and real-time data feeds',
      'ML model building with scikit-learn and TensorFlow',
      'GARCH financial modeling',
      'Scripting cross-system integrations'
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: 'sql',
    level: 88,
    color: '#00758f',
    category: 'database',
    description: 'SQL is the standard language for querying and managing relational databases — essential for data analysis and backend work.',
    yearsExperience: 3,
    projects: ['Recruitment Database', 'Data Pipelines', 'Reporting System'],
    relatedSkills: ['python', 'pandas', 'mysql', 'sqlite'],
    insights: [
      'Complex query optimization',
      'Database design and normalization',
      'Aggregations and window functions',
      'ETL pipeline integration',
      'MySQL and SQLite experience'
    ]
  },
  {
    id: 'r',
    name: 'R',
    icon: 'r',
    level: 85,
    color: '#276dc3',
    category: 'data',
    description: 'R is a statistical computing language widely used in data analysis, visualization, and academic research.',
    yearsExperience: 2,
    projects: ['Statistical Analysis', 'ggplot2 Visualizations', 'Financial Modeling'],
    relatedSkills: ['python', 'pandas', 'numpy'],
    insights: [
      'ggplot2 data visualization',
      'Statistical hypothesis testing',
      'Time series analysis',
      'Data wrangling with tidyverse',
      'Reporting with R Markdown'
    ]
  },
  {
    id: 'pandas',
    name: 'Pandas',
    icon: 'pandas',
    level: 92,
    color: '#150458',
    category: 'data',
    description: 'Pandas is the go-to Python library for data manipulation and analysis, powering EDA and pipeline workflows.',
    yearsExperience: 3,
    projects: ['Trading Strategy Tester', 'Volatility Forecaster', 'ETL Process'],
    relatedSkills: ['python', 'numpy', 'sql'],
    insights: [
      'DataFrame operations and transformations',
      'Data cleaning and preprocessing pipelines',
      'Time series analysis',
      'Merge, join, and group-by operations',
      'Performance tuning for large datasets'
    ]
  },
  {
    id: 'numpy',
    name: 'NumPy',
    icon: 'numpy',
    level: 88,
    color: '#013243',
    category: 'data',
    description: 'NumPy provides the numerical foundation for scientific computing and ML preprocessing in Python.',
    yearsExperience: 3,
    projects: ['Trading Strategy Tester', 'Volatility Forecaster', 'ML Preprocessing'],
    relatedSkills: ['python', 'pandas', 'scikit-learn'],
    insights: [
      'Array and matrix operations',
      'Linear algebra fundamentals',
      'Statistical computations',
      'Broadcasting and vectorization',
      'Monte Carlo simulation support'
    ]
  },
  {
    id: 'scikitlearn',
    name: 'scikit-learn',
    icon: 'scikitlearn',
    level: 88,
    color: '#f89939',
    category: 'data',
    description: 'scikit-learn is Python\'s leading ML library for classification, regression, clustering, and feature engineering.',
    yearsExperience: 2,
    projects: ['Predictive Models', 'Feature Engineering', 'Classification Pipelines'],
    relatedSkills: ['python', 'pandas', 'numpy', 'tensorflow'],
    insights: [
      'Supervised and unsupervised learning',
      'Feature engineering and selection',
      'Model evaluation and cross-validation',
      'Pipeline construction',
      'Hyperparameter tuning'
    ]
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    icon: 'tensorflow',
    level: 82,
    color: '#ff6f00',
    category: 'data',
    description: 'TensorFlow is an open-source deep learning framework for building and training neural networks at scale.',
    yearsExperience: 2,
    projects: ['Deep Learning Models', 'Neural Network Experiments', 'ML Projects'],
    relatedSkills: ['python', 'scikit-learn', 'numpy'],
    insights: [
      'Neural network architecture design',
      'Model training and evaluation',
      'Keras high-level API',
      'Classification and regression tasks',
      'Model optimization techniques'
    ]
  },
  {
    id: 'plotly',
    name: 'Plotly',
    icon: 'plotly',
    level: 88,
    color: '#3f4f75',
    category: 'data',
    description: 'Plotly enables interactive, publication-quality data visualizations in Python and the browser.',
    yearsExperience: 2,
    projects: ['Trading Strategy Tester', 'Volatility Forecaster', 'Analytics Dashboards'],
    relatedSkills: ['python', 'pandas', 'streamlit'],
    insights: [
      'Interactive charting and dashboards',
      'Financial and time series plots',
      'Distribution and diagnostic visualizations',
      'Streamlit integration',
      'Data storytelling for non-technical audiences'
    ]
  },
  {
    id: 'excel',
    name: 'Excel',
    icon: 'excel',
    level: 90,
    color: '#217346',
    category: 'tools',
    description: 'Excel is an industry-standard tool for data analysis, reporting, and business intelligence workflows.',
    yearsExperience: 3,
    projects: ['Recruitment Database', 'HR Reporting', 'Analytics Dashboards'],
    relatedSkills: ['sql', 'pandas', 'looker'],
    insights: [
      'Advanced formulas and pivot tables',
      'Data cleaning and transformation',
      'Dashboard building',
      'Financial modeling',
      'Cross-team reporting outputs'
    ]
  },
  {
    id: 'looker',
    name: 'Looker Studio',
    icon: 'looker',
    level: 85,
    color: '#4285f4',
    category: 'tools',
    description: 'Looker Studio (formerly Data Studio) is a BI tool for building interactive dashboards and visual reports.',
    yearsExperience: 2,
    projects: ['HR Analytics Dashboard', 'Sales Reporting', 'Operational KPIs'],
    relatedSkills: ['sql', 'excel', 'python'],
    insights: [
      'Dashboard design and data storytelling',
      'Connecting multiple data sources',
      'Real-time reporting',
      'Stakeholder-facing visual outputs',
      'KPI tracking'
    ]
  },
  {
    id: 'powerautomate',
    name: 'Power Automate',
    icon: 'powerauto',
    level: 87,
    color: '#0078d4',
    category: 'tools',
    description: 'Power Automate is Microsoft\'s workflow automation platform for connecting apps and automating repetitive processes.',
    yearsExperience: 1,
    projects: ['HR Automation', 'Data Pipeline Orchestration', 'Cross-system Sync'],
    relatedSkills: ['zapier', 'python', 'sharepoint'],
    insights: [
      'End-to-end workflow design',
      'SharePoint and Xero integrations',
      'Automated data sync and reporting',
      'Trigger-based automation flows',
      'Non-technical stakeholder delivery'
    ]
  },
  {
    id: 'zapier',
    name: 'Zapier',
    icon: 'zapier',
    level: 85,
    color: '#ff4a00',
    category: 'tools',
    description: 'Zapier automates workflows between web apps without code, enabling scalable business process automation.',
    yearsExperience: 1,
    projects: ['CRM Integration', 'HR Data Pipelines', 'Automated Reporting'],
    relatedSkills: ['powerautomate', 'sharepoint', 'python'],
    insights: [
      'Multi-step Zap automation',
      'CRM and accounting platform integration',
      'Trigger-action workflow design',
      'Cross-platform data flow',
      'Reducing manual data entry'
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'javascript',
    level: 85,
    color: '#f7df1e',
    category: 'frontend',
    description: 'JavaScript powers interactive web experiences and is the foundation for frontend and Node.js development.',
    yearsExperience: 3,
    projects: ['GBA Portfolio Emulator', 'Booking System', 'AskHelp Platform'],
    relatedSkills: ['typescript', 'html', 'css'],
    insights: [
      'ES6+ features and async programming',
      'DOM manipulation and event handling',
      'Browser-based emulation (GBA.js)',
      'Web Audio API',
      'Module systems and tooling'
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'typescript',
    level: 83,
    color: '#3178c6',
    category: 'frontend',
    description: 'TypeScript adds static typing to JavaScript, improving code quality and developer experience in larger codebases.',
    yearsExperience: 2,
    projects: ['Type-safe APIs', 'Frontend Applications', 'Component Libraries'],
    relatedSkills: ['javascript', 'nodejs'],
    insights: [
      'Advanced type systems and generics',
      'Type inference and strict mode',
      'Interface and type design',
      'Declaration files',
      'Refactoring safety'
    ]
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: 'mysql',
    level: 85,
    color: '#00758f',
    category: 'database',
    description: 'MySQL is a widely-used open-source relational database system for web and enterprise applications.',
    yearsExperience: 3,
    projects: ['Booking System', 'AskHelp Platform', 'Analytics Pipelines'],
    relatedSkills: ['sql', 'sqlite', 'python'],
    insights: [
      'Schema design and normalization',
      'Query optimization',
      'Stored procedures',
      'PHP and Python integration',
      'Data migration'
    ]
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: 'mongodb',
    level: 78,
    color: '#47a248',
    category: 'database',
    description: 'MongoDB is a NoSQL document database offering flexible schema design for modern applications.',
    yearsExperience: 1,
    projects: ['Unstructured Data Projects', 'API Backends'],
    relatedSkills: ['sql', 'nodejs', 'python'],
    insights: [
      'Document-oriented data modeling',
      'Aggregation pipelines',
      'CRUD operations',
      'Indexing strategies',
      'Integration with Python and Node.js'
    ]
  },
  {
    id: 'git',
    name: 'Git',
    icon: 'git',
    level: 85,
    color: '#f05032',
    category: 'tools',
    description: 'Git is the standard distributed version control system for tracking changes and collaborating on code.',
    yearsExperience: 3,
    projects: ['All Projects', 'Open Source Contributions'],
    relatedSkills: ['github', 'python', 'javascript'],
    insights: [
      'Branching and merging strategies',
      'Pull request workflows',
      'Commit hygiene and history management',
      'Conflict resolution',
      'Repository organisation'
    ]
  }
]

export const skillCategories = [
  { id: 'all', name: 'All', icon: 'layers' },
  { id: 'data', name: 'Data Science', icon: 'bar-chart' },
  { id: 'frontend', name: 'Frontend', icon: 'monitor' },
  { id: 'backend', name: 'Backend', icon: 'server' },
  { id: 'database', name: 'Database', icon: 'database' },
  { id: 'tools', name: 'Tools & Automation', icon: 'tool' }
]

export function getSkillById(id: string): Skill | undefined {
  return skills.find(skill => skill.id === id)
}

export function getSkillsByCategory(category: string): Skill[] {
  if (category === 'all') return skills
  return skills.filter(skill => skill.category === category)
}
