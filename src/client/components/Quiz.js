import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import RadioButton from "./elements/RadioButton";
import { ScButton } from "./elements/Button";

import Summary from "./Summary";
import Multiple from "./Multiple";
import BooleanQuestion from "./BooleanQuestion";
import TextQuestion from "./TextQuestion";

class Quiz extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  getQuestionType = () => {
    if (this.props.quizQuestions) {
      if (this.props.questionNumber === this.props.totalQuestions) {
        return <Summary />;
      }

      let currentQuestion = this.props.quizQuestions[this.props.questionNumber];
      let type = currentQuestion.type;

      if (type == "multiple") {
        return <Multiple currentQuestion={currentQuestion} />;
      } else if (type == "boolean") {
        return (
          <BooleanQuestion
            currentQuestion={currentQuestion}
            correct={this.props.correct}
            wrong={this.props.wrong}
            questionsAnswered={this.props.questionsAnswered}
          />
        );
      } else if (type == "text") {
        return (
          <TextQuestion
            currentQuestion={currentQuestion}
            correct={this.props.correct}
            wrong={this.props.wrong}
            questionsAnswered={this.props.questionsAnswered}
          />
        );
      }
    } else {
      return <div>Loading...</div>;
    }
  };

  render() {
    return <div>{this.getQuestionType()}</div>;
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

export default connect(mapStateToProps, actions)(Quiz);
