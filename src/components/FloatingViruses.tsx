import React from 'react';
import { motion } from 'framer-motion';
import { VirusIcon } from './VirusIcon';
import { VIRUS_COLORS } from '../utils/colors';

export const FloatingViruses: React.FC = () => {
  const viruses = Array.from({ length: 8 }).map((_, index) => ({
    delay: index * 2,
    duration: 15 + Math.random() * 10,
    size: 30 + Math.random() * 20,
    yPosition: 10 + (index * 10),
    color: VIRUS_COLORS[index % VIRUS_COLORS.length]
  }));

  return (
    <>
      {viruses.map((virus, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          initial={{ 
            x: -100,
            y: `${virus.yPosition}%`,
            opacity: 0.2
          }}
          animate={{
            x: window.innerWidth + 100,
            rotate: 360,
          }}
          transition={{
            duration: virus.duration,
            repeat: Infinity,
            delay: virus.delay,
            ease: "linear"
          }}
        >
          <VirusIcon 
            color={virus.color}
            size={virus.size}
          />
        </motion.div>
      ))}
    </>
  );
};