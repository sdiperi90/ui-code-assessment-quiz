import { FETCH_QUESTIONS } from "./constants";

export const fetchQuestions = () => dispatch => {
  console.log(dispatch);
  dispatch({ type: FETCH_QUESTIONS });
  dispatch({ type: FETCH_QUESTIONS });
};
