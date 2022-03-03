import React, { useState } from 'react'
import { Nav, LeftContainer, RightContainer, Image, ButtonSignIn, ButtonRegister } from './Navbar.elements'
import Logo from '../../../assets/Logo.png'
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom'
import './navbar.css'
import Menu from '../../../assets/Vector.png'
import Close from '../../../assets/close.png'

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
                  to="/"
                  onClick={closeMenu}
                >
                <p>Home</p>
                  
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                  className="navbar__link"
                  activeClassName="navbar__link--active"
                  to="/realtors"
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
                  to="/buyers"
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
                to="/about-us"
              >
              <p>
              About
              </p>
              </NavLink>
              </li>
            </LeftContainer>
            <RightContainer>
                <Stack spacing={2} direction="row">
                    <ButtonSignIn>Sign In</ButtonSignIn>
                    <ButtonRegister>Register Now</ButtonRegister>
                </Stack>
            </RightContainer>
            </ul>
        </Nav>
    )
}

export default Navbar
