import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { COLORS } from '../../utils/colors';

interface Props {
  icon: LucideIcon;
  value: number | string;
  label: string;
  color: string;
  animate?: boolean;
  flash?: boolean;
}

export const StatCard: React.FC<Props> = ({ 
  icon: Icon, 
  value, 
  label, 
  color, 
  animate,
  flash 
}) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div 
        className="bg-surface/90 backdrop-blur-sm rounded-xl p-4 border border-green/20"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        animate={flash ? {
          scale: [1, 1.05, 1],
          borderColor: [
            'rgba(226, 123, 99, 0.2)',
            'rgba(226, 123, 99, 0.6)',
            'rgba(226, 123, 99, 0.2)'
          ]
        } : undefined}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="text-right">
            <motion.div 
              className="text-2xl font-bold"
              style={{ color }}
              animate={flash ? {
                scale: [1, 1.1, 1],
                color: [color, COLORS.coral, color]
              } : animate ? { 
                scale: [1, 1.1, 1] 
              } : undefined}
              transition={{ 
                duration: flash ? 0.5 : 0.3,
                repeat: flash ? Infinity : undefined
              }}
            >
              {value}
            </motion.div>
            <div className="text-sm text-mint/60">{label}</div>
          </div>
          
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: color }}
              animate={flash ? {
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.2, 1]
              } : { 
                opacity: [0.1, 0.3, 0.1] 
              }}
              transition={{ 
                duration: flash ? 0.5 : 2,
                repeat: Infinity 
              }}
            />
            <Icon className="w-8 h-8" style={{ color }} />
          </div>
        </div>

        {/* Hexagon Pattern Background */}
        <div className="absolute inset-0 opacity-5 bg-hexagon-pattern" />

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${COLORS.green}, transparent)`,
            opacity: 0.2,
            backgroundSize: '200% 100%'
          }}
          animate={{
            backgroundPosition: ['200% 0', '-200% 0']
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};