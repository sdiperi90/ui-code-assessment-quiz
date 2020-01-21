import React, { Component } from "react";
import { ScP, ScStrong, ScH1 } from "./elements/Text";
import { ScButton } from "./elements/Button";
import { connect } from "react-redux";
import * as actions from "../actions";
class Summary extends Component {
  render() {
    let { correct, wrong, totalQuestions, questionsAnswered } = this.props;
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
          Final Score: <ScStrong>{correct / totalQuestions}</ScStrong>
        </ScP>
        <ScButton onClick={this.props.getQuestions}>Restart Quiz</ScButton>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizQuestions: state.quiz.quizQuestions,
    correct: state.quiz.correct,
    wrong: state.quiz.wrong,
    questionsAnswered: state.quiz.questionsAnswered,
    totalQuestions: state.quiz.totalQuestions,
    questionNumber: state.quiz.questionNumber
  };
};

export default connect(mapStateToProps, actions)(Summary);
