import React, { Component } from 'react';

class CreditAge extends Component {
constructor(props){
  super(props);
  this.state = {
    num_of_years: [],
    num_of_months: [],
    counter_age: 0
  }
  this.ageOfAccounts = this.ageOfAccounts.bind(this);
  this.ageAverage = this.ageAverage.bind(this);
  }

  ageOfAccounts() {
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

      for(var i = 0; i < this.props.state.creditor.length; i += 1) {
      	if(this.props.state.current_status[i] === "Open") {
    	  	year_opened = this.props.state.opened[i].split("-")[2];
    	  	year_per_account.push(year_opened);
          console.log(year_per_account);

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

      for(var z = 0; z < this.props.state.current_status.length; z += 1) {
        if(this.props.state.current_status[z] === "Open") {
          row.push([<td>{this.props.state.creditor[z]}</td>,
          <td>{this.props.state.account_type[z]}</td>,<td>{years_months[z]}</td>])
      }}

      this.setState({
        num_of_years: num_of_years,
        num_of_months: num_of_months,
        counter_age: counter
      })

      return (row.map(function(row, i){
        return <tr key={i+1}>{row}</tr>
    }))
      
  }

  ageAverage() {
    var sum_years = 0;
    var sum_months = 0;
    var numerator = 0;
    var result = 0;

      for(var i = 0; i < this.state.counter_age; i += 1){
        sum_years += this.state.num_of_years[i];
        sum_months += this.state.num_of_months[i];
      }

      numerator = sum_years + (sum_months/12);
      result = (numerator/this.state.counter_age).toFixed(2);

      return (
        <span className="orange">{result} yrs</span>
      )
  }

  render() {
    return (
      <div id="credit-age" className="flex-1">
        <h4 className="center blue">Credit Age</h4>
        <h2 className="center">Average age of open accounts: {this.ageAverage()}</h2>
        <table className="dark">
          <tbody>
          <tr>
            <th className="t-title">Creditor</th>
            <th className="t-title">Type of Account</th>
            <th className="t-title">Age of Account</th>
          </tr>
          {this.ageOfAccounts()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CreditAge;