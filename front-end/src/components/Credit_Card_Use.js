import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs';
import UtilizationTable from './Utilization_Table';

class CreditCardUse extends Component {
constructor(props){
  super(props);
  this.state = {
    counter_use: 0
  }
  this.utilizationRatio = this.utilizationRatio.bind(this);
  this.openCreditCards = this.openCreditCards.bind(this);
  this.headerUse = this.headerUse.bind(this);
  }

  utilizationRatio() {
    var use = 0;
    var limit = 0;
    var counter = 0;

    for(var i = 0; i < this.props.state.account_type.length; i += 1) {
    // If the account type is a credit card, and is currently open:
      if (this.props.state.account_type[i] === "Credit Card" && this.props.state.current_status[i] === "Open") {
          use += this.props.state.credit_use[i];
          limit += this.props.state.credit_limit[i];
          counter += 1;
    }};

    this.setState({
      counter_use: counter
    });

    // If user have 0 or 1 credit card render singular, otherwise render in plural:
    var creditcard = ((counter <= 1) ? "credit card" : "credit cards");
    // To avoid fractions:
    var ratio = (use/limit).toFixed(2) * 100;
    // Calculate the available credit:
    var available = limit - use;

    // Data for the Doughnut chart:
    var data = [
            {color: "#C1091f", label: "Credit Use", value: use},
            {color: "#0E9E17", label: "Available Credit", value: available}
    ];

    // Using an if/else statement to display a color for a certain ratio range.
  	if(ratio <= 9) {
  	  return (
        <div className="flex">
          <div className="flex-1 center">
          <Doughnut data={data} options={{animateRotate: true}} width="250" height="250"/>
          </div>
          <div className="flex-1">
            <ul className="factor-info">
    	        <li className="ratio green">{ratio}%</li>
              <li>You have {counter} open {creditcard}.</li>
              <li>Your total credit limit is: {limit}</li>
              <li>Your total credit use is: {use}</li>
              <li>Your total available credit is: {available}</li>
            </ul>
          </div>
          <UtilizationTable />
        </div>
  	)}

  	else if(ratio <= 29) {
  	  return (
        <div className="flex">
          <div className="flex-1 center">
          <Doughnut data={data} options={{animateRotate: true}} width="250" height="250"/>
          </div>
          <div className="flex-1">
            <ul className="factor-info">
              <li className="ratio green">{ratio}%</li>
              <li>You have {counter} open {creditcard}.</li>
              <li>Your total credit limit is: {limit}</li>
              <li>Your total credit use is: {use}</li>
              <li>Your total available credit is: {available}</li>
            </ul>
          </div>
          <UtilizationTable />
        </div>
  	)}

  	else if(ratio <= 49) {
  	  return (
        <div className="flex">
          <div className="flex-1 center">
          <Doughnut data={data} options={{animateRotate: true}} width="250" height="250"/>
          </div>
          <div className="flex-1">
            <ul className="factor-info">
              <li className="ratio yellow">{ratio}%</li>
              <li>You have {counter} open {creditcard}.</li>
              <li>Your total credit limit is: {limit}</li>
              <li>Your total credit use is: {use}</li>
              <li>Your total available credit is: {available}</li>
            </ul>
          </div>
          <UtilizationTable />
        </div>
  	)}

  	else if(ratio <= 74) {
  	  return (
        <div className="flex">
          <div className="flex-1 center">
          <Doughnut data={data} options={{animateRotate: true}} width="250" height="250"/>
          </div>
          <div className="flex-1">
            <ul className="factor-info">
              <li className="ratio red">{ratio}%</li>
              <li>You have {counter} open {creditcard}.</li>
              <li>Your total credit limit is: {limit}</li>
              <li>Your total credit use is: {use}</li>
              <li>Your total available credit is: {available}</li>
            </ul>
          </div>
          <UtilizationTable />
        </div>
  	)}

  	else if(ratio <= 100) {
  	  return (
        <div className="flex">
          <div className="flex-1 center">
          <Doughnut data={data} options={{animateRotate: true}} width="250" height="250"/>
          </div>
          <div className="flex-1">
            <ul className="factor-info">
              <li className="ratio red">{ratio}%</li>
              <li>You have {counter} open {creditcard}.</li>
              <li>Your total credit limit is: {limit}</li>
              <li>Your total credit use is: {use}</li>
              <li>Your total available credit is: {available}</li>
            </ul>
          </div>
          <UtilizationTable />
        </div>
  	)}

    else {
      return (
        <div className="flex">You have 0 open credit card.</div>
    )}
  }

  openCreditCards() {
    var table = [];

    for(var i = 0; i < this.props.state.opened.length; i += 1) {
      if (this.props.state.account_type[i] === "Credit Card" && this.props.state.current_status[i] === "Open") { 
          table.push([
            <td>{this.props.state.opened[i]}</td>,
            <td>{this.props.state.creditor[i]}</td>,
            <td>{this.props.state.credit_limit[i]}</td>,
            <td>{this.props.state.credit_use[i]}</td>,
            <td>{this.props.state.current_status[i]}</td>
          ]);
        }
      }
      return (table.map(function(table, n){
        return (<tr key={n+1}>{table}</tr>)
     }));
  }

  headerUse() {
    for(var i = 0; i < this.props.state.collection.length; i += 1){
    if(this.state.counter_use > 0){
    return (
      <tr>
        <th className="t-title">Opened</th>
        <th className="t-title">Creditor</th>
        <th className="t-title">Credit Limit</th>
        <th className="t-title">Credit Use</th>
        <th className="t-title">Current Status</th>
      </tr>
    )}};
  }

  render() {
    return (
      <div id="credit-card-use" className="flex-1">
        <h4 className="center red">Credit Card Use</h4>
          <span className="factor-info">Your credit card utilization is the 
          percentage of your credit limits that you're using. It's calculated 
          by dividing your total credit balances by your total credit limits on open accounts.</span><br /><br />
          <span className="factor-info">A good rule of thumb is to keep your balances below 30% of your limit.</span><br /><br />
          <span className="graphic-description flex-5">{this.utilizationRatio()}</span>
            <table className="dark">
              <tbody>
              {this.headerUse()}
              {this.openCreditCards()}
              </tbody>
            </table>
      </div>
    );
  }
}

export default CreditCardUse;