import React, { Component } from "react";
import RadioButton from "./elements/RadioButton";
import { ScP } from "./elements/Text";
import { ScButton } from "./elements/Button";
import { shuffleArray } from "../util";
import { connect } from "react-redux";
import * as actions from "../actions";
class Multiple extends Component {
  state = {
    answer: "",
    shuffledAnswers: []
  };

  componentDidMount() {
    let {
      question,
      correct_answer,
      incorrect_answers
    } = this.props.currentQuestion;
    let shuffledAnswers = shuffleArray([...incorrect_answers, correct_answer]);

    this.setState({
      shuffledAnswers
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    let questionsUnanswered = this.props.questionsUnanswered;
    let correct = this.props.correct;
    let wrong = this.props.wrong;
    let answer = this.state.answer;
    let { correct_answer, incorrect_answers } = this.props.currentQuestion;
    if (answer.length == 0) {
      questionsUnanswered += 1;
    } else if (answer === correct_answer) {
      correct += 1;
    } else {
      wrong += 1;
    }

    this.props.nextQuestion({ correct, wrong, questionsUnanswered });
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
          {this.state.shuffledAnswers.map((item, index) => {
            return (
              <RadioButton
                onChange={this.handleOnChange}
                id={"option" + index}
                key={index}
                name={"option"}
                value={item}
              />
            );
          })}

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
    questionsUnanswered: state.quiz.questionsUnanswered
  };
};

export default connect(mapStateToProps, actions)(Multiple);
