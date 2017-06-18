import React, { Component } from 'react';

class AccountsTable extends Component {
  render() {
  return (
    <div className="center">
      <table className="centralize">
	  <tbody>
	    <tr>
		  <th className="r-background"> </th>
		  <th className="r-background"> </th>
		  <th className="g-background"> </th>
		  <th className="g-background"> </th>
		</tr>
		<tr>
		  <td>0-5</td>
		  <td>6-10</td>
		  <td>11-20</td>
		  <td>21+</td>
		</tr>
	  </tbody>
	  </table>
	</div>
	);
  }
}

export default AccountsTable;