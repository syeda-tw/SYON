import { create } from 'zustand'

export interface QuizQuestion {
  question: string
  answers: string[]
  selectedAnswer: string | null
}

interface QuizState {
  questions: QuizQuestion[]
  currentQuestionIndex: number
  
  // Actions
  selectAnswer: (questionIndex: number, answer: string) => void
  nextQuestion: () => void
  previousQuestion: () => void
  resetQuiz: () => void
}

// Sample questions for the quiz
const initialQuestions: QuizQuestion[] = [
  {
    question: "What is the capital of France?",
    answers: ['a) London', 'b) Berlin', 'c) Paris', 'd) Madrid'],
    selectedAnswer: null
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ['a) Venus', 'b) Mars', 'c) Jupiter', 'd) Saturn'],
    selectedAnswer: null
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ['a) Elephant', 'b) Blue Whale', 'c) Giraffe', 'd) Hippopotamus'],
    selectedAnswer: null
  },
  {
    question: "In which year did World War II end?",
    answers: ['a) 1943', 'b) 1944', 'c) 1945', 'd) 1946'],
    selectedAnswer: null
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ['a) Go', 'b) Au', 'c) Ag', 'd) Gd'],
    selectedAnswer: null
  },
  {
    question: "Which ocean is the largest?",
    answers: ['a) Atlantic', 'b) Indian', 'c) Arctic', 'd) Pacific'],
    selectedAnswer: null
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ['a) Vincent van Gogh', 'b) Pablo Picasso', 'c) Leonardo da Vinci', 'd) Michelangelo'],
    selectedAnswer: null
  },
  {
    question: "What is the smallest country in the world?",
    answers: ['a) Monaco', 'b) Vatican City', 'c) San Marino', 'd) Liechtenstein'],
    selectedAnswer: null
  },
  {
    question: "Which element has the atomic number 1?",
    answers: ['a) Helium', 'b) Hydrogen', 'c) Lithium', 'd) Carbon'],
    selectedAnswer: null
  },
  {
    question: "In which continent is the Amazon rainforest primarily located?",
    answers: ['a) Africa', 'b) Asia', 'c) South America', 'd) North America'],
    selectedAnswer: null
  }
]

export const useQuizStore = create<QuizState>((set, get) => ({
  questions: initialQuestions,
  currentQuestionIndex: 0,

  selectAnswer: (questionIndex: number, answer: string) => {
    const { questions } = get()
    const newQuestions = [...questions]
    newQuestions[questionIndex] = {
      ...newQuestions[questionIndex],
      selectedAnswer: answer
    }
    set({ questions: newQuestions })
  },

  nextQuestion: () => {
    const { currentQuestionIndex, questions } = get()
    if (currentQuestionIndex < questions.length - 1) {
      set({ currentQuestionIndex: currentQuestionIndex + 1 })
    } else {
      // If already on the last question, trigger reset
      get().resetQuiz()
    }
  },

  previousQuestion: () => {
    const { currentQuestionIndex } = get()
    if (currentQuestionIndex > 0) {
      set({ currentQuestionIndex: currentQuestionIndex - 1 })
    }
  },

  resetQuiz: () => {
    const resetQuestions = initialQuestions.map(q => ({
      ...q,
      selectedAnswer: null
    }))
    set({
      questions: resetQuestions,
      currentQuestionIndex: 0
    })
  }
})) 