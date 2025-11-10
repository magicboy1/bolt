import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/colors';
import { CharacterImage } from '../character/CharacterImage';

export const PlayerBadge: React.FC = () => {
  return (
    <div className="relative">
      <motion.div 
        className="bg-surface/90 backdrop-blur-sm rounded-xl p-4 border border-green/20"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative"
          >
            <CharacterImage
              imageUrl="/Group@2x copy.png"
              size="xs"
              showEffects={false}
            />
          </motion.div>

          <div className="text-right">
            <motion.h2 
              className="text-2xl font-bold"
              animate={{ 
                color: [COLORS.coral, COLORS.green, COLORS.coral],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              أمان
            </motion.h2>
            <div className="text-sm text-mint/60">حامي الشبكة</div>
          </div>
        </div>

        {/* Hexagon Pattern Background */}
        <div className="absolute inset-0 opacity-5 bg-hexagon-pattern rounded-xl" />
      </motion.div>
    </div>
  );
};