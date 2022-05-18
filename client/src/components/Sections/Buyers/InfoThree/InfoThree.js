import React from 'react'
import InfoOne from '../../../../assets/Buyer/InfoThree.jpg'
import { Subtitle, Text } from '../../../../globalStyles'
import { Container, LeftContainer,BottomContent, RightContainer, ImageContainer, BackgroundImage, Content } from './InfoThree.elements'
import Fade from 'react-reveal'

const InfoThreeRealtors = () => {
    return (
        <Container>
            <Content>
            <BottomContent>
                <LeftContainer>
                    <Fade left>
                        <Subtitle>Search Anywhere, One Conversation</Subtitle>
                    </Fade>
                    <Fade left delay={300}>
                        <Text>Pull listings into Remigo effortlessly just by pasting a link in the chat. Remigo will search the connected data feed for matching listings or create a new custom listing. Find a property on any website and bring it into the conversation with a few button clicks.</Text>
                    </Fade>
                </LeftContainer>
                <RightContainer>
                <ImageContainer>
                    <Fade right>
                    <BackgroundImage src={InfoOne} alt="Search"/>
                    </Fade>
                </ImageContainer>   
                 </RightContainer>
            </BottomContent>
            </Content>
        </Container>
    )
}

export default InfoThreeRealtors
