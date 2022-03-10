import React from 'react'
import { Container, Subtitle, Text } from '../../../../globalStyles.js'
import InfoOne from '../../../../assets/Buyer/InfoTwo.png'
import {LeftContent, RightContent, Image, ImageContainer, BottomContent } from '../../../commons/BuyerRealtor/RowReverse/Row.elements'

const InfoTwoRealtors = () => {
    return (
        <Container>
            <BottomContent>
                <LeftContent>
                    <ImageContainer>   
                        <Image src={InfoOne} alt="img"/>
                    </ImageContainer>
                </LeftContent>
                <RightContent>
                    <Subtitle>Home Shopping Like Never Before</Subtitle>
                    <Text>Receive alerts when new properties enter the market and share your preferences with your realtor from property to property. Remigo offers an easy to use all-in-one platform to communicate and hone your search and catalog your own specific preferences.</Text>
              </RightContent>
            </BottomContent>
        </Container>
    )
}

export default InfoTwoRealtors