import React from 'react'
import { Container, Subtitle, Text } from '../../../../globalStyles.js'
import InfoOne from '../../../../assets/Realtors/InfoFour.png'
import {LeftContent, RightContent, Image, ImageContainer, BottomContent } from '../../../commons/BuyerRealtor/RowReverse/Row.elements'

const InfoFourRealtors = () => {
    return (
        <Container>
            <BottomContent>
                <LeftContent>
                    <ImageContainer>   
                        <Image src={InfoOne} alt="img"/>
                    </ImageContainer>
                </LeftContent>
                <RightContent>
                    <Subtitle>Connected MLS</Subtitle>
                    <Text>MLS connected data feed makes finding and sharing properties easy and convenient. Automated searches alert agents and clients to new properties the same day they go active.</Text>
              </RightContent>
            </BottomContent>
        </Container>
    )
}

export default InfoFourRealtors