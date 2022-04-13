import React, { useState } from 'react'
import { Nav, LeftContainer, RightContainer, Image, ButtonSignIn, ButtonRegister } from './Navbar.elements'
import Logo from '../../../assets/Logo.png'
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom'
import './navbar.css'
import Menu from '../../../assets/Icon/Hamburger.png'
import Close from '../../../assets/Icon/close.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	}; 
    return (
        <Nav>
            <div onClick={handleClick} className="nav-icon">
                {open ? <img src={Close} alt="close" width="25"/> : <img src={Menu} alt="Menu" width="25" />}
            </div>
            <Image src={Logo} alt='logo'/>
            <ul className={open ? 'nav-links active' : 'nav-links'}>  
            <LeftContainer>
                <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                  to="/dev-website"
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                  className="navbar__link"
                  activeClassName="navbar__link--active"
                  to="/dev-website/realtors"
                  onClick={closeMenu}
                >
                    <p>
                        REALTORS
                  </p>
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                  to="/dev-website/buyers"
                >
                    <p>
                        Buyers
                    </p>
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/dev-website/about-us"
              >
              <p>
              About
              </p>
              </NavLink>
              </li>
            </LeftContainer>
            <RightContainer>
                <Stack spacing={2} direction="row">
                    <ButtonSignIn onClick={()=> window.open("https://app.remigo.com/login", "_blank")}>Sign In</ButtonSignIn>
                    <ButtonRegister onClick={()=> window.open("https://app.remigo.com/onboarding", "_blank")}>Register Now</ButtonRegister>
                </Stack>
            </RightContainer>
            </ul>
        </Nav>
    )
}

export default Navbar
