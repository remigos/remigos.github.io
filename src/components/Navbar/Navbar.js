import React from 'react'
import { Nav, NavbarContainer,NavLogo } from './Navbar.elements'
import logo from '../../assets/lightblueLogo.png'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img src={logo} alt='logo'/>
                    </NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
