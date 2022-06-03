import React from 'react'
import NavLinks from './NavLinks'
import HamburgerIcon from '../images/icon-hamburger.svg'
import CloseIcon from '../images/icon-close.svg'
import { useState } from 'react'

const NavigationMobile = () => {
  const [opened, setOpened] = useState(false);

  const hamburger = <img className="hamburger-icon" 
                      src={HamburgerIcon} 
                      alt="Hamburger menu"
                      onClick={() => setOpened(!opened)}
                    />

  const close = <img className="close-icon" 
                    src={CloseIcon} 
                    alt="Close hamburger menu"
                    onClick={() => setOpened(!opened)}
                  />

  const closeMobileMenu = () => setOpened(false);

  return (
    <nav className='navigation-mobile'>
        {opened ? close : hamburger}
        {opened && <NavLinks 
                        opened={opened}
                        closeMobileMenu={closeMobileMenu} 
                    />
        }
    </nav>
  )
}

export default NavigationMobile