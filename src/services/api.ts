import type { TriviaAPIResponse, Question } from '../types';
import { shuffleArray } from '../utils/shuffle-array';

const API_URL = 'https://opentdb.com/api.php';
const TOKEN_URL = 'https://opentdb.com/api_token.php';

let sessionToken: string | null = null;

async function getSessionToken(): Promise<string> {
  if (sessionToken) return sessionToken;

  const response = await fetch(`${TOKEN_URL}?command=request`);
  if (response.ok) {
    const data = await response.json();
    if (data.response_code === 0) {
      sessionToken = data.token;
      return data.token;
    }
  }
  // Se o request de token falhar, continua sem nenhum token
  return '';
}

async function fetchWithRetry(url: string, maxRetries = 3): Promise<Response> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const response = await fetch(url);

    if (response.status === 429 && attempt < maxRetries) {
      //tentativa exponencial -> 1s, 2s, 4s
      const delay = Math.pow(2, attempt) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
      continue;
    }

    return response;
  }

  throw new Error('Número máximo de tentativas excedido');
}

export async function fetchQuestions(amount = 10): Promise<Question[]> {
  const token = await getSessionToken();
  const tokenParam = token ? `&token=${token}` : '';
  const url = `${API_URL}?amount=${amount}&type=multiple&encode=url3986${tokenParam}`;

  const response = await fetchWithRetry(url);

  if (!response.ok) {
    throw new Error('Falha ao buscar perguntas do servidor');
  }

  const data: TriviaAPIResponse = await response.json();

  // Token expirado - reseta e tenta dnv
  if (data.response_code === 4 && token) {
    sessionToken = null;
    return fetchQuestions(amount);
  }

  if (data.response_code !== 0) {
    throw new Error(`API error: response code ${data.response_code}`);
  }

  return data.results.map((t_question) => {
    const correctAnswer = decodeURIComponent(t_question.correct_answer);
    const incorrectAnswers = t_question.incorrect_answers.map((answer) =>
      decodeURIComponent(answer)
    );
    const answers = shuffleArray([correctAnswer, ...incorrectAnswers]);

    return {
      question: decodeURIComponent(t_question.question),
      correctAnswer,
      answers,
      category: decodeURIComponent(t_question.category),
      difficulty: decodeURIComponent(t_question.difficulty),
    };
  });
}
