import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { SetupScreen } from '../pages/SetupScreen';
import { GameScreen } from '../pages/GameScreen';
import { ResultsScreen } from '../pages/ResultsScreen';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetupScreen />} />
        <Route path="/play" element={<GameScreen />} />
        <Route path="/results" element={<ResultsScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
