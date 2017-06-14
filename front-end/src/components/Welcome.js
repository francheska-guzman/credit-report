import React, { Component } from 'react';

class Welcome extends Component {
  userInformation(event){
    event.preventDefault();
    console.log("Testing.");
  }

  render() {
    return (
      <div className="wrapper">
        <h2 className="center">Welcome!</h2>
		  <label>Identification Number:</label>
		  <input type="text" name="user_id" />
		  <input type="button" value="Submit" onClick={this.userInformation}/>
      </div>
    );
  }
}

export default Welcome;