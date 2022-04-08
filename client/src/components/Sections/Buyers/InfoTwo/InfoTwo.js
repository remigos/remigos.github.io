import React from 'react'
import { Subtitle, Text } from '../../../../globalStyles.js'
import InfoOne from '../../../../assets/Buyer/InfoTwo.png'
import { BottomContent } from '../../../commons/BuyerRealtor/RowReverse/Row.elements'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage } from './InfoTwo.elements'
import Fade from 'react-reveal'
const InfoTwoRealtors = () => {
    return (
        <Container>
            <BottomContent>
                <LeftContainer>
                    <ImageContainer>
                        <Fade left>   
                        <BackgroundImage src={InfoOne} alt="img"/>
                        </Fade>
                    </ImageContainer>
                </LeftContainer>
                <RightContainer>
                    <Fade right>
                        <Subtitle>Home Shopping Like Never Before</Subtitle>
                    </Fade>
                    <Fade right delay={300}>
                        <Text>Receive alerts when new properties enter the market and share your preferences with your realtor from property to property. Remigo offers an easy to use all-in-one platform to communicate and hone your search and catalog your own specific preferences.</Text>
                    </Fade>
              </RightContainer>
            </BottomContent>
        </Container>
    )
}

export default InfoTwoRealtors