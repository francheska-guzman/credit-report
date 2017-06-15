import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import HelpCenter from './components/Help_Center';
import MyAccount from './components/My_Account';
import FourOFour from './components/Four_o_Four';
import {
        BrowserRouter as Router,
        Route,
        Switch
        } from 'react-router-dom';
import './App.css';
import axios from 'axios';

console.log("App.js is working.");

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: false,
      id: null,
      first_name: null,
      last_name: null,
      date_of_birth: null,
      place_of_birth: null,
      gender: null,
      marital_status: null,
      annual_household_income: null,
      account_type: [],
      opened: [],
      creditor: [],
      credit_limit: [],
      credit_use: [],
      current_status: [],
      payment_history: []
    }
    this.getUserData = this.getUserData.bind(this);
    this.signOff = this.signOff.bind(this);
  }

  getUserData(id){
    axios.get(`https://accesscontrolalloworiginall.herokuapp.com/https://creditreportapi.herokuapp.com/personalfinancial/${id}`)
    .then((res) => {

      var account_type = [];
      var opened = [];
      var creditor = [];
      var credit_limit = [];
      var credit_use = [];
      var current_status = [];
      var payment_history = [];

      for (var i = 0; i < res.data.data.length; i += 1) {

        var payments = 
        [res.data.data[i].jan, res.data.data[i].feb, res.data.data[i].mar, 
        res.data.data[i].apr, res.data.data[i].may, res.data.data[i].jun, 
        res.data.data[i].jul, res.data.data[i].aug, res.data.data[i].sep, 
        res.data.data[i].oct, res.data.data[i].nov, res.data.data[i].dec];

        account_type.push(res.data.data[i].account_type)
        opened.push(res.data.data[i].opened)
        creditor.push(res.data.data[i].creditor)
        credit_limit.push(res.data.data[i].credit_limit)
        credit_use.push(res.data.data[i].credit_use)
        current_status.push(res.data.data[i].current_status)
        payment_history.push(payments)

      }
      this.setState({
        user: true,
        id: id,
        first_name: res.data.data[0].first_name,
        last_name: res.data.data[0].last_name,
        date_of_birth: res.data.data[0].date_of_birth,
        place_of_birth: res.data.data[0].place_of_birth,
        gender: res.data.data[0].gender,
        marital_status: res.data.data[0].marital_status,
        annual_household_income: res.data.data[0].annual_household_income,
        account_type: account_type,
        opened: opened,
        creditor: creditor,
        credit_limit: credit_limit,
        credit_use: credit_use,
        current_status: current_status,
        payment_history: payment_history
      })
      //console.log(this.state.account_type);
      //console.log(this.state.opened);
      //console.log(this.state.creditor);
      //console.log(this.state.credit_limit);
      //console.log(this.state.credit_use);
      //console.log(this.state.current_status);
      //console.log(this.state.payment_history);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  signOff(){
    this.setState({
      user: false
    });
  }

  render() {
    return (
      <Router>
       <div className="wrapper">
        <Navigation getUserData={this.getUserData}
                    signOff={this.signOff}
                    state={this.state}
                    />
          <Switch>
          <Route path="/" exact component={() => (<Dashboard 
                    state={this.state} />) }/>
          <Route path="/help-center" exact component={() => (<HelpCenter 
                    />) }/>
          <Route path="/my-account" exact component={() => (<MyAccount 
                    signOff={this.signOff}
                    state={this.state} />) }/>
          <Route path="/*" component={() => (<FourOFour />) }/>
          </Switch>
        <Footer />
       </div>
      </Router>
    );
  }
}

export default App;
