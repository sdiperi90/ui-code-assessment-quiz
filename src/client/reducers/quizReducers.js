import { FETCH_QUESTIONS } from "../actions/constants";

export const quiz = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return state;
    default:
      return state;
  }
};
