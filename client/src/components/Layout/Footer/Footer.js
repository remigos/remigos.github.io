import React from 'react'
import logo from '../../../assets/FooterLogo.png'
import {Container,FooterTop,Image, LinkContent, Title, Links, FooterBottom,LinkContainer, Text, IconContent, IconImg, Icon} from './Footer.elements'
import Youtube from '../../../assets/Icon/Youtube.png';
import Fb from '../../../assets/Icon/Facebook.png';
import In from '../../../assets/Icon/Linkedin.png';
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <Container>
            <FooterTop>
                <Image src={logo} alt="logo"/>
                <LinkContainer>
                    <LinkContent>
                        <Title>Company</Title>
                        {/*<Links href='/dev-website'>About</Links>*/}
                        <NavLink to='/contact-us' className="nav_link">Support</NavLink>
                        <NavLink to='/faq' className="nav_link">FAQ</NavLink>
                        <NavLink to='/contact-us' className="nav_link">Contact Us</NavLink>
                    </LinkContent>
                    <LinkContent>
                        <Title>Legal</Title>
                        <Links href='https://app.remigo.com/privacy'>Privacy policy</Links>
                        <NavLink to='/terms-and-conditions' className="nav_link">Terms and conditions</NavLink>
                    </LinkContent>
                    <LinkContent>
                        <Title>Social</Title>
                        <IconContent>
                            <IconImg onClick={()=> window.open('https://www.facebook.com/Remigo-105827138405830', '_blank')}>
                                <Icon src={Fb} alt="Facebook"/>
                            </IconImg>
                            <IconImg onClick={()=> window.open('https://www.linkedin.com/company/remigo/', '_blank')}>
                                <Icon src={In} alt="Linkedin"/>
                            </IconImg>
                            <IconImg>
                                <Icon src={Youtube} alt="Youtube"/>
                            </IconImg>
                        </IconContent>
                    </LinkContent>
                </LinkContainer>
            </FooterTop>
            <FooterBottom>
                <Text>
                    © Remigo, Copyright {new Date().getFullYear()}
                </Text>
            </FooterBottom>
        </Container>
    )
}

export default Footer
