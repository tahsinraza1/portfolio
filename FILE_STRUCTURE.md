# Project File Structure & Reference Guide

## 📁 Complete File Hierarchy

```
tahsin-raza-portfolio/
│
├── 📖 DOCUMENTATION
│   ├── README.md                              # Main project documentation
│   ├── QUICK_START.md                         # 5-minute setup guide
│   ├── SETUP.md                               # Comprehensive setup & deployment
│   ├── CUSTOMIZATION_CHECKLIST.md             # Step-by-step customization
│   ├── PROJECT_SUMMARY.md                     # Complete project overview
│   └── FILE_STRUCTURE.md                      # This file
│
├── 🔧 CONFIGURATION FILES
│   ├── package.json                           # NPM dependencies & scripts
│   ├── package-lock.json                      # Locked dependency versions
│   ├── tsconfig.json                          # TypeScript configuration
│   ├── tsconfig.node.json                     # TypeScript Node config
│   ├── tsconfig.app.json                      # TypeScript App config
│   ├── vite.config.ts                         # Vite build configuration
│   ├── tailwind.config.js                     # Tailwind CSS configuration
│   ├── .gitignore                             # Git ignore rules
│   ├── .oxlintrc.json                         # Oxlint configuration
│   └── index.html                             # HTML entry point
│
├── 📦 SRC - Main Application Code
│   │
│   ├── 🎨 COMPONENTS
│   │   │
│   │   ├── 3D/ - Three.js Components
│   │   │   ├── HeroScene.tsx                  # Main 3D canvas setup
│   │   │   ├── FloatingOrb.tsx                # Interactive wireframe sphere
│   │   │   ├── ParticleField.tsx              # 500+ animated particles
│   │   │   └── Lights.tsx                     # Professional lighting setup
│   │   │
│   │   ├── COMMON/ - Reusable UI Components
│   │   │   ├── LoadingScreen.tsx              # 0-100 loading animation
│   │   │   ├── Button.tsx                     # Base button component
│   │   │   ├── MagneticButton.tsx             # Magnetic cursor button
│   │   │   └── CursorFollower.tsx             # Custom premium cursor
│   │   │
│   │   ├── LAYOUT/ - Layout Components
│   │   │   ├── Navbar.tsx                     # Navigation bar
│   │   │   └── Footer.tsx                     # Footer section
│   │   │
│   │   └── SECTIONS/ - Page Sections
│   │       ├── Hero.tsx                       # Hero/home section
│   │       ├── About.tsx                      # About me section
│   │       ├── Skills.tsx                     # Skills showcase
│   │       ├── Projects.tsx                   # Projects grid & modals
│   │       ├── Experience.tsx                 # Work experience timeline
│   │       └── Contact.tsx                    # Contact form & links
│   │
│   ├── 📊 DATA - Static Content
│   │   ├── projects.ts                        # Project data (4 samples)
│   │   ├── skills.ts                          # Skills by category
│   │   └── experience.ts                      # Work experience timeline
│   │
│   ├── 🎯 MAIN FILES
│   │   ├── App.tsx                            # Root component
│   │   ├── main.tsx                           # Application entry point
│   │   ├── index.css                          # Global styles & utilities
│   │   └── App.css                            # App-level styles
│   │
│   └── 🖼️ ASSETS
│       ├── hero.png                           # Hero image placeholder
│       ├── react.svg                          # React logo
│       └── vite.svg                           # Vite logo
│
├── 📂 DIST - Production Build Output
│   ├── index.html                             # Built HTML
│   ├── assets/
│   │   ├── index-*.css                        # Minified CSS
│   │   ├── index-*.js                         # Minified JS
│   │   └── HeroScene-*.js                     # Three.js code chunk
│   └── favicon.ico                            # Favicon
│
├── 📂 PUBLIC - Static Assets
│   └── (public assets served as-is)
│
├── 📂 NODE_MODULES - Dependencies
│   └── (215+ packages installed)
│
└── 📂 VITE_CACHE - Vite build cache
    └── (auto-generated)
```

---

## 🎯 Key Files for Customization

### Must Edit
| File | Purpose | Edit For |
|------|---------|----------|
| `src/data/projects.ts` | Project content | Add your 4-6 best projects |
| `src/data/skills.ts` | Skills listing | Add your technical skills |
| `src/data/experience.ts` | Work history | Add your job experience |
| `src/components/sections/Hero.tsx` | Hero section | Update name & tagline |
| `src/components/sections/Contact.tsx` | Contact info | Add your email, GitHub, LinkedIn |
| `src/components/layout/Navbar.tsx` | Navigation logo | Change "TR" to your initials |

### Nice to Edit
| File | Purpose | Edit For |
|------|---------|----------|
| `src/components/sections/About.tsx` | About biography | Personalize your story |
| `tailwind.config.js` | Theme colors | Change accent color |
| `index.html` | Meta tags & title | SEO optimization |
| `src/components/layout/Footer.tsx` | Footer content | Add your brand |

### Don't Edit (Unless You Know What You're Doing)
| File | Purpose |
|------|---------|
| `src/components/3d/*` | 3D graphics engine |
| `src/components/common/*` | UI primitives |
| `vite.config.ts` | Build configuration |
| `tsconfig.json` | TypeScript config |
| `package.json` | Dependencies |

---

## 🔍 Component Dependencies Map

```
App.tsx
├── LoadingScreen (0-100 animation)
├── CursorFollower (Custom cursor)
├── Navbar
└── main sections in sequence
    ├── Hero
    │   └── HeroScene
    │       ├── FloatingOrb (3D sphere)
    │       ├── ParticleField (500 particles)
    │       └── Lights (Three.js lights)
    ├── About
    ├── Skills
    ├── Projects
    │   └── ProjectModal
    ├── Experience
    ├── Contact
    └── Footer
```

---

## 📦 Data Files Structure

### projects.ts
```typescript
{
  id: string              // Unique identifier
  title: string           // Project name
  description: string     // Short description
  fullDescription: string // Detailed description
  image: string          // Image URL
  technologies: string[] // Tech stack
  github: string         // GitHub link
  liveDemo: string       // Live demo link
  featured: boolean      // Show in featured section
  features: string[]     // Feature list
  challenges: string[]   // Challenges faced
  solutions: string[]    // How you solved them
}
```

### skills.ts
```typescript
{
  category: string       // Section title (FRONTEND, BACKEND, TOOLS)
  items: {
    name: string         // Skill name
  }[]
}
```

### experience.ts
```typescript
{
  year: string          // Time period (e.g., "2024 - Present")
  role: string          // Job title
  company: string       // Company name
  description: string   // What you did
  technologies: string[] // Tech used
}
```

---

## 🎨 Component Props Reference

### LoadingScreen
```typescript
props: {
  onComplete: () => void  // Called when animation finishes
}
```

### Button
```typescript
props: {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
```

### MagneticButton
```typescript
props: {
  children: React.ReactNode
  onClick?: () => void
}
```

### Navbar
```typescript
props: {
  scrollY: number  // Current scroll position
}
```

---

## 🔗 Routing Structure

```
/ (Root)
├── home         → Hero section
├── about        → About section
├── skills       → Skills section
├── projects     → Projects section
├── experience   → Experience section
└── contact      → Contact section
```

All sections are on a single page (SPA). Smooth scroll navigation via navbar.

---

## 🎨 CSS Classes Reference

### Tailwind Utilities Used
```css
/* Spacing */
py-20              /* Padding vertical */
px-6               /* Padding horizontal */
mb-4, mb-6, mb-8   /* Margin bottom */
gap-4, gap-8       /* Gap between flex items */

/* Layout */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
flex items-center justify-between
max-w-7xl mx-auto

/* Typography */
text-4xl md:text-5xl font-bold tracking-tighter
text-sm tracking-widest uppercase
text-gray-400 text-lg leading-relaxed

/* Colors */
bg-dark-950        /* Near black background */
bg-surface         /* Dark surface color */
text-accent        /* Cyan accent */
text-gray-400      /* Secondary text */
border border-accent
border-gray-800

/* Effects */
hover:border-accent transition-all duration-300
glass              /* Glassmorphism class */
gradient-text      /* Gradient text effect */
```

### Custom Utilities
```css
.glass
.gradient-text
.loading-text
.perspective
```

---

## 🚀 Build Output Structure

After `npm run build`, the `dist/` folder contains:

```
dist/
├── index.html                    # Main HTML file (1 KB)
├── assets/
│   ├── index-9406e0ec.css        # Main CSS (1.2 KB)
│   ├── index-fad1afae.js         # Main JS (276 KB)
│   └── HeroScene-769af8e8.js     # Three.js chunk (800 KB)
└── favicon.ico                   # Favicon
```

**Total size**: ~300 KB (minified, ~90 KB gzipped)

---

## 📊 Dependencies Breakdown

### Production
```
react@^18.3.1
react-dom@^18.3.1
three@^0.160.0
@react-three/fiber@^8.15.0
@react-three/drei@^9.87.0
framer-motion@^10.16.1
gsap@^3.12.2
tailwindcss@^3.3.6
lucide-react@^0.263.1
react-router-dom@^6.14.0
zustand@^4.4.0
lenis@^1.0.27
```

### Development
```
typescript@^5.0.2
vite@^4.3.9
@vitejs/plugin-react@^4.0.0
@types/react@^18.2.15
@types/react-dom@^18.2.7
```

---

## 📝 Environment Setup

### Node Requirement
- Node.js 16 or higher
- npm 7 or higher (or yarn)

### Recommended IDE Setup
- VS Code with TypeScript support
- ESLint extension (optional)
- Tailwind CSS IntelliSense
- Thunder Client or Postman (if testing API)

---

## 🔄 Development Workflow

```
1. Edit src files
   ↓
2. Save changes
   ↓
3. Vite HMR hot reloads browser
   ↓
4. See changes instantly
   ↓
5. Run `npm run build` when ready
   ↓
6. Deploy dist/ folder
```

---

## 📱 Responsive File Organization

All responsive breakpoints are handled via Tailwind:
- Mobile-first approach
- Use `md:`, `lg:`, `xl:` prefixes
- Component files handle their own responsiveness

No separate mobile/desktop components needed!

---

## 🔐 Security Files

### Secrets/Environment Variables (Not Included)
- `.env.local` - Local environment variables (git ignored)
- API keys - Keep in environment variables
- Database credentials - Keep in backend

### Git Configuration
```
.gitignore         # Files not tracked by git
- node_modules/
- dist/
- .env.local
```

---

## 📚 Additional Resources

### Documentation Files
1. **QUICK_START.md** - 5-minute setup
2. **README.md** - Full project info
3. **SETUP.md** - Detailed configuration
4. **CUSTOMIZATION_CHECKLIST.md** - Step-by-step guide
5. **PROJECT_SUMMARY.md** - Complete overview

---

## ✅ File Checklist

Essential files present:
- ✓ All component files created
- ✓ All data files populated
- ✓ Configuration files complete
- ✓ Build succeeds without errors
- ✓ Dev server runs on port 5174
- ✓ TypeScript strict mode enabled
- ✓ CSS properly configured
- ✓ Documentation comprehensive

---

## 🎯 Quick Navigation

**To customize content:**
→ Edit files in `src/data/` and `src/components/sections/`

**To style:**
→ Edit `src/index.css` or `tailwind.config.js`

**To change colors:**
→ Edit `tailwind.config.js` color values

**To add sections:**
→ Create new component in `src/components/sections/`

**To deploy:**
→ Run `npm run build`, then upload `dist/` folder

---

## 🚀 Next Steps

1. ✓ Review this file structure
2. → Start with `QUICK_START.md`
3. → Follow `CUSTOMIZATION_CHECKLIST.md`
4. → Refer to this file when needed

---

**All files are properly organized and documented. Happy coding! 🎉**

*Last Updated: August 2026 | Version 1.0.0*
