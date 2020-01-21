import React, { Component } from "react";
import RadioButton from "./elements/RadioButton";
import { ScP } from "./elements/Text";
import { ScButton } from "./elements/Button";
import { shuffleArray } from "../util";
import { connect } from "react-redux";
import * as actions from "../actions";

class BooleanQuestion extends Component {
  state = {
    answer: ""
  };

  componentDidUpdate(prevProps) {
    if (prevProps.questionNumber !== this.props.questionNumber) {
      this.setState({
        answer: ""
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let questionsAnswered = this.props.questionsAnswered;
    let correct = this.props.correct;
    let wrong = this.props.wrong;
    let answer = this.state.answer;
    let { correct_answer } = this.props.currentQuestion;
    if (answer.length == 0) {
    } else if (answer === correct_answer) {
      correct += 1;
      questionsAnswered += 1;
    } else {
      wrong += 1;
      questionsAnswered += 1;
    }

    this.props.nextQuestion({ correct, wrong, questionsAnswered });
  };

  handleOnChange = e => {
    let answer = e.target.value;
    this.setState({
      answer
    });
  };

  render() {
    let {
      question,
      correct_answer,
      incorrect_answers
    } = this.props.currentQuestion;

    return (
      <div>
        <ScP fontSize="20px" dangerouslySetInnerHTML={{ __html: question }} />
        <form onSubmit={this.handleSubmit}>
          <RadioButton
            onChange={this.handleOnChange}
            id={"boolean-1"}
            name={"boolean"}
            value="True"
            checked={this.state.answer === "True"}
          />
          <RadioButton
            onChange={this.handleOnChange}
            id={"boolean-2"}
            name={"boolean"}
            value="False"
            checked={this.state.answer === "False"}
          />

          <ScButton type="submit">Next</ScButton>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    correct: state.quiz.correct,
    wrong: state.quiz.wrong,
    questionsAnswered: state.quiz.questionsAnswered
  };
};

export default connect(mapStateToProps, actions)(BooleanQuestion);
