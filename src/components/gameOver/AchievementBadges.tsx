import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Crown } from 'lucide-react';
import { COLORS } from '../../utils/colors';

interface Achievement {
  icon: typeof Shield;
  title: string;
  description: string;
  color: string;
  condition: (score: number) => boolean;
}

const achievements: Achievement[] = [
  {
    icon: Shield,
    title: 'حامي الشبكة',
    description: 'اصطدت ٥٠ فيروس',
    color: COLORS.green,
    condition: (score) => score >= 50
  },
  {
    icon: Zap,
    title: 'سريع كالبرق',
    description: 'اصطدت ١٠٠ فيروس',
    color: COLORS.coral,
    condition: (score) => score >= 100
  },
  {
    icon: Target,
    title: 'دقة التصويب',
    description: 'اصطدت ١٥٠ فيروس',
    color: COLORS.blue,
    condition: (score) => score >= 150
  },
  {
    icon: Crown,
    title: 'ملك الحماية',
    description: 'اصطدت ٢٠٠ فيروس',
    color: COLORS.mint,
    condition: (score) => score >= 200
  }
];

interface Props {
  score: number;
}

export const AchievementBadges: React.FC<Props> = ({ score }) => {
  const earnedAchievements = achievements.filter(a => a.condition(score));

  return (
    <div className="space-y-4">
      <h3 className="text-xl text-mint/80 mb-4">الإنجازات</h3>
      <div className="grid grid-cols-2 gap-4">
        {achievements.map((achievement, index) => {
          const isEarned = achievement.condition(score);
          return (
            <motion.div
              key={achievement.title}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className={`relative rounded-xl p-4 border ${
                isEarned ? 'bg-surface/50 border-mint/20' : 'bg-surface/20 border-mint/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={isEarned ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`p-2 rounded-lg ${
                    isEarned ? 'text-mint' : 'text-mint/20'
                  }`}
                >
                  <achievement.icon size={24} />
                </motion.div>
                <div>
                  <div className={`font-bold ${
                    isEarned ? 'text-mint' : 'text-mint/20'
                  }`}>
                    {achievement.title}
                  </div>
                  <div className={`text-sm ${
                    isEarned ? 'text-mint/60' : 'text-mint/20'
                  }`}>
                    {achievement.description}
                  </div>
                </div>
              </div>

              {isEarned && (
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${achievement.color}, transparent)`,
                    opacity: 0.1,
                    backgroundSize: '200% 100%'
                  }}
                  animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};