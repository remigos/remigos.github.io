import React from 'react'
import InfoOne from '../../../../assets/Realtors/InfoThree.png'
import { Container, Subtitle, Text } from '../../../../globalStyles'
import {LeftContent, RightContent, Image, ImageContainer, BottomContent } from '../../../commons/BuyerRealtor/Row/Row.elements'

const InfoThreeRealtors = () => {
    return (
        <Container>
            <BottomContent>
                <LeftContent>
                    <Subtitle>Effortless Organization</Subtitle>
                    <Text>Managing multiple clients’ interests, searches, feedback and offers doesn’t have to be difficult. With Remigo, stay organized effortlessly with all feedback and history attached to specific properties.</Text>
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
