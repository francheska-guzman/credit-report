import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.userInformation = this.userInformation.bind(this);
    this.login = this.login.bind(this);
  }

  userInformation(event) {
    event.preventDefault(); 
      this.props.getUserData(this.refs.id.value);
      this.refs.id.value = ' ';
  }

  login() {
    if(this.props.state.user === false) {
      return (
        <div className="welcome_message flex">
          <input type="text" placeholder="Your User ID" ref="id" />
          <input className="sign" type="button" value="Sign In" onClick={this.userInformation} />
        </div>
      )
    }
    else {
      return (
        <div className="welcome_message flex">
          <span>Welcome to Credit Report, {this.props.state.first_name} {this.props.state.last_name}.</span>
          <input className="sign" type="button" value="Sign Off" onClick={this.props.signOff} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="wrapper">{this.login()}</div>
    );
  }
}

export default Welcome;