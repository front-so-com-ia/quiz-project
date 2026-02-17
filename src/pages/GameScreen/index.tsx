import { useCallback, useState } from 'react';
import BaseLayout from '../../components/BaseLayout';
import { useGameContext } from '../../contexts/GameContext';
import { useQueryQuestions } from '../../hooks/useQueryQuestions';
import { Navigate, useNavigate } from 'react-router';

export function GameScreen() {
  const { player, endGame } = useGameContext();
  const {
    data: questions = [],
    isLoading,
    error,
    refetch,
  } = useQueryQuestions(10);
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scoreBump, setScoreBump] = useState(false);

  const handleAnswerClick = useCallback(
    (answer: string) => {
      if (isRevealed || selectedAnswer !== null) return;

      setSelectedAnswer(answer);
      setIsRevealed(true);

      const Point_per_questions = 100

      const isCorrect = answer === questions[currentIndex].correctAnswer;
      if (isCorrect) {
        setScore((prevScore) => prevScore + Point_per_questions);
        setScoreBump(true);
        setTimeout(() => setScoreBump(false), 300);
      }

      setTimeout(() => {
        if (currentIndex + 1 >= questions.length) {
          endGame(isCorrect ? score + Point_per_questions : score, questions.length);
          navigate('/results');
        } else {
          setCurrentIndex((prev) => prev + 1);
          setSelectedAnswer(null);
          setIsRevealed(false);
        }
      }, 1500);
    },
    [
      isRevealed,
      selectedAnswer,
      questions,
      currentIndex,
      score,
      endGame,
      navigate,
    ]
  );

  if (!player.name) {
    return <Navigate to="/" replace />;
  }

  if (isLoading) {
    return (
      <BaseLayout>
        <div className="flex flex-col items-center justify-center py-20 animate-pop-in">
          <div className="w-16 h-16 border-4 border-neon-purple border-t-transparent rounded-full animate-spin mb-6" />
          <p className="text-xl font-semibold text-white/70">Loading...</p>
        </div>
      </BaseLayout>
    );
  }

  if (error) {
    return (
      <BaseLayout>
        <div className="glass-card p-8 text-center animate-pop-in">
          <p className="text-xl text-red-400 mb-4">An error occurred</p>
          <button
            onClick={() => refetch()}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-500 rounded-xl font-semibold transition-colors cursor-pointer"
          >
            Refresh page
          </button>
        </div>
      </BaseLayout>
    );
  }

  const question = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const getButtonClass = (answer: string): string => {
    if (!isRevealed) return 'answer-btn';

    const isCorrectAnswer = answer === question.correctAnswer;
    const isSelected = answer === selectedAnswer;

    if (isCorrectAnswer) return 'answer-btn correct';
    if (isSelected && !isCorrectAnswer) return 'answer-btn wrong';
    return 'answer-btn dimmed';
  };

  return (
    <BaseLayout className="space-y-6 animate-pop-in">
      <div className="glass-card flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-bold text-lg">{player.name}</p>
            <p className="text-sm text-white/50">
              Question {currentIndex + 1} of {questions.length}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-white/50 uppercase tracking-wider font-semibold">
            Score
          </p>
          <p
            className={`text-3xl font-extrabold bg-linear-to-r from-neon-green to-neon-blue bg-clip-text text-transparent ${
              scoreBump ? 'animate-score-bump' : ''
            }`}
          >
            {score}
          </p>
        </div>
      </div>

      <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="progress-bar-fill h-full bg-linear-to-r from-neon-purple to-neon-green rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="glass-card space-y-2">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-white/40 font-medium">{question.category}</span>
          <span className="font-semibold capitalize text-white/50">
            {question.difficulty}
          </span>
        </div>
        <h2 className="text-xl font-bold leading-relaxed">
          {question.question}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {question.answers.map((answer, idx) => (
          <button
            key={`${currentIndex}-${idx}`}
            className={getButtonClass(answer)}
            onClick={() => handleAnswerClick(answer)}
            disabled={isRevealed}
          >
            <span className="inline-flex items-center gap-3">
              <span className="shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold">
                {String.fromCharCode(65 + idx)}
              </span>
              <span>{answer}</span>
            </span>
          </button>
        ))}
      </div>
    </BaseLayout>
  );
}
