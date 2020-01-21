import React, { Component } from "react";
import { ScP } from "./elements/Text";
import { ScButton } from "./elements/Button";
import TextInput from "./elements/Input";
import { connect } from "react-redux";
import * as actions from "../actions";

class TextQuestion extends Component {
  state = {
    answer: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    let questionsAnswered = this.props.questionsAnswered;
    let correct = this.props.correct;
    let wrong = this.props.wrong;
    let answer = this.state.answer;
    let { correct_answer, incorrect_answers } = this.props.currentQuestion;
    if (answer.length == 0) {
    } else if (answer.toLowerCase() === correct_answer.toLowerCase()) {
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
    let { question } = this.props.currentQuestion;

    return (
      <div>
        <ScP fontSize="20px" dangerouslySetInnerHTML={{ __html: question }} />
        <form onSubmit={this.handleSubmit}>
          <TextInput onChange={this.handleOnChange} />

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

export default connect(mapStateToProps, actions)(TextQuestion);
