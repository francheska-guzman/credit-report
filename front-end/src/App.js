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

// The parent component, App.js, will set the state of all data received from the axios call.
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: false,
      id: null,
      first_name: null,
      middle_name: null,
      last_name: null,
      date_of_birth: null,
      place_of_birth: null,
      gender: null,
      marital_status: null,
      annual_household_income: null,
      street_address: null,
      apartment: null,
      city: null,
      state: null,
      zip_code: null,
      telephone_number: null,
      email: null,
      public_record: null,
      user_credit_score: null,
      state_average_score: null,
      account_type: [],
      opened: [],
      creditor: [],
      credit_limit: [],
      credit_use: [],
      current_status: [],
      collection: [],
      collection_agency: [],
      amount_paid_to_collection: [],
      payment_history: [],
      inq_creditor: [],
      inq_account_type: [],
      posted: []
    }
    this.getUserData = this.getUserData.bind(this);
    this.getHardInquiries = this.getHardInquiries.bind(this);
    this.signOff = this.signOff.bind(this);
  }

  getUserData(id){
  // Making an axios call to my api.
  // The first part of the url was added because of a cross-origin browser issue.
  // The instructor Joe helped me to figured out this problem.
    axios.get(`https://accesscontrolalloworiginall.herokuapp.com/https://creditreportapi.herokuapp.com/personalfinancial/${id}`)
    .then((res) => {

      // Creating temporary variables to be using later for set state.
      var account_type = [];
      var opened = [];
      var creditor = [];
      var credit_limit = [];
      var credit_use = [];
      var current_status = [];
      var collection = [];
      var collection_agency = [];
      var amount_paid_to_collection = [];
      var payment_history = [];

      // Looping through the data received from the api.
      for (var i = 0; i < res.data.data.length; i += 1) {

        // Inserting payments that are related to the same account, into a single array.
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
        collection.push(res.data.data[i].collection)
        collection_agency.push(res.data.data[i].collection_agency)
        amount_paid_to_collection.push(res.data.data[i].amount_paid_to_collection)
        payment_history.push(payments)

      }
      this.setState({
        user: true,
        id: id,
        first_name: res.data.data[0].first_name,
        middle_name: res.data.data[0].middle_name,
        last_name: res.data.data[0].last_name,
        date_of_birth: res.data.data[0].date_of_birth,
        place_of_birth: res.data.data[0].place_of_birth,
        gender: res.data.data[0].gender,
        marital_status: res.data.data[0].marital_status,
        annual_household_income: res.data.data[0].annual_household_income,
        street_address: res.data.data[0].street_address,
        apartment: res.data.data[0].apartment,
        city: res.data.data[0].city,
        state: res.data.data[0].state,
        zip_code: res.data.data[0].zip_code,
        telephone_number: res.data.data[0].telephone_number,
        email: res.data.data[0].email,
        public_record: res.data.data[0].public_record,
        user_credit_score: res.data.data[0].user_credit_score,
        state_average_score: res.data.data[0].state_average_score,
        account_type: account_type,
        opened: opened,
        creditor: creditor,
        credit_limit: credit_limit,
        credit_use: credit_use,
        current_status: current_status,
        collection: collection,
        collection_agency: collection_agency,
        amount_paid_to_collection: amount_paid_to_collection,
        payment_history: payment_history
      })
      this.getHardInquiries();
    })
    .catch((error) => {
      console.log(error);
    });
   }

   // Getting the hard inquiries information.
   getHardInquiries() {
   	// Making an axios call to hard inquiries.
    axios.get(`https://accesscontrolalloworiginall.herokuapp.com/https://creditreportapi.herokuapp.com/hardinquiries/${this.state.id}`)
    .then((res) => {
       var inq_creditor = [];
       var inq_account_type = [];
       var posted = []; 

        // Looping through the data received from the api.
        for (var n = 0; n < res.data.data.length; n += 1) {
          inq_creditor.push(res.data.data[n].inq_creditor)
          inq_account_type.push(res.data.data[n].account_type)
          posted.push(res.data.data[n].posted) 
        }

      this.setState({
        inq_creditor: inq_creditor,
        inq_account_type: inq_account_type,
        posted: posted
      })
    })
  }

  signOff(){
    // When user click Sign Off, the state turn to false. I will be using this state
    // to show/hide information.
    this.setState({
      user: false
    });
  }

  componentDidMount() {
    <Dashboard state={this.state} />
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
              <Route process.env.PUBLIC_URL + '/' exact component={() => 
                  (<App />) }/>
              <Route path="/help-center" exact component={() => 
                  (<HelpCenter />) }/>
              <Route path="/my-account" exact component={() => 
                  (<MyAccount signOff={this.signOff}
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
