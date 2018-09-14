import React, { Component } from 'react';

import '../../src/Componets/Workings.css';
import first from '././../Assets/first.png'
import second from '././../Assets/second.png'
import third from '././../Assets/third.png'
import fourth from '././../Assets/fourth.png'
class Workings extends Component {
  render() {

    return (
      <div className="working-main">
      <h2>How It works</h2>
      <div className="working" id ="workings">
      
        <div className="box">
        <img className ="display" src={first}/>
        <div className = "moreInfo">
         <h2>FILL IN THE FORM</h2>
        </div>
        </div>
        <div className="box">
        <img className ="display" src={second}/>
        <div className = "moreInfo">
        <h2> ALGORITHM GENERATE GIFT </h2>

        </div>
        </div>
        <div className="box">
        <img className ="display" src={third}/>
        <div className = "moreInfo">
        <h2>WE HAND PICK IT</h2>
        </div>
        </div>
        <div className="box">
        <img className ="display" src={fourth}/>
        <div className = "moreInfo">
        <h2> MAIL IT TO YOU</h2>
      
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Workings;