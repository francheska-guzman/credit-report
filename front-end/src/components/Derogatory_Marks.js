import React, { Component } from 'react';

class DerogatoryMarks extends Component {
  constructor(props){
    super(props);
    this.renderMessage = this.renderMessage.bind(this);
  }

  renderMessage() {
  	for(var i = 0; i < this.props.state.collection.length; i += 1) {
  	  if (this.props.state.collection[i] === "In Collection" || this.props.state.public_record === "Have Public Record") {
  	  	return (
  	      <div className="center">
  	  	    <h2>We noticed a negative mark on your report.</h2>
  	  	    <span className="factor-info">Derogatory marks generally stay on your report for 7-10 years, but their effects can start to fade over time.</span>
  	      </div>
        )
  	  }
  	  else {
  	  	<div className="center">
  	  	  <h2>Congratulations!</h2>
  	  	  <span className="factor-info">You don't have any collection or public record.</span>
  	  	</div>
  	  }
  	}
  }

  render() {
    return (
      <div id="derogatory-marks" className="flex-1">
        <h4 className="center green">Derogatory Marks</h4>
        {this.renderMessage()}
      </div>
    );
  }
}

export default DerogatoryMarks;