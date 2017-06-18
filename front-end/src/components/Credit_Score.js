import React, { Component } from 'react';

class CreditScore extends Component {
  constructor(props){
  	super(props);
  	this.graphicAverage = this.graphicAverage.bind(this);
  }

  graphicAverage() {

  }

  render() {
    return (
      <div>
        <h2 className="center">Credit Score</h2>
        {this.graphicAverage()}
      </div>
    );
  }
}

export default CreditScore;