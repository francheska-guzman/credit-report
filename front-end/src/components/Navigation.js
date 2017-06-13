import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <a href="/"><img src="/images/logo.png" alt="Logo" /></a>
        </div>
    	  <nav>
    	     <ul>
    	       <li><NavLink to="/">Dashboard</NavLink></li>
    	       <li><NavLink to="/helpcenter">Help Center</NavLink></li>
    	       <li><NavLink to="/myaccount">My Account</NavLink></li>
          </ul>
    	  </nav>
	    </div>
    );
  }
}

export default Navigation;