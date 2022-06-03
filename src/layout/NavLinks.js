import React from 'react'

const NavLinks = (props) => {
  return (
    <ul className='nav-links'>
        <li onClick={() => props.opened && props.closeMobileMenu()}>
          <a href="#">Product</a>
        </li>
        <li onClick={() => props.opened && props.closeMobileMenu()}>
          <a href="#">Features</a>
        </li>
        <li onClick={() => props.opened && props.closeMobileMenu()}>
          <a href="#">Pricing</a>
        </li>
        <li className='nav__divider'></li>
        <li onClick={() => props.opened && props.closeMobileMenu()}>
          <a href="#">Login</a>
        </li>
    </ul>
  )
}

export default NavLinks