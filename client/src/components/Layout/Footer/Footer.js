import React from 'react'
import logo from '../../../images/FooterLogo.png'
import {Container,FooterTop,Image, LinkContent, Title, Links, FooterBottom,LinkContainer, Text, IconContent, IconImg, Icon} from './Footer.elements'
import Youtube from '../../../images/Icon/Youtube.png';
import Fb from '../../../images/Icon/Facebook.png';
import In from '../../../images/Icon/Linkedin.png';
import './Footer.css'
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color:#fff;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    padding: 10px 0;
    :hover {
    color: #00AEFF;
}
`

const Footer = () => {
    return (
        <Container>
            <FooterTop>
                <Image src={logo} alt="logo"/>
                <LinkContainer>
                    <LinkContent>
                        <Title>Company</Title>
                        {/*<Links href='/dev-website'>About</Links>*/}
                        <NavItem to='/contact-us' className="nav_link">Support</NavItem>
                        <NavItem to='/faq' className="nav_link">FAQ</NavItem>
                        <NavItem to='/contact-us' className="nav_link">Contact Us</NavItem>
                    </LinkContent>
                    <LinkContent>
                        <Title>Legal</Title>
                        <Links href='https://app.remigo.com/privacy'>Privacy policy</Links>
                        <NavItem to='/terms-and-conditions' className="nav_link">Terms of Use</NavItem>
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
                            <IconImg onClick={()=> window.open('https://www.youtube.com/channel/UCHF8fqCVN9yOci2gRhlf5-g', '_blank')}>
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