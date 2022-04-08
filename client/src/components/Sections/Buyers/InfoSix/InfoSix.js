import React from 'react'
import { Subtitle, Text } from '../../../../globalStyles.js'
import InfoOne from '../../../../assets/Buyer/InfoSix.png'
import { BottomContent } from '../../../commons/BuyerRealtor/RowReverse/Row.elements'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage } from './InfoSix.elements'
import Fade from 'react-reveal'
const InfoSixRealtors = () => {
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
                    <Fade right delay={100}>
                        <Subtitle>Start Enjoying Your Home Search</Subtitle>
                    </Fade>
                    <Fade right delay={300}>
                        <Text>Buyers can start building out their first saved search and view properties as well as receive updates via email and text when new listings hit the market. Buyers can also share their saved search with the connected REALTOR and start discussing properties immediately.</Text>
                    </Fade>
                </RightContainer>
            </BottomContent>
        </Container>
    )
}

export default InfoSixRealtors