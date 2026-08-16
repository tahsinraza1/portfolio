import { motion } from 'framer-motion';
import { Mail, Github, Phone, Send, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/tahsinraza1',
    href: profile.github,
  },
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
  };

  return (
    <section id="contact" className="section-shell bg-surface/40">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Let's Build Something"
          subtitle="Contact"
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Card className="p-6 shadow-card lg:col-span-3 md:p-8" hoverLift={false}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-field"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-field"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-dark-950 transition-colors hover:bg-accent-dark"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={16} />
              </motion.button>
            </form>
          </Card>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <Card className="p-6 shadow-card" hoverLift={false}>
              <p className="leading-relaxed text-ink-muted">
                I'm always interested in hearing about new projects and opportunities.
                Reach out through the form or connect with me directly at{' '}
                <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
                  {profile.email}
                </a>
                .
              </p>
            </Card>

            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <Card key={link.label} className="p-0 shadow-card hover:shadow-card-hover" delay={i * 0.06}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-5 transition-colors"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-widest text-ink-muted">
                        {link.label}
                      </p>
                      <p className="truncate font-medium text-white group-hover:text-accent">
                        {link.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
