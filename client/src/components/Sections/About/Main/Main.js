import React from 'react'
import { Container, Image } from './Main.elements'
import people from '../../../../assets/About/main.png'

const Main = () => {
    return (
        <Container style={{padding:"70px"}}>
            <Image src={people} alt="image"/>
        </Container>
    )
}

export default Main
