export interface Virus {
  id: string;
  x: number;
  y: number;
  size: number;
  points: number;
  color: string;
  speed: number;
}

export interface GameState {
  score: number;
  highScore: number;
  timeLeft: number;
  isPlaying: boolean;
  isPaused: boolean;
  viruses: Virus[];
  showCelebration: boolean;
  gameOver: boolean;
  devMode: boolean;
}

export interface GameActions {
  startGame: () => void;
  endGame: () => void;
  resetHighScore: () => void;
  catchVirus: (id: string) => void;
  updateTimer: () => void;
  addVirus: () => void;
  removeVirus: (id: string) => void;
  setTimeLeft: (time: number) => void;
  setScore: (score: number) => void;
  togglePause: () => void;
  forceEndGame: () => void;
  setShowCelebration: (show: boolean) => void;
  resetGame: () => void;
  toggleDevMode: () => void;
}