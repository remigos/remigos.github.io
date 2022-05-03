import React from 'react'
import { Subtitle, Text } from '../../../../globalStyles.js'
import { Container, LeftContainer, RightContainer, ImageContainer, BackgroundImage, Content} from './InfoTwo.elements'
import bg from '../../../../assets/Realtors/InfoTwo.jpg'
import Fade from 'react-reveal/Fade';

const InfoTwoRealtors = () => {
    return (
        <Container>
            <Content>
                <LeftContainer>
                    <ImageContainer> 
                    <Fade left cascade>
                        <BackgroundImage src={bg} alt="Background"/>  

                    </Fade>
                    </ImageContainer>
                </LeftContainer>
                <RightContainer>
                <Fade right>
                    <Subtitle>Shop Homes Better</Subtitle>
                </Fade>
                <Fade right delay={200}>
                    <Text>We designed Remigo's property searches and detail pages to streamline the experience and focus on the most important aspects of your client’s real estate journey.</Text>
                </Fade> 
                <Fade right delay={400}>   
                    <Text>Stop hunting through emails and text messages. Property sharing, feedback, favorites; everything is accessible on the client chat history.</Text>      
                </Fade>      
              </RightContainer>
            </Content>
        </Container>
    )
}

export default InfoTwoRealtors