import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const CyberPanel: React.FC<Props> = ({ 
  children, 
  className = '',
  variant = 'primary'
}) => {
  const variants = {
    primary: 'border-cyan/30 shadow-cyan/20',
    secondary: 'border-purple/30 shadow-purple/20'
  };

  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`
        relative bg-navy/90 backdrop-blur-md rounded-2xl p-6
        border-2 ${variants[variant]} shadow-lg
        ${className}
      `}
    >
      {/* Animated Corner Accents */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
        <motion.div
          key={corner}
          className={`
            absolute w-4 h-4 border-2 border-cyan/50
            ${corner.includes('top') ? 'top-0' : 'bottom-0'}
            ${corner.includes('left') ? 'left-0' : 'right-0'}
          `}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ))}

      {children}
    </motion.div>
  );
};