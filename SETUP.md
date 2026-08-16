# Tahsin Raza Portfolio - Setup & Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm 7+ or yarn

### Installation & Development

```bash
# Navigate to project
cd tahsin-raza-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# The app will open at http://localhost:5174
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📋 Project Overview

This is a premium 3D developer portfolio website featuring:

- **Cinematic Loading Animation**: 0-100 counter with name reveal
- **Interactive 3D Hero**: Real-time particle effects and geometric animations
- **Smooth Scroll Experience**: Scroll-triggered animations throughout
- **Custom Cursor**: Premium interactive cursor (desktop only)
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Performance Optimized**: Code splitting, lazy loading, efficient rendering
- **Accessibility**: Keyboard navigation, reduced motion support, semantic HTML

---

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── 3d/                    # Three.js/React Three Fiber components
│   │   ├── HeroScene.tsx
│   │   ├── FloatingOrb.tsx
│   │   ├── ParticleField.tsx
│   │   └── Lights.tsx
│   ├── common/                # Reusable UI components
│   │   ├── LoadingScreen.tsx
│   │   ├── Button.tsx
│   │   ├── CursorFollower.tsx
│   │   └── MagneticButton.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       └── Contact.tsx
├── data/                      # Static content
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
├── App.tsx
├── main.tsx
└── index.css
```

### Key Technologies
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

---

## ✏️ Customization Guide

### Update Content

#### 1. Projects
Edit `src/data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: 'project-name',
    title: 'Project Title',
    description: 'Short description',
    fullDescription: 'Detailed description',
    image: 'https://...',
    technologies: ['Tech1', 'Tech2'],
    github: 'https://github.com/...',
    liveDemo: 'https://...',
    featured: true,
    features: [],
    challenges: [],
    solutions: []
  }
];
```

#### 2. Skills
Edit `src/data/skills.ts`:
```typescript
export const skills: Skill[] = [
  {
    category: 'FRONTEND',
    items: [
      { name: 'React' },
      { name: 'TypeScript' }
    ]
  }
];
```

#### 3. Experience
Edit `src/data/experience.ts`:
```typescript
export const experience: Experience[] = [
  {
    year: '2024 - Present',
    role: 'Senior Developer',
    company: 'Company Name',
    description: '...',
    technologies: ['React', 'TypeScript']
  }
];
```

### Update Contact Information

Edit `src/components/sections/Contact.tsx`:
```typescript
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>
```

### Theme Customization

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      accent: {
        DEFAULT: '#00d9ff', // Change primary accent
        dark: '#0099cc',    // Change accent hover
      }
    }
  }
}
```

### Update Navbar Links

Edit `src/components/layout/Navbar.tsx`:
```typescript
const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
```

---

## 🔧 Configuration

### TypeScript Strict Mode
Enabled by default in `tsconfig.json` for type safety.

### ESLint Rules
To add ESLint, extend the Vite configuration or add `.eslintrc.cjs`.

### Build Optimization
The build may warn about large chunks (Three.js is substantial). This is normal. To optimize:

```javascript
// vite.config.ts
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'react-three': ['@react-three/fiber', '@react-three/drei']
        }
      }
    }
  }
})
```

---

## 🌐 Deployment

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Set repository visibility to public
2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```
3. Add deploy script to `package.json`:
```json
"deploy": "npm run build && gh-pages -d dist"
```

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your web server
3. Configure server for SPA (single-page application)

---

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile** (< 640px): Optimized 3D, touch-friendly interactions
- **Tablet** (640px - 1024px): Balanced layout
- **Desktop** (1024px+): Full feature experience

Mobile 3D optimizations:
- Reduced particle count
- Simplified geometries
- Disabled custom cursor
- Touch-friendly buttons

---

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation (Tab, Enter, Escape)
- Focus visible states
- `prefers-reduced-motion` support
- Color contrast compliance
- Alt text on images

---

## 🎯 Performance

### Optimization Techniques
1. **Code Splitting**: Heavy components lazy-loaded
2. **Image Optimization**: Use WebP where supported
3. **CSS Minification**: Tailwind handles this
4. **JavaScript Minification**: Vite handles this
5. **Particle Reduction**: Mobile users get fewer particles
6. **Three.js Cleanup**: Proper disposal of geometries/materials

### Performance Targets
- First Contentful Paint (FCP): < 2s
- Largest Contentful Paint (LCP): < 3s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 4s

### Measuring Performance
```bash
# Use Lighthouse
# Chrome DevTools → Lighthouse → Generate report

# Or use web vitals
npm install web-vitals
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5173    # Windows
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist
npm run build
```

### WebGL Issues
If WebGL isn't supported:
- The 3D scene will gracefully fallback to a gradient background
- The portfolio remains fully usable
- No functionality is lost

### Performance Issues
1. Check browser dev tools for bottlenecks
2. Reduce particle count in `src/components/3d/ParticleField.tsx`
3. Simplify 3D geometry in `src/components/3d/FloatingOrb.tsx`
4. Use Chrome DevTools Performance tab to profile

---

## 📦 Dependencies

### Core Dependencies
- `react@^18.3.1` - UI library
- `react-dom@^18.3.1` - DOM rendering
- `typescript@^5.0.2` - Type checking
- `vite@^4.3.9` - Build tool
- `three@^0.160.0` - 3D graphics
- `@react-three/fiber@^8.15.0` - React renderer for Three.js
- `@react-three/drei@^9.87.0` - Useful Three.js helpers
- `framer-motion@^10.16.1` - Animation library
- `gsap@^3.12.2` - Advanced animations
- `tailwindcss@^3.3.6` - Utility CSS
- `lucide-react@^0.263.1` - Icon library
- `react-router-dom@^6.14.0` - Routing
- `zustand@^4.4.0` - State management

### Security Notes
All dependencies are from official npm registry and are actively maintained.

---

## 📄 Environment Variables

Currently, no environment variables are required. If you add backend integration:

```bash
# .env.local
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=hello@example.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🔐 Security Considerations

1. **No sensitive data** in client code
2. **Content Security Policy** headers recommended on server
3. **HTTPS only** for production
4. **Form validation** on both client and server
5. **Sanitize user input** if implemented

---

## 📞 Support & Resources

- **React**: https://react.dev
- **Three.js**: https://threejs.org
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber
- **Framer Motion**: https://www.framer.com/motion
- **Tailwind CSS**: https://tailwindcss.com
- **Vite**: https://vitejs.dev
- **TypeScript**: https://www.typescriptlang.org

---

## 📈 Future Enhancements

Potential improvements:
- [ ] Dark/Light mode toggle
- [ ] Multiple language support
- [ ] Blog section
- [ ] Testimonials slider
- [ ] Email backend integration
- [ ] Analytics integration
- [ ] SEO improvements
- [ ] Progressive Web App (PWA)
- [ ] WebGL shader effects
- [ ] Sound effects on interactions

---

## 📝 License

This portfolio template is available for personal use. Modify and customize as needed for your portfolio.

---

**Last Updated**: August 2026  
**Version**: 1.0.0
