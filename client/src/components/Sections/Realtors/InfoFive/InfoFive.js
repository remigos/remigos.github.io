import React from 'react'
import InfoOne from '../../../../assets/Realtors/InfoFive.png'
import { Container, Subtitle, Text } from '../../../../globalStyles'
import {LeftContent, RightContent, Image, ImageContainer, BottomContent, Button } from '../../../commons/BuyerRealtor/Row/Row.elements'

const InfoFiveRealtors = () => {
    return (
        <Container>
            <BottomContent>
                <LeftContent>
                    <Subtitle>Start Connecting With Remigo</Subtitle>
                    <Text>Test out Remigo for free for the first 30 days. After your trial, pay a flat rate and cancel anytime. Remigo improves your everyday interactions with clients and will prove to be invaluable. </Text>
                    <Button>Try it now</Button>
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

export default InfoFiveRealtors
