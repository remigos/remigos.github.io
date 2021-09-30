import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Image} from './About.elements'
import {Container} from '../../globalStyles'
import People from '../../assets/AdobeStock1.png'
const lightBg = true;
const lightText = false;
const About = () => {
    
    
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart='start'>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>Remigo, connects all of your real-estate amigos</Heading>
                            <Subtitle lightTextDesc={lightText}>Enjoy home shopping the way you should with effortless communication that is both faster and more informative than the traditional methods.</Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start='true'>
                            <Image src={People} alt='people-img'/>
                        </ImgWrapper>
                    </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default About