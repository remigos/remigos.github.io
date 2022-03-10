import React from 'react'
import { Container, Subtitle, Text } from '../../../../globalStyles.js'
import InfoOne from '../../../../assets/Buyer/InfoSix.png'
import {LeftContent, RightContent, Image, ImageContainer, BottomContent } from '../../../commons/BuyerRealtor/RowReverse/Row.elements'

const InfoSixRealtors = () => {
    return (
        <Container>
            <BottomContent>
                <LeftContent>
                    <ImageContainer>   
                        <Image src={InfoOne} alt="img"/>
                    </ImageContainer>
                </LeftContent>
                <RightContent>
                    <Subtitle>Start Enjoying Your Home Search</Subtitle>
                    <Text>Buyers can start building out their first saved search and view properties as well as receive updates via email and text when new listings hit the market. Buyers can also share their saved search with the connected REALTOR and start discussing properties immediately.</Text>
              </RightContent>
            </BottomContent>
        </Container>
    )
}

export default InfoSixRealtors