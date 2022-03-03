import React from 'react'
import { ImageContainer, Image } from './InfoOne.elements'
import InfoOne from '../../../../assets/InfoOne.png'
import { Container, TopContent, Title, BottomContent, LeftContent, Subtitle, Text, RightContent } from '../../../../globalStyles'
const InfoOneRealtors = () => {
    return (
        <Container>
            <TopContent>
                <Title>How the app works for realtors</Title>
            </TopContent>
            <BottomContent>
                <LeftContent>
                    <Subtitle>What Is Remigo</Subtitle>
                    <Text>Remigo is not a CRM, we are a real estate chat and property sharing platform designed to improve you and your client’s real estate journey. Connected feedback and two-way property sharing turns outdated automated searches into a dialogue on a single platform.</Text>
                </LeftContent>
                <RightContent>
                <ImageContainer>
                    <Image src={InfoOne} alt="img"/>
                </ImageContainer>   
                 </RightContent>
            </BottomContent>
        </Container>
    )
}

export default InfoOneRealtors
