import React, { Component } from 'react';

class AgeTable extends Component {
  render() {
  return (
    <div className="center">
      <table className="centralize">
	  <tbody>
	    <tr>
		  <th className="r-background"> </th>
		  <th className="r-background"> </th>
		  <th className="y-background"> </th>
		  <th className="g-background"> </th>
		  <th className="g-background"> </th>
		</tr>
		<tr>
		  <td>0-2 yrs</td>
		  <td>2-4 yrs</td>
		  <td>5-6 yrs</td>
		  <td>7-8 yrs</td>
		  <td>9+ yrs</td>
		</tr>
	  </tbody>
	  </table>
	</div>
	);
  }
}

export default AgeTable;