import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '././../App.css'
import Welcome from './Welcome'
import About from './About'
import HowWork from './Workings'
import Navigation from './Navigation'
import logo from '../Assets/LOGO.png'
import Login from './Login'
class Home extends Component {
  render () {
    return (
      <div className='App'>
        <div className='header'>
          <header className='App-header'>

            <div className='logo'>
              <img className='logo' src={logo} />
            </div>
            <Navigation />
            <div className='signupLogin'>
              <Link to='/login'><button className='login'>LOGIN</button></Link>
              <Link to='/about'>About</Link>
              <button className='signup'>SIGN UP</button>
            </div>

          </header>
          <div className='handBurger'>
            <label for='toggle'>&#9776;</label>
            <input type='checkbox' id='toggle' />
            <div className='test21'>
              <div className='logo'>
                <img className='logo' src={logo} />
              </div>
              <Navigation />
              <div className='signupLogin'>

                <Link to='/login'><button className='login'>LOGIN</button></Link>
                <button className='signup'>SIGN UP</button>

              </div>
            </div>
          </div>
        </div>
        <Welcome />
        <HowWork />
        <About />

        <footer className='footer' id='contact'>
          <div className='main-footer'>
            <div>
              <p>Terms of Service</p>
              <p>privacy policy</p>
            </div>
            <div>
              <p>Sign up</p>
              <p>Login</p>
              <p>contact</p>
            </div>

          </div>
        </footer>

      </div>
    )
  }
}

export default Home
