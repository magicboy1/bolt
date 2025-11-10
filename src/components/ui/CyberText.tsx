import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body';
  gradient?: boolean;
}

export const CyberText: React.FC<Props> = ({ 
  children, 
  variant = 'body',
  gradient = false 
}) => {
  const baseClasses = {
    title: 'text-4xl md:text-6xl font-bold',
    subtitle: 'text-xl md:text-2xl',
    body: 'text-base'
  };

  const textClasses = `
    ${baseClasses[variant]}
    ${gradient ? 'bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent' : 'text-mint'}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={textClasses}
    >
      {children}
    </motion.div>
  );
};