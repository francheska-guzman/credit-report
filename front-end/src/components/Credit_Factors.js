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
      <div className="credit-factors flex-4">
        <h2>Credit Factors</h2>
        <div className="flex">
	      <CreditAge />
	      <CreditCardUse />
	      <DerogatoryMarks />
	    </div>
	    <div className="flex">
	      <HardInquiries />
	      <PaymentHistory />
	      <TotalAccounts />
	    </div>
	  </div>
    );
  }
}

export default CreditFactors;