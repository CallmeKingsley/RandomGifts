import React, { Component } from 'react';
import '../App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../Assets/LOGO.png'
const Navigation = () => {
  

    return (
        <div>
        <div className="nav">
          
        <ul className="Nav-list">
          <li className="">
          
            <AnchorLink offset='100' className="we" href="#home">Welcome</AnchorLink>
          </li>
          <li className="">
            <AnchorLink offset='100' className="we" href="#workings">How it Works</AnchorLink>
          </li>
          <li className="">
            <AnchorLink  offset='100' className="we" href="#about">About</AnchorLink>
          </li>
          
        </ul>
      </div>
     
      </div>
    );
  
}

export default Navigation;