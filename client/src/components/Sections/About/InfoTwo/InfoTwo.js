import React from 'react'
import yellow from '../../../../images/About/yellow.jpeg'
import { Subtitle, Text } from '../../../globalStyles'
import { Container, LeftContainer, BottomContent, RightContainer, ImageContainer, BackgroundImage, Content } from './InfoTwo.elements'
import Fade from 'react-reveal'
const InfoTwo = () => {
    return (
        <Container>
            <Content>
            <BottomContent>
                <LeftContainer>
                    <Fade left>
                    <Subtitle>Looking Forward</Subtitle>
                    </Fade>
                    <Fade left delay={300}> 
                    <Text>Our team has spent years in the real estate and tech industry, developing and launching platforms that speed up communication and close more deals for our users. We are looking forward to leveraging our experience and skills to create something amazing. Join us as we explore a better way to communicate about homes.</Text>
                    </Fade>
                </LeftContainer>
                <RightContainer>
                <ImageContainer>
                    <Fade right>
                    <BackgroundImage src={yellow} alt="Comunication"/>
                    </Fade>
                </ImageContainer>   
                 </RightContainer>
            </BottomContent>
            </Content>
        </Container>
    )
}

export default InfoTwo
