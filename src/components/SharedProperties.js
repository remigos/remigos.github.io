import React, {useEffect, useState} from 'react'
import RealtorCatalog from '../images/Framedevice.png'
import iphonePng from '../images/iphone_shared_properties.png'
import RectangleHouse from '../images/RectangleDesktop.png'
import RectangleMobile from '../images/RectangleMobile.png'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const Container = styled.div`
    z-index: 1;
    width:100%;
    max-width:1300px;
    margin-right: auto;
    margin-left:auto;
    padding-right: 50px;
    padding-left:50px;

    @media screen and (max-width:991px){
        padding-right: 30px;
        padding-left:30px;
    }
`


const InfoSec = styled.div`
    color:#fff;
    padding: 0px 0px 100px;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#1F2936')};
`

const InfoRow = styled.div`
    display:flex;
    margin: 0px -100px -55px -15px;
    flex-wrap:wrap;
    align-items:center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
    @media screen and (max-width:768px) {
        margin: 0 -15px -15px -15px;

    }
`

const InfoColumn = styled.div`
    padding-right:0px;
    padding-left:0px;
    flex:1;
    max-width: 100%;
    flex-basis: 0%;
    @media screen and (max-width: 768px) {
        max-width:100%;
        flex-basis:100%;
        display:flex;
        justify-content:center;
    }
`

const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom:30px;

    @media screen and (max-width:768px){
        padding-bottom:30px;
       
    }
`


const Heading = styled.h1`
    color: ${({lightText}) => (lightText ? '#fff' : '#000')};
    font-size:28px;
    line-height:1.1;
    margin-bottom:30px;
    max-width:400px;
    font-family:'Roboto', sans-serif;
    @media screen and (max-width:768px){
        font-family:'Lexend', sans-serif;
        text-align:center;
        color: #1F2936;
        max-width:400px;

    }

`
const Subtitle = styled.p`
    color: ${({lightTextDesc}) => (lightTextDesc ? '#fff' : '#000')};
    font-size:18px;
    line-height:24px;
    margin-bottom:5px;
    max-width:400px;
    font-family:'Roboto', sans-serif;
    @media screen and (max-width:768px){
        text-align:center;
        font-size:16px;

    }
`

const ImgWrapper = styled.div`
    max-width:750px;
    display:flex;
    justify-content:${({start}) => (start ? 'flex-start' : 'flex-end')};
    @media screen and (max-width:415px){
        display:block;
        margin-left:auto;
    }
`

const Devices = styled.img`
    padding-right: 40px;
    border:0;
    bottom:-100px;
    max-width:130%;
    vertical-align:middle;
    display:inline-block;
    max-height:600px;
    margin-top: 100px;
    position: relative;
    z-index:100;
        @media screen and (max-width:768px){
        max-width:100%;
        margin-top: 0px;
    }
    @media screen and (max-width:540px){
        max-width:100%;
        margin-top: 130px;
    }
    @media screen and (max-width:415px){
        max-width:100%;
        margin-top: 10px;
        padding-right: 0px;

    }
    @media screen and (max-width:330px){
        max-width:100%;
        margin-top: 0px;
    }

`
const Background = styled.img`
    padding-right: 0;
    border:0;
    max-width:100%;
    vertical-align:middle;
    display:flex;
    max-height:auto;
    margin-top: -50px;
    position: absolute;
    @media screen and (min-width:4000px){
            //width:4000px;
            //margin-top:-900px;
            display:none;
    }
    @media screen and (max-width:768px) {
        margin-top: -50px;

    }
    @media screen and (max-width:540px){
        margin-top: -400px;

    }
    @media screen and (max-width:414px){
        margin-top: -400px;

    }
    @media screen and (max-width:340px){
        margin-top: -280px;

    }
`
const lightBg = true;
const lightText = false;
const SharedProperties = () => {

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
                    <InfoRow imgStart=''>
                    <InfoColumn>
                        <TextWrapper>
                        <Fade left cascade>
                            <Heading lightText={lightText}>Catalog Shared Properties</Heading>
                            <Subtitle lightTextDesc={lightText}>Elevate the home shopping experience with convenient and detailed feedback on each shared property through a communication platform specifically designed for real estate.</Subtitle>
                        </Fade>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start=''>
                            <Devices src={imgRef.current} alt='device-png'/>
                        </ImgWrapper>
                    </InfoColumn>
                    </InfoRow> 
                    </Container>
                <Background src={recRef.current} alt='background-png'/>
            </InfoSec>
        </>
    )
}

export default SharedProperties