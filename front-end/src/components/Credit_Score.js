import React, { Component } from 'react';

class CreditScore extends Component {
  constructor(props){
  	super(props);
    this.state = {
      user_score: null,
      user_state: null,
      state_score: null
    }
    this.userScore = this.userScore.bind(this);
  	this.graphicAverage = this.graphicAverage.bind(this);
  }

  componentWillMount() {
    if(this.props.state.user === true) {
      this.setState({
        user_score: this.props.state.user_credit_score,
        user_state: this.props.state.state,
        state_score: this.props.state.state_average_score
      })
    }
  }

  userScore() {
    if(this.state.user_score !== null) {
      return (
        <div>
          <h2 className="big">{this.state.user_score}</h2>
          <h2 className="small">The average credit score in {this.state.user_state} is {this.state.state_score}.</h2>
        </div>
    )}
  }

  graphicAverage() {

  }

  render() {
    return (
      <div>
        <h2 className="center">Credit Score</h2>
        {this.userScore()}
        {this.graphicAverage()}
      </div>
    );
  }
}

export default CreditScore;