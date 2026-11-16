export interface Experience {
  year: string;
  role: string;
  company: string;
  location: string;
  website?: string;
  highlights: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    year: 'Jul 2026 – Present',
    role: 'Frontend Developer',
    company: 'RCL / Fyboard',
    location: 'Mainpuri',
    website: 'https://www.fyboard.com/',
    highlights: [
      'Developing and maintaining scalable frontend modules for Fyboard, an enterprise business management platform using responsive and reusable UI components.',
      'Working on core People/HR workflows including employee management, employee lifecycle, attendance, shifts, leave management, payroll, and compliance.',
      'Contributing to business modules including AlphaCore, Automation, DataBoard, FyDoc, FyDrive, FyBrain, Projects, Materials, and FyTools through user-friendly frontend interfaces.',
      'Implementing role-based access control (RBAC), bulk CSV/Excel import workflows, organization-aware date/time/currency formatting, and multi-tab application experiences.',
      'Collaborating with product and development teams to convert business requirements into responsive, reusable, and consistent frontend solutions across the platform.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'RBAC',
      'DataBoard',
      'Reusable Components',
    ],
  },
  {
    year: 'Nov 2025 – Jun 2026',
    role: 'Frontend Developer',
    company: 'Codiva Systems Pvt. Ltd.',
    location: 'Lucknow',
    highlights: [
      'Developed responsive web applications using React, TypeScript, JavaScript, and Tailwind CSS with reusable components and scalable UI architecture.',
      'Contributed to a real-time Pump Monitoring System with centralized monitoring, pump ON/OFF controls, sensor data, pressure, flow rate, temperature, and operational dashboards.',
      'Developed alert and notification workflows to identify abnormal pump conditions and operational issues.',
      'Developed and integrated REST APIs using AWS Lambda and API Gateway for pump monitoring, control operations, and backend business workflows.',
      'Worked with Amazon DynamoDB for CRUD operations and AWS Cognito for authentication and role-based user access.',
      'Tested and debugged API endpoints using Postman and integrated backend services with React-based frontend applications.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'Cognito',
      'REST APIs',
      'Postman',
    ],
  },
];
