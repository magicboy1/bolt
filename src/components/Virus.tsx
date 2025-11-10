import { motion, AnimatePresence } from 'framer-motion';
import { VirusIcon } from './VirusIcon';
import { KillEffect } from './effects/KillEffect';
import type { Virus as VirusType } from '../types/game';
import { useState } from 'react';

interface Props {
  virus: VirusType;
  onCatch: (id: string) => void;
}

export const Virus: React.FC<Props> = ({ virus, onCatch }) => {
  const [isKilled, setIsKilled] = useState(false);

  const handleCatch = () => {
    setIsKilled(true);
    setTimeout(() => {
      onCatch(virus.id);
    }, 100);
  };

  // Calculate movement boundaries to avoid HUD
  const movementRange = 30;
  const isNearHUD = virus.x > (window.innerWidth - 350) && virus.y < 450;
  
  // Adjust movement if near HUD
  const xMovement = isNearHUD ? [-movementRange, 0] : [virus.x - movementRange, virus.x + movementRange];
  const yMovement = isNearHUD ? [virus.y, virus.y + movementRange] : [virus.y - movementRange, virus.y + movementRange];

  return (
    <>
      <motion.div
        className="absolute touch-none"
        style={{
          x: virus.x,
          y: virus.y,
        }}
        animate={{
          x: xMovement,
          y: yMovement,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <AnimatePresence>
          {!isKilled && (
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              exit={{ scale: 0, opacity: 0 }}
              onTouchStart={handleCatch}
              onClick={handleCatch}
            >
              <VirusIcon 
                color={virus.color}
                size={virus.size}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {isKilled && (
        <KillEffect 
          x={virus.x}
          y={virus.y}
          color={virus.color}
        />
      )}
    </>
  );
};