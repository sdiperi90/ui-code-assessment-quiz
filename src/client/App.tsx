import * as React from "react";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header />
      <h1>Lucid</h1>
      <h2>Welcome to UI Team code assessment!</h2>

      <Quiz />
      <Footer />
    </div>
  );
};
