# Tahsin Raza — Premium 3D Developer Portfolio

A modern, interactive 3D developer portfolio website built with React, TypeScript, Three.js, and Framer Motion. Designed to showcase frontend development expertise with cinematic animations and engaging user interactions.

## 🚀 Features

- **Cinematic Loading Animation**: 0-100 counter with smooth transitions and name reveal
- **Interactive 3D Hero Scene**: Real-time particle field and floating geometric objects
- **Custom Cursor**: Premium interactive cursor that follows mouse movement
- **Smooth Animations**: Scroll-based animations and micro-interactions throughout
- **3D Interactions**: Mouse-reactive 3D objects and parallax effects
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Lazy loading, code splitting, and efficient rendering
- **Accessibility**: Keyboard navigation, focus states, and reduced motion support

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Routing**: React Router
- **State Management**: Zustand (minimal usage)

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd tahsin-raza-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── 3d/
│   │   ├── HeroScene.tsx
│   │   ├── FloatingOrb.tsx
│   │   ├── ParticleField.tsx
│   │   └── Lights.tsx
│   ├── common/
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
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Customization

### Update Portfolio Content

1. **Projects**: Edit `src/data/projects.ts`
2. **Skills**: Edit `src/data/skills.ts`
3. **Experience**: Edit `src/data/experience.ts`

### Update Contact Info

Edit the contact section in `src/components/sections/Contact.tsx` to add your actual email, GitHub, and LinkedIn URLs.

### Theme Colors

Customize colors in `tailwind.config.js`:
- Primary accent: `#00d9ff`
- Background: `#050505`
- Surface: `#0d0d0d`

## 🚀 Performance Optimization

- Lazy loading of 3D components
- Optimized particle count for mobile
- GPU-accelerated animations
- Code splitting with React.lazy()
- Image optimization
- Minimal dependencies

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus states on interactive elements
- ARIA labels where appropriate
- Reduced motion support via `prefers-reduced-motion`
- Color contrast compliance

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

## 🔧 Development

```bash
# Format code
npm run format

# Check types
npx tsc --noEmit

# Build
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

- Email: hello@tahsinraza.com
- GitHub: [github.com/tahsinraza](https://github.com/tahsinraza)
- LinkedIn: [linkedin.com/in/tahsinraza](https://linkedin.com/in/tahsinraza)

---

Built with ❤️ by Tahsin Raza
