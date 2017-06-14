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
  render() {
    return (
    <Router>
     <div className="wrapper">
      <Navigation />
        <Switch>
          <Route path="/" exact component={() => (<Dashboard />) }/>
          <Route path="/help-center" exact component={() => (<HelpCenter />) }/>
          <Route path="/my-account" exact component={() => (<MyAccount />) }/>
          <Route path="/*" component={() => (<FourOFour />) }/>
        </Switch>
      <Footer />
     </div>
    </Router>
    );
  }
}

export default App;
