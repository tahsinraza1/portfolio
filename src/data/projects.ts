export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectTheme {
  accent: string;
  gradient: string;
  glow: string;
  badge: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  featured: boolean;
  clientProject: boolean;
  industry: string;
  location: string;
  stats: ProjectStat[];
  highlights: string[];
  features: string[];
  theme: ProjectTheme;
}

export const projects: Project[] = [
  {
    id: 'fyboard',
    title: 'Fyboard',
    tagline: 'Enterprise Business Management Platform',
    description:
      'Scalable enterprise business management platform delivering frontend modules across HR, Finance, Automation, DataBoard, Documents, and Projects.',
    fullDescription:
      'Fyboard is a comprehensive enterprise business management platform (www.fyboard.com). Developing and maintaining scalable frontend modules across core business verticals including People/HR, Finance, Automation, DataBoard, FyDoc, FyDrive, FyBrain, Projects, Materials, and FyTools. Engineered complex People/HR workflows (employee management, employee lifecycle, attendance, shifts, leave management, payroll, and compliance), multi-tab workspace experiences, role-based access control (RBAC), and high-performance bulk CSV/Excel import workflows.',
    image: '/projects/fyboard.png',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'RBAC',
      'DataBoard',
      'Reusable Components',
      'Multi-Tab UI',
    ],
    github: '',
    liveDemo: 'https://www.fyboard.com/',
    featured: true,
    clientProject: true,
    industry: 'Enterprise SaaS / ERP',
    location: 'Mainpuri, Uttar Pradesh',
    stats: [
      { label: 'Workflows', value: 'HR & Finance' },
      { label: 'Architecture', value: 'RBAC & Multi-tab' },
      { label: 'Modules', value: '10+ Modules' },
    ],
    highlights: [
      'Core People/HR Workflows',
      'AlphaCore & Automation',
      'DataBoard & Multi-Tab',
      'Bulk CSV/Excel Import',
    ],
    features: [
      'Developing and maintaining scalable frontend modules for Fyboard, an enterprise business management platform using responsive and reusable UI components.',
      'Architected core People/HR workflows including employee management, employee lifecycle, attendance, shifts, leave management, payroll, and compliance.',
      'Contributing to business modules including AlphaCore, Automation, DataBoard, FyDoc, FyDrive, FyBrain, Projects, Materials, and FyTools through user-friendly frontend interfaces.',
      'Implementing role-based access control (RBAC), bulk CSV/Excel import workflows, organization-aware date/time/currency formatting, and multi-tab application experiences.',
      'Collaborating with product and development teams to convert business requirements into responsive, reusable, and consistent frontend solutions across the platform.',
    ],
    theme: {
      accent: '#6366f1',
      gradient: 'from-indigo-500/20 via-purple-600/10 to-dark-950',
      glow: 'rgba(99, 102, 241, 0.25)',
      badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    },
  },
  {
    id: 'indian-railways-tracking',
    title: 'Indian Railways Tracking Platform',
    tagline: 'Real-Time Train Tracking & PNR Management',
    description:
      'Live Indian Railways tracking platform with interactive Leaflet route maps, PNR status, seat availability, weather/AQI, and offline ticket wallet.',
    fullDescription:
      'A responsive, mobile-first Indian Railways tracking web application built using React, TypeScript, and Vite with dark/light theme support. Integrates Railway REST APIs for real-time train running status, complete schedules, PNR tracking, trains-between-stations, and seat availability with dynamic response handling. Features interactive Leaflet.js route maps with train markers and station waypoints, Coach & Seat Map Visualizer, localStorage-backed Offline Ticket Wallet, Open-Meteo Weather/AQI integration, Web Speech Synthesis for audio announcements, and HD PNG ticket export using html2canvas.',
    image:
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&h=700&fit=crop',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Vanilla CSS',
      'Leaflet.js',
      'REST APIs',
      'Open-Meteo APIs',
      'html2canvas',
      'Web Speech API',
    ],
    github: '',
    liveDemo: 'https://train-tracker-liard.vercel.app',
    featured: true,
    clientProject: false,
    industry: 'Transit Tech / Utility',
    location: 'India',
    stats: [
      { label: 'Maps', value: 'Interactive Leaflet' },
      { label: 'Tracking', value: 'Live PNR & Status' },
      { label: 'Storage', value: 'Offline Wallet' },
    ],
    highlights: [
      'Interactive Leaflet route maps',
      'PNR & seat availability',
      'Offline Ticket Wallet',
      'Weather/AQI & Speech',
    ],
    features: [
      'Built a responsive Indian Railways tracking platform using React, TypeScript, and Vite with mobile-first UI and dark/light theme support.',
      'Integrated Railway REST APIs for train status, schedules, PNR tracking, trains-between-stations, and seat availability with dynamic API response handling.',
      'Developed interactive Leaflet.js route maps with train markers, station waypoints, route visualization, and theme-aware map layers.',
      'Implemented seat availability, quota tracking, PNR tracking, Coach and Seat Map Visualizer, and Offline Ticket Wallet using localStorage with date-wise availability and journey status handling.',
      'Integrated Open-Meteo Weather/AQI APIs and Web Speech Synthesis, along with WhatsApp sharing and HD PNG ticket export using html2canvas.',
    ],
    theme: {
      accent: '#06b6d4',
      gradient: 'from-cyan-500/20 via-sky-600/10 to-dark-950',
      glow: 'rgba(6, 182, 212, 0.25)',
      badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    },
  },
  {
    id: 'car-rental-express',
    title: 'Car Rental Express',
    tagline: 'Self-Drive Car Rental Platform',
    description:
      'Production car rental platform with vehicle listings, Firebase Auth, Firestore real-time DB, RBAC admin dashboard, and reCAPTCHA Enterprise.',
    fullDescription:
      'Car Rental Express is a production-ready self-drive car rental platform (carrentalexpress.in) built using React, TypeScript, and Tailwind CSS. Features customer-focused booking workflows, vehicle listings, rental enquiry forms, and Firebase Authentication with session persistence and forgot-password flows. Backed by Cloud Firestore with admin-level security rules, a comprehensive RBAC admin dashboard for managing fleet and customer feedback, and Firebase App Check with reCAPTCHA Enterprise for enhanced application security.',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=700&fit=crop',
    technologies: [
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Firebase',
      'Firestore',
      'Firebase Authentication',
      'reCAPTCHA Enterprise',
      'Vercel',
    ],
    github: '',
    liveDemo: 'https://carrentalexpress.in',
    featured: true,
    clientProject: true,
    industry: 'Automotive / Rental',
    location: 'Delhi, India',
    stats: [
      { label: 'Auth & DB', value: 'Firebase & Firestore' },
      { label: 'Security', value: 'App Check + RBAC' },
      { label: 'Deployment', value: 'Vercel Production' },
    ],
    highlights: [
      'RBAC Admin Dashboard',
      'Firebase Authentication',
      'Firestore real-time data',
      'reCAPTCHA Enterprise',
    ],
    features: [
      'Developed a production-ready car rental platform with responsive UI, vehicle listings, rental enquiry forms, and customer-focused booking workflows.',
      'Implemented Firebase Authentication with login, registration, forgot-password, and session persistence functionality.',
      'Built an admin dashboard with role-based access control for managing vehicles, customer enquiries, feedback, and website content.',
      'Integrated Firestore for real-time data management and implemented secure Firebase Security Rules with admin-level authorization.',
      'Developed a customer feedback approval workflow and implemented Firebase App Check with reCAPTCHA Enterprise support to enhance application security.',
      'Optimized and deployed the production application on Vercel using responsive React components, performance-focused UI improvements, Git, and GitHub.',
    ],
    theme: {
      accent: '#f97316',
      gradient: 'from-orange-500/20 via-slate-700/10 to-dark-950',
      glow: 'rgba(249, 115, 22, 0.22)',
      badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    },
  },
  {
    id: 'dripp-society',
    title: 'Dripp Society',
    tagline: 'Premium Café Brand & Online Ordering',
    description:
      'Fully responsive café brand website featuring menu showcase, brand identity, mobile-first design, and WhatsApp-based dynamic ordering.',
    fullDescription:
      'Built a fully responsive café brand website for a real client (drippsociety.co.in) featuring interactive menu showcase, brand identity, and mobile-first design. Developed reusable React components and responsive layouts using Tailwind CSS for a consistent cross-device user experience, coupled with WhatsApp-based ordering with dynamic pre-filled messages containing selected menu items and customer requirements.',
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=700&fit=crop',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'WhatsApp Integration'],
    github: '',
    liveDemo: 'https://drippsociety.co.in',
    featured: true,
    clientProject: true,
    industry: 'Food & Beverage',
    location: 'Lucknow, Uttar Pradesh',
    stats: [
      { label: 'Ordering', value: 'WhatsApp Direct' },
      { label: 'UI/UX', value: 'Mobile-First' },
      { label: 'Components', value: 'Reusable React' },
    ],
    highlights: [
      'Interactive menu showcase',
      'WhatsApp-based ordering',
      'Brand identity design',
      'Responsive UI components',
    ],
    features: [
      'Built a fully responsive café brand website for a real client featuring menu showcase, brand identity, and mobile-first design.',
      'Developed reusable React components and responsive layouts using Tailwind CSS for a consistent cross-device user experience.',
      'Integrated WhatsApp-based ordering with dynamic pre-filled messages containing selected menu items and customer requirements.',
      'Engineered an interactive categorized menu with smooth animations and intuitive item selection.',
      'Designed mobile-first layouts ensuring ultra-fast loading speeds and crisp visuals across all screen sizes.',
    ],
    theme: {
      accent: '#f5c542',
      gradient: 'from-amber-500/20 via-orange-600/10 to-dark-950',
      glow: 'rgba(245, 197, 66, 0.25)',
      badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    },
  },
  {
    id: 'school-website',
    title: 'School Website',
    tagline: 'Institutional Web Presence',
    description:
      'Institutional website with information pages, gallery, admissions section, and fully responsive layout.',
    fullDescription:
      'Institutional website with information pages, gallery, admissions section, and fully responsive layout deployed on Vercel.',
    image:
      'https://tse1.mm.bing.net/th/id/OIP.S9_jP_hHncw32xLXVjPeWgHaE8?r=0&pid=Api&P=0&h=180',
    technologies: ['React', 'Tailwind CSS', 'Vercel'],
    github: '',
    liveDemo: 'https://school-website-flax-zeta.vercel.app',
    featured: false,
    clientProject: true,
    industry: 'Education',
    location: 'India',
    stats: [
      { label: 'Pages', value: 'Multi-section' },
      { label: 'Deploy', value: 'Vercel' },
      { label: 'Layout', value: 'Responsive' },
    ],
    highlights: ['Admissions', 'Gallery', 'Info pages', 'Fast loading'],
    features: [
      'Institutional website with information pages, gallery, admissions section, and fully responsive layout.',
      'Created reusable React components and optimized navigation to improve usability and maintainability.',
      'Deployed the application on Vercel and ensured cross-browser compatibility with fast page loading.',
    ],
    theme: {
      accent: '#2dd4bf',
      gradient: 'from-teal-500/20 via-teal-600/10 to-dark-950',
      glow: 'rgba(45, 212, 191, 0.2)',
      badge: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    },
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    tagline: 'Dark Developer Portfolio & Showcase',
    description:
      'Interactive developer portfolio showcasing skills, projects, experience, and education with premium motion design.',
    fullDescription:
      'A dark-themed portfolio website built with React, TypeScript, and Framer Motion. Features include a cinematic loading screen, smooth scroll navigation, interactive card hover effects with Spring + Lift + 3D Tilt, and fully responsive mobile-first design.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=700&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    github: 'https://github.com/tahsinraza1/portfolio',
    liveDemo: 'https://tahsinraza.vercel.app/',
    featured: false,
    clientProject: false,
    industry: 'Personal Project',
    location: 'Mainpuri, Uttar Pradesh',
    stats: [
      { label: 'Built with', value: 'React + TS' },
      { label: 'Animations', value: 'Framer Motion' },
      { label: 'Deployed', value: 'Vercel' },
    ],
    highlights: [
      'Cinematic loading screen',
      'Motion & 3D Tilt',
      'Full responsiveness',
      'Dark theme',
    ],
    features: [
      'Dark developer portfolio with glassmorphism, soft glows, and gradient accents.',
      'Cinematic loading screen with software engineering video background and count-up animation.',
      'Interactive card hover effects using Spring + Lift + 3D Tilt for premium product feel across all sections.',
      'Fully responsive design with mobile menu, smooth scroll navigation, and mobile-first optimization.',
      'Built with React, TypeScript, Tailwind CSS, Vite for fast builds, and Framer Motion for animations.',
    ],
    theme: {
      accent: '#2dd4bf',
      gradient: 'from-teal-500/20 via-teal-600/10 to-dark-950',
      glow: 'rgba(45, 212, 191, 0.2)',
      badge: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    },
  },
];
