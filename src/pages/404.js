import React from 'react'
import ErrorNotFound from '../images/404.png'
import styled from 'styled-components';
import { navigate } from 'gatsby'
import GlobalStyle from '../components/globalStyles'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'

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
    padding: 150px 0px;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#1F2936')};
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
    font-size:64px;
    line-height:1.1;
    margin-bottom:24px;
    font-family:‘Poppins’,sans-serif;
    font-weight:bold;
    @media screen and (max-width:768px) {
        font-size:36px;
        font-family:‘Lexend’, sans-serif;
    }
`
const Subtitle = styled.p`
    color: ${({lightTextDesc}) => (lightTextDesc ? '#fff' : '#000')};
    font-size:18px;
    line-height:24px;
    margin-bottom:35px;
    max-width:440px;
    font-family:‘Poppins’, sans-serif;
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
        background: #28B8A7;
        font-family: ‘Poppins’, sans-serif;
        color:#fff;
        width:150px;
        height: 49px;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 8px ;
        border: none;
        margin-top: 2px;
        cursor:pointer;
        position: relative;
        transition-duration: 0.3s;
        &:hover {
            background:#22A494;
            color:#fff;
        }
`
const lightBg = false;
const lightText = true;
const NotFoundPage = () => {
    return (
        <>
            <GlobalStyle/>
            <Seo/>
            <Navbar/>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart=''>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>Error 404, not found</Heading>
                            <Subtitle lightTextDesc={lightText}>Ops! looks like this page doesn’t exist</Subtitle>
                            <Button onClick={() =>{navigate('/')}}>Go Back</Button>
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
            <Footer/>
        </>
    )
}
export default NotFoundPage
