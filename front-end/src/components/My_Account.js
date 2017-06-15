import React, { Component } from 'react';

class MyAccount extends Component {
  constructor(props) {
  	super(props);
  	// console.log(props.profile);
  	this.profile = this.profile.bind(this);
  }

  profile() {
  	if(this.props.state.user === false) {
  	  return (
  	    <div className="profile">No profile to show. Sign in by using your user id.</div>
  	  )
  	}
  	else {
  	  return (
        <div className="profile">
          <span className="profile-info">First Name: {this.props.state.first_name}</span>
          <span className="profile-info">Last Name: {this.props.state.last_name}</span>
          <span className="profile-info">Date of Birth: {this.props.state.date_of_birth}</span>
          <span className="profile-info">Place of Birth: {this.props.state.place_of_birth}</span>
          <span className="profile-info">Marital Status: {this.props.state.marital_status}</span>
          <span className="profile-info">Annual Household Income: {this.props.state.annual_household_income}</span>
        </div>
  	  )
  	};
  }

  render() {
    return (
      <div className="flex">{this.profile()}</div>
    );
  }
}

export default MyAccount;