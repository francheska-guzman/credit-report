import React, { Component } from 'react';

// console.log("Payment History is working.");

class PaymentHistory extends Component {
  constructor(props){
  super(props);
  this.state = {
  	accounts_ph: [],
    paid: 0,
    paid_unpaid_nodata: 0
  }
  this.percentage = this.percentage.bind(this);
  this.tableCreditor = this.tableCreditor.bind(this);
  this.tableCreditLimit = this.tableCreditLimit.bind(this);
  this.tableCreditUse = this.tableCreditUse.bind(this);
  this.tableOfPayments = this.tableOfPayments.bind(this);
  this.index = this.index.bind(this);
  }

  // Looping though payments to add color.
  componentWillMount() {
  // Local variable.
  let accounts = [];
  let paid = 0;
  let paid_unpaid_nodata = 0;

  	// Looping through each account.
	for (var i = 0; i < this.props.state.payment_history.length; i += 1) {
    // Everytime the second for loop ends, single_account starts in an empty array,
    // to be used in the nex account.
	let single_account = [];
	  // Looping through each month of each account.
	  for(var n = 0; n < this.props.state.payment_history[i].length; n += 1) {
	  //console.log("Account: " + i + ", Payments for the Month: " + n + ": " +this.props.state.payment_history[i][n]);
	  	// If user paid at least the minimum payment due (true), render green color.
	  	if(this.props.state.payment_history[i][n] === true) {
	  	single_account.push(<td key={n+1} className="green-background"></td>);
      paid += 1;
	  	}
	  	// If user don't paid the bill in a particular month, render red color.
	  	else if(this.props.state.payment_history[i][n] === false) {
	  	single_account.push(<td key={n+1} className="red-background">✕</td>);
		  }
      // If no data, render grey.
      else {
      single_account.push(<td key={n+1} className="grey-background"></td>);
      }
      paid_unpaid_nodata += 1;
	  }
	  // When the 12 months finish, then push to this other array.
	  accounts.push(single_account)
    }
    this.setState({
      accounts_ph: accounts,
      paid: paid,
      paid_unpaid_nodata: paid_unpaid_nodata
    }, function() {
        this.tableOfPayments();
    });
  }

  // Render creditor information.
  tableCreditor(){
    return (this.props.state.creditor.map(function(creditor, c){
      return <tr key={c+1}>{creditor}</tr>
    }))
  }

  // Render credit limit information.
  tableCreditLimit(){
    return (this.props.state.credit_limit.map(function(limit, l){
      return <tr key={l+1}>{limit}</tr>
    }))
  }

  // Render credit use information.
  tableCreditUse(){
    return (this.props.state.credit_use.map(function(use, u){
      return <tr key={u+1}>{use}</tr>
    }))
  }

  // Render the table of payments.
  tableOfPayments(){
    return (this.state.accounts_ph.map(function(months, m){
      return <tr key={m+1}>{months}</tr>
    }))
  }

  percentage() {
    var result = (this.state.paid/this.state.paid_unpaid_nodata).toFixed(2) * 100;

    return (
      <h2 className="flex-1">You paid the <span className="font70">{result}%</span> of your total payments.</h2>
    )
  }

  index() {
    return (
      <div>
        <span className="green-background-i"> </span><span className="factor-description">You paid at least the minimum payment due.</span><br/>
        <span className="red-background-i"> </span><span className="factor-description">You missed a payment.</span><br/>
        <span className="grey-background-i"> </span><span className="factor-description">No data. A reason could be that you recently open that account.</span><br/>
      </div>
    )
  }

  render() {
    return (
      <div id="payment-history" className="flex-1">
      <div className="center">
        <h4 className="purple">Payment History</h4>
        {this.percentage()}
        <h3 className="factor-info">Even one late payment could hurt your credit health, so stay mindful of your due dates. 
        A 100% on-time payment history is a good sign for lenders that you can reliably make payments.</h3>
      </div>
      {this.index()}
        <table className="dark font18">
       	<tbody>
  	      <tr>
  	      	<th className="month t-title factor-info">Creditor</th>
  	      	<th className="month t-title factor-info">Credit Limit</th>
  	      	<th className="month t-title factor-info">Credit Use</th>
            <th className="month t-title left">J | F | M | A | M | J | J | A | S | O | N | D</th>
  	      </tr>
          <tr>
            <td>{this.tableCreditor()}</td>
            <td>{this.tableCreditLimit()}</td>
            <td>{this.tableCreditUse()}</td>
            <td className="center">{this.tableOfPayments()}</td>
          </tr>
  	    </tbody>
        </table>
      </div>
    );
  }
}

export default PaymentHistory;