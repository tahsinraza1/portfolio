import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Wrench, Lightbulb, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';

const focusAreas = [
  { label: 'Frontend', value: 'React, TypeScript, Tailwind CSS', icon: Code2 },
  { label: 'Backend', value: 'AWS, REST APIs, Authentication', icon: Cloud },
  { label: 'Languages', value: 'Java, JavaScript, TypeScript', icon: Code2 },
  { label: 'Databases', value: 'MySQL, SQLite', icon: Database },
  { label: 'Tools', value: 'Git, GitHub, VS Code, Postman', icon: Wrench },
  { label: 'Concepts', value: 'RBAC, CRUD, Responsive Design', icon: Lightbulb },
];

const highlights = [
  { value: '3+', label: 'Client projects' },
  { value: 'B.Tech', label: 'Computer Science' },
  { value: profile.location.split(',')[0], label: 'Based in UP', icon: true },
];

export default function About() {
  return (
    <section id="about" className="section-shell bg-surface/40">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading title="Who I Am" subtitle="About" />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-relaxed text-ink-muted">{profile.summary}</p>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {highlights.map((item, i) => (
                <Card key={item.label} className="p-4 text-center shadow-card" delay={i * 0.08}>
                  {item.icon ? (
                    <>
                      <MapPin className="mx-auto mb-1 text-accent" size={18} />
                      <p className="font-display text-sm font-bold text-white md:text-base">
                        {item.value}
                      </p>
                    </>
                  ) : (
                    <p className="font-display text-2xl font-bold text-accent md:text-3xl">
                      {item.value}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-ink-muted">{item.label}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {focusAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <Card key={area.label} className="p-5 shadow-card hover:shadow-[0_18px_45px_rgba(45,212,191,0.08)]" delay={i * 0.06}>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(45,212,191,0.25)]">
                    <Icon size={18} />
                  </div>
                  <h4 className="font-display text-base font-semibold text-white">{area.label}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{area.value}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
