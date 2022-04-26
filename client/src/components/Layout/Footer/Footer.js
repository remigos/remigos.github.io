import React from 'react'
import logo from '../../../assets/FooterLogo.png'
import {Container,FooterTop,Image, LinkContent, Title, Links, FooterBottom,LinkContainer, Text, IconContent, IconImg, Icon} from './Footer.elements'
import Youtube from '../../../assets/Icon/Youtube.png';
import Fb from '../../../assets/Icon/Facebook.png';
import In from '../../../assets/Icon/Linkedin.png';

const Footer = () => {
    return (
        <Container>
            <FooterTop>
                <Image src={logo} alt="logo"/>
                <LinkContainer>
                    <LinkContent>
                        <Title>Company</Title>
                        {/*<Links href='/dev-website'>About</Links>*/}
                        <Links href='/dev-website/contact-us'>Support</Links>
                        <Links href='/dev-website/faq'>FAQ</Links>
                        <Links href='/dev-website/contact-us'>Contact Us</Links>
                    </LinkContent>
                    <LinkContent>
                        <Title>Legal</Title>
                        <Links href='https://app.remigo.com/privacy'>Privacy policy</Links>
                        <Links href='/dev-website/terms-and-conditions'>Terms and conditions</Links>
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
