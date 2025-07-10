import { useQuizStore } from '@/store/quiz-store'

export const useQuiz = () => {
  const {
    questions,
    currentQuestionIndex,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    resetQuiz
  } = useQuizStore()

  const currentQuestion = questions[currentQuestionIndex]
  const isFirstQuestion = currentQuestionIndex === 0
  const isLastQuestion = currentQuestionIndex === questions.length - 1
  const totalQuestions = questions.length

  // Helper to get progress percentage
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100

  // Helper to check if current question is answered
  const isCurrentQuestionAnswered = currentQuestion?.selectedAnswer !== null

  // Helper to get all answered questions count
  const answeredQuestionsCount = questions.filter(q => q.selectedAnswer !== null).length

  return {
    // State
    questions,
    currentQuestion,
    currentQuestionIndex,
    isFirstQuestion,
    isLastQuestion,
    totalQuestions,
    progress,
    isCurrentQuestionAnswered,
    answeredQuestionsCount,
    
    // Actions
    selectAnswer,
    nextQuestion,
    previousQuestion,
    resetQuiz
  }
} 