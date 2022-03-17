import React from 'react'
import { Container, Subtitle, Text } from '../../../../globalStyles.js'
import InfoOne from '../../../../assets/Realtors/InfoTwo.png'
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
                    <Subtitle>Shop Homes Better</Subtitle>
                    <Text>We designed Remigo's property searches and detail pages to streamline the experience and focus on the most important aspects of your client’s real estate journey.</Text>
                    <Text>Stop hunting through emails and text messages. Property sharing, feedback, favorites; everything is accessible on the client chat history.</Text>      
              </RightContent>
            </BottomContent>
        </Container>
    )
}

export default InfoTwoRealtors