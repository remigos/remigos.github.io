import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Image,SignUpText} from './InfoSection.elements'
import {Container} from '../../globalStyles'
import Forms from '../Form/Form'


const InfoSection = ({lightBg, imgStart, lightTopLine, lightText,lightTextDesc, description,headline, start, img, alt,signUpText}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <SignUpText lightTextDesc={lightTextDesc}>{signUpText}</SignUpText>
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
