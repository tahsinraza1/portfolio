import { Briefcase, MapPin, ExternalLink } from 'lucide-react';
import { experience } from '../../data/experience';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';

export default function Experience() {
  return (
    <section id="experience" className="section-shell bg-dark-950">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fade opacity-25"
        style={{ backgroundSize: '40px 40px' }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading title="Experience" subtitle="Career" />

        <div className="relative space-y-5 pl-2 md:pl-4">
          <div className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent md:left-[27px]" />

          {experience.map((exp, index) => (
            <div key={`${exp.company}-${exp.year}`} className="relative pl-10 md:pl-14">
              <div className="absolute left-2 top-8 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-dark-950 md:left-4">
                <div className="h-2 w-2 rounded-full bg-accent" />
              </div>

              <Card className="p-6 shadow-card hover:shadow-card-hover" delay={index * 0.08}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {exp.year}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white md:text-2xl">
                    {exp.role}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-ink-muted">
                    <Briefcase size={14} className="text-accent/80 shrink-0" />
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-accent font-medium"
                      >
                        {exp.company}
                        <ExternalLink size={12} className="text-accent/80" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </div>
                  <p className="mt-1 flex items-center gap-2 text-sm text-ink-muted">
                    <MapPin size={14} className="text-accent/80 shrink-0" />
                    {exp.location}
                  </p>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tag group-hover:border-accent/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
