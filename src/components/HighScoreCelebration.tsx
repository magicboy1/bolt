import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, ChevronLeft } from 'lucide-react';
import { COLORS } from '../utils/colors';
import { Confetti } from './effects/Confetti';
import { CyberButton } from './ui/CyberButton';

interface Props {
  score: number;
  previousHighScore: number;
  onContinue: () => void;
}

export const HighScoreCelebration: React.FC<Props> = ({ 
  score, 
  previousHighScore,
  onContinue 
}) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-navy via-forest to-navy overflow-hidden flex items-center justify-center font-arabic z-50" dir="rtl">
      {/* Confetti Layer */}
      <div className="absolute inset-0 z-10">
        <Confetti />
      </div>
      
      {/* Animated Background */}
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

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative max-w-lg w-full mx-4 z-20"
      >
        {/* Trophy Animation */}
        <motion.div
          className="absolute -top-28 left-1/2 -translate-x-1/2 z-30"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="relative">
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
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="bg-surface/90 backdrop-blur-xl rounded-2xl p-8 pt-20 border border-coral/20 relative overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center space-y-8">
            <motion.h2
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl font-bold bg-gradient-to-r from-coral to-green bg-clip-text text-transparent"
            >
              !نتيجة قياسية جديدة
            </motion.h2>

            {/* Score Display */}
            <motion.div
              className="flex flex-col items-center gap-4 py-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="text-6xl font-bold text-coral">
                {score}
              </div>
              <div className="text-lg text-mint/60">
                النتيجة السابقة: {previousHighScore}
              </div>
            </motion.div>

            {/* Stars */}
            <div className="flex justify-center gap-6 py-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity
                  }}
                >
                  <Star className="w-10 h-10 text-coral" />
                </motion.div>
              ))}
            </div>

            {/* Continue Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <CyberButton 
                onClick={onContinue} 
                variant="secondary" 
                size="lg"
                className="w-full"
              >
                <span>متابعة</span>
                <ChevronLeft className="w-6 h-6" />
              </CyberButton>
            </motion.div>
          </div>

          {/* Decorative Border */}
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
    </div>
  );
};