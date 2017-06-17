import React, { Component } from 'react';

class PaymentHistory extends Component {
  constructor(props){
  super(props);
  this.state = {
  	accounts_ph: []
  }
  this.componentWillMount = this.componentWillMount.bind(this);
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
	  	// If user made a payment (true), render green color.
	  	if(this.props.state.payment_history[i][n] === true) {
	  	single_account.push(<td className="green-background"></td>);
	  	}
	  	// Otherwise, render red color.
	  	else if(this.props.state.payment_history[i][n] === false) {
	  	single_account.push(<td className="red-background"></td>);
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

  tableCreditor(){
    return (this.props.state.creditor.map(function(creditor, c){
      return <tr><td key={c+1}>{creditor}</td></tr>
    }))
  }

  tableCreditLimit(){
    return (this.props.state.credit_limit.map(function(limit, l){
      return <tr><td key={l+1}>{limit}</td></tr>
    }))
  }

  tableCreditUse(){
    return (this.props.state.credit_use.map(function(use, u){
      return <tr><td key={u+1}>{use}</td></tr>
    }))
  }

  tableOfPayments(){
    return (this.state.accounts_ph.map(function(months, m){
      return <tr><td key={m+1}>{months}</td></tr>
    }))
  }

  render() {
    return (
      <div id="payment-history" className="flex-1">
      <div className="center">
        <h4 className="purple">Payment History</h4>
      </div>
        <table className="dark factor-info">
     	<tbody>
	      <tr>
	      	<th className="t-title month">Creditor</th>
	      	<th className="t-title month">Credit Limit</th>
	      	<th className="t-title month">Credit Use</th>
          <th className="t-title month">Payment History<br/>J F M A M J J A S O N D</th>
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