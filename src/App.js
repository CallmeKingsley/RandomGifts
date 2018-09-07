import React, { Component } from 'react';
import './App.css';

import Welcome from './Componets/Welcome'
import Service from './Componets/Services'
import Workings from './Componets/Workings'
import CustomerFeedback from './Componets/CustomerFeedback'
class App extends Component {
  render() {
    return (
      <div className="App">
       <div className = "header">
        <header className="App-header">
        
        <div className="logo">
             <h2>Logo</h2>
        </div>
        <div className="nav">
          
          <ul className="Nav-list">
            <li className="">
              <a className="" href="#home">Home</a>
            </li>
            <li className="">
              <a className="" href="#about">About</a>
            </li>
            <li className="">
              <a className="" href="#service">service</a>
            </li>
            <li className="">
              <a className="" href="#workings">How it Works</a>
            </li>
            <li className="">
              <a className="" href="#footer">Contact</a>
            </li>
          </ul>
        </div>
        <div className="signup">
          <h2>login/sign up</h2>
        </div>
        
        </header>
        <div className ="handBurger">
          <label for ="toggle">&#9776;</label>
          <input type ='checkbox'  id="toggle"/>
           <div className = 'test21'>
              <div className="logo">
             <h2>Logo</h2>
        </div>
        <div className="nav">
          
          <ul className="Nav-list">
            <li className="">
              <a className="" href="#home">Home</a>
            </li>
            <li className="">
              <a className="" href="#about">About</a>
            </li>
            <li className="">
              <a className="" href="#service">service</a>
            </li>
            <li className="">
              <a className="" href="#workings">How it Works</a>
            </li>
            <li className="">
              <a className="" href="#footer">Contact</a>
            </li>
          </ul>
        </div>
        <div className="signup">
          <h2>login/sign up</h2>
        </div>
           </div>
        </div>
        </div>
         <Welcome/>
         <Service/>
         <Workings/>
         <CustomerFeedback/>
        <div className = "test"><h1>placeHolder</h1></div>
        <footer className = "test">
         <h2>footer</h2>
        </footer>
      </div>
    );
  }
}

export default App;
