import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-14 ${align === 'center' ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        {subtitle ?? 'Section'}
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <div
        className={`mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-accent to-accent/20 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
