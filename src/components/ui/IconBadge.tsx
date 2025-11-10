import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Props {
  Icon: LucideIcon;
  color: string;
  size?: number;
  animate?: boolean;
}

export const IconBadge: React.FC<Props> = ({ 
  Icon, 
  color, 
  size = 28,
  animate = true 
}) => {
  return (
    <motion.div
      animate={animate ? { 
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0]
      } : undefined}
      transition={{ 
        duration: 2,
        repeat: Infinity
      }}
      style={{ color }}
      className="shrink-0 p-2 rounded-lg bg-mint/5"
    >
      <Icon size={size} />
    </motion.div>
  );
};