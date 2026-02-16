import { createContext, useContext } from 'react';
import type { Player } from '../types';

type GameContextType = {
  player: Player;
  score: number;
  totalQuestions: number;
  startGame: (player: Player) => void;
  endGame: (finalScore: number, total: number) => void;
  playAgain: () => void;
  backToSetupScreen: () => void;
};

export const GameContext = createContext<GameContextType | null>(null);

export function useGameContext(): GameContextType {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error(
      'useGameContext deve ser usado dentro de um GameContextProvider'
    );
  }

  return context;
}
