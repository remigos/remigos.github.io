import React from 'react'
import { Container, Image } from './Main.elements'
import people from '../../../../images/About/main_people.jpeg'

const Main = () => {
    return (
        <Container>
            <Image src={people} alt="People-background"/>
        </Container>
    )
}

export default Main
