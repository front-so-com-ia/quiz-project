import { useState } from 'react';
import type { Player } from '../types';
import { GameContext } from './GameContext';

type GameProviderProps = {
  children: React.ReactNode;
};

export function GameContextProvider({ children }: GameProviderProps) {
  const [player, setPlayer] = useState<Player>({ name: '' });
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const startGame = (player: Player) => {
    setPlayer(player);
    setScore(0);
  };

  const endGame = (finalScore: number, total: number) => {
    setScore(finalScore);
    setTotalQuestions(total);
  };

  const playAgain = () => {
    setScore(0);
  };

  const backToSetupScreen = () => {
    setScore(0);
    setPlayer({ name: '' });
  };

  return (
    <GameContext.Provider
      value={{
        player,
        score,
        totalQuestions,
        startGame,
        endGame,
        playAgain,
        backToSetupScreen,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
