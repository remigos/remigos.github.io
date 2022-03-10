import React from 'react'
import Form from './Form'
import people from '../../../assets/ContactUs/people.png'
import { Container, LeftContainer, ImageContainer, Image, RightContainer } from './Contact.elements'
import Directions from './Directions/Directions'
const Main = () => {
    return (
        <Container>
            <LeftContainer>
                <ImageContainer>
                    <Image src={people} alt='people'/>
                    <Directions/>
                </ImageContainer>
            </LeftContainer>
            <RightContainer>
                <Form/>
            </RightContainer>
        </Container>
    )
}

export default Main
