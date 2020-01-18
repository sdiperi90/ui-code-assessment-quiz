import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Quiz extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div>
        <h1>Quiz</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actions)(Quiz);
