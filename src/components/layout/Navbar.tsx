import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

  const handleScroll = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const isScrolled = scrollY > 40;

  return (
    <motion.nav
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-[0_12px_40px_rgba(2,6,23,0.38)]' : 'bg-transparent py-5'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <motion.button
          type="button"
          onClick={() => handleScroll('home')}
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
          whileHover={{ scale: 1.04 }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-bold text-accent shadow-[0_0_25px_rgba(45,212,191,0.35)]">
            T
          </span>
          <span className="font-display text-lg font-bold tracking-[-0.06em] text-white">
            Tahsin
          </span>
        </motion.button>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-dark-950/40 px-2 py-2 shadow-[0_10px_40px_rgba(15,23,42,0.45)] backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <motion.button
              key={item}
              type="button"
              onClick={() => handleScroll(item)}
              className={`rounded-full px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                activeSection === item
                  ? 'bg-accent text-dark-950 shadow-[0_0_20px_rgba(45,212,191,0.4)]'
                  : 'text-ink-muted hover:bg-white/5 hover:text-white'
              }`}
              whileHover={{ y: -1 }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <motion.button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-lg shadow-dark-950/20 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.92 }}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-dark-950 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-full flex-col items-center justify-center px-6">
              <div className="flex w-full max-w-sm flex-col gap-4">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item}
                    type="button"
                    onClick={() => handleScroll(item)}
                    className={`rounded-lg border px-4 py-3 text-left font-medium transition-all ${
                      activeSection === item
                        ? 'border-accent/60 bg-accent/10 text-accent shadow-[0_0_15px_rgba(45,212,191,0.2)]'
                        : 'border-white/10 bg-transparent text-white/80'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.button
              type="button"
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.92 }}
            >
              <X size={20} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
