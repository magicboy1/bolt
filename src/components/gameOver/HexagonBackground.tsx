import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/colors';

export const HexagonBackground: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 bg-hexagon-pattern opacity-5" />
      
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${COLORS.green}20, transparent 70%)`
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, ${COLORS.green} 1px, transparent 1px),
                           linear-gradient(to bottom, ${COLORS.green} 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
    </>
  );
};