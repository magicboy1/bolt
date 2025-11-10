import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Lock } from 'lucide-react';
import { COLORS } from '../../utils/colors';

export const FloatingBadges: React.FC = () => {
  const badges = [
    { Icon: Shield, color: COLORS.green, delay: 0 },
    { Icon: Zap, color: COLORS.coral, delay: 0.2 },
    { Icon: Lock, color: COLORS.blue, delay: 0.4 },
  ];

  return (
    <>
      {badges.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: `${20 + index * 30}%`,
            left: `${10 + index * 30}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
          }}
        >
          <Icon size={24} color={color} />
        </motion.div>
      ))}
    </>
  );
};