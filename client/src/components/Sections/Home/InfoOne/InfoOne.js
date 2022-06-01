import React from 'react'
import { Container, LeftContainer, RightContainer, Title, Subtitle, ImageContainer, BackgroundImage, Content } from './InfoOne.elements'
import bg from '../../../../images/Home/bg1.jpg'
import Fade from 'react-reveal/Fade';

const InfoOne = () => {

    return (
        <Container>
            <Content>
            <LeftContainer>
                <ImageContainer>
                <Fade left cascade>
                    <BackgroundImage src={bg} alt="background"/>

                </Fade>
                </ImageContainer>
            </LeftContainer>
                <RightContainer> 
                    <Fade right>
                    <Title>What is Remigo to Realtors</Title>
                    </Fade>
                    <Fade right delay={300}>
                    <Subtitle>
                    Remigo is a better way to share and discuss properties with your clients. Provide the best home shopping experience to your clients with a focus on property feedback and organization to make decisions faster. 
                    </Subtitle>
                    </Fade>
                    <Fade right delay={500}>
                    <Subtitle>
                    Register on Remigo as a real estate agent and start inviting clients right away. It’s free for buyers and sellers to join and there is no obligation to use Remigo.
                    </Subtitle>
                    </Fade>
                </RightContainer>
                </Content>
        </Container>
    )
}

export default InfoOne
