import React, { Component } from 'react';
import iamge from '../Assets/companyImg.jpg';
import '../../src/Componets/About.css'
class About extends Component {
  render() {

    return (
      <div className="about-main" id ="about">
         <h2>About</h2>
         <div className = "about">
         <div className = "right">
         <img className ="image" src={iamge}/>
         </div>
       
         <div className = "left">
         <h2>left</h2>
         </div>

         </div>
         
      </div>
    );
  }
}

export default About;