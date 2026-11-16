export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
}

export const skills: Skill[] = [
  {
    category: 'LANGUAGES',
    items: [
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'FRONTEND',
    items: [
      { name: 'React' },
      { name: 'Vite' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'Responsive Design' },
      { name: 'Reusable Components' },
    ],
  },
  {
    category: 'BACKEND & CLOUD',
    items: [
      { name: 'AWS Lambda' },
      { name: 'API Gateway' },
      { name: 'AWS Cognito' },
      { name: 'Firebase Authentication' },
    ],
  },
  {
    category: 'APIS & INTEGRATION',
    items: [
      { name: 'REST APIs' },
      { name: 'API Integration' },
      { name: 'Open-Meteo APIs' },
      { name: 'Web Speech API' },
      { name: 'WhatsApp Integration' },
    ],
  },
  {
    category: 'DATABASES',
    items: [
      { name: 'MySQL' },
      { name: 'SQLite' },
      { name: 'Firebase Firestore' },
      { name: 'Amazon DynamoDB' },
    ],
  },
  {
    category: 'TOOLS & PLATFORMS',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Postman' },
      { name: 'Vercel' },
      { name: 'Antigravity' },
      { name: 'Claude Code' },
    ],
  },
  {
    category: 'CONCEPTS',
    items: [
      { name: 'RBAC' },
      { name: 'CRUD' },
      { name: 'Authentication' },
      { name: 'Performance Optimization' },
    ],
  },
];
