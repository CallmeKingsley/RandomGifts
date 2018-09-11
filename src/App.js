import React, { Component } from 'react';
import './App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Welcome from './Componets/Welcome';
import Service from './Componets/Services';
import Workings from './Componets/Workings';
import Navigation from './Componets/Navigation';
import logo from './Assets/LOGO.png';
import About from './Componets/About'

import CustomerFeedback from './Componets/CustomerFeedback';
class App extends Component {
  render() {
    return (
      <div className="App">
       <div className = "header">
        <header className="App-header">
        
        <div className="logo">
        <img className ="logo" src={logo}/>
        </div>
        <Navigation/>
        <div className="signupLogin">
          <button className = "signup">login</button>
          <button className = "signup">signup</button>
        </div>
        
        </header>
        <div className ="handBurger">
          <label for ="toggle">&#9776;</label>
          <input type ='checkbox'  id="toggle"/>
           <div className = 'test21'>
              <div className="logo">
              <img className ="logo" src={logo}/>
           </div>
        <Navigation/>
        <div className="signupLogin">
         
         <button className = "signup">login</button>
         <button className = "signup">signup</button>
 
       </div>
        </div>
        </div>
        </div>
         <Welcome/>
         <Workings/>  
         <About/>
         <footer  className ="footer" id = "contact">
          <div>
          <h1>footer</h1>
      
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
