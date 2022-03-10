import React from 'react'
import { Container, LeftContainer, RightContainer, Title, Subtitle, ImageContainer, BackgroundImage, Image } from './InfoOne.elements'
import Bg from '../../../../assets/Home/bg1.png'
import Screen from '../../../../assets/Home/Screens1.png'
const InfoOne = () => {
    return (
        <Container>
            <LeftContainer>
                <ImageContainer>
                    <BackgroundImage src={Bg} alt="Bg"/>
                    <Image src={Screen} alt="img"/>
                </ImageContainer>
            </LeftContainer>
            <RightContainer>
                <Title>What is Remigo to Realtors</Title>
                <Subtitle>
                Remigo is a better way to share and discuss properties with your clients. Provide the best home shopping experience to your clients with a focus on property feedback and organization to make decisions faster. 
                </Subtitle>
                <Subtitle>
                Register on Remigo as a real estate agent and start inviting clients right away. It’s free for buyers and sellers to join and there is no obligation to use Remigo.
                </Subtitle>
            </RightContainer>
        </Container>
    )
}

export default InfoOne
