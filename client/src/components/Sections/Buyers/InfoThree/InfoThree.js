import React from 'react'
import InfoOne from '../../../../assets/Buyer/InfoThree.png'
import { Container, Subtitle, Text } from '../../../../globalStyles'
import {LeftContent, RightContent, Image, ImageContainer, BottomContent } from '../../../commons/BuyerRealtor/Row/Row.elements'

const InfoThreeRealtors = () => {
    return (
        <Container>
            <BottomContent>
                <LeftContent>
                    <Subtitle>Search Anywhere, One Conversation</Subtitle>
                    <Text>Pull listings into Remigo effortlessly just by pasting a link in the chat. Remigo will search the connected data feed for matching listings or create a new custom listing. Find a property on any website and bring it into the conversation with a few button clicks.</Text>
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

export default InfoThreeRealtors
