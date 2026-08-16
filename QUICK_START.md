# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Navigate to Project
```bash
cd tahsin-raza-portfolio
```

## Step 2: Install Dependencies
```bash
npm install
```

## Step 3: Start Development Server
```bash
npm run dev
```

The portfolio will open at **http://localhost:5174**

---

## 📝 Quick Customization (5 minutes)

### 1. Update Your Name & Bio
Edit `src/components/sections/Hero.tsx`:
```typescript
<h1>YOUR NAME</h1>
<p>Your tagline here...</p>
```

### 2. Add Your Projects
Edit `src/data/projects.ts` and add your 4 best projects:
```typescript
{
  id: 'my-project',
  title: 'Project Name',
  description: 'Short description',
  image: 'https://images.unsplash.com/...',
  technologies: ['React', 'TypeScript'],
  github: 'https://github.com/...',
  liveDemo: 'https://...',
  featured: true
}
```

### 3. Update Contact Info
Edit `src/components/sections/Contact.tsx`:
```typescript
<a href="mailto:your@email.com">your@email.com</a>
```

### 4. Update Navbar Logo
Edit `src/components/layout/Navbar.tsx`:
```typescript
<span className="text-accent">YOUR INITIALS</span>
```

---

## 🎨 Customization (15 minutes)

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
accent: {
  DEFAULT: '#00ff00', // Your main color
  dark: '#00cc00',    // Hover state
}
```

### Update About Section
Edit `src/components/sections/About.tsx` - replace the bio text with your story.

### Update Skills
Edit `src/data/skills.ts` - add your actual technical skills.

### Update Experience
Edit `src/data/experience.ts` - add your work history.

---

## ✅ Testing Checklist

- [ ] Dev server runs without errors
- [ ] Hero section loads correctly
- [ ] 3D animation displays
- [ ] Scroll animations work
- [ ] Project modal opens/closes
- [ ] Contact form appears
- [ ] Mobile view looks good

---

## 🚀 Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with your production-ready files.

---

## 📱 Test on Mobile

```bash
# From your dev server output, look for:
# ➜  Network: http://192.168.x.x:5174/

# On your phone, visit that Network URL
```

---

## 🌐 Deploy (Choose One)

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Click Deploy

### Option 2: Netlify
1. Go to https://netlify.com
2. Drag & drop your `dist/` folder
3. Done! You have a live site

### Option 3: GitHub Pages
```bash
npm install -g gh-pages
npm run build
npx gh-pages -d dist
```

---

## 📚 Full Guides

- **Setup**: See `SETUP.md` for detailed instructions
- **Customization**: See `CUSTOMIZATION_CHECKLIST.md` for step-by-step customization
- **Overview**: See `PROJECT_SUMMARY.md` for complete project details

---

## 🎯 What's Included

✅ Cinematic loading animation (0-100 counter)
✅ Interactive 3D hero scene
✅ Custom premium cursor
✅ Smooth scroll animations
✅ Project showcase with modals
✅ Timeline experience section
✅ Contact form
✅ Fully responsive design
✅ Dark premium aesthetic
✅ Production-ready code

---

## 🆘 Troubleshooting

**Port already in use?**
```bash
# Windows
netstat -ano | findstr :5174
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5174 | xargs kill -9
```

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**TypeScript errors?**
```bash
npx tsc --noEmit
```

---

## 💡 Pro Tips

1. **Keep content updated** - Your portfolio should reflect your latest work
2. **Test on mobile** - Always verify responsive design
3. **Check performance** - Use Chrome DevTools Lighthouse
4. **Update regularly** - Add new projects and skills as you grow
5. **Monitor analytics** - Track who visits your portfolio
6. **Get feedback** - Share with friends and mentors

---

## 🎉 You're All Set!

Your premium 3D developer portfolio is ready. Now:

1. Customize with your information
2. Test everything thoroughly
3. Deploy to the world
4. Share your awesome portfolio!

**Happy coding! 🚀**

---

For more details, check out:
- 📖 Full README: `README.md`
- 🔧 Setup Guide: `SETUP.md`
- ✓ Customization Checklist: `CUSTOMIZATION_CHECKLIST.md`
- 📊 Project Summary: `PROJECT_SUMMARY.md`
