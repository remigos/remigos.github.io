import styled from 'styled-components';

export const InfoSec = styled.div`
    color:#fff;
    padding: 40px 0px;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#1F2936')};
`

export const InfoRow = styled.div`
    display:flex;
    margin: 0 -15px -15px -15px;
    flex-wrap:wrap;
    align-items:center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right:15px;
    padding-left:15px;
    flex:1;
    max-width: 50%;
    flex-basis: 50%;
    @media screen and (max-width: 768px) {
        max-width:100%;
        flex-basis:100%;
        display:flex;
        justify-content:center;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom:0px;

    @media screen and (max-width:768px){
        padding-bottom:65px;
    }
`


export const Heading = styled.h1`
    color: ${({lightText}) => (lightText ? '#fff' : '#000')};
    font-size:28px;
    line-height:1.1;
    margin-bottom:24px;
    max-width:400px;
    font-family:'Roboto', sans-serif;

    @media screen and (max-width:768px){
        font-family:'Lexend', sans-serif;
        text-align:center;
        color: #1F2936;
        max-width:350px;

    }

`
export const Subtitle = styled.p`
    color: ${({lightTextDesc}) => (lightTextDesc ? '#fff' : '#000')};
    font-size:18px;
    line-height:24px;
    margin-bottom:35px;
    max-width:400px;
    font-family:'Roboto', sans-serif;
    @media screen and (max-width:768px){
        font-size:16px;
        text-align:center;

    }
    

`

export const ImgWrapper = styled.div`
    max-width:750px;
    display:flex;
    justify-content:${({start}) => (start ? 'flex-start' : 'flex-end')};

`
export const Image = styled.img`
    padding-right: 0;
    border:0;
    max-width:100%;
    vertical-align:middle;
    display:inline-block;
    max-height:500px;

`