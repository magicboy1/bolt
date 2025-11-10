import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../utils/colors';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  color: string;
  delay: number;
}

export const Confetti: React.FC = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [COLORS.coral, COLORS.green, COLORS.blue, COLORS.mint];
    const newPieces = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -20,
      rotation: Math.random() * 360,
      size: 8 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ 
            x: piece.x,
            y: piece.y,
            rotate: piece.rotation,
            opacity: 1,
          }}
          animate={{
            y: window.innerHeight + 20,
            rotate: piece.rotation + 360,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: '2px',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
        />
      ))}

      {/* Glowing Particles */}
      {pieces.slice(0, 20).map((piece) => (
        <motion.div
          key={`glow-${piece.id}`}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: -20,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            y: window.innerHeight + 20,
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            delay: piece.delay,
            repeat: Infinity,
            ease: "easeOut"
          }}
          style={{
            position: 'absolute',
            width: piece.size * 2,
            height: piece.size * 2,
            backgroundColor: piece.color,
            borderRadius: '50%',
            filter: 'blur(8px)',
          }}
        />
      ))}
    </div>
  );
};