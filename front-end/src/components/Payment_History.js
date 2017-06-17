import React, { Component } from 'react';

class PaymentHistory extends Component {
  constructor(props){
  super(props);
  this.state = {
  	accounts_ph: []
  }
  this.componentWillMount = this.componentWillMount.bind(this);
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
	  	if(this.props.state.payment_history[i][n] === "true") {
	  	single_account.push('<span className="green-background"></span>')
	  	}
	  	// Otherwise, render red color.
	  	else {
	  	single_account.push('<span className="red-background"><span>')
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

  tableOfPayments(){
  	console.log(this.state.accounts_ph)
  }

  render() {
    return (
      <div id="payment-history" className="flex-1">
      <div className="center">
        <h4 className="purple">Payment History</h4>
      </div>
        <table className="dark">
     	<tbody>
	      <tr>
	      	<th>Creditor</th>
	      	<th>Credit Limit</th>
	      	<th>Credit Use</th>
	      	<th>Current Status</th>
	      	<th>Payment History</th>
	      </tr>
		  {this.tableOfPayments()}
	    </tbody>
        </table>
      </div>
    );
  }
}

export default PaymentHistory;