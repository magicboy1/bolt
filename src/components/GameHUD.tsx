import React from 'react';
import { Shield, Zap, Timer, Trophy } from 'lucide-react';
import { COLORS } from '../utils/colors';
import { StatCard } from './hud/StatCard';
import { PlayerBadge } from './hud/PlayerBadge';

interface Props {
  score: number;
  highScore: number;
  timeLeft: number;
  onResetHighScore: () => void;
}

export const GameHUD: React.FC<Props> = ({ 
  score, 
  highScore, 
  timeLeft, 
  onResetHighScore 
}) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-4 w-72 font-arabic" dir="rtl">
      <PlayerBadge />
      
      <StatCard
        icon={Zap}
        value={score}
        label="النقاط"
        color={COLORS.green}
        animate={score > 0}
      />
      
      <StatCard
        icon={Trophy}
        value={highScore}
        label="أعلى نتيجة"
        color={COLORS.coral}
      />
      
      <StatCard
        icon={Timer}
        value={timeLeft}
        label="الوقت"
        color={COLORS.blue}
        animate={false}
        flash={timeLeft <= 10}
      />
    </div>
  );
};