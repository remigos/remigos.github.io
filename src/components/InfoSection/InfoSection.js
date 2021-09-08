import React, {useEffect} from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Image,SignUpText} from './InfoSection.elements'
import {Container} from '../../globalStyles'
import Forms from '../Form/Form'
import gsap from "gsap";


const InfoSection = ({lightBg, imgStart, lightTopLine, lightText,lightTextDesc, description,headline, start, img, alt,signUpText,signUpText1}) => {
    useEffect(() => {      

        gsap.fromTo('.hero',{opacity:0, y:300 }, {opacity: 1 , y: -50 , duration: 1.5 });

    }, []);
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart} className='hero'>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <SignUpText lightTextDesc={lightTextDesc}><span>{signUpText1}</span>{signUpText}</SignUpText>
                            <Forms/>
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

export default InfoSection
