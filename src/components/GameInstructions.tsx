import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Shield, Bug } from 'lucide-react';
import { Card } from './ui/Card';
import { IconBadge } from './ui/IconBadge';
import { COLORS, VIRUS_COLORS } from '../utils/colors';

export const GameInstructions: React.FC = () => {
  const instructions = [
    {
      icon: Bug,
      text: "اصطد جميع الفيروسات بمختلف ألوانها",
      color: COLORS.mint,
      virusColors: true
    },
    {
      icon: Timer,
      text: "٣٠ ثانية لتأمين الشبكة",
      color: COLORS.slate
    }
  ];

  return (
    <Card className="max-w-md mx-auto bg-navy/90 backdrop-blur-xl space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">مهمة البطل أمان</h2>
        <p className="text-mint/80">تعلم أساسيات أمن المعلومات مع أمان</p>
      </div>
      
      <div className="space-y-4 mt-6">
        {instructions.map((instruction, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.2 }}
            className="flex items-center gap-4 bg-navy/50 rounded-xl p-4 border border-mint/10"
          >
            <IconBadge 
              Icon={instruction.icon}
              color={instruction.color}
              animate={true}
            />
            <div className="space-y-2">
              <p className="text-lg">{instruction.text}</p>
              {instruction.virusColors && (
                <div className="flex gap-2 mt-1">
                  {VIRUS_COLORS.map((color, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ 
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2 
                      }}
                    >
                      <Bug 
                        size={20} 
                        className="drop-shadow-lg"
                        color={color}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};