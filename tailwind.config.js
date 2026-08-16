/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f4f6f8',
          100: '#e8ecf0',
          900: '#0c1118',
          950: '#070b10',
        },
        surface: '#10161f',
        accent: {
          DEFAULT: '#2dd4bf',
          dark: '#14b8a6',
          muted: 'rgba(45, 212, 191, 0.12)',
        },
        ink: {
          muted: '#94a3b8',
          soft: '#cbd5e1',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 50px -20px rgba(0, 0, 0, 0.55)',
        'card-hover': '0 28px 60px -18px rgba(45, 212, 191, 0.18)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(45, 212, 191, 0.18), transparent)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(16px)' },
        },
      },
    },
  },
  plugins: [],
}
