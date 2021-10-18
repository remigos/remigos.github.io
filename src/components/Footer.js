import React from 'react'
import logo from '../images/lightblueLogo.png'
import styled from 'styled-components'
import fb from '../images/fbIcon.svg'
import li from '../images/liIcon.svg'

const FooterContainer = styled.div`
    background-color: #1F2936;
    padding: 2.5rem 0 2rem 0;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`
const FooterLogo = styled.div`
    justify-content:center;
    align-items:center;
`
const Image = styled.img`
    width:160px;
    height:auto;
    @media screen and (max-width:768px){
        width:130px;
    }
`
const SocialIcons = styled.div`
    margin-top: 10px;
    justify-content:space-between;
    align-items:center;
    transition: transform 0.25s ease-out;
    a {
        text-decoration: none;
        margin-right: 20px;
        margin-left: 20px;
        color: #fff;
        font-size: 16px;
        cursor:pointer;
        transition-duration: 0.3s;

    }
`
const Button = styled.button`
    border:none;
    background:transparent;
    width: 55px;
    height: auto;
    cursor:pointer;
    position:relative;
     img {
         width:38px;
         height:auto;
     }
`
const Copyright = styled.div`
    margin-top: 15px;
    justify-content:center;
    align-items:center;
    small {
        color:#fff;
        opacity:0.4;
        text-align:center;
    }
`
const date = new Date().getFullYear();
const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo>
                <Image src={logo} alt='logo'/>
            </FooterLogo>
            <SocialIcons>

                <Button onClick={()=> window.open('https://www.facebook.com/Remigo-105827138405830', '_blank')}><img src={fb} alt='fb-icon'/></Button>
                <Button onClick={()=> window.open('https://www.linkedin.com/company/remigo/', '_blank')}><img src={li} alt='li-icon'/></Button>
            </SocialIcons>
            <Copyright>
                <small>&copy; Copyright {date}, Remigo, LLC</small>
            </Copyright>
        </FooterContainer>
    )
}

export default Footer;