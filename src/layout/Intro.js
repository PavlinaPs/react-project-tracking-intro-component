import React from 'react'
import Header from './Header'
import Illustration from '../images/illustration-devices.svg'
import Main from './Main'

const Intro = () => {
  return (
    <div className="intro">
        <Header />
        <div className="intro__grid-container">
          <img className="intro__image" src={Illustration} alt="illustration of devices"  />
          <Main />
        </div>
    </div>
  )
}

export default Intro