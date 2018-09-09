import React, { Component } from 'react';
import '../../src/App.css';
import '../../src/Componets/Workings.css';

class Workings extends Component {
  render() {

    return (
      <div className="working-main">
      <h1>How it works</h1>
      <div className="working" id ="workings">
      
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
  
      </div>
      </div>
    );
  }
}

export default Workings;