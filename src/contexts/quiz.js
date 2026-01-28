import { createContext, useReducer } from 'react';
import questions from '../data.js'

const initialState = {
  currentQuestionIndex: 0,
  questions,
  showResults: false,
}

const reducer = (state, action) => {
  if (action.type === 'NEXT_QUESTION') {
    const showResults = state.currentQuestionIndex === state.questions.length - 1;
    const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
    return { ...state, currentQuestionIndex, showResults };
  } else if (action.type === 'RESTART') {
    const showResults = false;
    const currentQuestionIndex = 0;
    return { ...state, currentQuestionIndex, showResults };
  } else if (action.type === 'SELECT_ANSWER') {
    const showResults = false;
    const currentQuestionIndex = state.currentQuestionIndex;
    const selectedLetter = action.selectedLetter;
    return { ...state, currentQuestionIndex, showResults, selectedLetter}
  }

  return state;
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}