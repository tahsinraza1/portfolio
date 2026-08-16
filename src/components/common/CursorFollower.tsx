import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't show custom cursor on mobile/touch devices
    if ('ontouchstart' in window) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer circle */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-40"
        animate={{ x: position.x - 16, y: position.y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-40"
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
    </>
  );
}
