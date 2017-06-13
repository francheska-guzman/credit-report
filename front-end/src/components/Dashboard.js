import React, { Component } from 'react';
import CreditScore from './Credit_Score';
import CreditFactors from './Credit_Factors';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="credit flex">
          <div className="credit-score flex-1"><CreditScore /></div>
          <div className="credit-factors flex-4"><CreditFactors /></div>
        </div>
          <div className="display-information flex">Result here.</div>
      </div>
    );
  }
}

export default Dashboard;