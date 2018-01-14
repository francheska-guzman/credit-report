import React, { Component } from 'react';
import AccountsTable from './Accounts_Table';

// console.log("Total Accounts is working.");

class TotalAccounts extends Component {
  constructor(props){
    super(props);
    this.state = {
      open_accounts: [],
      closed_accounts: [],
      counter: 0,
      counter_open: 0,
      counter_closed: 0
    }
    this.totalAccounts = this.totalAccounts.bind(this);
    this.openAccounts = this.openAccounts.bind(this);
    this.closedAccounts = this.closedAccounts.bind(this);
    this.renderOpenAccounts = this.renderOpenAccounts.bind(this);
    this.renderClosedAccounts = this.renderClosedAccounts.bind(this);
}

  componentWillMount() {
    // Local variables.
  	var open_accounts = [];
  	var closed_accounts = [];
    var counter_open = 0;
    var counter_closed = 0;
    var counter = 0;

    // Looping through all accounts and separate which accounts are open
    // and which accounts are closed.
  	for(var i = 0; i < this.props.state.creditor.length; i += 1) {
  	  if(this.props.state.current_status[i] === "Open") {
        // Inserting information from a single open account to open_accounts array.
  	  	open_accounts.push([
  	  	<td key={i+1}>{this.props.state.creditor[i]}</td>, 
        <td key={i+2}>{this.props.state.account_type[i]}</td>,
  	  	<td key={i+3}>{this.props.state.credit_limit[i]}</td>, 
        <td key={i+4}>{this.props.state.credit_use[i]}</td>,
  	  	<td key={i+5}>{this.props.state.opened[i]}</td>]);
        counter_open += 1;
  	  }
  	  else if(this.props.state.current_status[i] === "Closed") {
        // Inserting information from a single closed account to closed_accounts array.
		    closed_accounts.push([
  	  	<td key={i+1}>{this.props.state.creditor[i]}</td>, 
        <td key={i+2}>{this.props.state.account_type[i]}</td>,
  	  	<td key={i+3}>{this.props.state.credit_limit[i]}</td>, 
        <td key={i+4}>{this.props.state.credit_use[i]}</td>,
  	  	<td key={i+5}>{this.props.state.opened[i]}</td>]);
        counter_closed += 1;
  	  }
      counter += 1;
  	}

    // Saving the information to be used in other methods.
  	this.setState({
  	  open_accounts: open_accounts,
  	  closed_accounts: closed_accounts,
      counter: counter,
      counter_open: counter_open,
      counter_closed: counter_closed
  	}, function() {
      this.openAccounts();
      this.closedAccounts();
    });
  }

  totalAccounts() {
    // If user don't have too many accounts (in this case less or
    // equal 10), will render in red.
    if(this.state.counter <= 10) {
      return (<span className="red">{this.state.counter}</span>);
    }
    // Otherwise, number of total accounts will render in green.
    else {
      return (<span className="green">{this.state.counter}</span>);
    }
  }

  // Looping through open accounts array to render in the open accounts table.
  openAccounts() {
    return (this.state.open_accounts.map(function(open, o){
        return (<tr key={o+1}>{open}</tr>) 
    }));
  }

  // Looping through closed accounts array to render in the closed accounts table.
  closedAccounts() {
    return (this.state.closed_accounts.map(function(closed, c){
        return (<tr key={c+1}>{closed}</tr>) 
    }));
  }

  // Render rows for each open account.
  renderOpenAccounts() {
    // If user have open accounts, render table header:
  	if(this.state.counter_open > 0) {
  	  return (
  	  	<div className="flex-1">
  	  	<h2>Your open accounts: {this.state.counter_open}</h2>
	  	  <table className="dark">
		  <tbody>
		    <tr>
			  <th className="t-title factor-info">Creditor</th>
			  <th className="t-title factor-info">Account Type</th>
			  <th className="t-title factor-info">Credit Limit</th>
			  <th className="t-title factor-info">Credit Use</th>
			  <th className="t-title factor-info">Opened</th>
			</tr>
			{this.openAccounts()}
		  </tbody>
		  </table>
		</div>
  	  )
  	}
    // Otherwise:
    else {
  	  return (<div className="flex-1"><h2>You have {this.state.counter_open} open accounts.</h2></div>)
  	}
  }

  // Render rows for each closed account.
  renderClosedAccounts() {
    // If user have closed accounts, render table header:
  	if(this.state.counter_closed > 0) {
  	  return (
  	  	<div className="flex-1">
  	  	<h2>Your closed accounts: {this.state.counter_closed}</h2>
	  	  <table className="dark">
		  <tbody>
		    <tr>
			  <th className="t-title factor-info">Creditor</th>
			  <th className="t-title factor-info">Account Type</th>
			  <th className="t-title factor-info">Credit Limit</th>
			  <th className="t-title factor-info">Credit Use</th>
			  <th className="t-title factor-info">Opened</th>
			</tr>
			{this.closedAccounts()}
		  </tbody>
		  </table>
		</div>
  	  )
  	}
    // Otherwise:
  	else {
  	  return (<div className="flex-1"><h2>You have {this.state.counter_closed} closed accounts.</h2></div>)
  	}
  }

  render() {
    return (
      <div id="total-accounts" className="flex-1">
        <h4 className="center orange">Total Accounts</h4>
        <h2 className="center">You have a total of <span className="font70">{this.totalAccounts()}</span> accounts.</h2>
        <h3 className="center">Lenders typically like to see that you've used a variety of accounts responsibly.</h3>
        <AccountsTable />
        {this.renderOpenAccounts()}
        {this.renderClosedAccounts()}
      </div>
    );
  }
}

export default TotalAccounts;