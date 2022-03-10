import React from 'react'
import InfoOne from '../../../../assets/Buyer/InfoFive.png'
import { Container, Subtitle, Text } from '../../../../globalStyles'
import {LeftContent, RightContent, Image, ImageContainer, BottomContent } from '../../../commons/BuyerRealtor/Row/Row.elements'

const InfoFiveRealtors = () => {
    return (
        <Container>
            <BottomContent>
                <LeftContent>
                    <Subtitle>Get Started Today</Subtitle>
                    <Text>Whether you’re a buyer or a seller you can join and invite your REALTOR or be invited by your REALTOR. Regardless, easily set up an account with just basic information and start using Remigo absolutely free.</Text>
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
