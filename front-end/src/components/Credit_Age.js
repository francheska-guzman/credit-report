import React, { Component } from 'react';

class CreditAge extends Component {
constructor(props){
  super(props);
  this.renderYearsMonths = this.renderYearsMonths.bind(this);
  this.renderAverage = this.renderAverage.bind(this);
  }

  renderYearsMonths() {
  var today = new Date();
  var current_year = today.getFullYear();
  var counter = 0;
  var year_opened = 0;
  var year_per_account = [];
  var num_of_years = [];
  var month_opened = 0;
  var month_per_account = [];
  var num_of_months = [];
  var years_months = [];
  var row = [];

    for(var i = 0; i < this.props.state.opened.length; i += 1) {
    	if(this.props.state.current_status[i] === "Open") {
  	  	year_opened = this.props.state.opened[i].split("-")[2];
  	  	year_per_account.push(year_opened);

        month_opened = this.props.state.opened[i].split("-")[0]; 
        month_per_account.push(month_opened);
  	  }
  	  counter += 1;
  	}

  	for(var x = 0; x < year_per_account.length; x += 1) {
      num_of_years.push(current_year - Number(year_per_account[x]));
      num_of_months.push(12 - Number(month_per_account[x]));
  	}

    for(var y = 0; y < year_per_account.length; y += 1) {
      years_months.push(num_of_years[y] + " yrs " + num_of_months[y] + " mos")
    }

    for(var z = 0; z < this.props.state.opened.length; z += 1) {
      if(this.props.state.current_status[z] === "Open") {
        row.push([<td>{this.props.state.creditor[z]}</td>,
        <td>{this.props.state.account_type[z]}</td>,<td>{years_months[z]}</td>])
      }}

    return (row.map(function(row, i){
      return <tr key={i+1}>{row}</tr> 
  }))
  }

  renderAverage() {

  }

  render() {
    return (
      <div id="credit-age" className="flex-1">
        <h4 className="center blue">Credit Age</h4>
        {this.renderAverage()}
        <table className="dark">
          <tbody>
          <tr>
            <th>Creditor</th>
            <th>Type of Account</th>
            <th>Age of Account</th>
          </tr>
          {this.renderYearsMonths()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CreditAge;