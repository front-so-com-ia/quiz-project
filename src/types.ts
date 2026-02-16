export type TriviaQuestion = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type TriviaAPIResponse = {
  response_code: number;
  results: TriviaQuestion[];
};

export type Question = {
  question: string;
  correctAnswer: string;
  answers: string[];
  category: string;
  difficulty: string;
};

export type Player = {
  name: string;
};
