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
    id: 'dripp-society',
    title: 'Dripp Society',
    tagline: 'Lucknow Ka Apna Adda',
    description:
      'Premium café brand website for Lucknow — menu, online ordering, gallery, offers, and a bold local identity.',
    fullDescription:
      'DrippSociety is positioned as one of the best cafés in Lucknow, blending Lucknowi tehzeeb with modern café culture. The site showcases coffee, food, ambience, and the full brand experience — from menu browsing to online orders and gallery discovery.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=700&fit=crop',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    github: '',
    liveDemo: 'https://drippsociety.co.in',
    featured: true,
    clientProject: true,
    industry: 'Food & Beverage',
    location: 'LDA Colony, Gol Market, Lucknow',
    stats: [
      { label: 'Hours', value: 'Till Midnight' },
      { label: 'Menu', value: 'Chai to Pizza' },
      { label: 'Orders', value: 'Cart + Delivery' },
    ],
    highlights: [
      'Interactive menu categories',
      'Online order cart',
      'Offers & gallery',
      'Google reviews',
    ],
    features: [
      'Built a bold café brand website with the tagline “Lucknow Ka Apna Adda” and a warm mustard + dark visual identity.',
      'Designed an interactive menu with categories — chai, coffee, pizza, combos, and more — with category-based browsing.',
      'Implemented an online ordering cart with customer details, delivery/pickup options, and order summary flow.',
      'Created dedicated sections for brand story, why DrippSociety, offers & deals, Instagram-style gallery, and Google reviews.',
      'Optimized for mobile-first responsiveness so the full café experience works seamlessly on phones and tablets.',
      'Highlighted location details for LDA Colony, Gol Market — open till midnight with quick contact and visit CTAs.',
    ],
    theme: {
      accent: '#f5c542',
      gradient: 'from-amber-500/20 via-orange-600/10 to-dark-950',
      glow: 'rgba(245, 197, 66, 0.25)',
      badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    },
  },
  {
    id: 'car-rental-express',
    title: 'Car Rental Express',
    tagline: 'Self-Drive Car Rentals in Delhi',
    description:
      'Self-drive car rental platform with fleet browsing, hourly/daily bookings, Google Sheets backend, and WhatsApp confirmation.',
    fullDescription:
      'Car Rental Express is a self-drive car rental platform in Delhi offering premium, well-maintained vehicles with unlimited kilometers and easy documentation. Customers browse the fleet, check availability, and complete bookings through a WhatsApp-based inquiry flow.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=700&fit=crop',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Google Sheets'],
    github: '',
    liveDemo: 'https://www.carrentalexpress.in/',
    featured: true,
    clientProject: true,
    industry: 'Automotive / Rental',
    location: 'Jasola Vihar, Shaheen Bagh, Delhi',
    stats: [
      { label: 'Fleet', value: '14+ Cars' },
      { label: 'Booking', value: 'Hourly & Daily' },
      { label: 'KMs', value: 'Unlimited' },
    ],
    highlights: [
      'Fleet catalog',
      'Date availability',
      'WhatsApp booking',
      'Sheets backend',
    ],
    features: [
      'Developed a self-drive rental platform for Delhi with the positioning: premium cars, unlimited kilometers, and easy documentation.',
      'Built a browsable fleet catalog with detailed vehicle pages — Tata Punch, Thar, Safari, Baleno, Jimny, Scorpio, and more.',
      'Implemented hourly and daily rental flows with date pickers, availability checks, and booking overlap validation.',
      'Integrated Google Sheets (via OpenSheet API) as a lightweight backend to manage fleet data, pricing, and availability dynamically.',
      'Designed a WhatsApp booking inquiry system — users submit details and the owner confirms offline with no online payment.',
      'Added responsive UI with fleet filters, booking steps, and location details near Jasola Vihar / Shaheen Bagh Metro.',
    ],
    theme: {
      accent: '#f97316',
      gradient: 'from-orange-500/20 via-slate-700/10 to-dark-950',
      glow: 'rgba(249, 115, 22, 0.22)',
      badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
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
    image: 'https://tse1.mm.bing.net/th/id/OIP.S9_jP_hHncw32xLXVjPeWgHaE8?r=0&pid=Api&P=0&h=180',
    technologies: ['React', 'Tailwind CSS', 'Vercel'],
    github: '',
    liveDemo: 'https://school-website-flax-zeta.vercel.app',
    featured: true,
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
      gradient: 'from-accent/20 via-teal-600/10 to-dark-950',
      glow: 'rgba(45, 212, 191, 0.2)',
      badge: 'bg-accent/15 text-accent border-accent/30',
    },
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    tagline: 'Premium Dark Developer Landing Page',
    description:
      'Interactive developer portfolio showcasing skills, projects, experience, and education with premium motion design.',
    fullDescription:
      'A premium dark-themed portfolio website built with React, TypeScript, and Framer Motion. Features include a cinematic loading screen with software engineering video background, smooth scroll navigation, interactive card hover effects with Spring + Lift + 3D Tilt, and fully responsive mobile-first design.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=700&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    github: 'https://github.com/tahsinraza1/portfolio',
    liveDemo: 'https://tahsinraza.vercel.app/',
    featured: true,
    clientProject: false,
    industry: 'Personal Project',
    location: 'Lucknow, India',
    stats: [
      { label: 'Built with', value: 'React + TS' },
      { label: 'Animations', value: 'Framer Motion' },
      { label: 'Deployed', value: 'Vercel' },
    ],
    highlights: [
      'Cinematic loading screen',
      'Premium motion design',
      'Full responsiveness',
      'Dark theme',
    ],
    features: [
      'Premium dark developer landing page with glassmorphism, soft glows, and gradient accents.',
      'Cinematic 4-second loading screen with software engineering video background and count-up animation.',
      'Interactive card hover effects using Spring + Lift + 3D Tilt for premium product feel across all sections.',
      'Fully responsive design with full-screen mobile menu, smooth scroll navigation, and mobile-first optimization.',
      'Sections include Hero with CTA, About with focus areas, Skills taxonomy, Projects showcase, Experience timeline, Education & Certifications, and Contact form.',
      'Professional favicon (TR logo), custom cursor follower, and smooth transitions throughout the portfolio.',
      'Built with React, TypeScript, Tailwind CSS, Vite for fast builds, and Framer Motion for premium animations.',
    ],
    theme: {
      accent: '#2dd4bf',
      gradient: 'from-accent/20 via-teal-600/10 to-dark-950',
      glow: 'rgba(45, 212, 191, 0.2)',
      badge: 'bg-accent/15 text-accent border-accent/30',
    },
  },
];
