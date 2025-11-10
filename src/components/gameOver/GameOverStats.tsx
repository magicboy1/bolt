import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy } from 'lucide-react';
import { COLORS } from '../../utils/colors';

interface Props {
  score: number;
  highScore: number;
}

export const GameOverStats: React.FC<Props> = ({ score, highScore }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Current Score */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative"
      >
        <div className="bg-surface/50 rounded-2xl p-6 border border-green/10">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center mb-4"
          >
            <Star className="w-12 h-12 text-green" />
          </motion.div>
          <div className="text-3xl font-bold text-green mb-2">{score}</div>
          <div className="text-sm text-mint/60">النقاط</div>
          
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(90deg, transparent, ${COLORS.green}, transparent)`,
              opacity: 0.1,
              backgroundSize: '200% 100%'
            }}
            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* High Score */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="relative"
      >
        <div className="bg-surface/50 rounded-2xl p-6 border border-coral/10">
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center mb-4"
          >
            <Trophy className="w-12 h-12 text-coral" />
          </motion.div>
          <div className="text-3xl font-bold text-coral mb-2">{highScore}</div>
          <div className="text-sm text-mint/60">أعلى نتيجة</div>
          
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(90deg, transparent, ${COLORS.coral}, transparent)`,
              opacity: 0.1,
              backgroundSize: '200% 100%'
            }}
            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};