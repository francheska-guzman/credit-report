import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.userInformation = this.userInformation.bind(this);
  }

  userInformation(event) {
    event.preventDefault(); 
      // console.log(this.refs.id.value);
      this.props.getUserData(this.refs.id.value);
      this.refs.id.value = "";
  }

  render() {
    return (
      <div className="wrapper">
        <h2 className="center">Welcome!</h2>
    		  <input type="text" placeholder="Your User ID" ref="id" />
    		  <input type="button" value="Submit" onClick={this.userInformation}/>
      </div>
    );
  }
}

export default Welcome;