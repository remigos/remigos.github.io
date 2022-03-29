import React from 'react'
import { Container, LeftContainer, RightContainer, Title, Subtitle, ImageContainer, BackgroundImage, Image, Image1, Image2, Content } from './InfoTwo.elements'
import bg2 from '../../../../assets/Home/bg2.png'
import Screens2 from '../../../../assets/Home/Screens2.png'
import BuyerProperties from '../../../../assets/Home/BuyerProperties.png'
import Maps from '../../../../assets/Home/Maps.png'
import Fade from 'react-reveal/Fade';

const InfoOne = () => {

    return (
        <Container>
            <Content>
            <LeftContainer>
                <Fade left>
                <Title>A better real estate experience as a buyer & seller</Title>
                </Fade>
                <Fade left delay={200}>
                <Subtitle>
                Remigo provides the best real estate experience for buyers and sellers through modern chat solutions, property grouping and an interface optimized across all devices.
                </Subtitle>
                </Fade>
                <Fade left delay={400}>
                <Subtitle>
                Buyers can start building out their first saved searches,  view properties as well as receive updates via email and text when new listings hit the market. 
                </Subtitle>
                </Fade>
                <Fade left delay={600}>
                <Subtitle>
                Remigo takes it a step further and provides new and faster methods for sharing property feedback directly on listings. Respond in seconds on Remigo and speed up the entire real estate journey.
                </Subtitle>
                </Fade>
            </LeftContainer>
            <RightContainer>
                <ImageContainer>
                <Fade right cascade delay={200}>
                    <BackgroundImage src={bg2} alt="Bg"/>
                    <Image src={Screens2} alt="img"/>
                    <Image2 src={BuyerProperties} alt="Img"/>
                    <Image1 src={Maps} alt="Img"/>
                </Fade>
                </ImageContainer>
            </RightContainer>
            </Content>
        </Container>
    )
}

export default InfoOne
