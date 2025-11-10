import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/colors';
import { Shield, Zap } from 'lucide-react';

interface Props {
  imageUrl: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showEffects?: boolean;
}

const sizes = {
  xs: {
    container: 'w-12 h-12',
    icon: 16,
    effectSize: 'w-4 h-4',
    particleSize: 4,
    particleDistance: 20,
  },
  sm: {
    container: 'w-24 h-24',
    icon: 20,
    effectSize: 'w-6 h-6',
    particleSize: 6,
    particleDistance: 30,
  },
  md: {
    container: 'w-32 h-32',
    icon: 24,
    effectSize: 'w-8 h-8',
    particleSize: 8,
    particleDistance: 40,
  },
  lg: {
    container: 'w-40 h-40',
    icon: 32,
    effectSize: 'w-10 h-10',
    particleSize: 8,
    particleDistance: 50,
  },
  xl: {
    container: 'w-48 h-48',
    icon: 40,
    effectSize: 'w-12 h-12',
    particleSize: 10,
    particleDistance: 60,
  },
};

export const CharacterImage: React.FC<Props> = ({ 
  imageUrl, 
  size = 'md',
  showEffects = true 
}) => {
  const sizeConfig = sizes[size];

  return (
    <motion.div 
      className="relative"
      animate={showEffects ? { y: [0, -8, 0] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {/* Character Container */}
      <motion.div
        className={`relative ${sizeConfig.container}`}
        animate={showEffects ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {/* Character Image */}
        <img 
          src={imageUrl} 
          alt="Game Character"
          className="w-full h-full object-contain"
        />

        {/* Glow Effect */}
        {showEffects && (
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
        )}

        {/* Power Icons */}
        {showEffects && (
          <>
            <motion.div
              className="absolute -right-2 -top-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Zap className={`${sizeConfig.effectSize} text-coral`} />
            </motion.div>

            <motion.div
              className="absolute -left-2 top-1/2"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Shield className={`${sizeConfig.effectSize} text-blue`} />
            </motion.div>
          </>
        )}

        {/* Energy Particles */}
        {showEffects && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${sizeConfig.particleSize}px`,
                  height: `${sizeConfig.particleSize}px`,
                  borderRadius: '50%',
                  backgroundColor: COLORS.mint,
                }}
                animate={{
                  x: [0, Math.cos(i * Math.PI / 3) * sizeConfig.particleDistance],
                  y: [0, Math.sin(i * Math.PI / 3) * sizeConfig.particleDistance],
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
          </>
        )}
      </motion.div>

      {/* Power Ring */}
      {showEffects && (
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
      )}
    </motion.div>
  );
};