import styled from 'styled-components';

export const InfoSec = styled.div`
    color:#fff;
    padding: 0px 0px 100px;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#1F2936')};
`

export const InfoRow = styled.div`
    display:flex;
    margin: 0px -100px -55px -15px;
    flex-wrap:wrap;
    align-items:center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
    @media screen and (max-width:768px) {
        margin: 0 -15px -15px -15px;

    }
`

export const InfoColumn = styled.div`
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

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom:30px;

    @media screen and (max-width:768px){
        padding-bottom:30px;
       
    }
`


export const Heading = styled.h1`
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
export const Subtitle = styled.p`
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

export const ImgWrapper = styled.div`
    max-width:750px;
    display:flex;
    justify-content:${({start}) => (start ? 'flex-start' : 'flex-end')};
    @media screen and (max-width:415px){
        display:block;
        margin-left:auto;
    }
`

export const Devices = styled.img`
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
export const Background = styled.img`
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
