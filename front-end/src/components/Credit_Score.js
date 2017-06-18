import React, { Component } from 'react';

class CreditScore extends Component {
  constructor(props){
  	super(props);
    this.state = {
      user_score: null
    }
    this.getData = this.getData.bind(this);
    this.userScore = this.userScore.bind(this);
  	this.graphicAverage = this.graphicAverage.bind(this);
  }

  getData() {
    if(this.props.state.user === true) {
      this.setState({
        user_score: this.props.state.user_credit_score,
      })
    }
  }

  userScore() {
    return (
      <h2 className="big">{this.state.user_score}</h2>
    )
  }

  graphicAverage() {

  }

  render() {
    return (
      <div>
        <h2 className="center">Credit Score</h2>
        {this.getData()}
        {this.userScore()}
        {this.graphicAverage()}
      </div>
    );
  }
}

export default CreditScore;