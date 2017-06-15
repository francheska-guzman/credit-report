import React, { Component } from 'react';

class CreditCardUse extends Component {
constructor(props){
  super(props);
  this.calculateUseRatio = this.calculateUseRatio.bind(this);
  }

  calculateUseRatio() {
    var use = 0;
    var limit = 0;
    var counter = 0;

    for(var i = 0; i < this.props.state.account_type.length; i += 1) {
    // If the account type is a credit card, and is currently open:
      if (this.props.state.account_type[i] === "Credit Card" && 
        this.props.state.current_status[i] === "Open") {
          use += this.props.state.credit_use[i];
          limit += this.props.state.credit_limit[i];
          counter += 1;
      }
    }

    var ratio = (use/limit).toFixed(2);

    var creditcard = ((counter <= 1) ? "credit card" : "credit cards");

  	if(ratio < .09) {
  	  return (
        <div>
  	      <span className="ratio green">{ratio}%</span><br/>
          <span className="factor-info">
          You have {counter} open {creditcard}.<br/>
          Your total credit use is: {use}<br/>
          Your total credit limit is: {limit}</span>
        </div>
  	  )
  	}
  	else if(ratio < .29) {
  	  return (
        <div>
  	  	  <span className="ratio green">{ratio}%</span><br/>
          <span className="factor-info">
          You have {counter} open {creditcard}.<br/>
          Your total credit use is: {use}<br/>
          Your total credit limit is: {limit}</span>
        </div>
  	  )
  	}
  	else if(ratio < .49) {
  	  return (
        <div>
  	  	  <span className="ratio yellow">{ratio}%</span><br/>
          <span className="factor-info">
          You have {counter} open {creditcard}.<br/>
          Your total credit use is: {use}<br/>
          Your total credit limit is: {limit}</span>
        </div>
  	  )
  	}
  	else if(ratio < .74) {
  	  return (
        <div>
  	  	  <span className="ratio red">{ratio}%</span><br/>
          <span className="factor-info">
          You have {counter} open {creditcard}.<br/>
          Your total credit use is: {use}<br/>
          Your total credit limit is: {limit}</span>
        </div>
  	  )
  	}
  	else if(ratio < 1.00) {
  	  return (
        <div>
  	  	  <span className="ratio red">{ratio}%</span><br/>
          <span className="factor-info">
          You have {counter} open {creditcard}.<br/>
          Your total credit use is: {use}<br/>
          Your total credit limit is: {limit}</span>
        </div>
  	  )
  	}
    else {
      return (
        <div>You have 0 open credit card.</div>
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