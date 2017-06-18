import React, { Component } from 'react';
import AccountsTable from './Accounts_Table';

class TotalAccounts extends Component {
  constructor(props){
    super(props);
    this.state = {
      open_accounts: [],
      closed_accounts: []
    }
    this.componentWillMount = this.componentWillMount.bind(this);
    this.openAccounts = this.openAccounts.bind(this);
    this.closedAccounts = this.closedAccounts.bind(this);
    this.renderOpenAccounts = this.renderOpenAccounts.bind(this);
    this.renderClosedAccounts = this.renderClosedAccounts.bind(this);
}

  componentWillMount() {
  	var open_accounts = [];
  	var closed_accounts = [];

  	for(var i = 0; i < this.props.state.creditor.length; i += 1) {
  	  if(this.props.state.current_status[i] === "Open") {
  	  	open_accounts.push([
  	  	<td>{this.props.state.creditor[i]}</td>, <td>{this.props.state.account_type[i]}</td>,
  	  	<td>{this.props.state.credit_limit[i]}</td>, <td>{this.props.state.credit_use[i]}</td>,
  	  	<td>{this.props.state.opened[i]}</td>]);
  	  }
  	  else if(this.props.state.current_status[i] === "Closed") {
		closed_accounts.push([
  	  	<td>{this.props.state.creditor[i]}</td>, <td>{this.props.state.account_type[i]}</td>,
  	  	<td>{this.props.state.credit_limit[i]}</td>, <td>{this.props.state.credit_use[i]}</td>,
  	  	<td>{this.props.state.opened[i]}</td>]);
  	  }
  	}

  	this.setState({
  	  open_accounts: open_accounts,
  	  closed_accounts: closed_accounts
  	}, function() {
      this.openAccounts();
      this.closedAccounts();
    });
  }

  openAccounts() {
    return (this.state.open_accounts.map(function(open, o){
        return <tr key={o+1}>{open}</tr> 
    })
  )}

  closedAccounts() {
    return (this.state.closed_accounts.map(function(closed, c){
        return <tr key={c+1}>{closed}</tr> 
    })
  )}

  renderOpenAccounts() {
  	if(this.state.open_accounts !== []) {
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
  	  <div className="flex-1"><h2>You have 0 open accounts.</h2></div>
  	}
  }

  renderClosedAccounts() {
  	if(this.state.closed_accounts !== []) {
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
  	  <div className="flex-1"><h2>You have 0 closed accounts.</h2></div>
  	}
  }

  render() {
    return (
      <div id="total-accounts" className="flex-1">
        <h4 className="center orange">Total Accounts</h4>
        <AccountsTable />
        {this.renderOpenAccounts()}
        {this.renderClosedAccounts()}
      </div>
    );
  }
}

export default TotalAccounts;