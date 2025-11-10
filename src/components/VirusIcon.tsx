import React from 'react';
import { motion } from 'framer-motion';
import { Bug } from 'lucide-react';

interface Props {
  color: string;
  size: number;
  className?: string;
}

export const VirusIcon: React.FC<Props> = ({ color, size, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity },
        }}
        style={{
          filter: `drop-shadow(0 0 8px ${color})`,
        }}
      >
        <Bug size={size} color={color} />
      </motion.div>

      {/* Digital Circuit Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            border: `1px solid ${color}`,
            opacity: 0.3,
            transform: `rotate(${i * 60}deg)`,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Energy Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: 4,
            height: 4,
            borderRadius: '50%',
            backgroundColor: color,
            boxShadow: `0 0 4px ${color}`,
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, Math.cos(i * Math.PI / 2) * size * 0.5],
            y: [0, Math.sin(i * Math.PI / 2) * size * 0.5],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}
    </div>
  );
};