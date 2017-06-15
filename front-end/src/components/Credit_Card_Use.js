import React, { Component } from 'react';

class CreditCardUse extends Component {
constructor(props){
  super(props);
  this.calculateUseRatio = this.calculateUseRatio.bind(this);
  }

  calculateUseRatio() {
  	// console.log(this.props.state.credit_use);
  	// console.log(this.props.state.credit_limit);
  	var use = parseInt(this.props.state.credit_use);
  	var limit = parseInt(this.props.state.credit_limit);
  	var ratio = (use/limit).toFixed(2);
  	if(ratio < .09) {
  	  return (
  	    <span className="ratio green">{ratio}%</span>
  	  )
  	}
  	else if(ratio < .29) {
  	  return (
  	  	<span className="ratio green">{ratio}%</span>
  	  )
  	}
  	else if(ratio < .49) {
  	  return (
  	  	<span className="ratio yellow">{ratio}%</span>
  	  )
  	}
  	else if(ratio < .74) {
  	  return (
  	  	<span className="ratio red">{ratio}%</span>
  	  )
  	}
  	else {
  	  return (
  	  	<span className="ratio red">{ratio}%</span>
  	  )
  	}
  }

  render() {
    return (
      <div id="credit-card-use" className="flex-1">
        <h4 className="center red">Credit Card Use</h4>
        <span>{this.calculateUseRatio()}</span>
      </div>
    );
  }
}

export default CreditCardUse;