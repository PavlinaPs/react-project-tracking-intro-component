import React from 'react'
import Logo from '../images/logo.svg'
import Navigation from './Navigation'
import NavigationMobile from './NavigationMobile'


const Header = () => {
  return (
    <div className="intro__header">
        <img className="header__logo" src={Logo} alt="logo" />
        <Navigation />
        <NavigationMobile/>
    </div>
  )
}

export default Header