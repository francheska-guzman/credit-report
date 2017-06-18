import React, { Component } from 'react';

class MyAccount extends Component {
  constructor(props) {
  	super(props);
  	// console.log(props.profile);
  	this.profile = this.profile.bind(this);
  }

  profile() {
  	if(this.props.state.user === false) {
      return (<div className="profile flex"></div>)
  	}
  	else {
  	  return (
        <div className="profile flex">
          <div className="profile-wrap flex-1">
          <h2>Name</h2>
            <label className="profile-info">First Name:</label><input type="text" className="profile-info" value={this.props.state.first_name} readonly/><br/>
            <label className="profile-info">Middle Name:</label><input type="text" className="profile-info" value={this.props.state.middle_name} readonly/><br/>
            <label className="profile-info">Last Name:</label><input type="text" className="profile-info" value={this.props.state.last_name} readonly/><br/>
          <h2>About You</h2>
            <label className="profile-info">Date of Birth:</label><input type="text" className="profile-info" value={this.props.state.date_of_birth} readonly/><br/>
            <label className="profile-info">Place of Birth:</label><input type="text" className="profile-info" value={this.props.state.place_of_birth} readonly/><br/>
            <label className="profile-info">Marital Status:</label><input type="text" className="profile-info" value={this.props.state.marital_status} readonly/><br/>
            <label className="profile-info">Annual Household Income:</label><input type="text" className="profile-info" value={this.props.state.annual_household_income} readonly/>
          </div>

          <div className="profile-wrap flex-1">
          <h2>Home Address</h2>
            <label className="profile-info">Street Address:</label><input type="text" className="profile-info" value={this.props.state.street_address} readonly/><br/>
            <label className="profile-info">Apartment:</label><input type="text" className="profile-info" value={this.props.state.apartment} readonly/><br/>
            <label className="profile-info">City:</label><input type="text" className="profile-info" value={this.props.state.city} readonly/><br/>
            <label className="profile-info">State:</label><input type="text" className="profile-info" value={this.props.state.state} readonly/><br/>
            <label className="profile-info">Zip Code:</label><input type="text" className="profile-info" value={this.props.state.zip_code} readonly/>
          <h2>Contact</h2>
            <label className="profile-info">Telephone:</label><input type="text" className="profile-info" value={this.props.state.telephone_number} readonly/><br/>
            <label className="profile-info">Email:</label><input type="text" className="profile-info" value={this.props.state.email} readonly/>
          </div>
          {this.renderbuttons}
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