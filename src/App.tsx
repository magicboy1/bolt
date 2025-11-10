import React, { useEffect } from 'react';
import { useGameStore } from './store/gameStore';
import { Virus } from './components/Virus';
import { GameHUD } from './components/GameHUD';
import { GameOver } from './components/GameOver';
import { StartScreen } from './components/StartScreen';
import { playSound } from './utils/sound';
import { COLORS } from './utils/colors';
import { DevControls } from './components/dev/DevControls';

function App() {
  const {
    score,
    highScore,
    timeLeft,
    isPlaying,
    isPaused,
    viruses,
    startGame,
    catchVirus,
    addVirus,
    resetHighScore,
  } = useGameStore();

  useEffect(() => {
    if (isPlaying && !isPaused) {
      const spawnInterval = setInterval(() => {
        addVirus();
      }, 1000);

      return () => clearInterval(spawnInterval);
    }
  }, [isPlaying, isPaused, addVirus]);

  const handleCatchVirus = (id: string) => {
    catchVirus(id);
    playSound();
  };

  if (!isPlaying) {
    return timeLeft < 30 ? (
      <GameOver score={score} highScore={highScore} onRestart={startGame} />
    ) : (
      <StartScreen onStart={startGame} />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-forest to-navy overflow-hidden relative">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 bg-hexagon-pattern opacity-5" />
      
      {/* Animated Grid Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-green/5 to-transparent"
        style={{
          backgroundSize: '20px 20px',
          backgroundImage: `linear-gradient(to right, ${COLORS.green}20 1px, transparent 1px), linear-gradient(to bottom, ${COLORS.green}20 1px, transparent 1px)`
        }}
      />

      <GameHUD
        score={score}
        highScore={highScore}
        timeLeft={timeLeft}
        onResetHighScore={resetHighScore}
      />
      
      {viruses.map((virus) => (
        <Virus key={virus.id} virus={virus} onCatch={handleCatchVirus} />
      ))}

      <DevControls />
    </div>
  );
}

export default App;