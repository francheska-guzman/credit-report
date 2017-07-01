import React, { Component } from 'react';
import Welcome from './Welcome';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="navigation flex">
        <h1 className="flex">Credit Report</h1>
          <nav>
          	<ul className="list-of-links">
          	  <li className="nav-link"><NavLink to="/index">Dashboard</NavLink></li>
          	  <li className="nav-link"><NavLink to="/help-center">Help Center</NavLink></li>
          	  <li className="nav-link"><NavLink to="/my-account">My Account</NavLink></li>
            </ul>
          </nav>
              <Welcome 
                 getUserData={this.props.getUserData}
                 signOff={this.props.signOff}
                 state={this.props.state} />
      </div>
      </div>
    );
  }
}

export default Navigation;