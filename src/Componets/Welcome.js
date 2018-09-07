import React, { Component } from 'react';
import '../../src/App.css';
import '../Componets/Welcome.css';
import image from '../../src/Assets/fun.jpg';
class Welcome extends Component {
  render() {

    return (
      <div className="Welcome" id ="home">
       
        <img className ="img" src={image}/>
       <div className ="blurEffect">
        <div className = "info">
         <h3> welcome to random gifts</h3>
         <h3> our goal is to surprise you woth randoms gifts</h3>
         <h3> we put excitement in mail</h3>
         <h1>
           Sign up now
         </h1>
        </div>
        <div className = "animatedVideo">
          <h1>Video Explanation</h1>
        </div>

       </div>
      </div>
    );
  }
}

export default Welcome;
