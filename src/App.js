import React, { Component } from 'react';
import './App.css';

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
              <a className="" href="#portfolio">Home</a>
            </li>
            <li className="">
              <a className="" href="#about">About</a>
            </li>
            <li className="">
              <a className="" href="#contact">service</a>
            </li>
            <li className="">
              <a className="" href="#footer">Contact</a>
            </li>
          </ul>
        </div>
        <div className="signup">
             <h2>sign up</h2>
        </div>
        </header>
        </div>
        <div className = "test">section1</div>
        <div className = "test">section2</div>
        <div className = "test">section3</div>
        <div className = "test">section4</div>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
