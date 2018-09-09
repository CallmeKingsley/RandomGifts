import React, { Component } from 'react';
import '../../src/App.css'
import '../../src/Componets/CustomerFeedback.css'

class CustomerFeedBack extends Component {
  render() {

    return (
      <div className = 'CustomerFeedback-main'>
       <h1>Customer Feedback</h1>
      <div className="CustomerFeedback" id = "feeedback">
         <div className = 'feedboard'><h1>Talk one</h1></div>
         <div className = 'feedboard'><h1>Talk two</h1></div>
         <div className = 'feedboard'><h1>Talk three</h1></div>
         <div className = 'feedboard'><h1>Talk four</h1></div>
         <div className = 'feedboard'><h1>Talk five</h1></div>
      </div>
      </div>
    );
  }
}

export default CustomerFeedBack;