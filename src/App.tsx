import { GameContextProvider } from './contexts/GameContextProvider';
import MainRouter from './routes/MainRouter';

export default function App() {
  return (
    <GameContextProvider>
      <MainRouter />
    </GameContextProvider>
  );
}
