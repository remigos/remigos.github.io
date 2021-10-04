import React, {useEffect} from 'react'
import gsap from "gsap";
import Objects from '../images/Object.png'
import Iphone from '../images/iphone_info_section.png'
import styled,{keyframes} from 'styled-components';
import Forms from './Form'

const move = keyframes`
    0% { transform:translateY(-5px)}
    50% { transform:translateY(10px)}
    100% { transform:translateY(-5px)}

`

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
    padding: 10px 0px;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#1F2936')};
    border-radius: 100%/0 0 30px 30px;
    box-shadow: 0px 150px 0px white;
   
`

const InfoRow = styled.div`
    display:flex;
    margin: 0 -15px -15px -15px;
    flex-wrap:wrap;
    align-items:center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`

const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right:100px;
    padding-left:15px;
    flex:1;
    max-width: 50%;
    flex-basis: 50%;
    @media screen and (max-width: 768px) {
        max-width:100%;
        flex-basis:100%;
        display:flex;
        justify-content:center;
        padding-right:0px;

    }
`

const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom:60px;

    @media screen and (max-width:768px){
        padding-bottom:65px;
    }
`


const Heading = styled.h1`
    color: ${({lightText}) => (lightText ? '#fff' : '#000')};
    font-size:64px;
    line-height:1.1;
    margin-bottom:24px;
    font-family:'Kanit',sans-serif;
    font-weight:bold;
    
    @media screen and (max-width:768px) {
        font-size:36px;
        font-family:'Lexend', sans-serif;

    }

`
const Subtitle = styled.p`
    color: ${({lightTextDesc}) => (lightTextDesc ? '#fff' : '#000')};
    font-size:18px;
    line-height:24px;
    margin-bottom:35px;
    max-width:440px;
    font-family:'Inter', sans-serif;


`
const SignUpText = styled.p`
        color: ${({lightTextDesc}) => (lightTextDesc ? '#fff' : '#000')};
        font-size:18px;
        font-weight:bold;
        line-height:24px;
        margin-bottom:35px;
        max-width:440px;
        font-family:'Inter', sans-serif;
        span {
            color: #28B8A7;
        }
`

const ImgWrapper = styled.div`
    max-width:750px;
    display:flex;
    justify-content:${({start}) => (start ? 'flex-start' : 'flex-end')};
    animation: ${move} 3s ease infinite;


`
const Image = styled.img`
    padding-right: 0;
    border:0;
    max-width:100%;
    vertical-align:middle;
    display:inline-block;
    max-height:700px;
    @media screen and (max-width:768px) {
        display:none;
    }
`


const ObjectMain = styled.img`
    max-width: 100%;
    width:135px;
    z-index: 2;
    height:auto;
    position:absolute;
    right:80px;
    top:30px;
    @media screen and (max-width: 768px) {
        display:none;
    }
`


const lightBg = false;
const lightText = true;

const InfoSection = () => {
    useEffect(() => {      

        gsap.fromTo('.hero',{opacity:0, y:300 }, {opacity: 1 , y: -50 , duration: 1.5 });

    }, []);
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                <ObjectMain src={Objects} alt="object png"/>

                    <InfoRow imgStart='' className='hero'>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>Coming soon!</Heading>
                            <Subtitle lightTextDesc={lightText}>Reimaging the way Agents, Buyers and Sellers to communicate about and share Real-Estate</Subtitle>
                            <SignUpText lightTextDesc={lightText}>SIGN UP FOR RELEASE DATES AND UPDATES.</SignUpText>
                            <Forms/>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start=''>
                            <Image src={Iphone} alt='iphone-img'/>
                        </ImgWrapper>
                    </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection