import React from 'react'
import { Subtitle, Text } from '../../../globalStyles.js'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage, Content } from './InfoFour.elements'
import bg from '../../../../images/Realtors/InfoFour.jpg'
import Fade from 'react-reveal'
const InfoFourRealtors = () => {
    return (
        <Container>
            <Content>
                <LeftContainer>
                    <ImageContainer>
                        <Fade left cascade>
                        <BackgroundImage src={bg} alt="Background"/>   
                        </Fade>
                    </ImageContainer>
                </LeftContainer>
                <RightContainer>
                    <Fade right>
                        <Subtitle>Connected MLS</Subtitle>
                    </Fade>
                    <Fade right delay={200}>
                        <Text>MLS connected data feed makes finding and sharing properties easy and convenient. Automated searches alert agents and clients to new properties the same day they go active.</Text>
                    </Fade>
              </RightContainer>
            </Content>
        </Container>
    )
}

export default InfoFourRealtors