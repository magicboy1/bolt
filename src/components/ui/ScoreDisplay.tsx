import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/colors';

interface Props {
  label: string;
  value: number;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

export const ScoreDisplay: React.FC<Props> = ({ 
  label, 
  value, 
  color = COLORS.green,
  size = 'md',
  animate = false
}) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };

  return (
    <motion.div 
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={`flex items-center justify-between gap-4 ${sizeClasses[size]}`}
    >
      <motion.div
        animate={animate ? {
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        } : undefined}
        transition={{ duration: 2, repeat: Infinity }}
        className="font-bold"
        style={{ color }}
      >
        {value}
      </motion.div>
      <div className="text-mint/80">{label}</div>
    </motion.div>
  );
};