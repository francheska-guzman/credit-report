import React, { Component } from 'react';

// Render a 404 page when a router is not defined.

class FourOFour extends Component {
  render() {
    return (
      <div id="fof" className="flex">
      	<div className="flex-1 centralize">
          <h2 className="font90 center"><span className="grey">404</span> Error</h2>
          <h3 className="font70 center">Page Not Found</h3>
        </div>
      </div>
    );
  }
}

export default FourOFour;