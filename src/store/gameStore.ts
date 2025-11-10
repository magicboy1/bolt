import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState, GameActions } from '../types/game';
import { generateVirus } from '../utils/virusGenerator';

const INITIAL_STATE: GameState = {
  score: 0,
  highScore: 0,
  timeLeft: 30,
  isPlaying: false,
  isPaused: false,
  viruses: [],
  showCelebration: false,
  gameOver: false,
  devMode: false,
};

export const useGameStore = create<GameState & GameActions>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,

      startGame: () => {
        const currentHighScore = get().highScore;
        set({ 
          ...INITIAL_STATE, 
          isPlaying: true,
          highScore: currentHighScore,
          gameOver: false,
          devMode: get().devMode, // Preserve dev mode state
        });

        const gameInterval = setInterval(() => {
          const { timeLeft, isPlaying, isPaused } = get();
          if (timeLeft <= 0 || !isPlaying) {
            clearInterval(gameInterval);
            if (isPlaying) {
              get().endGame();
            }
            return;
          }
          if (!isPaused) {
            set(state => ({ timeLeft: state.timeLeft - 1 }));
          }
        }, 1000);
      },

      endGame: () => {
        const { score, highScore } = get();
        const isNewHighScore = score > highScore;
        
        set({ 
          isPlaying: false,
          highScore: Math.max(score, highScore),
          showCelebration: isNewHighScore,
          gameOver: true,
          timeLeft: 0,
          viruses: [],
        });
      },

      forceEndGame: () => {
        get().endGame();
      },

      resetHighScore: () => {
        set({ highScore: 0 });
      },

      catchVirus: (id: string) => {
        const { viruses, score, isPaused } = get();
        if (isPaused) return;
        
        const virus = viruses.find((v) => v.id === id);
        if (virus) {
          set(state => ({
            score: state.score + 10,
            viruses: state.viruses.filter((v) => v.id !== id),
          }));
        }
      },

      updateTimer: () => {
        const { isPaused } = get();
        if (!isPaused) {
          set(state => ({ timeLeft: state.timeLeft - 1 }));
        }
      },

      addVirus: () => {
        const { viruses, isPlaying, isPaused } = get();
        if (!isPlaying || isPaused) return;
        
        if (viruses.length < 5) {
          const newVirus = generateVirus();
          set(state => ({ viruses: [...state.viruses, newVirus] }));
        }
      },

      removeVirus: (id: string) => {
        set(state => ({
          viruses: state.viruses.filter((v) => v.id !== id),
        }));
      },

      setTimeLeft: (time: number) => {
        set({ timeLeft: Math.max(0, Math.min(99, time)) });
      },

      setScore: (score: number) => {
        set({ score: Math.max(0, score) });
      },

      togglePause: () => {
        const { isPlaying } = get();
        if (isPlaying) {
          set(state => ({ isPaused: !state.isPaused }));
        }
      },

      setShowCelebration: (show: boolean) => {
        set({ showCelebration: show });
      },

      resetGame: () => {
        set({ 
          ...INITIAL_STATE,
          highScore: get().highScore,
          devMode: get().devMode, // Preserve dev mode state
        });
      },

      toggleDevMode: () => {
        set(state => ({ devMode: !state.devMode }));
      },
    }),
    {
      name: 'virus-game-storage',
      version: 1,
      partialize: (state) => ({ 
        highScore: state.highScore,
        devMode: state.devMode 
      }),
      merge: (persistedState: any, currentState) => ({
        ...currentState,
        highScore: persistedState.highScore || 0,
        devMode: persistedState.devMode || false,
      }),
    }
  )
);