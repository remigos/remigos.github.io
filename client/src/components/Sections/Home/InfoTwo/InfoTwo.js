import React from 'react'
import { Container, LeftContainer, RightContainer, Title, Subtitle, ImageContainer, BackgroundImage, Image } from './InfoTwo.elements'
import Mockups from '../../../../assets/Home/Mockups.png'
import bg2 from '../../../../assets/Home/bg2.png'
const InfoOne = () => {
    return (
        <Container>
            <LeftContainer>
                <Title>A better real estate experience as a buyer & seller</Title>
                <Subtitle>
                Remigo provides the best real estate experience for buyers and sellers through modern chat solutions, property grouping and an interface optimized across all devices.
                </Subtitle>
                <Subtitle>
                Buyers can start building out their first saved searches,  view properties as well as receive updates via email and text when new listings hit the market. 
                </Subtitle>
                <Subtitle>
                Remigo takes it a step further and provides new and faster methods for sharing property feedback directly on listings. Respond in seconds on Remigo and speed up the entire real estate journey.
                </Subtitle>
            </LeftContainer>
            <RightContainer>
                <ImageContainer>
                    <BackgroundImage src={bg2} alt="Bg"/>
                    <Image src={Mockups} alt="img"/>
                </ImageContainer>
            </RightContainer>
        </Container>
    )
}

export default InfoOne
