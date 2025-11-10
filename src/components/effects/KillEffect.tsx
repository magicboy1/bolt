import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/colors';

interface Props {
  x: number;
  y: number;
  color: string;
}

export const KillEffect: React.FC<Props> = ({ x, y, color }) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-50"
      style={{ left: x, top: y }}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 2, opacity: 0 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hexagon Burst Effect */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0.5, opacity: 1 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 relative">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                border: `2px solid ${color}`,
                transform: `rotate(${i * 60}deg)`,
              }}
              animate={{
                opacity: [1, 0],
                scale: [1, 1.5],
              }}
              transition={{
                duration: 0.3,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Energy Particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const distance = 40;
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2"
            style={{
              left: '50%',
              top: '50%',
              backgroundColor: color,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              boxShadow: `0 0 10px ${color}`,
            }}
            initial={{ scale: 1, x: 0, y: 0, opacity: 1, rotate: 0 }}
            animate={{
              scale: 0,
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              opacity: 0,
              rotate: 180,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* Energy Wave */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          border: `2px solid ${color}`,
          boxShadow: `0 0 15px ${color}`,
        }}
        initial={{ width: 0, height: 0, opacity: 0.8 }}
        animate={{ 
          width: 120,
          height: 120,
          opacity: 0,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};