import React, { Component } from 'react';
import AgeTable from './Age_Table';

// console.log("Credit Age is working.");

class CreditAge extends Component {
constructor(props){
  super(props);
  // console.log(props);
  this.state = {
    creditor_ca: [],
    account_type_ca: [],
    num_of_years_ca: [],
    num_of_months_ca: [],
    years_months_ca: []
  }
  this.joinYearsMonths = this.joinYearsMonths.bind(this);
  this.headerCreditAge = this.headerCreditAge.bind(this);
  this.tableCreditAge = this.tableCreditAge.bind(this);
  this.ageAverage = this.ageAverage.bind(this);
  this.headerAgeTable = this.headerAgeTable.bind(this);
  this.message = this.message.bind(this);
  }

  componentWillMount() {
    // Get today's date.
    var today = new Date();
    // Get only the year.
    var current_year = today.getFullYear();
    // Local variables.
    var year_per_account = [];
    var month_per_account = [];
    var account_type = [];
    var creditor = [];
    var year_opened = 0;
    var years = 0;
    var month_opened = 0;
    var months = 0;

      // Check which accounts are Open and save creditor, account type, number of years and months.
      for(var i = 0; i < this.props.state.creditor.length; i += 1) {
        // console.log(this.props.state.current_status[i])
        if(this.props.state.current_status[i] === "Open") {
          // About the account
          creditor.push(this.props.state.creditor[i]);
          account_type.push(this.props.state.account_type[i]);
          // Years
          year_opened = this.props.state.opened[i].split("-")[2];
          years = (current_year - year_opened);
          year_per_account.push(years);
          // Months
          month_opened = this.props.state.opened[i].split("-")[0]; 
          months = (12 - Number(month_opened));
          month_per_account.push(months);
        }
      }

      // Setting the state by reference the local variables.
      this.setState({ 
        creditor_ca: creditor,
        account_type_ca: account_type,
        num_of_years_ca: year_per_account,
        num_of_months_ca: month_per_account
      }, function() {
        this.joinYearsMonths();
     });
  }

  
  joinYearsMonths() {
    // Local variable.
    var years_months = [];

      for(var y = 0; y < this.state.creditor_ca.length; y += 1) {
        years_months.push(this.state.num_of_years_ca[y] + " yrs, " + this.state.num_of_months_ca[y] + " mos")
      }

      // Setting the state by reference the local variable.
      this.setState({
        years_months_ca: years_months
      });
  }

  tableCreditAge() {
    // Local variables.
    var row = [];

      // Looping to push into an array each row with the purpose of render.
      for(var z = 0; z < this.state.creditor_ca.length; z += 1) {
        row.push([
          <td key={"Creditor_"+z+1}>{this.state.creditor_ca[z]}</td>,
          <td key={"AccountType_"+z+1}>{this.state.account_type_ca[z]}</td>,
          <td key={"YearsMonths_"+z+1}>{this.state.years_months_ca[z]}</td>
        ]);
      }

      // Render
      return (row.map(function(row, i){
        return <tr key={i+1}>{row}</tr>
      }));
  }

  ageAverage() {
    // Local variable.
    var sum_years = 0;
    var sum_months = 0;
    var numerator = 0;
    var denominator = 0;
    var result = 0;

      // Sum all years.
      // Sum all months.
      // Denominator is a counter that will be used to calculate the average.
      for(var n = 0; n < this.state.creditor_ca.length; n += 1){
        sum_years += this.state.num_of_years_ca[n];
        sum_months += this.state.num_of_months_ca[n];
        denominator += 1;
      }

      numerator = sum_years + (sum_months/12);
      result = (numerator/denominator).toFixed(2);

    // Reusing the method 'message' to this if/else statement.
    if(this.state.creditor_ca[0] !== [] && result < 5) {
      return (this.message('red', result))
    }
    else if(this.state.creditor_ca[0] !== [] && result <= 7) {
      return (this.message('yellow', result))
    }
    else if(this.state.creditor_ca[0] !== [] && result > 7) {
      return (this.message('green', result))
    }
    else {
      return (<h2 className="center">Unable to calculate the average, because you have 0 opened accounts.</h2>)
    }
  };

  // The message receives the color and the variable result.
  message(color, result) {
    return (<h2 className="center">Average age of open accounts: <span className={color}>{result} yrs</span></h2>)
  };

  // If data, render table header.
  headerCreditAge() {
    if(this.state.creditor_ca[0] !== []) {
      return (
        <tr>
          <th className="t-title factor-info">Creditor</th>
          <th className="t-title factor-info">Type of Account</th>
          <th className="t-title factor-info">Age of Account</th>
        </tr>
      );
    }
  }

  // If data, render another componet (which is the index of Credit Age).
  headerAgeTable() {
    if(this.state.creditor_ca[0] !== []) {
      return (<AgeTable />)
    };
  }

  render() {
    return (
      <div id="credit-age" className="flex-1">
        <h4 className="center blue">Credit Age</h4>
          {this.ageAverage()}
          {this.headerAgeTable()}
        <table className="dark">
          <tbody>
          {this.headerCreditAge()}
          {this.tableCreditAge()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CreditAge;