import React from 'react'
import { StyleHeader } from '../styles/Header.styled'
import { Maincontainer } from '../styles/Containerstyle'
import Logo from '../logo'
import Navbar from '../mainnavigation/Navbar'



const Header = () => {

  return (
    <StyleHeader>
      <Maincontainer>
        <Logo />
        <Navbar />
      </Maincontainer>
    </StyleHeader>

  )
}

export default Header
