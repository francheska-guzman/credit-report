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
      first_name: null,
      last_name: null,
      date_of_birth: null,
      gender: null,
      marital_status: null,
      annual_household_income: null
    }
    this.getUserData = this.getUserData.bind(this);
  }

  getUserData(id){
    console.log(id);
    axios.get(`https://creditreportapi.herokuapp.com/personalfinancial/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <Router>
       <div className="wrapper">
        <Navigation />
          <Switch>
          <Route path="/" exact component={() => (<Dashboard 
          getUserData={this.getUserData} />) }/>
          <Route path="/help-center" exact component={() => (<HelpCenter 
          />) }/>
          <Route path="/my-account" exact component={() => (<MyAccount 
          />) }/>
          <Route path="/*" component={() => (<FourOFour />) }/>
          </Switch>
        <Footer />
       </div>
      </Router>
    );
  }
}

export default App;
