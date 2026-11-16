import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  X,
  ArrowUpRight,
  MapPin,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { projects, type Project } from '../../data/projects';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-shell bg-surface/40">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-50" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading title="Projects" subtitle="Work" />

        <div className="mb-8 grid grid-cols-1 items-stretch gap-8 xl:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setSelectedProject(project.id)}
              large
            />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={() => setSelectedProject(project.id)}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={projects.find((p) => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
  large = false,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
  large?: boolean;
}) {
  return (
    <Card
      className="group flex h-full min-h-[540px] flex-col overflow-hidden p-0 shadow-card hover:shadow-card-hover"
      onClick={onOpen}
      delay={index * 0.08}
    >
      <div className={`relative overflow-hidden ${large ? 'h-64 md:h-72' : 'h-48'}`}>
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${project.theme.gradient} via-dark-950/60 to-dark-950/25`}
        />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60"
          style={{ backgroundColor: project.theme.glow }}
        />

        <div className="absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-2 p-4 md:p-5">
          <div className="flex flex-wrap gap-2">
            <span className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${project.theme.badge}`}>
              {project.industry}
            </span>
            {project.clientProject && <span className="tag">Client Project</span>}
          </div>
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-dark-950/50 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              <Sparkles size={12} className="text-accent" />
              Featured
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: project.theme.accent }}
          >
            {project.tagline}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold text-white md:text-3xl">
            {project.title}
          </h3>
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${large ? 'p-6 md:p-7' : 'p-5'}`}>
        <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <div className="mt-4 flex items-center gap-2 text-xs text-ink-muted">
          <MapPin size={13} style={{ color: project.theme.accent }} />
          <span>{project.location}</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/8 bg-dark-950/40 px-2 py-2.5 text-center transition-colors group-hover:border-white/15"
            >
              <p className="font-display text-sm font-bold text-white">{stat.value}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-ink-soft transition-colors group-hover:border-white/20"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag-accent text-[11px]">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-90"
              style={{ color: project.theme.accent }}
            >
              <ExternalLink size={15} />
              Visit Site
            </a>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1 text-sm text-ink-muted transition-colors group-hover:text-white">
            View details
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Card>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/85 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-surface shadow-card-hover"
        initial={{ scale: 0.94, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="h-56 w-full object-cover object-top md:h-72"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.theme.gradient} via-dark-950/70 to-dark-950/20`} />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-dark-950/70 text-white backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: project.theme.accent }}
            >
              {project.tagline}
            </p>
            <h2 className="mt-1 font-display text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            <span className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${project.theme.badge}`}>
              {project.industry}
            </span>
            {project.clientProject && <span className="tag">Client Project</span>}
            {project.featured && <span className="tag-accent">Featured</span>}
          </div>

          <p className="mt-4 leading-relaxed text-ink-muted">{project.fullDescription}</p>

          <div className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
            <MapPin size={14} style={{ color: project.theme.accent }} />
            {project.location}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-dark-950/50 p-3 text-center"
              >
                <p className="font-display text-lg font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-ink-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-accent">
              What I Built
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: project.theme.accent }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.github || project.liveDemo) && (
            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-semibold text-dark-950 transition-colors hover:bg-accent-dark"
                >
                  <Github size={18} />
                  View Code
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-accent/40 px-5 py-2.5 font-semibold text-accent transition-colors hover:bg-accent/10"
                >
                  <ExternalLink size={18} />
                  Visit Live Site
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
