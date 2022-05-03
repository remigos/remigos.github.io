import React from 'react'
import { Subtitle, Text } from '../../../../globalStyles'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage, Content } from './InfoThree.elements'
import bg from '../../../../assets/Realtors/InfoThree.jpg'
import Fade from 'react-reveal/Fade';

const InfoThreeRealtors = () => {
    return (
        <Container>
            <Content>
                <LeftContainer>
                    <Fade left>
                        <Subtitle>Effortless Organization</Subtitle>
                    </Fade>
                    <Fade left delay={200}>    
                        <Text>Managing multiple clients’ interests, searches, feedback and offers doesn’t have to be difficult. With Remigo, stay organized effortlessly with all feedback and history attached to specific properties.</Text>
                    </Fade>    
                </LeftContainer>
                <RightContainer>
                    <ImageContainer>
                        <Fade right cascade> 
                            <BackgroundImage src={bg} alt="Background"/>
                        </Fade>
                    </ImageContainer>   
                 </RightContainer>
            </Content>
        </Container>
    )
}

export default InfoThreeRealtors
