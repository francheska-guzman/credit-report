import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="navigation flex">
        <h1 className="flex">Credit Report</h1>
          <nav>
          	<ul className="list-of-links">
          	  <li className="nav-link"><NavLink to="/credit-report/">Dashboard</NavLink></li>
          	  <li className="nav-link"><NavLink to="/credit-report/help-center">Help Center</NavLink></li>
          	  <li className="nav-link"><NavLink to="/credit-report/my-account">My Account</NavLink></li>
            </ul>
          </nav>
      </div>
      </div>
    );
  }
}

export default Navigation;