import React from 'react'
import InfoOne from '../../../../assets/Buyer/InfoOne.png'
import { Container, TopContent, Title, Subtitle, Text } from '../../../../globalStyles'
import {LeftContent, RightContent, Image, ImageContainer, BottomContent } from '../../../commons/BuyerRealtor/Row/Row.elements'
const InfoOneRealtors = () => {
    return (
        <Container>
            <TopContent>
                <Title>How the app works for clients</Title>
            </TopContent>
            <BottomContent>
                <LeftContent>
                    <Subtitle>Better Home Shopping</Subtitle>
                    <Text>Experience a better way to shop and discuss homes with your realtor with Remigo. Remigo lets you chat, save, favorite and rate specific homes with your realtor right on the property page itself.</Text>
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
