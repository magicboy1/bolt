import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/colors';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export const CyberButton: React.FC<Props> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}) => {
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-lg px-6 py-3',
    lg: 'text-2xl px-8 py-4'
  };

  const colors = {
    primary: {
      bg: COLORS.green,
      text: COLORS.mint,
      border: COLORS.green,
      glow: COLORS.green
    },
    secondary: {
      bg: COLORS.coral,
      text: COLORS.mint,
      border: COLORS.coral,
      glow: COLORS.coral
    }
  };

  const currentColors = colors[variant];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={handleClick}
      className={`group relative ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      disabled={disabled}
    >
      <motion.div
        className="absolute inset-0 rounded-lg opacity-75 blur-lg"
        style={{ backgroundColor: currentColors.glow }}
        animate={{
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className={`
        relative bg-forest/90 backdrop-blur-sm rounded-lg
        ${sizeClasses[size]} font-bold text-white
        border border-forest/20
        flex items-center justify-center gap-3
        transition-colors duration-200
        ${!disabled && 'hover:bg-forest/70'}
      `}>
        {children}
        
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${currentColors.border}, transparent)`,
            opacity: 0.2,
            backgroundSize: '200% 100%'
          }}
          animate={{
            backgroundPosition: ['200% 0', '-200% 0']
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </motion.button>
  );
};