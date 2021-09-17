import React, {useEffect, useState} from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Image,Image1} from './SharedProperties.elements'
import {Container} from '../../globalStyles'
import RealtorCatalog from '../../assets/Framedevice.png'
import iphonePng from '../../assets/iphone_shared_properties.png'
import RectangleHouse from '../../assets/housePng.png'
import RectangleHouseMobile from '../../assets/RectangleImageMobile.png'


const SharedProperties = ({lightBg, imgStart, lightText,lightTextDesc, description,headline, start, alt}) => {

    const [imagePng, setImagePng] = useState(RealtorCatalog)
    const [rectanglePng, setRectanglePng] = useState(RectangleHouse)
    const recRef = React.useRef();
    const imgRef = React.useRef();
    imgRef.current = imagePng
    recRef.current = rectanglePng
    
    useEffect(() => {
        const handleWidth = () => {
            const show = window.innerWidth <= 760
            if (show) {
                setImagePng(iphonePng)
                setRectanglePng(RectangleHouseMobile)
            } else {
                setImagePng(RealtorCatalog)
                setRectanglePng(RectangleHouse)
            }
        }
        document.addEventListener('scroll', handleWidth)
        return () => {
            document.removeEventListener('scroll', handleWidth)
        }
    }, [])


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
                            <Image src={imgRef.current} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                    </InfoRow> 
                </Container>
                <Image1 src={recRef.current} alt={alt}/>
            </InfoSec>
        </>
    )
}

export default SharedProperties
