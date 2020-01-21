import React, { Component } from "react";
import { ScP, ScStrong, ScH1 } from "./elements/Text";
import { ScButton } from "./elements/Button";

export default class Summary extends Component {
  render() {
    return (
      <div>
        <ScH1>SUMMARY</ScH1>
        <ScP>
          Correct: <ScStrong>test</ScStrong>
        </ScP>
        <ScP>
          Wrong: <ScStrong>test2</ScStrong>
        </ScP>
        <ScP>
          Questions answered: <ScStrong>test3</ScStrong>
        </ScP>
        <ScP>
          Final Score: <ScStrong>70%</ScStrong>
        </ScP>
        <ScButton>Restart Quiz</ScButton>
      </div>
    );
  }
}
