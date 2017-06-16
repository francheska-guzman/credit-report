import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.userInformation = this.userInformation.bind(this);
    this.login = this.login.bind(this);
    this.getAHint = this.getAHint.bind(this);
  }

  userInformation(event) {
    event.preventDefault(); 
      this.props.getUserData(this.refs.id.value);
      this.refs.id.value = ' ';
  }

  getAHint(event) {
    alert("Type the number '1' or '2'.");
  }

  login() {
    if(this.props.state.user === false) {
      return (
        <div className="log">
          <input type="text" placeholder="Type your user id." ref="id" />
          <input className="sign" type="button" value="Sign In" onClick={this.userInformation} />
          <input className="hint" type="button" value="?" onClick={this.getAHint} />
        </div>
      )
    }
    else {
      return (
        <div className="log">
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