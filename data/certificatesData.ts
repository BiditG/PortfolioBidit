// data/certificatesData.ts

export interface Certificate {
  title: string
  issuer: string
  date: string
  description?: string
  certUrl?: string
  logoUrl?: string
}

const certificatesData: Certificate[] = [
  {
    title: 'Introduction to Machine Learning: Art of the Possible',
    issuer: 'AWS',
    date: 'July 2025',
    description: 'Introductory course on machine learning and their practical applications.',
    certUrl: '',
    logoUrl: '/certificates/art.png',
  },
  {
    title: 'AI Agents for Beginners',
    issuer: 'Simplilearn',
    date: 'July 2025',
    description: 'Introductory course on AI agents and their practical applications.',
    certUrl: '',
    logoUrl: '/certificates/agent.png',
  },
  {
    title: 'Fundamentals of LLM',
    issuer: 'Hugging Face',
    date: 'July 2025',
    description: 'Covered foundational concepts in large language models.',
    certUrl: 'https://huggingface.co/BiditG',
    logoUrl: '/certificates/llm.png',
  },
  {
    title: 'Generative AI Studio (Google Cloud)',
    issuer: 'Simplilearn',
    date: 'July 2025',
    description: 'Hands-on with generative AI using Google Cloud tools.',
    certUrl: '',
    logoUrl: '/certificates/genai.png',
  },
  {
    title: 'Introduction to SQL',
    issuer: 'Kaggle',
    date: 'July 2025',
    description: 'Basics of SQL and about data science.',
    certUrl: 'https://www.kaggle.com/learn/certification/biditgiri/intro-to-sql',
    logoUrl: '/certificates/Bidit Giri - Intro to SQL.png',
  },
  {
    title: 'Intro to Git and GitHub',
    issuer: 'Le Wagon',
    date: 'July 2025',
    description: 'Version control fundamentals and GitHub collaboration.',
    certUrl: '',
    logoUrl: '/certificates/Intro.png',
  },
  {
    title: 'Introduction to AI Ethics',
    issuer: 'Kaggle',
    date: 'July 2025',
    description: 'Explores ethical concerns and responsibility in AI.',
    certUrl: 'https://www.kaggle.com/learn/certification/biditgiri/intro-to-ai-ethics',
    logoUrl: '/certificates/Bidit Giri - Intro to AI Ethics.png',
  },
  {
    title: 'Machine Learning Terminology and Process',
    issuer: 'Amazon Web Services (AWS)',
    date: 'July 2025',
    description: 'Overview of ML project lifecycle and common terms.',
    certUrl: '',
    logoUrl: '/certificates/ml.png',
  },
  {
    title: 'Planning a Machine Learning Project',
    issuer: 'Amazon Web Services (AWS)',
    date: 'July 2025',
    description: 'Best practices for organizing and managing ML projects.',
    certUrl: '',
    logoUrl: '/certificates/plan.png',
  },
  {
    title: 'Python',
    issuer: 'Kaggle',
    date: 'July 2025',
    description: 'Fundamentals of Python programming for data science.',
    certUrl: 'https://www.kaggle.com/learn/certification/biditgiri/python',
    logoUrl: '/certificates/python-kaggle.png',
  },
]

export default certificatesData
