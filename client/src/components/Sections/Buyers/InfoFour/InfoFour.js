import React from 'react'
import { Container, Subtitle, Text } from '../../../../globalStyles.js'
import InfoOne from '../../../../assets/Buyer/InfoFour.png'
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
                    <Subtitle>Home Feedback Made Easy</Subtitle>
                    <Text>The more you engage and provide feedback, the faster the home shopping journey goes. Consistent insights into needs and wants in a new home can make all the difference and with the power of Remigo it’s quick and easy.</Text>
              </RightContent>
            </BottomContent>
        </Container>
    )
}

export default InfoFourRealtors