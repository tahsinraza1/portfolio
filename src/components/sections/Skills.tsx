import { Code2, Layers, Cloud, Network, Database, Wrench, Lightbulb } from 'lucide-react';
import { skills } from '../../data/skills';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';

const categoryIcons: Record<string, typeof Code2> = {
  LANGUAGES: Code2,
  FRONTEND: Layers,
  'BACKEND & CLOUD': Cloud,
  'APIS & INTEGRATION': Network,
  DATABASES: Database,
  'TOOLS & PLATFORMS': Wrench,
  CONCEPTS: Lightbulb,
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell bg-dark-950">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fade opacity-30"
        style={{ backgroundSize: '40px 40px' }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading title="Skills & Expertise" subtitle="Toolkit" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, index) => {
            const Icon = categoryIcons[skillGroup.category] ?? Code2;
            return (
              <Card
                key={skillGroup.category}
                className="flex h-full flex-col p-6 shadow-card hover:shadow-card-hover"
                delay={index * 0.08}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-sm font-bold tracking-wide text-white md:text-base">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill.name}
                      className="tag hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
