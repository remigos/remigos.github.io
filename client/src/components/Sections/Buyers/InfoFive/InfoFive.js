import React from 'react'
import InfoOne from '../../../../images/Buyer/InfoFive.jpg'
import { Subtitle, Text } from '../../../globalStyles'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage,Content } from './InfoFive.elements'
import Fade from 'react-reveal'

const InfoFiveRealtors = () => {
    return (
        <Container>
            <Content>
                <LeftContainer>
                    <Fade left>
                        <Subtitle>Get Started Today</Subtitle>
                    </Fade>
                    <Fade left delay={300}>
                        <Text>Whether you’re a buyer or a seller you can join and invite your REALTOR or be invited by your REALTOR. Regardless, easily set up an account with just basic information and start using Remigo absolutely free.</Text>
                    </Fade>
                </LeftContainer>
                <RightContainer>
                    <ImageContainer>
                        <Fade right>
                            <BackgroundImage src={InfoOne} alt="Invite"/>
                        </Fade>
                    </ImageContainer>   
                 </RightContainer>
            </Content>
        </Container>
    )
}

export default InfoFiveRealtors
