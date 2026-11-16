import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingVideo =
  'https://media.istockphoto.com/id/1472565449/video/software-programmer-working-on-computer-engineering-neural-network-creating-machine-learning.mp4?s=mp4-640x640-is&k=20&c=FUDplMQv8y8o_mZOf5uvjDAGZU1QnUrT6CyoZrIbnio=';

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [displayText, setDisplayText] = useState('0');
  const [stage, setStage] = useState<'counter' | 'name'>('counter');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  useEffect(() => {
    if (stage === 'counter') {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 25 + 5;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          setDisplayText('100');
          
          setTimeout(() => {
            setStage('name');
          }, 200);
        } else {
          setDisplayText(String(Math.floor(progress)));
        }
      }, 100);

      return () => clearInterval(interval);
    } else {
      // Name reveal animation
      const names = ['100', 'TAHSIN', 'RAZA'];
      let nameIndex = 0;

      const nameInterval = setInterval(() => {
        if (nameIndex < names.length) {
          setDisplayText(names[nameIndex]);
          nameIndex++;
        } else {
          clearInterval(nameInterval);
          setTimeout(onComplete, 450);
        }
      }, 350);

      return () => clearInterval(nameInterval);
    }
  }, [stage, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-hidden bg-dark-950"
      onClick={onComplete}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.55] brightness-75"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={loadingVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.12),_transparent_40%),linear-gradient(135deg,rgba(2,6,12,0.65),rgba(2,6,12,0.55),rgba(2,6,12,0.65))]" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-accent/80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.div
          className="loading-text font-bold text-accent drop-shadow-[0_0_28px_rgba(45,212,191,0.35)]"
          key={displayText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {displayText}
        </motion.div>

        {stage === 'name' && (
          <motion.p
            className="mt-6 text-sm tracking-[0.6em] text-gray-200 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Frontend Developer
          </motion.p>
        )}
      </motion.div>

      <span className="absolute bottom-6 text-[11px] uppercase tracking-widest text-ink-muted/50">
        Click anywhere to skip
      </span>
    </motion.div>
  );
}
