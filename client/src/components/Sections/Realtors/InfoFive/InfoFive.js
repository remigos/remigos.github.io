import React from 'react'
import { Subtitle, Text } from '../../../../globalStyles'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage, Button, Content } from './InfoFive.elements'
import bg from '../../../../assets/Realtors/InfoFive.png'

import Fade from 'react-reveal'
const InfoFiveRealtors = () => {
    return (
        <Container>
            <Content>
                <LeftContainer>
                    <Fade left>
                    <Subtitle>Start Connecting With Remigo</Subtitle>
                    </Fade>
                    <Fade left delay={200}>
                    <Text>Test out Remigo for free for the first 30 days. After your trial, pay a flat rate and cancel anytime. Remigo improves your everyday interactions with clients and will prove to be invaluable. </Text>
                    </Fade>
                    <Fade left delay={400}>
                    <Button onClick={()=> window.open("https://app.remigo.com/onboarding", "_blank")}>Try it now</Button>
                    </Fade>
                </LeftContainer>
                <RightContainer>
                    <ImageContainer>
                        <Fade right cascade>
                            <BackgroundImage src={bg} alt="Background"/>

                        </Fade>
                    </ImageContainer>   
                 </RightContainer>
            </Content>
        </Container>
    )
}

export default InfoFiveRealtors
