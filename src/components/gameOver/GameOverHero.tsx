import React from 'react';
import { Shield, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

export const GameOverHero: React.FC = () => {
  return (
    <motion.div
      className="absolute -top-32 left-1/2 -translate-x-1/2 z-20"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <div className="relative">
        <Shield className="w-32 h-32 text-green" />
        <motion.div
          className="absolute inset-0"
          animate={{ 
            opacity: [0, 1, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Shield className="w-32 h-32 text-green" />
        </motion.div>
        <motion.div
          className="absolute -right-4 -top-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap className="w-8 h-8 text-coral" />
        </motion.div>
        <motion.div
          className="absolute -left-4 -bottom-4"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Crown className="w-8 h-8 text-blue" />
        </motion.div>
      </div>
    </motion.div>
  );
};