import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { SetupScreen } from '../pages/SetupScreen';
import { GameScreen } from '../pages/GameScreen';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetupScreen />} />
        <Route path="/play" element={<GameScreen />} />
        <Route
          path="/results"
          element={
            <h1 className="text-center font-bold text-2xl mt-10">
              RESULTS SCREEN
            </h1>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
