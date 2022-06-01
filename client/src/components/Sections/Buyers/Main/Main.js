import React from 'react'
import { Container, Background, Image, ImageContainer } from './Main.elements'
import circle from '../../../../images/Buyer/circleBg.png'
import bg from '../../../../images/Buyer/Bg.png'
import Fade from 'react-reveal'

const Main = () => {
    return (
        <Container>
            <ImageContainer>
                <Fade bottom cascade>
                    <Background src={circle} alt="Circle"/>
                    <Image src={bg} alt="Background-image"/>
                </Fade>
            </ImageContainer>
        </Container>
    )
}

export default Main
