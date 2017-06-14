import React, { Component } from 'react';
import CreditAge from './creditfactors/Credit_Age';
import CreditCardUse from './creditfactors/Credit_Card_Use';
import DerogatoryMarks from './creditfactors/Derogatory_Marks';
import HardInquiries from './creditfactors/Hard_Inquiries';
import PaymentHistory from './creditfactors/Payment_History';
import TotalAccounts from './creditfactors/Total_Accounts';

class CreditFactors extends Component {
  constructor(props){
    super(props);
    this.showData = this.showData.bind(this);
  }

  showData(event) {
    if(event.target.id === "creditfactor1") {
      console.log("Show Data: Credit Age");
      this.props.renderComponent(<CreditAge />);
    }
    else if(event.target.id === "creditfactor2") {
      console.log("Show Data: Credit Card Use");
      this.props.renderComponent(<CreditCardUse />);
    }
    else if(event.target.id === "creditfactor3") {
      console.log("Show Data: Derogatory Marks");  
      this.props.renderComponent(<DerogatoryMarks />);  
    }
    else if(event.target.id === "creditfactor4") {
      console.log("Show Data: Hard Inquiries"); 
      this.props.renderComponent(<HardInquiries />);
    }
    else if(event.target.id === "creditfactor5") {
      console.log("Show Data: Payment History"); 
      this.props.renderComponent(<PaymentHistory />);
    }
    else if(event.target.id === "creditfactor6") {
      console.log("Show Data: Total Accounts"); 
      this.props.renderComponent(<TotalAccounts />);
    }
    else {
      console.log("No credit factor displayed.");
    }
  }

  render() {
    return (
      <div className="credit-factors">
      <h2>Credit Factors</h2>
         <div className="flex">
         <div className="box flex-1">
            <h3>Credit Age</h3>
            <input type="button" id="creditfactor1" className="text-appearance" 
            value="Details" onClick={this.showData} />
         </div>
  	     <div className="box flex-1">
            <h3>Credit Card Use</h3>
            <input type="button" id="creditfactor2" className="text-appearance" 
            value="Details" onClick={this.showData} />
         </div>
         <div className="box flex-1">
            <h3>Derogatory Marks</h3>
            <input type="button" id="creditfactor3" className="text-appearance" 
            value="Details" onClick={this.showData} />
         </div>
         </div>

         <div className="flex">
  	     <div className="box flex-1">
            <h3>Hard Inquiries</h3>
            <input type="button" id="creditfactor4" className="text-appearance" 
            value="Details" onClick={this.showData} />
         </div>
         <div className="box flex-1">
            <h3>Payment History</h3>
            <input type="button" id="creditfactor5" className="text-appearance" 
            value="Details" onClick={this.showData} />
         </div>
    	   <div className="box flex-1">
            <h3>Total Accounts</h3>
            <input type="button" id="creditfactor6" className="text-appearance" 
            value="Details" onClick={this.showData} />
         </div>
	       </div>
	    </div>
    );
  }
}

export default CreditFactors;