import React from 'react'
import logo from '../../assets/lightblueLogo.png'
import {FooterContainer,FooterLogo,Image} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo>
                <Image src={logo} alt='logo'/>
            </FooterLogo>
        </FooterContainer>
    )
}

export default Footer
