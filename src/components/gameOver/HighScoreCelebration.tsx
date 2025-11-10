import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';
import { COLORS } from '../../utils/colors';
import { CyberButton } from '../ui/CyberButton';
import { Confetti } from '../effects/Confetti';

interface Props {
  score: number;
  onContinue: () => void;
}

export const HighScoreCelebration: React.FC<Props> = ({
  score,
  onContinue
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-navy/95 backdrop-blur-md flex items-center justify-center z-50 font-arabic"
      dir="rtl"
    >
      <Confetti />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative max-w-md w-full mx-4"
      >
        <motion.div
          className="absolute -top-24 left-1/2 -translate-x-1/2"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            y: { duration: 2, repeat: Infinity },
            rotate: { duration: 4, repeat: Infinity }
          }}
        >
          <Trophy className="w-32 h-32 text-coral" />
          <motion.div
            className="absolute inset-0"
            animate={{ 
              opacity: [0, 1, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Trophy className="w-32 h-32 text-coral" />
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-surface/90 backdrop-blur-xl rounded-2xl p-8 pt-20 border border-coral/20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center space-y-6">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-coral to-green bg-clip-text text-transparent">
                !نتيجة قياسية جديدة
              </h2>
            </motion.div>

            <motion.div
              className="text-6xl font-bold text-coral"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {score}
            </motion.div>

            <div className="flex justify-center gap-4 py-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity
                  }}
                >
                  <Star className="w-8 h-8 text-coral" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${COLORS.coral}, transparent)`,
              opacity: 0.2,
              backgroundSize: '200% 100%'
            }}
            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};