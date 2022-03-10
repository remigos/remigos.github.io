import React from 'react'
import { Container, Background, Image } from './Main.elements'
import Bg from '../../../../assets/Realtors/bgRealtor.png'
import MsgRealtor from '../../../../assets/Realtors/MessageRealtor.png'

const Main = () => {
    return (
        <Container>
            <Background src={Bg} alt="bg"/>
            <Image src={MsgRealtor} alt="image"/>
        </Container>
    )
}

export default Main
