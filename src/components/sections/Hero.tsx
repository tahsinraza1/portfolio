import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

const heroImage = new URL('../../assets/tahsin.jpeg', import.meta.url).href;

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'AWS'];

  const socialLinks = [
    { icon: Github, href: profile.github, label: 'GitHub' },
    ...(profile.linkedin
      ? [{ icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' }]
      : []),
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40"
        style={{ backgroundSize: '48px 48px' }}
      />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-teal-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-accent shadow-[0_0_30px_rgba(45,212,191,0.12)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available for work
            </motion.div>

            <motion.h1
              className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl xl:text-[6.3rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block text-white md:text-[0.9em]">Hi, I&apos;m</span>
              <span className="gradient-text block text-transparent">{profile.name}</span>
            </motion.h1>

            <motion.p
              className="mt-4 max-w-xl text-lg font-medium uppercase tracking-[0.18em] text-ink-soft md:text-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              {profile.title}
            </motion.p>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              Building scalable and responsive web applications with React, TypeScript, Tailwind CSS,
              and AWS services — focused on reusable components, clean UI, and performance.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              <motion.button
                onClick={() => handleScroll('projects')}
                className="inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-4 text-base font-semibold text-dark-950 shadow-[0_16px_40px_rgba(45,212,191,0.28)] transition-all duration-300 hover:bg-accent-dark hover:shadow-[0_20px_50px_rgba(45,212,191,0.36)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <ArrowRight size={18} />
              </motion.button>

              <motion.a
                href={profile.resume}
                download="Tahsin_resume.pdf"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-2.5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-soft"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-surface/60 text-ink-muted transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                  whileHover={{ y: -3 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative w-full max-w-[26rem] lg:w-[26rem]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-6 -z-10 rounded-[2rem] bg-accent/10 blur-3xl" />
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_30px_80px_rgba(15,23,42,0.6)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                <img
                  src={heroImage}
                  alt={profile.name}
                  className="h-[520px] w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-surface/60 px-4 py-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                    Profile
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{profile.name}</p>
                </div>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Active
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        aria-label="Scroll to about"
        onClick={() => handleScroll('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-accent/60 p-1.5">
          <div className="h-2 w-1 rounded-full bg-accent" />
        </div>
      </motion.button>
    </section>
  );
}
