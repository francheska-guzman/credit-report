import React, { Component } from 'react';
import CreditScore from './Credit_Score';
import CreditFactors from './Credit_Factors';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      component: null
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
          <div className="credit-score flex-1"><CreditScore /></div>
          <div className="credit-factors flex-4"><CreditFactors 
               renderComponent={this.renderComponent} /></div>
        </div> 
        <div className="flex">{this.state.component}</div>
      </div>
    );
  }
}

export default Dashboard;