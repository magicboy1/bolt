import React, { useEffect } from 'react';
import { Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CyberButton } from './ui/CyberButton';
import { COLORS } from '../utils/colors';
import { GameOverHero } from './gameOver/GameOverHero';
import { GameOverStats } from './gameOver/GameOverStats';
import { GameOverBackground } from './gameOver/GameOverBackground';
import { HighScoreCelebration } from './gameOver/HighScoreCelebration';
import { useGameStore } from '../store/gameStore';

interface Props {
  score: number;
  highScore: number;
  onRestart: () => void;
}

export const GameOver: React.FC<Props> = ({ score, highScore, onRestart }) => {
  const { showCelebration, setShowCelebration, gameOver } = useGameStore();

  useEffect(() => {
    if (showCelebration) {
      const timer = setTimeout(() => {
        setShowCelebration(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showCelebration, setShowCelebration]);

  if (!gameOver) return null;

  return (
    <AnimatePresence mode="wait">
      {showCelebration ? (
        <HighScoreCelebration 
          key="celebration"
          score={score}
          onContinue={onRestart}
        />
      ) : (
        <motion.div
          key="gameover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gradient-to-br from-navy via-forest to-navy overflow-hidden flex items-center justify-center font-arabic z-50"
          dir="rtl"
        >
          <GameOverBackground />
          
          <div className="relative max-w-xl w-full mx-4">
            <GameOverHero />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-surface/90 backdrop-blur-xl rounded-2xl p-8 pt-24 border border-green/20 relative overflow-hidden"
            >
              <div className="text-center space-y-8 relative z-10">
                <motion.div
                  className="space-y-2"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-green via-blue to-coral bg-clip-text text-transparent">
                    !انتهت المهمة
                  </h2>
                  <p className="text-mint/60">!أحسنت يا بطل الشبكة</p>
                </motion.div>

                <GameOverStats score={score} highScore={highScore} />

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <CyberButton 
                    onClick={onRestart}
                    size="lg"
                    className="w-full"
                  >
                    <Shield className="w-6 h-6" />
                    <span>إعادة المهمة</span>
                  </CyberButton>
                </motion.div>
              </div>

              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${COLORS.green}, transparent)`,
                  opacity: 0.2,
                  backgroundSize: '200% 100%'
                }}
                animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};