import React, { Component } from 'react';
import Welcome from './Welcome';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="navigation flex">
          <h1 className="flex-1">Credit Report</h1>
            <nav>
          	<ul className="list-of-links">
          	  <li className="nav-link"><NavLink to="/">Dashboard</NavLink></li>
          	  <li className="nav-link"><NavLink to="/help-center">Help Center</NavLink></li>
          	  <li className="nav-link"><NavLink to="/my-account">My Account</NavLink></li>
            </ul>
            </nav>
        </div>
        <div className="nav-bottom flex">
        <Welcome getUserData={this.props.getUserData}
                 signOff={this.props.signOff}
                 state={this.props.state} />
        </div>
      </div>
    );
  }
}

export default Navigation;