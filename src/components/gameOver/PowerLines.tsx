import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/colors';

export const PowerLines: React.FC = () => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${45 + i * 45}deg, transparent, ${COLORS.green}, transparent)`,
            opacity: 0.1,
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  );
};