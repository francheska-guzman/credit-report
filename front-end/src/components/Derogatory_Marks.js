import React, { Component } from 'react';

class DerogatoryMarks extends Component {
  constructor(props){
    super(props);
    this.renderMessage = this.renderMessage.bind(this);
    this.renderCollectionAccounts = this.renderCollectionAccounts.bind(this);
  }

  renderMessage() {
    let counter_collection = 0;

  	for(var i = 0; i < this.props.state.collection.length; i += 1) {
  	  if (this.props.state.collection[i] === "In Collection") {
  	  	counter_collection += 1;
  	}}

    if(counter_collection > 0 || this.props.state.public_record === "Have Public Record") {
      return (
        <div className="center">
          <h2>We noticed a negative mark on your report.</h2>
          <span className="factor-info">Derogatory marks generally stay on your report for 7-10 years, but their effects can start to fade over time.</span>
        </div>
    )}

    else {
      return (
        <div className="center">
          <h2>Congratulations!</h2>
          <span className="factor-info">You don't have any collection or public record.</span>
        </div>
    )}
  }

  renderCollectionAccounts() {
    let collections = [];
   
    for(var i = 0; i < this.props.state.collection.length; i += 1) {
      if (this.props.state.collection[i] === "In Collection") {
        collections.push([<td>{this.props.state.opened[i]}</td>,<td>{this.props.state.creditor[i]}</td>,<td>{this.props.state.credit_limit[i]}</td>,<td>{this.props.state.credit_use[i]}</td>,<td>{this.props.state.current_status[i]}</td>]);
      }}
      
    return (collections.map(function(collections){
        return <tr>{collections}</tr> 
      })
  )}

  render() {
    return (
      <div id="derogatory-marks" className="flex-1">
        <h4 className="center green">Derogatory Marks</h4>
        {this.renderMessage()}
        <table className="dark">
          <tr>
            <th className="t-title">Opened</th>
            <th className="t-title">Creditor</th>
            <th className="t-title">Credit Limit</th>
            <th className="t-title">Credit Use</th>
            <th className="t-title">Current Status</th>  
          </tr> 
          {this.renderCollectionAccounts()}
        </table>
      </div>
    );
  }
}

export default DerogatoryMarks;