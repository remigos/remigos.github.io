import React from 'react'
import { Container, Image, ImageContainer } from './Main.elements'
import FaQ from '../../../../assets/FaQ/Main.png'

const Main = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src={FaQ} alt="People-background"/>
            </ImageContainer>
        </Container>
    )
}

export default Main
