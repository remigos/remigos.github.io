import React, { useState } from 'react'
import { Nav, LeftContainer, RightContainer, Image, ButtonSignIn, ButtonRegister } from './Navbar.elements'
import Logo from '../../../images/Logo.png'
import Stack from '@mui/material/Stack';
import './navbar.css'
import Menu from '../../../images/Icon/Hamburger.png'
import Close from '../../../images/Icon/close.png'
import { Link } from "gatsby"
import styled from "styled-components"


const Navbar = () => {

  const NavItem = styled(Link)`
    text-decoration: none;
    width: 105px;
    height: 88px;
    border-bottom: 2px solid transparent;
    font-size: 14px;
    line-height: 20px;
    color: #374150;
    justify-content: center;
    display: flex;
    align-items: center;
  :after {
    position: absolute;
    color: transparent;
    background: #00AEEF;
    transition: all 0.4s ease-in;
    border-bottom: 2px solid #00AEEF;

  }

  :hover {
    color: #00AEFF;
    border-bottom: 2px solid #00AEFF;
  }
  
  @media screen and (max-width:768px) {
    align-items: left;

  }
  `

const LogoLink = styled(Link)`

`
  const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
  }; 
  
  function isActive( {isCurrent} ) {
    return isCurrent ? {className: "navbar__link--active"} : null
}

    return (
        <Nav>
            <div onClick={handleClick} className="nav-icon" aria-hidden="true">
                {open ? <img src={Close} alt="close" width="25"/> : <img src={Menu} alt="Menu" width="25" />}
            </div>
            <LogoLink to="/">           
             <Image src={Logo} alt='logo'/>
            </LogoLink>
            <ul className={open ? 'nav-links active' : 'nav-links'} end>  
            <LeftContainer>
                <li className="nav-item">
                <NavItem
                  getProps={isActive}
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </NavItem>
                </li>
                <li className="nav-item">
                <NavItem
                getProps={isActive}

                  to="/realtors"
                  onClick={closeMenu}
                >
                    <p>
                        REALTORS
                  </p>
                </NavItem>
                </li>
                <li className="nav-item">
                <NavItem
                getProps={isActive}

                  to="/buyers"
                  onClick={closeMenu}

                >
                    <p>
                        Buyers
                    </p>
                </NavItem>
                </li>
                <li className="nav-item">
                <NavItem
                getProps={isActive}

                to="/about-us"
                onClick={closeMenu}
              >
              <p>
              About
              </p>
              </NavItem>
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