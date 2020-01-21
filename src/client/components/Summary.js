import React, { Component } from "react";
import { ScP, ScStrong, ScH1 } from "./elements/Text";
import { ScButton } from "./elements/Button";
import { connect } from "react-redux";
import * as actions from "../actions";
class Summary extends Component {
  getPercentage() {
    let { correct, totalQuestions } = this.props;
    return Math.floor((correct / totalQuestions) * 100) + "%";
  }
  render() {
    let { correct, wrong, questionsAnswered } = this.props;
    return (
      <div>
        <ScH1>SUMMARY</ScH1>
        <ScP>
          Correct: <ScStrong>{correct}</ScStrong>
        </ScP>
        <ScP>
          Wrong: <ScStrong>{wrong}</ScStrong>
        </ScP>
        <ScP>
          Questions answered: <ScStrong>{questionsAnswered}</ScStrong>
        </ScP>
        <ScP>
          Final Score: <ScStrong>{this.getPercentage()}</ScStrong>
        </ScP>
        <ScButton onClick={this.props.getQuestions}>Restart Quiz</ScButton>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    correct: state.quiz.correct,
    wrong: state.quiz.wrong,
    questionsAnswered: state.quiz.questionsAnswered,
    totalQuestions: state.quiz.totalQuestions
  };
};

export default connect(mapStateToProps, actions)(Summary);
