import React, { Component } from 'react';

class UtilizationTable extends Component {
  render() {
  return (
    <div className="center factor-info">
      <table className="flex-1 dark">
	  <tbody>
		<tr>
		  <td className="t-title">Utilization Ratio</td>
		  <td className="t-title">Result</td>
		</tr>
		<tr>
		  <td>0-9%</td>
		  <td className="green">Excellent</td>
		</tr>
		<tr>
		  <td>10-29%</td>
		  <td className="green">Good</td>
		</tr>
		<tr>
		  <td>30-49%</td>
		  <td className="yellow">Fair</td>
		</tr>
		<tr>
		  <td>50-74%</td>
		  <td className="red">Poor</td>
		</tr>
		<tr>
		  <td>75-100%</td>
		  <td className="red">Very Poor</td>
		</tr>
	  </tbody>
	  </table>
	</div>
	);
  }
}

export default UtilizationTable;