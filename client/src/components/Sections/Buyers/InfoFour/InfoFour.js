import React from 'react'
import { Subtitle, Text } from '../../../../globalStyles.js'
import InfoOne from '../../../../assets/Buyer/InfoFour.png'
import { BottomContent } from '../../../commons/BuyerRealtor/RowReverse/Row.elements'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage,Content } from './InfoFour.elements'
import Fade from 'react-reveal'
const InfoFourRealtors = () => {
    return (
        <Container>
            <Content>
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
                        <Subtitle>Home Feedback Made Easy</Subtitle>
                    </Fade>
                    <Fade right delay={300}>
                        <Text>The more you engage and provide feedback, the faster the home shopping journey goes. Consistent insights into needs and wants in a new home can make all the difference and with the power of Remigo it’s quick and easy.</Text>
                    </Fade>
              </RightContainer>
            </BottomContent>
            </Content>
        </Container>
    )
}

export default InfoFourRealtors