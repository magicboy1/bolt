import React from 'react';
import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';

export const GameBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: -100,
            y: Math.random() * window.innerHeight,
            opacity: 0.3 + Math.random() * 0.3
          }}
          animate={{
            x: window.innerWidth + 100,
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 3,
            ease: "linear"
          }}
        >
          <Cloud size={60 + Math.random() * 40} className="text-mint/20" />
        </motion.div>
      ))}
    </div>
  );
};