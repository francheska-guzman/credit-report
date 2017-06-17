import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs';

class CreditCardUse extends Component {
constructor(props){
  super(props);
  this.renderUseRatio = this.renderUseRatio.bind(this);
  this.renderOpenCreditCards = this.renderOpenCreditCards.bind(this);
  }

  renderUseRatio() {
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

    var creditcard = ((counter <= 1) ? "credit card" : "credit cards");
    var ratio = (use/limit).toFixed(2) * 100;
    var available = limit - use;

    let data = [
            {color: "#C1091f", label: "Credit Use", value: use},
            {color: "#0E9E17", label: "Available Credit", value: available}
    ];

  	if(ratio <= 9) {
  	  return (
        <div className="flex">
          <div className="flex-1 center">
            <Doughnut data={data} options={{animateRotate: true}} width="250" height="250"/>
          </div>
          <div className="flex-1">
    	      <span className="ratio green">{ratio}%</span><br />
            <span className="factor-info">
            You have {counter} open {creditcard}.<br /><br />
            Your total credit limit is: {limit}<br />
            Your total credit use is: {use}<br />
            Your total available credit is: {available}<br />
            </span>
          </div>
          <div className="center factor-info">
          <table className="flex-1 dark">
            <tbody>
              <tr>
                <td className="t-title">Utilization Ratio</td>
                <td className="t-title">Result</td>
              </tr>
              <tr>
                <td>0-9%</td>
                <td className="green">Excellent</td>
              </tr>
              <tr>
                <td>10-29%</td>
                <td className="green">Good</td>
              </tr>
              <tr>
                <td>30-49%</td>
                <td className="yellow">Fair</td>
              </tr>
              <tr>
                <td>50-74%</td>
                <td className="red">Poor</td>
              </tr>
              <tr>
                <td>75-100%</td>
                <td className="red">Very Poor</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
  	)}

  	else if(ratio <= 29) {
  	  return (
        <div className="flex">
          <div className="flex-1 center">
            <Doughnut data={data} options={{animateRotate: true}} width="250" height="250"/>
          </div>
          <div className="flex-1">
            <span className="ratio green">{ratio}%</span><br />
            <span className="factor-info">
            You have {counter} open {creditcard}.<br /><br />
            Your total credit limit is: {limit}<br />
            Your total credit use is: {use}<br />
            Your total available credit is: {available}<br />
            </span>
          </div>
          <div className="center factor-info">
          <table className="flex-1 dark">
            <tbody>
              <tr>
                <td className="t-title">Utilization Ratio</td>
                <td className="t-title">Result</td>
              </tr>
              <tr>
                <td>0-9%</td>
                <td className="green">Excellent</td>
              </tr>
              <tr>
                <td>10-29%</td>
                <td className="green">Good</td>
              </tr>
              <tr>
                <td>30-49%</td>
                <td className="yellow">Fair</td>
              </tr>
              <tr>
                <td>50-74%</td>
                <td className="red">Poor</td>
              </tr>
              <tr>
                <td>75-100%</td>
                <td className="red">Very Poor</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
  	)}

  	else if(ratio <= 49) {
  	  return (
        <div className="flex">
          <div className="flex-1 center">
            <Doughnut data={data} options={{animateRotate: true}} width="250" height="250"/>
          </div>
          <div className="flex-1">
            <span className="ratio yellow">{ratio}%</span><br />
            <span className="factor-info">
            You have {counter} open {creditcard}.<br /><br />
            Your total credit limit is: {limit}<br />
            Your total credit use is: {use}<br />
            Your total available credit is: {available}<br />
            </span>
          </div>
          <div className="center factor-info">
          <table className="flex-1 dark">
            <tbody>
              <tr>
                <td className="t-title">Utilization Ratio</td>
                <td className="t-title">Result</td>
              </tr>
              <tr>
                <td>0-9%</td>
                <td className="green">Excellent</td>
              </tr>
              <tr>
                <td>10-29%</td>
                <td className="green">Good</td>
              </tr>
              <tr>
                <td>30-49%</td>
                <td className="yellow">Fair</td>
              </tr>
              <tr>
                <td>50-74%</td>
                <td className="red">Poor</td>
              </tr>
              <tr>
                <td>75-100%</td>
                <td className="red">Very Poor</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
  	)}

  	else if(ratio <= 74) {
  	  return (
        <div className="flex">
          <div className="flex-1 center">
            <Doughnut data={data} options={{animateRotate: true}} width="250" height="250"/>
          </div>
          <div className="flex-1">
            <span className="ratio red">{ratio}%</span><br />
            <span className="factor-info">
            You have {counter} open {creditcard}.<br /><br />
            Your total credit limit is: {limit}<br />
            Your total credit use is: {use}<br />
            Your total available credit is: {available}<br />
            </span>
          </div>
          <div className="center factor-info">
          <table className="flex-1 dark">
            <tbody>
              <tr>
                <td className="t-title">Utilization Ratio</td>
                <td className="t-title">Result</td>
              </tr>
              <tr>
                <td>0-9%</td>
                <td className="green">Excellent</td>
              </tr>
              <tr>
                <td>10-29%</td>
                <td className="green">Good</td>
              </tr>
              <tr>
                <td>30-49%</td>
                <td className="yellow">Fair</td>
              </tr>
              <tr>
                <td>50-74%</td>
                <td className="red">Poor</td>
              </tr>
              <tr>
                <td>75-100%</td>
                <td className="red">Very Poor</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
  	)}

  	else if(ratio <= 100) {
  	  return (
        <div className="flex">
          <div className="flex-1 center">
            <Doughnut data={data} options={{animateRotate: true}} width="250" height="250"/>
          </div>
          <div className="flex-1">
            <span className="ratio red">{ratio}%</span><br />
            <span className="factor-info">
            You have {counter} open {creditcard}.<br /><br />
            Your total credit limit is: {limit}<br />
            Your total credit use is: {use}<br />
            Your total available credit is: {available}<br />
            </span>
          </div>
          <div className="center factor-info">
          <table className="flex-1 dark">
            <tbody>
              <tr>
                <td className="t-title">Utilization Ratio</td>
                <td className="t-title">Result</td>
              </tr>
              <tr>
                <td>0-9%</td>
                <td className="green">Excellent</td>
              </tr>
              <tr>
                <td>10-29%</td>
                <td className="green">Good</td>
              </tr>
              <tr>
                <td>30-49%</td>
                <td className="yellow">Fair</td>
              </tr>
              <tr>
                <td>50-74%</td>
                <td className="red">Poor</td>
              </tr>
              <tr>
                <td>75-100%</td>
                <td className="red">Very Poor</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
  	)}

    else {
      return (
        <div>You have 0 open credit card.</div>
    )}
  }

  renderOpenCreditCards() {
    var table = [];

    for(var i = 0; i < this.props.state.opened.length; i += 1) {
      if (this.props.state.account_type[i] === "Credit Card" && 
          this.props.state.current_status[i] === "Open") { 
          table.push([<td>{this.props.state.opened[i]}</td>,<td>{this.props.state.creditor[i]}</td>,
            <td>{this.props.state.credit_limit[i]}</td>,<td>{this.props.state.credit_use[i]}</td>,
            <td>{this.props.state.current_status[i]}</td>]);
        }
      }
      return (table.map(function(table, i){
        return <tr key={i+1}>{table}</tr>
     }))
  }

  render() {
    return (
      <div id="credit-card-use" className="flex-1">
        <h4 className="center red">Credit Card Use</h4>
          <span className="factor-info">Your credit card utilization is the 
          percentage of your credit limits that you're using. It's calculated 
          by dividing your total credit balances by your total credit limits on open accounts.</span><br /><br />
          <span className="factor-info">A good rule of thumb is to keep your balances below 30% of your limit.</span><br /><br />
          <span className="graphic-description flex-5">{this.renderUseRatio()}</span>
            <table className="dark">
              <tbody>
              <tr>
                <th className="t-title">Opened</th>
                <th className="t-title">Creditor</th>
                <th className="t-title">Credit Limit</th>
                <th className="t-title">Credit Use</th>
                <th className="t-title">Current Status</th>
              </tr>
              {this.renderOpenCreditCards()}
              </tbody>
            </table>
      </div>
    );
  }
}

export default CreditCardUse;