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
        <div className="profile flex"></div>
       )
  	}
  	else {
  	  return (
        <div className="profile flex">
          <ul className="profile-wrap flex-1">
          <h2>Name</h2>
            <li className="profile-info">First Name: {this.props.state.first_name}</li>
            <li className="profile-info">Middle Name: {this.props.state.middle_name}</li>
            <li className="profile-info">Last Name: {this.props.state.last_name}</li>
          <h2>About You</h2>
            <li className="profile-info">Date of Birth: {this.props.state.date_of_birth}</li>
            <li className="profile-info">Place of Birth: {this.props.state.place_of_birth}</li>
            <li className="profile-info">Marital Status: {this.props.state.marital_status}</li>
            <li className="profile-info">Annual Household Income: {this.props.state.annual_household_income}</li>
          </ul>
          <ul className="profile-wrap flex-1">
          <h2>Home Address</h2>
            <li className="profile-info">Street Address: {this.props.state.street_address}</li>
            <li className="profile-info">Apartment: {this.props.state.apartment}</li>
            <li className="profile-info">City: {this.props.state.city}</li>
            <li className="profile-info">State: {this.props.state.state}</li>
            <li className="profile-info">Zip Code: {this.props.state.zip_code}</li>
          <h2>Contact</h2>
            <li className="profile-info">Telephone: {this.props.state.telephone}</li>
            <li className="profile-info">Email: {this.props.state.email}</li>
          </ul>
        </div>
  	  );
  	}
  }

  render() {
    return (
      <div className="flex">{this.profile()}</div>
    );
  }
}

export default MyAccount;