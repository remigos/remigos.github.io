import React, {useEffect} from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Image} from './About.elements'
import {Container} from '../../globalStyles'
import gsap from "gsap";


const About = ({lightBg, imgStart, lightTopLine, lightText,lightTextDesc, description,headline, start, img, alt}) => {
    
    useEffect(() => {      
        gsap.to(".text", {
          x: 70,
          duration: 2,
          delay: 0,
          scrollTrigger: {
            trigger: ".text",
            markers: false,
            start: "top center",
            end: "bottom 80px",
          }
        });
      }, []);
    
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper className='text'>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Image src={img} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default About
