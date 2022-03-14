import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Image, Button } from './InfoSection.elements'
import {Container} from '../../../../globalStyles'

const InfoSection = ({lightBg, imgStart, lightText,lightTextDesc, description,headline, start, img, alt}) => {

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart} className='hero'>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Button>
                            START YOUR TRIAL
                        </Button>
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
