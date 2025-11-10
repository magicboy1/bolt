import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 0.5 }}
      className={`bg-navy rounded-2xl p-8 text-mint border border-mint/10 ${className}`}
    >
      {children}
    </motion.div>
  );
};