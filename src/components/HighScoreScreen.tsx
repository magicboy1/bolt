import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight } from 'lucide-react';
import { COLORS } from '../utils/colors';
import { CyberButton } from './ui/CyberButton';
import { HexagonBackground } from './gameOver/HexagonBackground';
import { PowerLines } from './gameOver/PowerLines';
import { FloatingBadges } from './gameOver/FloatingBadges';
import { AchievementBadges } from './gameOver/AchievementBadges';

interface Props {
  score: number;
  highScore: number;
  onContinue: () => void;
}

export const HighScoreScreen: React.FC<Props> = ({
  score,
  highScore,
  onContinue
}) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-navy via-forest to-navy overflow-hidden flex items-center justify-center font-arabic" dir="rtl">
      <HexagonBackground />
      <PowerLines />
      <FloatingBadges />
      
      <div className="relative max-w-2xl w-full mx-4 z-10">
        {/* Trophy Icon */}
        <motion.div
          className="absolute -top-20 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Trophy className="w-32 h-32 text-coral" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-surface/90 backdrop-blur-xl rounded-2xl p-8 pt-20 border border-coral/20 relative overflow-hidden"
        >
          <div className="text-center space-y-8">
            {/* Title */}
            <motion.div
              className="space-y-2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-coral to-green bg-clip-text text-transparent">
                سجل النتائج
              </h2>
              <p className="text-mint/60">!اكتشف إنجازاتك وحطم الأرقام القياسية</p>
            </motion.div>

            {/* Current Score */}
            <div className="space-y-2">
              <motion.div
                className="text-6xl font-bold text-coral"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {score}
              </motion.div>
              <div className="text-mint/60">النتيجة الحالية</div>
            </div>

            {/* Achievements */}
            <AchievementBadges score={score} />

            {/* Continue Button */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <CyberButton 
                onClick={onContinue}
                variant="secondary"
                size="lg"
                className="w-full"
              >
                <span>متابعة</span>
                <ArrowRight className="w-6 h-6" />
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
      </div>
    </div>
  );
};