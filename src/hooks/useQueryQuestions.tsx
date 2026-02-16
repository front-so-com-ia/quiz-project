import { useQuery } from '@tanstack/react-query';
import { fetchQuestions } from '../services/api';

export function useQueryQuestions(amount = 10) {
  return useQuery({
    queryKey: ['questions', amount],
    queryFn: () => fetchQuestions(amount),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}
