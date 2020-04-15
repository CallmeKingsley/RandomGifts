import React, { Component } from 'react'
import '../Componets/Welcome.css'
import image from '../../src/Assets/test.jpg'
class Welcome extends Component {
  render () {
    return (
      <div className='Welcome' id='home'>

        <img className='main' src={image} />
        <div className='blurEffect'>
          <div className='info'>
            <h1> welcome to random gifts</h1>
            <h3> our goal is to surprise you woth randoms gifts</h3>
            <h3> we put excitement in mail</h3>
            <button className='Big-btn-login'>LOGIN</button>
            <button className='Big-btn-signup'>SIGN UP</button>
          </div>
          <div className='animatedVideo'>
            <h1>Video Explanation</h1>
          </div>

        </div>
      </div>
    )
  }
}

export default Welcome
