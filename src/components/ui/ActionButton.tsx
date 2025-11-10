import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const ActionButton: React.FC<Props> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  const baseClasses = "flex items-center gap-3 text-xl font-bold rounded-xl px-8 py-4 w-full transition-colors shadow-lg border";
  const variants = {
    primary: "bg-forest hover:bg-forest/90 text-mint border-mint/20",
    secondary: "bg-navy hover:bg-navy/90 text-coral border-coral/20"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </motion.button>
  );
};