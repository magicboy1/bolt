import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Lock } from 'lucide-react';
import { COLORS } from '../../utils/colors';

interface Props {
  imageUrl: string;
}

export const IntroCharacter: React.FC<Props> = ({ imageUrl }) => {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="absolute bottom-8 right-8 z-10"
    >
      <div className="relative">
        {/* Main Character */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative"
        >
          {/* Character Image */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-40 h-40 relative"
          >
            <img 
              src={imageUrl} 
              alt="Character"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0"
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: `radial-gradient(circle, ${COLORS.green}40 0%, transparent 70%)`
              }}
            />
          </motion.div>

          {/* Power Icons */}
          <motion.div
            className="absolute -right-4 -top-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Zap className="w-10 h-10 text-coral" />
          </motion.div>

          <motion.div
            className="absolute -left-4 top-1/2"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Lock className="w-10 h-10 text-blue" />
          </motion.div>
        </motion.div>

        {/* Energy Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: COLORS.mint,
            }}
            animate={{
              x: [0, Math.cos(i * Math.PI / 3) * 50],
              y: [0, Math.sin(i * Math.PI / 3) * 50],
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Power Ring */}
        <motion.div
          className="absolute inset-0"
          style={{
            border: `2px solid ${COLORS.green}`,
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};