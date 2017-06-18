import React, { Component } from 'react';
import AccountsTable from './Accounts_Table';

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

  	for(var i = 0; i < this.props.state.creditor.length; i += 1) {
  	  if(this.props.state.current_status[i] === "Open") {
  	  	open_accounts.push([
  	  	<td>{this.props.state.creditor[i]}</td>, <td>{this.props.state.account_type[i]}</td>,
  	  	<td>{this.props.state.credit_limit[i]}</td>, <td>{this.props.state.credit_use[i]}</td>,
  	  	<td>{this.props.state.opened[i]}</td>]);
        counter_open += 1;
  	  }
  	  else if(this.props.state.current_status[i] === "Closed") {
		closed_accounts.push([
  	  	<td>{this.props.state.creditor[i]}</td>, <td>{this.props.state.account_type[i]}</td>,
  	  	<td>{this.props.state.credit_limit[i]}</td>, <td>{this.props.state.credit_use[i]}</td>,
  	  	<td>{this.props.state.opened[i]}</td>]);
        counter_closed += 1;
  	  }
      counter += 1;
  	}

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
    if(this.state.counter <= 10) {
      return (<span className="red">{this.state.counter}</span>);
    }
    else {
      return (<span className="green">{this.state.counter}</span>);
    }
  }

  // Looping through open accounts array to render in the open accounts table.
  openAccounts() {
    return (this.state.open_accounts.map(function(open, o){
        return <tr key={o+1}>{open}</tr> 
    })
  )}

  // Looping through closed accounts array to render in the closed accounts table.
  closedAccounts() {
    return (this.state.closed_accounts.map(function(closed, c){
        return <tr key={c+1}>{closed}</tr> 
    })
  )}

  renderOpenAccounts() {
  	if(this.state.counter_open > 0) {
  	  return (
  	  	<div className="flex-1">
  	  	<h2>Your open accounts:</h2>
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
    else {
  	  return (
        <div className="flex-1">
        <h2>You have {this.state.counter_open} open accounts.</h2>
        </div>
      )
  	}
  }

  renderClosedAccounts() {
  	if(this.state.counter_closed > 0) {
  	  return (
  	  	<div className="flex-1">
  	  	<h2>Your closed accounts:</h2>
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
  	else {
  	  return (
        <div className="flex-1">
        <h2>You have {this.state.counter_closed} closed accounts.</h2>
        </div>
      )
  	}
  }

  render() {
    return (
      <div id="total-accounts" className="flex-1">
        <h4 className="center orange">Total Accounts</h4>
        <h2 className="center">You have a total of {this.totalAccounts()} accounts.</h2>
        <AccountsTable />
        {this.renderOpenAccounts()}
        {this.renderClosedAccounts()}
      </div>
    );
  }
}

export default TotalAccounts;