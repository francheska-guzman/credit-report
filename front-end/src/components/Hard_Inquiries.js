import React, { Component } from 'react';

// console.log("Hard Inquiries is working.");

class HardInquiries extends Component {
  constructor(props){
  	super(props);
  	// console.log(props);
    this.tableCreditor = this.tableCreditor.bind(this);
    this.tablePosted = this.tablePosted.bind(this);
    this.tableAccountType = this.tableAccountType.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  // Mapping through the creditors that made a hard inquirie to the user.
  tableCreditor(){
    return (this.props.state.inq_creditor.map(function(creditor, c){
      return (<tr key={c}><td>{creditor}</td></tr>)
    })
  )}

  // Mapping through the inquiry posted date (date when creditor request 
  // user's credit information to credit bureaus).
  tablePosted(){
    return (this.props.state.posted.map(function(posted, p){
      return (<tr key={p}><td>{posted}</td></tr>)
    })
  )}

  // Mapping through the account type that the user applied.
  tableAccountType(){
    return (this.props.state.inq_account_type.map(function(account, a){
      return (<tr key={a}><td>{account}</td></tr>)
    })
  )}

  renderMessage(){
    // If user have hard inquiries (equal to a "not empty array"):
    if(this.props.state.inq_creditor !== []) {
      return (
        <div className="center">
          <h2>We noticed a hard inquiry in your credit report.</h2>
          <span className="factor-info">Hard inquiries from things like credit 
          applications can stay on your report for up to 2 years, but their 
          effects tend to fade over time.</span>
        </div>
    )}
    // Otherwise:
    else {
      return (
        <div className="center">
          <h2>Great!</h2>
          <span className="factor-info">You don't have hard inquiries in your report.</span>
        </div>
    )}
  }

  renderTable() {
    // If data, render table. I don't need an else because in the renderMessage method I have
    // an else statement that render when user don't have hard inquiries.
    if(this.props.state.inq_creditor !== []) {
      return (
        <tbody>
          <tr>
          <td className="t-title factor-info center">Creditor</td>
          <td className="t-title factor-info center">Posted</td>
          <td className="t-title factor-info center">Account Type</td>
          </tr>
          <td>{this.tableCreditor()}</td>
          <td>{this.tablePosted()}</td>
          <td>{this.tableAccountType()}</td>
        </tbody>
      );
    }
  }

  render() {
    return (
      <div id="hard-inquiries" className="flex-1">
        <h4 className="center yellow">Hard Inquiries</h4>
        {this.renderMessage()}
        <table className="dark">
        {this.renderTable()}
        </table>
      </div>
    );
  }
}

export default HardInquiries;