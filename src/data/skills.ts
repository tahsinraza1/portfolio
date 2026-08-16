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
    category: 'FRAMEWORKS & LIBRARIES',
    items: [
      { name: 'React' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
    ],
  },
  {
    category: 'DATABASES',
    items: [
      { name: 'MySQL' },
      { name: 'SQLite' },
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
      { name: 'Cursor' },
      { name: 'Claude Code' },
      { name: 'GitHub Copilot' },
    ],
  },
  {
    category: 'CONCEPTS',
    items: [
      { name: 'REST APIs' },
      { name: 'Role-Based Access Control' },
      { name: 'CRUD' },
      { name: 'Responsive Design' },
    ],
  },
];
