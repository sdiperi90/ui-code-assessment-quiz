import {
  FETCH_QUESTIONS,
  GET_QUESTIONS,
  NEXT_QUESTION
} from "../actions/constants";
import { getRandomQuestions } from "../util";

export const quiz = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    case GET_QUESTIONS:
      let randomQuestions = getRandomQuestions(state.questions);
      return {
        ...state,
        quizQuestions: randomQuestions,
        questionNumber: 0,
        correct: 0,
        wrong: 0,
        questionsAnswered: 0,
        totalQuestions: randomQuestions.length
      };
    case NEXT_QUESTION:
      return {
        ...state,
        ...action.payload,
        questionNumber: (state.questionNumber += 1)
      };
    default:
      return state;
  }
};
