import React from 'react'
import { Subtitle, Text } from '../../../../globalStyles.js'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage, Image, Image1, Image2, } from './InfoTwo.elements'
import bg from '../../../../assets/Realtors/Bg2.png'
import view from '../../../../assets/Realtors/ShopView.png'
import card1 from '../../../../assets/Realtors/Card.png'
import card2 from '../../../../assets/Realtors/Card2.png'
import Fade from 'react-reveal/Fade';

const InfoTwoRealtors = () => {
    return (
        <Container>
                <LeftContainer>
                    <ImageContainer> 
                    <Fade left cascade>
                        <BackgroundImage src={bg}/>  
                        <Image src={view} alt="img"/>
                        <Image1 src={card2} alt="img"/>
                        <Image2 src={card1} alt="img"/>
                    </Fade>
                    </ImageContainer>
                </LeftContainer>
                <RightContainer>
                <Fade right>
                    <Subtitle>Shop Homes Better</Subtitle>
                </Fade>
                <Fade right delay={200}>
                    <Text>We designed Remigo's property searches and detail pages to streamline the experience and focus on the most important aspects of your client’s real estate journey.</Text>
                </Fade> 
                <Fade right delay={400}>   
                    <Text>Stop hunting through emails and text messages. Property sharing, feedback, favorites; everything is accessible on the client chat history.</Text>      
                </Fade>      
              </RightContainer>
        </Container>
    )
}

export default InfoTwoRealtors