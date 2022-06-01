import React from 'react'
import { Container, Background, Image, ImageContainer, Card, Profiles, Messages } from './Main.elements'
import Bg from '../../../../images/Realtors/bgRealtor.png'
import MsgRealtor from '../../../../images/Home/ChatView.png'
import card from '../../../../images/Home/Card.png'
import prof from '../../../../images/Realtors/Clients.png'
import msg from '../../../../images/Realtors/Messages.png'
import Fade from 'react-reveal/Fade';

const Main = () => {
    return (
        <Container>
            <Background src={Bg} alt="Background"/>
            <ImageContainer>
            <Fade bottom delay={300}>
                <Image src={MsgRealtor} alt="Desktop-chat"/>
            </Fade>
            <Fade left delay={600}>
                <Card src={card} alt="Card"/>
            </Fade>
            <Fade right delay={900}>
                <Profiles src={prof} alt="Profiles"/>
            </Fade>
            <Fade top delay={1200}>
                <Messages src={msg} alt="Messages"/>
            </Fade>
            </ImageContainer>
        </Container>
    )
}

export default Main
