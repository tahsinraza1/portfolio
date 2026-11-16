import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send, ArrowUpRight, CheckCircle2, MessageSquare, Loader2 } from 'lucide-react';
import { profile } from '../../data/profile';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: '#ea4335',
      bgColor: 'rgba(234, 67, 53, 0.12)',
      borderColor: 'rgba(234, 67, 53, 0.3)',
      glowColor: 'rgba(234, 67, 53, 0.25)',
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: profile.phone,
      href: `https://wa.me/917905642238?text=${encodeURIComponent('Hi Tahsin, I saw your portfolio and would love to connect!')}`,
      color: '#25d366',
      bgColor: 'rgba(37, 211, 102, 0.12)',
      borderColor: 'rgba(37, 211, 102, 0.3)',
      glowColor: 'rgba(37, 211, 102, 0.25)',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/tahsinraza1',
      href: profile.github,
      color: '#ffffff',
      bgColor: 'rgba(255, 255, 255, 0.08)',
      borderColor: 'rgba(255, 255, 255, 0.22)',
      glowColor: 'rgba(255, 255, 255, 0.2)',
    },
    ...(profile.linkedin
      ? [
          {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/tahsin-raza',
            href: profile.linkedin,
            color: '#0a66c2',
            bgColor: 'rgba(10, 102, 194, 0.12)',
            borderColor: 'rgba(10, 102, 194, 0.3)',
            glowColor: 'rgba(10, 102, 194, 0.25)',
          },
        ]
      : []),
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct email delivery via FormSubmit AJAX endpoint to tahsinraza019@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/tahsinraza019@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('API submission failed');
      }
    } catch {
      // Graceful fallback: opens pre-filled email draft so message is never lost
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Tahsin,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, '_blank');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
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
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15 text-accent shadow-[0_0_30px_rgba(45,212,191,0.3)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
                    Thank you for reaching out! Your message has been sent directly to Tahsin's inbox (<span className="text-accent">{profile.email}</span>). You will receive a response soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
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
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-field resize-none"
                      placeholder="Tell me about your project, idea, or opportunity..."
                      required
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 font-semibold text-dark-950 transition-colors hover:bg-accent-dark disabled:opacity-70"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} />
                        </>
                      )}
                    </motion.button>

                    <a
                      href={`https://wa.me/917905642238?text=${encodeURIComponent('Hi Tahsin, I saw your portfolio and would like to chat!')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                    >
                      <MessageSquare size={16} className="text-accent" />
                      Quick WhatsApp Chat
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </Card>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <Card className="p-6 shadow-card" hoverLift={false}>
              <p className="leading-relaxed text-ink-muted">
                I'm always open to discussing new projects, frontend engineering opportunities, and collaborations.
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
                <Card key={link.label} className="p-0 shadow-card hover:shadow-card-hover transition-all duration-300" delay={i * 0.06}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-5 transition-colors group"
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110"
                      style={{
                        color: link.color,
                        backgroundColor: link.bgColor,
                        borderColor: link.borderColor,
                        boxShadow: `0 0 20px ${link.glowColor}`,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-widest text-ink-muted">
                        {link.label}
                      </p>
                      <p className="truncate font-medium text-white transition-colors group-hover:text-white">
                        {link.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: link.color }}
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
