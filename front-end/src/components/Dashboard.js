import React, { Component } from 'react';
import CreditScore from './Credit_Score';
import CreditFactors from './Credit_Factors';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      component: null,
    }
    this.renderComponent = this.renderComponent.bind(this);
  }

  renderComponent(component) {
  // This is used to activate one of the six credit factors, when user click "View Details".
    this.setState({
      component: component
    });
  }

  // This part of the home page. Here I'm calling the components CreditScore, CreditFactors,
  // and passing data to them.
  render() {
    return (
      <div className="dashboard">
        <div className="flex">
          <div className="credit-score flex-1">
               <CreditScore 
               state={this.props.state} />
          </div>
          <div className="credit-factors flex-4">
               <CreditFactors 
               renderComponent={this.renderComponent} 
               state={this.props.state} />
          </div>
        </div> 
        <div className="flex">{this.state.component}</div>
      </div>
    );
  }
}

export default Dashboard;