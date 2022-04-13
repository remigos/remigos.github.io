import React from 'react'
import InfoOne from '../../../../assets/Buyer/InfoOne.png'
import { TopContent, Subtitle, Text } from '../../../../globalStyles'
import { BottomContent } from '../../../commons/BuyerRealtor/Row/Row.elements'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage, Title, Content } from './InfoOne.elements'
import Fade from 'react-reveal'
const InfoOneRealtors = () => {
    return (
        <Container>
            <TopContent>
                <Title>How the app works for clients</Title>
            </TopContent>
            <Content>
            <BottomContent>
                <LeftContainer>
                    <Fade left>
                    <Subtitle>Better Home Shopping</Subtitle>
                    </Fade>
                    <Fade left delay={200}>
                    <Text>Experience a better way to shop and discuss homes with your realtor with Remigo. Remigo lets you chat, save, favorite and rate specific homes with your realtor right on the property page itself.</Text>
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
            </Content>
        </Container>
    )
}

export default InfoOneRealtors
