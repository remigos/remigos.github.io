import React from 'react'
import yellow from '../../../../assets/About/yellow.jpeg'
import { Subtitle, Text } from '../../../../globalStyles'
import { BottomContent } from '../../../commons/BuyerRealtor/Row/Row.elements'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage, Content } from './InfoTwo.elements'
import Fade from 'react-reveal'
const InfoTwo = () => {
    return (
        <Container>
            <Content>
            <BottomContent>
                <LeftContainer>
                    <Fade left>
                    <Subtitle>Missing Margin</Subtitle>
                    </Fade>
                    <Fade left delay={300}> 
                    <Text>We have spent years in the real estate industry in one way or another and want to leverage our experience and skills to create something amazing. Join us as we explore a better way to communicate about homes</Text>
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
