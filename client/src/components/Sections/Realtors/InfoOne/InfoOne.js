import React from 'react'
import { TopContent, Title, Subtitle, Text } from '../../../../globalStyles'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage, BottomContent,Content } from './InfoOne.elements'
import Fade from 'react-reveal/Fade';
import bg from '../../../../assets/Realtors/InfoOne.png'

const InfoOneRealtors = () => {
    return (
        <Container>
            <TopContent>
                <Title>How the app works for realtors</Title>
            </TopContent>
            <BottomContent>
                <Content>
                <LeftContainer>
                <Fade left>
                    <Subtitle>What Is Remigo</Subtitle>
                </Fade>
                <Fade left delay={300}>
                    <Text>Remigo is not a CRM, we are a real estate chat and property sharing platform designed to improve you and your client’s real estate journey. Connected feedback and two-way property sharing turns outdated automated searches into a dialogue on a single platform.</Text>
                </Fade>
                </LeftContainer>
                <RightContainer>
                <ImageContainer>
                    <Fade right cascade delay={200}>
                    <BackgroundImage src={bg} alt="Background"/>
                    </Fade>
                </ImageContainer>   
                 </RightContainer>
                 </Content>
            </BottomContent>
        </Container>

    )
}

export default InfoOneRealtors
