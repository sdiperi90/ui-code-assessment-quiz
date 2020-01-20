import { FETCH_QUESTIONS, GET_QUESTIONS } from "../actions/constants";
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
        correct: 0,
        wrong: 0,
        questionsAnswered: 0,
        totalQuestions: randomQuestions.length
      };
    default:
      return state;
  }
};
