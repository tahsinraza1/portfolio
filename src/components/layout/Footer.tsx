import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Phone } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: Github,
      href: profile.github,
      label: 'GitHub',
      color: '#ffffff',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      bgColor: 'rgba(255, 255, 255, 0.06)',
      glowColor: 'rgba(255, 255, 255, 0.25)',
    },
    ...(profile.linkedin
      ? [
          {
            icon: Linkedin,
            href: profile.linkedin,
            label: 'LinkedIn',
            color: '#0a66c2',
            borderColor: 'rgba(10, 102, 194, 0.35)',
            bgColor: 'rgba(10, 102, 194, 0.1)',
            glowColor: 'rgba(10, 102, 194, 0.35)',
          },
        ]
      : []),
    {
      icon: Mail,
      href: `mailto:${profile.email}`,
      label: 'Email',
      color: '#ea4335',
      borderColor: 'rgba(234, 67, 53, 0.35)',
      bgColor: 'rgba(234, 67, 53, 0.1)',
      glowColor: 'rgba(234, 67, 53, 0.35)',
    },
    {
      icon: Phone,
      href: `https://wa.me/917905642238`,
      label: 'WhatsApp / Phone',
      color: '#25d366',
      borderColor: 'rgba(37, 211, 102, 0.35)',
      bgColor: 'rgba(37, 211, 102, 0.1)',
      glowColor: 'rgba(37, 211, 102, 0.35)',
    },
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
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((link) => (
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
              {['Fyboard', 'Indian Railways Tracking', 'Car Rental Express', 'Dripp Society'].map((item) => (
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
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color, borderColor, bgColor, glowColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border backdrop-blur-sm transition-all duration-300"
                  style={{
                    color,
                    borderColor,
                    backgroundColor: bgColor,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.08,
                    boxShadow: `0 8px 24px ${glowColor}`,
                    borderColor: color,
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  title={label}
                >
                  <Icon size={19} />
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
