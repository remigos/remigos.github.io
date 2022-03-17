import React from 'react'
import logo from '../../../assets/FooterLogo.png'
import {Container,FooterTop,Image, LinkContent, Title, Links, FooterBottom,LinkContainer, Text, IconContent, IconImg, Icon} from './Footer.elements'
import Twitter from '../../../assets/Icon/Twitter.png';
import Youtube from '../../../assets/Icon/Youtube.png';
import Instagram from '../../../assets/Icon/Instagram.png';

const Footer = () => {
    return (
        <Container>
            <FooterTop>
                <Image src={logo} alt="logo"/>
                <LinkContainer>
                    <LinkContent>
                        <Title>Company</Title>
                        <Links href='/dev-website'>About</Links>
                        <Links href='/dev-website'>Support</Links>
                        <Links href='/dev-website'>FAQ</Links>
                        <Links href='/dev-website/contact-us'>Contact Us</Links>
                    </LinkContent>
                    <LinkContent>
                        <Title>Legal</Title>
                        <Links href='/dev-website/'>Privacy policy</Links>
                        <Links href='/dev-website/'>Terms and conditions</Links>
                    </LinkContent>
                    <LinkContent>
                        <Title>Social</Title>
                        <IconContent>
                            <IconImg>
                                <Icon src={Instagram} alt="Instagram"/>
                            </IconImg>
                            <IconImg>
                                <Icon src={Twitter} alt="Twitter"/>
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
                    © Remigo, Copyright 2021
                </Text>
            </FooterBottom>
        </Container>
    )
}

export default Footer
