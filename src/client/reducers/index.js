import { combineReducers } from "redux";
import { quiz } from "./quizReducers";

const rootReducer = combineReducers({
  quiz
});

export default rootReducer;
