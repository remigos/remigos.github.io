import React from 'react'
import ErrorNotFound from '../images/404NotFound.png'
import styled from 'styled-components';
import LogoRemigo from '../images/RemigoText&Logo.png'
import { navigate } from 'gatsby'
import GlobalStyle from '../components/globalStyles'

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

const Logo = styled.img`
    max-width:10%;
    height:auto;
    margin-top:40px;
    margin-bottom:100px;
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
    flex-direction: row;
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
    font-size:48px;
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

const ImgWrapper = styled.div`
    max-width:750px;
    display:flex;
    justify-content:flex-end;


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


const Button = styled.button`
        background: #fff;
        color:#28B8A7;
        width:150px;
        height: 49px;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 8px ;
        border: 2px solid #28B8A7;
        margin-top: 2px;
        cursor:pointer;
        position: relative;
        transition-duration: 0.3s;
        &:hover {
            background:#28B8A7;
            color:#fff;
        }
`

const lightBg = true;
const lightText = false;

const NotFoundPage = () => {

    return (
        <>
            <GlobalStyle/>
            <InfoSec lightBg={lightBg}>
                <Container>
                <Logo src={LogoRemigo} alt='logo-img'/>

                    <InfoRow imgStart='' className='404'>
                    
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>Error 404 not found!</Heading>
                            <Subtitle lightTextDesc={lightText}>Ops! looks like this page doesn’t exist</Subtitle>
                            <Button onClick={() =>{navigate("/")}}>Go Back</Button>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start=''>
                            <Image src={ErrorNotFound} alt='error-img'/>
                        </ImgWrapper>
                    </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default NotFoundPage