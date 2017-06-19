import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.userInformation = this.userInformation.bind(this);
    this.login = this.login.bind(this);
    this.getAHint = this.getAHint.bind(this);
  }

  // When user write '1' or '2', the value received go to a method in a parent component.
  // Also, deletes any input entered.
  userInformation(event) {
    event.preventDefault(); 
      this.props.getUserData(this.refs.id.value);
      this.refs.id.value = ' ';
  }

  // When user click over the question mark:
  getAHint(event) {
    alert("Type the number '1' or '2'.");
  }

  // A way to change button and input field depends if user log in or not.
  login() {
    if(this.props.state.user === false) {
      return (
        <div>
          <input type="text" placeholder="Type your user id." ref="id" />
          <input className="signIn" type="button" value="Sign In" onClick={this.userInformation} />
          <input className="hint" type="button" value="?" onClick={this.getAHint} />
        </div>
      )
    }
    else {
      return (
        <div className="wrap-message">
          <span className="message">Welcome to Credit Report, {this.props.state.first_name} {this.props.state.last_name}.</span>
          <input className="signOff" type="button" value="Sign Off" onClick={this.props.signOff} />
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