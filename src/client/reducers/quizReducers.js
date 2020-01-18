import { FETCH_QUESTIONS } from "../actions/constants";

export const quiz = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};
