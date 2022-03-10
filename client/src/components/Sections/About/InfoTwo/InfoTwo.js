import React from 'react'
import InfoOne from '../../../../assets/Realtors/InfoOne.png'
import { Container, Subtitle, Text } from '../../../../globalStyles'
import {LeftContent, RightContent, Image, ImageContainer, BottomContent } from '../../../commons/BuyerRealtor/Row/Row.elements'
const InfoTwo = () => {
    return (
        <Container>

            <BottomContent>
                <LeftContent>
                    <Subtitle></Subtitle>
                    <Text>We have spent years in the real estate industry in one way or another and want to leverage our experience and skills to create something amazing. Join us as we explore a better way to communicate about homes</Text>
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

export default InfoTwo
