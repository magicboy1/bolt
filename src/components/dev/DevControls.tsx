import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Plus, Trash2, Timer, Zap, Bug, Crown, Pause, Play, XCircle } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { COLORS } from '../../utils/colors';

export const DevControls: React.FC = () => {
  const { 
    addVirus, 
    resetHighScore, 
    score, 
    timeLeft,
    setTimeLeft,
    setScore,
    isPlaying,
    isPaused,
    togglePause,
    forceEndGame,
    devMode,
  } = useGameStore();
  
  const [isOpen, setIsOpen] = React.useState(false);

  // Only render if devMode is true
  if (!devMode) return null;

  const handleAddTime = (seconds: number) => {
    setTimeLeft(Math.min(timeLeft + seconds, 99));
  };

  const handleAddScore = (points: number) => {
    setScore(score + points);
  };

  return (
    <div className="fixed bottom-4 left-4 z-[100]">
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-surface/90 backdrop-blur-sm p-3 rounded-full border border-green/20 cursor-pointer hover:bg-surface"
      >
        <Wrench className="w-6 h-6 text-green" />
      </motion.button>

      {/* Controls Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-16 left-0 bg-surface/95 backdrop-blur-md rounded-xl p-4 border border-green/20 space-y-3 w-72 shadow-xl"
        >
          <h3 className="text-mint font-bold mb-4 flex items-center gap-2">
            <Wrench className="w-4 h-4" />
            Dev Controls
          </h3>

          <div className="space-y-4">
            {/* Game Controls */}
            <div className="space-y-2">
              <div className="text-xs text-mint/60 uppercase tracking-wider">Game Controls</div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => togglePause()}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface hover:bg-blue/20 text-blue text-sm border border-blue/20 cursor-pointer transition-colors"
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  {isPaused ? 'Resume' : 'Pause'}
                </button>
                <button
                  onClick={() => resetHighScore()}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface hover:bg-coral/20 text-coral text-sm border border-coral/20 cursor-pointer transition-colors"
                >
                  <Crown className="w-4 h-4" />
                  Reset High
                </button>
                <button
                  onClick={forceEndGame}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface hover:bg-coral/20 text-coral text-sm border border-coral/20 cursor-pointer transition-colors"
                >
                  <XCircle className="w-4 h-4" />
                  End Game
                </button>
              </div>
            </div>

            {/* Virus Controls */}
            <div className="space-y-2">
              <div className="text-xs text-mint/60 uppercase tracking-wider">Virus Controls</div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => addVirus()}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface hover:bg-green/20 text-green text-sm border border-green/20 cursor-pointer transition-colors"
                >
                  <Bug className="w-4 h-4" />
                  Add One
                </button>
                <button
                  onClick={() => {
                    Array(3).fill(0).forEach(() => addVirus());
                  }}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface hover:bg-green/20 text-green text-sm border border-green/20 cursor-pointer transition-colors"
                >
                  <Bug className="w-4 h-4" />
                  Add Three
                </button>
              </div>
            </div>

            {/* Time Controls */}
            <div className="space-y-2">
              <div className="text-xs text-mint/60 uppercase tracking-wider">Time Controls</div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleAddTime(10)}
                  className="flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-surface hover:bg-blue/20 text-blue text-sm border border-blue/20 cursor-pointer transition-colors"
                >
                  <Timer className="w-3 h-3" />
                  +10s
                </button>
                <button
                  onClick={() => handleAddTime(30)}
                  className="flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-surface hover:bg-blue/20 text-blue text-sm border border-blue/20 cursor-pointer transition-colors"
                >
                  <Timer className="w-3 h-3" />
                  +30s
                </button>
                <button
                  onClick={() => setTimeLeft(60)}
                  className="flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-surface hover:bg-blue/20 text-blue text-sm border border-blue/20 cursor-pointer transition-colors"
                >
                  <Timer className="w-3 h-3" />
                  Reset
                </button>
              </div>
            </div>

            {/* Score Controls */}
            <div className="space-y-2">
              <div className="text-xs text-mint/60 uppercase tracking-wider">Score Controls</div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleAddScore(10)}
                  className="flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-surface hover:bg-green/20 text-green text-sm border border-green/20 cursor-pointer transition-colors"
                >
                  <Zap className="w-3 h-3" />
                  +10
                </button>
                <button
                  onClick={() => handleAddScore(50)}
                  className="flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-surface hover:bg-green/20 text-green text-sm border border-green/20 cursor-pointer transition-colors"
                >
                  <Zap className="w-3 h-3" />
                  +50
                </button>
                <button
                  onClick={() => setScore(0)}
                  className="flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-surface hover:bg-coral/20 text-coral text-sm border border-coral/20 cursor-pointer transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  Reset
                </button>
              </div>
            </div>

            {/* Current Stats */}
            <div className="border-t border-green/10 pt-2 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-mint/60">Score:</span>
                <span className="text-green font-mono">{score}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-mint/60">Time Left:</span>
                <span className="text-blue font-mono">{timeLeft}s</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-mint/60">Game State:</span>
                <span className={`font-mono ${isPaused ? 'text-coral' : 'text-green'}`}>
                  {isPaused ? 'PAUSED' : 'PLAYING'}
                </span>
              </div>
            </div>
          </div>

          {/* Decorative Border */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-xl pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${COLORS.green}, transparent)`,
              opacity: 0.2,
              backgroundSize: '200% 100%'
            }}
            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      )}
    </div>
  );
};