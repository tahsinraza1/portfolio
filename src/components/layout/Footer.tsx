import { motion } from 'framer-motion';
import { Github, Mail, ArrowUp, Phone } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Github, href: profile.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${profile.phone}`, label: 'Phone' },
  ];

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-dark-950 py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-bold">
              <span className="text-accent">Tahsin</span> Raza
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{profile.title}</p>
            <p className="mt-1 text-sm text-ink-muted">{profile.location}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              {['Home', 'About', 'Education', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="transition-colors hover:text-accent"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Projects
            </h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              {['Featured Work', 'Client Projects', 'School Website'].map((item) => (
                <li key={item}>
                  <a href="#projects" className="transition-colors hover:text-accent">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-ink-muted transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                  whileHover={{ y: -3 }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-ink-muted">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <motion.button
            type="button"
            onClick={scrollTop}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-ink-muted transition-colors hover:border-accent/40 hover:text-accent"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
