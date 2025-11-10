import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, PartyPopper } from 'lucide-react';
import { Confetti } from './Confetti';

interface Props {
  score: number;
  highScore: number;
  onContinue: () => void;
}

export const Celebration: React.FC<Props> = ({ score, highScore, onContinue }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-navy/90 backdrop-blur-md flex items-center justify-center z-50"
    >
      <Confetti />
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="bg-gradient-to-b from-forest to-navy rounded-3xl p-8 max-w-md w-full mx-4 text-center relative overflow-hidden"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="absolute top-4 right-4"
        >
          <PartyPopper className="text-coral" size={32} />
        </motion.div>
        
        <motion.div
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="absolute top-4 left-4"
        >
          <PartyPopper className="text-coral" size={32} />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="mb-8"
        >
          <Trophy className="text-coral w-24 h-24 mx-auto" />
        </motion.div>

        <h2 className="text-4xl font-bold text-mint mb-6">أحسنت!</h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-2xl text-sage">لقد حققت نتيجة جديدة</p>
          <div className="text-5xl font-bold bg-gradient-to-r from-coral to-sage bg-clip-text text-transparent">
            {score}
          </div>
          <p className="text-mint/80">النتيجة السابقة: {highScore}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="bg-coral hover:bg-coral/90 text-mint rounded-xl px-8 py-4 text-xl font-bold w-full transition-colors"
        >
          متابعة
        </motion.button>
      </motion.div>
    </motion.div>
  );
};