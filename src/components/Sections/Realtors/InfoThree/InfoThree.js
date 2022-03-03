import React from 'react'
import { ImageContainer, Image } from './InfoThree.elements'
import InfoOne from '../../../../assets/InfoOne.png'
import { Container, BottomContent, LeftContent, Subtitle, Text, RightContent } from '../../../../globalStyles'
const InfoOneRealtors = () => {
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

export default InfoOneRealtors
