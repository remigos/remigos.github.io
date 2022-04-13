import React from 'react'
import { Subtitle, Text } from '../../../../globalStyles'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage, Image, Image1, Content } from './InfoThree.elements'
import bg from '../../../../assets/Realtors/bg3.png'
import view from '../../../../assets/Realtors/ShopView.png'
import clients from '../../../../assets/Realtors/Clients.png'
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
                            <BackgroundImage src={bg} alt="img"/>
                            <Image src={view} alt="img"/>
                            <Image1 src={clients} alt="img"/>
                        </Fade>
                    </ImageContainer>   
                 </RightContainer>
            </Content>
        </Container>
    )
}

export default InfoThreeRealtors
