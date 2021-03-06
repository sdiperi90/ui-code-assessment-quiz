import * as React from "react";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ScCard } from "./components/elements/Card";
import { ScAppContainer } from "./components/Wrappers";

export const App = () => {
  return (
    <ScAppContainer>
      <Header />
      {/* <h1>Lucid</h1>
      <h2>Welcome to UI Team code assessment!</h2> */}
      <ScCard>
        <Quiz />
      </ScCard>

      <Footer />
    </ScAppContainer>
  );
};
