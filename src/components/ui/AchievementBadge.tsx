import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  title: string;
  color: string;
}

export const AchievementBadge: React.FC<Props> = ({ icon: Icon, title, color }) => {
  return (
    <motion.div
      className="relative"
      animate={{ scale: [0.95, 1.05, 0.95] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="relative bg-surface/50 rounded-2xl p-6 border border-green/10 flex flex-col items-center gap-4">
        {/* Icon Container */}
        <motion.div
          className="relative"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="absolute inset-0 rounded-full blur-lg"
            style={{ backgroundColor: color }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <Icon className="w-16 h-16" style={{ color }} />
        </motion.div>

        {/* Title */}
        <div className="text-2xl font-bold" style={{ color }}>
          {title}
        </div>

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            opacity: 0.2,
            backgroundSize: '200% 100%'
          }}
          animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};