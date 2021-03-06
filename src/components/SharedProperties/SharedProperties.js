import React, {useEffect, useState} from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Devices,Background} from './SharedProperties.elements'
import {Container} from '../../globalStyles'
import RealtorCatalog from '../../assets/Framedevice.png'
import iphonePng from '../../assets/iphone_shared_properties.png'
import RectangleHouse from '../../assets/RectangleDesktop.png'
import RectangleMobile from '../../assets/RectangleMobile.png'


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
                setRectanglePng(RectangleMobile)
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
                            <Devices src={imgRef.current} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                    </InfoRow> 
                    </Container>
                <Background src={recRef.current} alt={alt}/>
            </InfoSec>
        </>
    )
}

export default SharedProperties
