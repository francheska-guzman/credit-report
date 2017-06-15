import React, { Component } from 'react';
import CreditAge from './Credit_Age';
import CreditCardUse from './Credit_Card_Use';
import DerogatoryMarks from './Derogatory_Marks';
import HardInquiries from './Hard_Inquiries';
import PaymentHistory from './Payment_History';
import TotalAccounts from './Total_Accounts';

class CreditFactors extends Component {
  constructor(props){
    super(props);
    this.showData = this.showData.bind(this);
  }

  showData(event) {
    if(event.target.id === "creditfactor1" && this.props.state.user === true) {
      // console.log("Show Data: Credit Age");
      this.props.renderComponent(<CreditAge 
        state={this.props.state} />);
    }
    else if(event.target.id === "creditfactor2" && this.props.state.user === true) {
      // console.log("Show Data: Credit Card Use");
      this.props.renderComponent(<CreditCardUse 
        state={this.props.state} />);
    }
    else if(event.target.id === "creditfactor3" && this.props.state.user === true) {
      // console.log("Show Data: Derogatory Marks");  
      this.props.renderComponent(<DerogatoryMarks 
        state={this.props.state} />);  
    }
    else if(event.target.id === "creditfactor4" && this.props.state.user === true) {
      // console.log("Show Data: Hard Inquiries"); 
      this.props.renderComponent(<HardInquiries 
        state={this.props.state} />);
    }
    else if(event.target.id === "creditfactor5" && this.props.state.user === true) {
      // console.log("Show Data: Payment History"); 
      this.props.renderComponent(<PaymentHistory 
        state={this.props.state} />);
    }
    else if(event.target.id === "creditfactor6" && this.props.state.user === true) {
      // console.log("Show Data: Total Accounts"); 
      this.props.renderComponent(<TotalAccounts 
        state={this.props.state} />);
    }
    else {
      alert("Sign in by using your user id.");
    }
  }

  render() {
    return (
      <div className="credit-factors">
      <h2 className="center">Credit Factors</h2>
         <div className="flex">
         <div className="box flex-1">
            <h3 className="center blue">Credit Age</h3>
            <input type="button" id="creditfactor1" className="text-appearance" 
            value="View Details" onClick={this.showData} />
         </div>
  	     <div className="box flex-1">
            <h3 className="center red">Credit Card Use</h3>
            <input type="button" id="creditfactor2" className="text-appearance" 
            value="View Details" onClick={this.showData} />
         </div>
         <div className="box flex-1">
            <h3 className="center green">Derogatory Marks</h3>
            <input type="button" id="creditfactor3" className="text-appearance" 
            value="View Details" onClick={this.showData} />
         </div>
         </div>

         <div className="flex">
  	     <div className="box flex-1">
            <h3 className="center yellow">Hard Inquiries</h3>
            <input type="button" id="creditfactor4" className="text-appearance" 
            value="View Details" onClick={this.showData} />
         </div>
         <div className="box flex-1">
            <h3 className="center purple">Payment History</h3>
            <input type="button" id="creditfactor5" className="text-appearance" 
            value="View Details" onClick={this.showData} />
         </div>
    	   <div className="box flex-1">
            <h3 className="center orange">Total Accounts</h3>
            <input type="button" id="creditfactor6" className="text-appearance" 
            value="View Details" onClick={this.showData} />
         </div>
	       </div>
	    </div>
    );
  }
}

export default CreditFactors;