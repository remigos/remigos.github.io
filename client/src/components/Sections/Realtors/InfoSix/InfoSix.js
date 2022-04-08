import React from 'react'
import { Subtitle, Text } from '../../../../globalStyles.js'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage, Image, Image1, Content } from './InfoSix.elements'
import bg from '../../../../assets/Realtors/Bg6.png'
import view from '../../../../assets/Realtors/ShadowView.png'
import invite from '../../../../assets/Realtors/Invite.png'
import Fade from 'react-reveal'
const InfoSixRealtors = () => {
    return (
        <Container>
            <Content>
                <LeftContainer>
                    <ImageContainer>
                        <Fade left cascade>
                        <BackgroundImage src={bg}/>   
                        <Image src={view} alt="img"/>
                        <Image1 src={invite}/>
                        </Fade>
                    </ImageContainer>
                </LeftContainer>
                <RightContainer>
                    <Fade right>
                        <Subtitle>How To Get Started</Subtitle>
                    </Fade>
                    <Fade right delay={200}>
                        <Text>Register on Remigo as a real estate agent and start inviting clients right away. It’s free for buyers and sellers to join and there is no obligation to continue using Remigo.</Text>
                    </Fade>
                    <Fade right delay={400}>
                        <Text>Once your client’s accept your invitation, by making an account on Remigo and accepting your request, you can start chatting and building out custom property searches.</Text>
                    </Fade>     
              </RightContainer>
            </Content>
        </Container>
    )
}

export default InfoSixRealtors