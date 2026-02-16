import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GameContextProvider } from './contexts/GameContextProvider';
import MainRouter from './routes/MainRouter';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GameContextProvider>
        <MainRouter />
      </GameContextProvider>
    </QueryClientProvider>
  );
}
