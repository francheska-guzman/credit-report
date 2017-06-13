import React, { Component } from 'react';
import CreditScore from './Credit_Score';
import CreditFactors from './Credit_Factors';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard flex">
        <div className="credit-score"><CreditScore /></div>
        <div className="credit-factors"><CreditFactors /></div>
      </div>
    );
  }
}

export default Dashboard;