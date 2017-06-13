import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation flex">
    	  <nav>
    	    <ul>
    	    <li className="nav-link"><NavLink to="/">Dashboard</NavLink></li>
    	    <li className="nav-link"><NavLink to="/helpcenter">Help Center</NavLink></li>
    	    <li className="nav-link"><NavLink to="/myaccount">My Account</NavLink></li>
          </ul>
    	  </nav>
      </div>
    );
  }
}

export default Navigation;