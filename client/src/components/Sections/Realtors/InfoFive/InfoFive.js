import React from 'react'
import { Subtitle, Text } from '../../../../globalStyles'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage, Image, Image1, Image2, Button, Content } from './InfoFive.elements'
import bg from '../../../../assets/Realtors/Bg5.png'
import view from '../../../../assets/Realtors/ShadowView.png'
import invite from '../../../../assets/Realtors/ClockView.png'
import trial from '../../../../assets/Realtors/TrialDay.png'
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
                    <Button>Try it now</Button>
                    </Fade>
                </LeftContainer>
                <RightContainer>
                    <ImageContainer>
                        <Fade right cascade>
                            <BackgroundImage src={bg}/>
                            <Image src={view} alt="img"/>
                            <Image1 src={invite}/>
                            <Image2 src={trial}/>
                        </Fade>
                    </ImageContainer>   
                 </RightContainer>
            </Content>
        </Container>
    )
}

export default InfoFiveRealtors
