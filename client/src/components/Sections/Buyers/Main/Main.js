import React from 'react'
import { Container, Background, Image, ImageContainer } from './Main.elements'
import circle from '../../../../assets/Buyer/circleBg.png'
import bg from '../../../../assets/Buyer/Bg.png'
import Fade from 'react-reveal'

const Main = () => {
    return (
        <Container>
            <ImageContainer>
                <Fade bottom cascade>
                    <Background src={circle} alt="bg"/>
                    <Image src={bg} alt="image"/>
                </Fade>
            </ImageContainer>
        </Container>
    )
}

export default Main
