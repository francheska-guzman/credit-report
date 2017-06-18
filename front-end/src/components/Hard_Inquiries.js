import React, { Component } from 'react';

class HardInquiries extends Component {
  constructor(props){
  	super(props);
  	console.log(props);
  }

  render() {
    return (
      <div id="hard-inquiries" className="flex-1">
        <h4 className="center yellow">Hard Inquiries</h4>
      </div>
    );
  }
}

export default HardInquiries;