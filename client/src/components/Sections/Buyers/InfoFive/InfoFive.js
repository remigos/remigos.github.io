import React from 'react'
import InfoOne from '../../../../assets/Buyer/InfoFive.png'
import { Subtitle, Text } from '../../../../globalStyles'
import { BottomContent } from '../../../commons/BuyerRealtor/Row/Row.elements'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage } from './InfoFive.elements'
import Fade from 'react-reveal'

const InfoFiveRealtors = () => {
    return (
        <Container>
            <BottomContent>
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
                            <BackgroundImage src={InfoOne} alt="img"/>
                        </Fade>
                    </ImageContainer>   
                 </RightContainer>
            </BottomContent>
        </Container>
    )
}

export default InfoFiveRealtors
