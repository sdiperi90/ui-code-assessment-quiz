import { FETCH_QUESTIONS, GET_QUESTIONS, NEXT_QUESTION } from "./constants";

export const fetchQuestions = () => async dispatch => {
  const response = await fetch("http://localhost:4000/api/questions");
  const results = await response.json();
  dispatch({ type: FETCH_QUESTIONS, payload: results.results });
  dispatch({ type: GET_QUESTIONS });
};

export const nextQuestion = questionResults => async dispatch => {
  dispatch({ type: NEXT_QUESTION, payload: questionResults });
};
