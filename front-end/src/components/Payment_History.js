import React, { Component } from 'react';

class PaymentHistory extends Component {
  constructor(props){
  super(props);
  this.state = {
  	accounts_ph: []
  }
  this.tableCreditor = this.tableCreditor.bind(this);
  this.tableCreditLimit = this.tableCreditLimit.bind(this);
  this.tableCreditUse = this.tableCreditUse.bind(this);
  this.tableOfPayments = this.tableOfPayments.bind(this);
  }

  // Looping though payments to add color.
  componentWillMount() {
  // Local variable.
  let accounts = [];

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
	  	single_account.push(<td className="green-background"></td>);
	  	}
	  	// If user don't paid the bill in a particular month, render red color.
	  	else if(this.props.state.payment_history[i][n] === false) {
	  	single_account.push(<td className="red-background">✕</td>);
		  }
      // If no data, render grey.
      else {
      single_account.push(<td className="grey-background"></td>);
      }
	  }
	  // When the 12 months finish, then push to this other array.
	  accounts.push(single_account)
    }
    this.setState({
      accounts_ph: accounts
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

  render() {
    return (
      <div id="payment-history" className="flex-1">
      <div className="center">
        <h4 className="purple">Payment History</h4>
        <h3>Even one late payment could hurt your credit health, so stay mindful of your due dates. 
        A 100% on-time payment history is a good sign for lenders that you can reliably make payments.</h3>
      </div>
        <table className="dark history">
       	<tbody>
  	      <tr>
  	      	<th className="month t-title factor-info">Creditor</th>
  	      	<th className="month t-title factor-info">Credit Limit</th>
  	      	<th className="month t-title factor-info">Credit Use</th>
            <th className="month t-title factor-info">J F M A M J J A S O N D</th>
  	      </tr>
            <td>{this.tableCreditor()}</td>
            <td>{this.tableCreditLimit()}</td>
            <td>{this.tableCreditUse()}</td>
            <td className="center">{this.tableOfPayments()}</td>
  	    </tbody>
        </table>
      </div>
    );
  }
}

export default PaymentHistory;