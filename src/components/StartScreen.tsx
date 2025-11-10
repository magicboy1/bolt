import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, KeyRound, Zap } from 'lucide-react';
import { FloatingViruses } from './FloatingViruses';
import { GameInstructions } from './GameInstructions';
import { COLORS } from '../utils/colors';
import { CyberButton } from './ui/CyberButton';
import { CharacterImage } from './character/CharacterImage';

interface Props {
  onStart: () => void;
}

export const StartScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-forest to-navy overflow-hidden relative">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 bg-hexagon-pattern opacity-5" />
      
      {/* Animated Gradient Overlay */}
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

      <FloatingViruses />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8" dir="rtl">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center gap-12">
          {/* Hero Section */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center space-y-6"
          >
            {/* Character */}
            <motion.div
              className="relative inline-block mb-8"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="relative">
                <Shield className="w-24 h-24 text-green" />
                <motion.div
                  className="absolute inset-0"
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Shield className="w-24 h-24 text-green" />
                </motion.div>
                {/* Power Sparks */}
                <motion.div
                  className="absolute -right-4 -top-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-8 h-8 text-coral" />
                </motion.div>
              </div>
            </motion.div>

            <h1 className="text-7xl font-bold">
              <span className="bg-gradient-to-r from-green via-blue to-coral bg-clip-text text-transparent">
                اصطياد الفيروسات
              </span>
            </h1>
            <p className="text-2xl text-mint/90">!انضم إلى أمان في مهمته لحماية عالمنا الرقمي</p>
          </motion.div>

          {/* Start Button */}
          <CyberButton onClick={onStart} size="lg">
            <Lock className="w-8 h-8" />
            <span>ابدأ المهمة</span>
          </CyberButton>

          <GameInstructions />
        </div>
      </div>

      {/* Add Character to Bottom Right */}
      <div className="absolute bottom-8 right-8">
        <CharacterImage 
          imageUrl="https://wsad.sa/wp-content/Asset%202.svg"
          size="xl"
          showEffects={true}
        />
      </div>
    </div>
  );
};