import React, { Component } from 'react';
import CreditScore from './Credit_Score';
import CreditFactors from './Credit_Factors';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      component: null,
      credit_age_result: null,
      credit_card_use_result: null,
      derogatory_marks_result: null,
      hard_inquiries_result: null,
      payment_history_result: null,
      total_accounts_result: null
    }
    this.renderComponent = this.renderComponent.bind(this);
  }

  renderComponent(component){
    this.setState({
      component: component
    });
  }

  render() {
    return (
      <div className="dashboard">
        <div className="flex">
          <div className="credit-score flex-1"><CreditScore 
               state={this.props.state} />
          </div>
          <div className="credit-factors flex-4"><CreditFactors 
               renderComponent={this.renderComponent} 
               state={this.props.state} /></div>
        </div> 
        <div className="flex">{this.state.component}</div>
      </div>
    );
  }
}

export default Dashboard;