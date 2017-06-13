import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import HelpCenter from './components/Help_Center';
import MyAccount from './components/My_Account';
import CreditAge from './components/creditfactors/Credit_Age';
import CreditCardUse from './components/creditfactors/Credit_Card_Use';
import DerogatoryMarks from './components/creditfactors/Derogatory_Marks';
import HardInquiries from './components/creditfactors/Hard_Inquiries';
import PaymentHistory from './components/creditfactors/Payment_History';
import TotalAccounts from './components/creditfactors/Total_Accounts';
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
  render() {
    return (
    <Router>
     <div className="wrapper">
      <Navigation />
        <Switch>
          <Route path="/" exact component={() => (<Dashboard />) }/>
          <Route path="/help-center" exact component={() => (<HelpCenter />) }/>
          <Route path="/my-account" exact component={() => (<MyAccount />) }/>
          <Route path="/#credit-age" exact component={() => (<CreditAge />) }/>
          <Route path="/#credit-card-use" exact component={() => (<CreditCardUse />) }/>
          <Route path="/#derogatory-marks" exact component={() => (<DerogatoryMarks />) }/>
          <Route path="/#hard-inquiries" exact component={() => (<HardInquiries />) }/>
          <Route path="/#payment-history" exact component={() => (<PaymentHistory />) }/>
          <Route path="/#total-accounts" exact component={() => (<TotalAccounts />) }/>
          <Route path="/*" component={() => (<FourOFour />) }/>
        </Switch>
     </div>
    </Router>
    );
  }
}

export default App;
