import React from 'react';
import { motion } from 'framer-motion';

export const CyberGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00BCD4 1px, transparent 1px),
            linear-gradient(to bottom, #00BCD4 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Radial Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Moving Light Beams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};