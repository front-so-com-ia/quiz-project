import { Navigate, useNavigate } from 'react-router';
import BaseLayout from '../../components/BaseLayout';
import { useGameContext } from '../../contexts/GameContext';

export function ResultsScreen() {
  const { playAgain, score, player, totalQuestions, backToSetupScreen } =
    useGameContext();

  const navigate = useNavigate();

  if (!player.name) {
    return <Navigate to="/" replace />;
  }

  const message = 'message placeholder';

  const handlePlayAgain = () => {
    playAgain();
    navigate('/play');
  };

  const handleBackToSetupScreen = () => {
    backToSetupScreen();
    navigate('/');
  };

  return (
    <BaseLayout className="animate-pop-in text-center glass-card space-y-6 p-8">
      <div>
        <h2 className="text-3xl font-extrabold mb-1">{message}</h2>
        <p className="text-white/50 font-medium text-lg">GG, {player.name}!</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 rounded-xl p-4">
          <p className="text-3xl font-extrabold bg-linear-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
            {score}
          </p>
          <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mt-1">
            Score
          </p>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <p className="text-3xl font-extrabold text-neon-green">
            {0}
            <span className="text-lg text-white/30">/{totalQuestions}</span>
          </p>
          <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mt-1">
            Hits
          </p>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <p className="text-3xl font-extrabold text-neon-purple">{0}%</p>
          <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mt-1">
            Hit Rate
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <button
          onClick={handlePlayAgain}
          className="w-full py-4 rounded-xl text-lg font-bold uppercase tracking-wider
          bg-linear-to-r from-primary-500 via-accent-500 to-neon-purple text-white
          hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
        >
          Play Again
        </button>
        <button
          onClick={handleBackToSetupScreen}
          className="w-full py-3 rounded-xl font-semibold text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
        >
          ← Change player
        </button>
      </div>
    </BaseLayout>
  );
}
