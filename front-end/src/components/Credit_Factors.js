import React, { Component } from 'react';
import CreditAge from './creditfactors/Credit_Age';
import CreditCardUse from './creditfactors/Credit_Card_Use';
import DerogatoryMarks from './creditfactors/Derogatory_Marks';
import HardInquiries from './creditfactors/Hard_Inquiries';
import PaymentHistory from './creditfactors/Payment_History';
import TotalAccounts from './creditfactors/Total_Accounts';

class CreditFactors extends Component {
  render() {
    return (
      <div className="credit-factors">
      <h2>Credit Factors</h2>
        <div className="flex">
          <div className="box flex-1"><h3>Credit Age</h3></div>
	      <div className="box flex-1"><h3>Credit Card Use</h3></div>
          <div className="box flex-1"><h3>Derogatory Marks</h3></div>
        </div>
        <div className="flex">
	      <div className="box flex-1"><h3>Hard Inquiries</h3></div>
          <div className="box flex-1"><h3>Payment History</h3></div>
	      <div className="box flex-1"><h3>Total Accounts</h3></div>
	    </div>
	  </div>
    );
  }
}

export default CreditFactors;