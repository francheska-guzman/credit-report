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
      annual_household_income: null
    }
    this.getUserData = this.getUserData.bind(this);
    this.signOff = this.signOff.bind(this);
  }

  getUserData(id){
    axios.get(`https://accesscontrolalloworiginall.herokuapp.com/https://creditreportapi.herokuapp.com/personal/${id}`)
    .then((res) => {
      this.setState({
        id: id,
        first_name: res.data.data.first_name,
        last_name: res.data.data.last_name,
        date_of_birth: res.data.data.date_of_birth,
        place_of_birth: res.data.data.place_of_birth,
        gender: res.data.data.gender,
        marital_status: res.data.data.marital_status,
        annual_household_income: res.data.data.annual_household_income,
        user: true
      })
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
                    id={this.state.id} />) }/>
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
