import React from 'react'
import { Container } from '../../../../globalStyles'
import { Button, Title, RightContent, Text, BottomContent, LeftContent,BackgroundImage,Image2,Image1,Image3,Content,ImageContainer } from './InfoSection.elements'
import msg from '../../../../assets/Home/ChatBox.png'
import cards from '../../../../assets/Home/Card.png'
import msgBuyer from '../../../../assets/Home/ChatBoxBuyer.png'
import Fade from 'react-reveal/Fade';

const InfoSection = ({lightBg, imgStart, lightText,lightTextDesc, description,headline, start, img, alt}) => {

    return (
        <Container>
            <Content>
            <BottomContent>
                <LeftContent>
                    <Fade left delay={300}>
                    <Title>Elevate Home Shopping Through A Single Platform</Title>
                    </Fade>
                    <Fade left delay={600}>
                    <Text>Share properties and feedback both ways in a purpose built real estate solution.</Text>
                    </Fade>
                    <Fade left delay={900}>
                    <Button onClick={()=> window.open("https://app.remigo.com/onboarding", "_blank")}>Start your trial</Button>
                    </Fade>
                </LeftContent>
                <RightContent>
                    <ImageContainer>
                    <BackgroundImage src={img} alt="Home"/>
                    <Fade left delay={300}>
                    <Image1 src={msg} alt="message-realtor"/>
                    </Fade>
                    <Fade right delay={700}>
                    <Image2 src={cards} alt="card"/>
                    </Fade>
                    <Fade top delay={1200}>
                    <Image3 src={msgBuyer} alt="message-buyer"/>
                    </Fade>
                    </ImageContainer>
                 </RightContent>
            </BottomContent>
            </Content>
        </Container>
    )
}

export default InfoSection
