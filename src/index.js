import React from "react";
import ReactDOM from "react-dom";
import { App } from "./client/App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider, ReactReduxContext } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./client/reducers";
import "./styles.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider context={ReactReduxContext} store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
