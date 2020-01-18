import * as React from "react";
import Quiz from "./components/Quiz";

export const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Lucid</h1>
      <h2>Welcome to UI Team code assessment!</h2>
      <Quiz />
    </div>
  );
};
