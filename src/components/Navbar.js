import React from 'react'
import logo from '../images/lightblueLogo.png'
import styled from 'styled-components'
import { Link } from "gatsby"

const Container = styled.div`
    z-index: 1;
    width:100%;
    max-width:1300px;
    margin-right: auto;
    margin-left:auto;
    padding-right: 50px;
    padding-left:50px;

    @media screen and (max-width:991px){
        padding-right: 30px;
        padding-left:30px;
    }
`

const Nav = styled.nav`
    background: #1F2936;
    height:150px;
    display:flex;
    justify-content: center;
    align-items: center;
    top:0;
    z-index:999;
    @media screen and (max-width:768px){

    }
    
`
const NavbarContainer = styled(Container)`
    display: flex;
    justify-content:space-between;
    height: 80px;
    ${Container}

`;

const NavLogo = styled(Link)`
    color:#fff;
    justify-self: flex-start;
    cursor:pointer;
    text-decoration:none;
    display:flex;
    align-items:center;
    
    img {
        width:160px;
    }
    @media screen and (max-width:768px){
        justify-self: center;
        justify-content:center;
        margin-right:auto;
        margin-left:auto;
        img {
        width:130px;
        margin-top:-30px;
    }
    }

`
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