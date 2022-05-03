import React from 'react'
import Form from './Form'
import people from '../../../assets/ContactUs/people.jpg'
import { Container, Content, LeftContainer, ImageContainer, Image, RightContainer } from './Contact.elements'
//import Directions from './Directions/Directions'
import {useLocation} from 'react-router-dom';

const Main = () => {
const location = useLocation();

const data = location.state ? location.state.values : 'General'


    return (
        <Container>
        <Content>
            <LeftContainer>
                <ImageContainer>
                    <Image src={people} alt='people'/>
                </ImageContainer>
            </LeftContainer>
            <RightContainer>
                {data ?
                <Form subject="General"/>
                :
                <Form subject="request MLS"/>
                }
            </RightContainer>
        </Content>
        </Container>
    )
}

export default Main
