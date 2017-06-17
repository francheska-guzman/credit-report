import React, { Component } from 'react';
import { Pie } from 'react-chartjs';

class DerogatoryMarks extends Component {
  constructor(props){
    super(props);
    this.renderMessage = this.renderMessage.bind(this);
    this.renderCollectionAccounts = this.renderCollectionAccounts.bind(this);
    this.renderCollectionGraphic = this.renderCollectionGraphic.bind(this);
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
          <h2>Excellent Record</h2>
          <span className="factor-info">You don't have any collection or public record.</span>
        </div>
    )}
  }

  renderCollectionGraphic() {
    var collection_amount = 0;
    var paid = 0;

    for(var i = 0; i < this.props.state.amount_paid_to_collection.length; i += 1) {
      if (this.props.state.amount_paid_to_collection[i] > 0) {
        collection_amount += this.props.state.credit_use[i];
        paid += this.props.state.amount_paid_to_collection[i];
      }
    }

    var pending = collection_amount - paid;

    let data = [
            {color: "#3c076d", label: "Total amount pending to be paid", value: pending},
            {color: "#0a72b2", label: "Total amount you already paid to collection", value: paid}
    ];

    if (collection_amount !== 0 && paid !== 0) {
      return (
        <div className="center"><Pie data={data} options={{animateScale: true}} width="600" height="250"/></div>
    )};
  }

  renderCollectionAccounts() {
    let collections = [];
   
    for(var i = 0; i < this.props.state.collection.length; i += 1) {
      if (this.props.state.collection[i] === "In Collection") {
        collections.push([<td>{this.props.state.opened[i]}</td>,<td>{this.props.state.creditor[i]}</td>,
        <td>{this.props.state.collection_agency[i]}</td>,<td>{this.props.state.account_type[i]}</td>,
        <td>{this.props.state.credit_use[i]}</td>,<td>{this.props.state.amount_paid_to_collection[i]}</td>,
        <td>{this.props.state.current_status[i]}</td>]);
      }}
      
    return (collections.map(function(collections, i){
        return <tr key={i+1}>{collections}</tr> 
    })
  )}

  render() {
    return (
      <div id="derogatory-marks" className="flex-1">
        <h4 className="center green">Derogatory Marks</h4>
        {this.renderMessage()}
        <table className="dark">
          <tbody>
          <tr>
            <th className="t-title">Opened</th>
            <th className="t-title">Creditor</th>
            <th className="t-title">Collection Agency</th>
            <th className="t-title">Account Type</th>
            <th className="t-title">Collection Amount</th>
            <th className="t-title">Amount Paid to Collection</th>
            <th className="t-title">Current Status</th>  
          </tr> 
            {this.renderCollectionAccounts()}
          </tbody>
        </table>
        {this.renderCollectionGraphic()}
      </div>
    );
  }
}

export default DerogatoryMarks;