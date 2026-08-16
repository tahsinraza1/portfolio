import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { education, certifications } from '../../data/education';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';

export default function Education() {
  return (
    <section id="education" className="section-shell bg-surface/40">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading title="Education & Certifications" subtitle="Background" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {education.map((item, index) => (
              <Card
                key={item.id}
                className="p-6 shadow-card hover:shadow-[0_20px_45px_rgba(45,212,191,0.08)]"
                delay={index * 0.08}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent shadow-[0_0_20px_rgba(45,212,191,0.18)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(45,212,191,0.28)]">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        {item.year}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold text-white md:text-xl">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-ink-muted">{item.institution}</p>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
                        <MapPin size={13} className="text-accent/80" />
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <Card className="h-full p-6 shadow-card hover:shadow-[0_20px_45px_rgba(45,212,191,0.08)]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent shadow-[0_0_20px_rgba(45,212,191,0.18)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(45,212,191,0.28)]">
                  <Award size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    className="rounded-xl border border-white/10 bg-dark-950/40 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
                    whileHover={{
                      y: -6,
                      scale: 1.01,
                      rotateX: 2,
                      rotateY: -2,
                      transition: { type: 'spring', stiffness: 260, damping: 18 },
                    }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {cert.year}
                    </p>
                    <p className="mt-1 font-semibold text-white">{cert.title}</p>
                    <p className="mt-1 text-sm text-ink-muted">{cert.issuer}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
