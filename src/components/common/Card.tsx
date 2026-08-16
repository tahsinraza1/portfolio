import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverLift?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = '',
  onClick,
  hoverLift = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-sm shadow-[0_16px_40px_rgba(2,6,23,0.22)] transition-all duration-300 hover:border-accent/40 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hoverLift
          ? {
              y: -8,
              scale: 1.02,
              rotateX: 2,
              rotateY: -3,
              transition: { type: 'spring', stiffness: 260, damping: 16 },
            }
          : undefined
      }
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-1/2 -top-1/2 h-full w-full rotate-12 bg-gradient-to-br from-accent/12 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
