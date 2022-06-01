import React from 'react'
import { Subtitle, Text } from '../../../globalStyles.js'
import InfoOne from '../../../../images/Buyer/InfoSix.jpg'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage, Content } from './InfoSix.elements'
import Fade from 'react-reveal'
const InfoSixRealtors = () => {
    return (
        <Container>
            <Content>
                <LeftContainer>
                    <ImageContainer>  
                        <Fade left> 
                            <BackgroundImage src={InfoOne} alt="Home-search"/>
                        </Fade>
                    </ImageContainer>
                </LeftContainer>
                <RightContainer>
                    <Fade right delay={100}>
                        <Subtitle>Start Enjoying Your Home Search</Subtitle>
                    </Fade>
                    <Fade right delay={300}>
                        <Text>Buyers can start building out their first saved search and view properties as well as receive updates via email and text when new listings hit the market. Buyers can also share their saved search with the connected REALTOR and start discussing properties immediately.</Text>
                    </Fade>
                </RightContainer>
            </Content>
        </Container>
    )
}

export default InfoSixRealtors