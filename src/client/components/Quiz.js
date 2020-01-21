import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import RadioButton from "./elements/RadioButton";
import { ScButton } from "./elements/Button";

import Summary from "./Summary";
import Multiple from "./Multiple";
import Boolean from "./Boolean";
import TextQuestion from "./TextQuestion";

class Quiz extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  getQuestionType = () => {
    let type = this.props.currentQuestion.type;
    let currentQuestion = this.props.currentQuestion;

    if (type == "multiple") {
      return <Multiple currentQuestion={currentQuestion} />;
    } else if (type == "boolean") {
      return (
        <Boolean
          currentQuestion={currentQuestion}
          correct={this.props.correct}
          wrong={this.props.wrong}
          questionsUnanswered={this.props.questionsUnanswered}
        />
      );
    } else if (type == "text") {
      return (
        <TextQuestion
          currentQuestion={currentQuestion}
          correct={this.props.correct}
          wrong={this.props.wrong}
          questionsUnanswered={this.props.questionsUnanswered}
        />
      );
    }
  };

  render() {
    console.log("PROPS", this.props.currentQuestion);
    let { currentQuestion } = this.props;
    return (
      <div>
        {/* <Summary /> */}
        {this.getQuestionType()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    currentQuestion: state.quiz.quizQuestions
      ? state.quiz.quizQuestions[state.quiz.currentQuestion]
      : {},
    correct: state.quiz.correct,
    wrong: state.quiz.wrong,
    questionsUnanswered: state.quiz.questionsUnanswered,
    totalQuestions: state.quiz.totalQuestions
  };
};

export default connect(mapStateToProps, actions)(Quiz);
