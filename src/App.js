import React, { Component } from 'react'
import './App.css'
import Home from './Componets/Home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CustomerFeedback from './Componets/CustomerFeedback'
import Login from './Componets/Login'
class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Home />
          <Route path='/login' component={Login} />
        </div>

      </Router>
    )
  }
}

export default App
