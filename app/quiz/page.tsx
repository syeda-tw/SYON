'use client'

import { quizQuestions } from '@/store/quiz-store'
import { useQuiz } from '@/hooks/use-quiz'
import Link from 'next/link'
import { 
  ArrowLeft01Icon, 
  ArrowRight01Icon, 
  CheckmarkCircle02Icon,
  Cancel01Icon,
  Target01Icon
} from 'hugeicons-react'

function QuizProgress({ current, total }: { current: number; total: number }) {
  const percentage = ((current + 1) / total) * 100
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-slate-600">
        <span>Question {current + 1} of {total}</span>
        <span>{Math.round(percentage)}% Complete</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

function QuizQuestion() {
  const { 
    currentQuestionIndex, 
    answers, 
    answerQuestion, 
    nextQuestion, 
    previousQuestion 
  } = useQuiz()
  
  const currentQuestion = quizQuestions[currentQuestionIndex]
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id)
  
  const handleOptionSelect = (optionId: string, score: number) => {
    answerQuestion(currentQuestion.id, optionId, score)
  }
  
  const handleNext = () => {
    nextQuestion()
  }
  
  const handlePrevious = () => {
    previousQuestion()
  }
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <QuizProgress current={currentQuestionIndex} total={quizQuestions.length} />
      
      <div className="gradient-bg-card rounded-3xl p-12 border-2 border-border">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <p className="text-lg text-purple-600 font-medium">{currentQuestion.title}</p>
            <h2 className="text-3xl font-semibold text-slate-800 leading-relaxed">
              {currentQuestion.question}
            </h2>
          </div>
          
          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id, option.score)}
                className={`w-full p-6 text-left rounded-xl border-2 transition-all duration-300 ${
                  currentAnswer?.optionId === option.id
                    ? 'border-purple-500 bg-purple-50 shadow-lg'
                    : 'border-border hover:border-purple-300 hover:bg-purple-25'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    currentAnswer?.optionId === option.id
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-slate-300'
                  }`}>
                    {currentAnswer?.optionId === option.id && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="text-slate-700 leading-relaxed">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
            currentQuestionIndex === 0
              ? 'text-slate-400 cursor-not-allowed'
              : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
          }`}
        >
          <ArrowLeft01Icon size={20} />
          <span>Previous</span>
        </button>
        
        <button
          onClick={handleNext}
          disabled={!currentAnswer}
          className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
            !currentAnswer
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'btn btn-gradient-primary hover:shadow-lg'
          }`}
        >
          <span>{currentQuestionIndex === quizQuestions.length - 1 ? 'Get Results' : 'Next'}</span>
          <ArrowRight01Icon size={20} />
        </button>
      </div>
    </div>
  )
}

function QuizResults() {
  const { result, resetQuiz } = useQuiz()
  
  if (!result) return null
  
  const isPositive = result.recommendation === 'yes'
  const percentage = Math.round((result.totalScore / result.maxScore) * 100)
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-6">
        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${
          isPositive ? 'bg-green-100' : 'bg-red-100'
        }`}>
          {isPositive ? (
            <CheckmarkCircle02Icon size={48} className="text-green-600" />
          ) : (
            <Cancel01Icon size={48} className="text-red-600" />
          )}
        </div>
        
        <div className="space-y-2">
          <h2 className={`text-4xl font-bold ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {isPositive ? 'Take This Project!' : 'Pass on This One'}
          </h2>
          <p className="text-xl text-slate-600">
            Based on your assessment, you scored {percentage}% compatibility
          </p>
        </div>
      </div>
      
      <div className="gradient-bg-card rounded-3xl p-12 border-2 border-border space-y-8">
        <h3 className="text-2xl font-semibold text-slate-800 text-center">
          Analysis & Reasoning
        </h3>
        
        <div className="space-y-4">
          {result.reasoning.map((reason, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Target01Icon size={20} className="text-purple-600 mt-1 flex-shrink-0" />
              <p className="text-slate-700 leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
        
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-slate-800 text-center">
            Category Breakdown
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(result.categoryScores).map(([category, { score, maxScore }]) => {
              const categoryPercentage = Math.round((score / maxScore) * 100)
              return (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700 capitalize">
                      {category}
                    </span>
                    <span className="text-sm text-slate-600">
                      {score}/{maxScore}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        categoryPercentage >= 75 ? 'bg-green-500' :
                        categoryPercentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${categoryPercentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <button
          onClick={resetQuiz}
          className="btn btn-gradient-secondary px-8 py-3 rounded-xl"
        >
          Take Quiz Again
        </button>
        <Link href="/" className="btn btn-gradient-primary px-8 py-3 rounded-xl">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default function QuizPage() {
  const { isCompleted } = useQuiz()
  
  return (
    <main className="min-h-screen gradient-bg-main py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center space-y-4 mb-12">
          <h1 
            className="text-6xl font-light gradient-text tracking-wider"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Project Assessment
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Answer these questions about your project opportunity to get a personalized recommendation
          </p>
        </div>
        
        {isCompleted ? <QuizResults /> : <QuizQuestion />}
      </div>
    </main>
  )
} 