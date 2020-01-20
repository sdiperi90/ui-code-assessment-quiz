import * as React from "react";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ScCard } from "./components/Card";
import { ScAppContainer } from "./components/Wrappers";

export const App = () => {
  return (
    //   <div
    //     style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    //   >
    <ScAppContainer>
      <Header />
      {/* <h1>Lucid</h1>
      <h2>Welcome to UI Team code assessment!</h2> */}
      <ScCard>
        <Quiz />
      </ScCard>

      <Footer />
    </ScAppContainer>
    // </div>
  );
};
