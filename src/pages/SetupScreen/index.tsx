import { useState } from 'react';
import BaseLayout from '../../components/BaseLayout';
import { useGameContext } from '../../contexts/GameContext';
import { useNavigate } from 'react-router';
import fluenquizLogo from '../../assets/FLUENQUIZ.svg';

export function SetupScreen() {
  const { startGame } = useGameContext();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const canStart = name.trim().length > 0;

  function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();
    if (!canStart) return;

    startGame({ name: name.trim() });
    navigate('/play');
  }

  return (
    <BaseLayout className="animate-pop-in">
      <form
        onSubmit={handleSubmit}
        className="glass-card p-5 sm:p-8 space-y-5 sm:space-y-6"
      >
        <div className="flex flex-col items-center xt-center mb-6 sm:mb-8">
          <img src={fluenquizLogo} alt="Fluenquiz logo" className="w-32 h-32" />
          <p className="text-base sm:text-lg text-white/60 font-medium">
            Test your knowledge and practice you English!
          </p>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="player-name"
            className="block text-sm font-semibold text-white/70 uppercase tracking-wider"
          >
            Your name
          </label>
          <input
            id="player-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            maxLength={20}
            className="
            w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
            text-white placeholder-white/30 font-medium text-lg
            focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/30
            transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={!canStart}
          className={`w-full py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold uppercase tracking-wider transition-all duration-300 ${
            canStart
              ? 'bg-linear-to-r from-primary-500 to-neon-purple text-white animate-pulse-glow hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
              : 'bg-white/10 text-white/30 cursor-not-allowed'
          }`}
        >
          Play
        </button>
      </form>
    </BaseLayout>
  );
}
