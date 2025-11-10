import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  scale: number;
}

export const Confetti: React.FC = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  
  useEffect(() => {
    const colors = ['#E17F65', '#7AB17A', '#5B6888', '#D8E6E1'];
    const newPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      scale: 0.5 + Math.random() * 0.5,
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ 
            x: piece.x,
            y: -20,
            rotate: 0,
          }}
          animate={{
            y: window.innerHeight + 20,
            rotate: 360,
          }}
          transition={{
            duration: 2.5,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: '8px',
            height: '8px',
            backgroundColor: piece.color,
            borderRadius: '2px',
            scale: piece.scale,
          }}
        />
      ))}
    </div>
  );
};