import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Image, BackgroundHouse, ImageHousePng} from './SharedProperties.elements'
import {Container} from '../../globalStyles'
const SharedProperties = ({lightBg, imgStart, lightTopLine, lightText,lightTextDesc, description,headline, start, img, alt, house}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
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
                <BackgroundHouse>
                    <ImageHousePng src-={require('../../assets/housePng.png').default} alt='house-png'/>
                </BackgroundHouse>
            </InfoSec>
        </>
    )
}

export default SharedProperties
