export interface Experience {
  year: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    year: 'Nov 2025 – Present',
    role: 'Frontend Developer',
    company: 'Codiva Systems Pvt. Ltd.',
    location: 'Lucknow',
    highlights: [
      'Develop and maintain production-grade frontend features using React, TypeScript, and Tailwind CSS.',
      'Integrate REST APIs and deliver pixel-perfect, responsive UI components in collaboration with the backend team.',
      'Built reusable UI components and implemented responsive layouts, improving development efficiency and maintaining a consistent design system.',
      'Worked with AWS services for backend API integration, authentication, and cloud workflows (Lambda, API Gateway, DynamoDB, Cognito).',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'REST APIs',
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'Cognito',
    ],
  },
];
