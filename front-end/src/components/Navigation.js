import React, { Component } from 'react';
import Welcome from './Welcome';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  constructor(props){
  super(props);
  // console.log(props);
  }

  render() {
    return (
      <div className="navigation flex">
      <h1>Credit Report</h1>
    	  <nav>
    	    <ul>
    	    <li className="nav-link"><NavLink to="/">Dashboard</NavLink></li>
    	    <li className="nav-link"><NavLink to="/help-center">Help Center</NavLink></li>
    	    <li className="nav-link"><NavLink to="/my-account">My Account</NavLink></li>
          </ul>
    	  </nav>
        <Welcome getUserData={this.props.getUserData}
                 signOff={this.props.signOff}
                 state={this.props.state} />
      </div>
    );
  }
}

export default Navigation;