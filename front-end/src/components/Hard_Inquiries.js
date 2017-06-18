import React, { Component } from 'react';

class HardInquiries extends Component {
  constructor(props){
  	super(props);
  	// console.log(props);
    this.tableCreditor = this.tableCreditor.bind(this);
    this.tablePosted = this.tablePosted.bind(this);
    this.tableAccountType = this.tableAccountType.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
  }

  tableCreditor(){
    return (this.props.state.inq_creditor.map(function(creditor, c){
      return <tr><td key={c+1}>{creditor}</td></tr>
    }))
  }

  tablePosted(){
    return (this.props.state.posted.map(function(posted, p){
      return <tr><td key={p+1}>{posted}</td></tr>
    }))
  }

  tableAccountType(){
    return (this.props.state.inq_account_type.map(function(account, a){
      return <tr><td key={a+1}>{account}</td></tr>
    }))
  }

  renderMessage(){
    if(this.props.state.inq_creditor !== []) {
      return (
        <div className="center">
          <h2>We noticed a hard inquiry in your credit report.</h2>
          <span className="factor-info">Hard inquiries from things like credit 
          applications can stay on your report for up to 2 years, but their 
          effects tend to fade over time.</span>
        </div>
    )}
    else {
      return (
        <div className="center">
          <h2>Great!</h2>
          <span className="factor-info">You don't have hard inquiries in your report.</span>
        </div>
    )}
  }

  render() {
    return (
      <div id="hard-inquiries" className="flex-1">
        <h4 className="center yellow">Hard Inquiries</h4>
        {this.renderMessage()}
        <table className="dark">
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
        </table>
      </div>
    );
  }
}

export default HardInquiries;