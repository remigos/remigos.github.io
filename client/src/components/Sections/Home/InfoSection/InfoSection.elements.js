import styled from 'styled-components';

export const InfoSec = styled.div`
    color:#000;
    padding: 100px 0px;
    background: #fff;
    border-radius: 100%/0 0 30px 30px;
    box-shadow: 0px 150px 0px white;
    
    @media screen and (max-width:768px) {
        padding: 50px 0px;
    }
`

export const InfoRow = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
    margin-bottom: 15px;

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

export const TextWrapper = styled.div`
    max-width: 670px;
    width:100%;
    @media screen and (max-width:768px){
        padding-bottom:35px;
    }
`


export const Heading = styled.h1`
    color: #000;
    font-size:64px;
    line-height:80px;
    font-weight: 400;
    padding-top:30px;
    width:100%;
    max-width:540px;
    @media screen and (max-width: 960px) {
        font-size: 40px;
    }
    @media screen and (max-width:768px) {
        font-size:30px;
        line-height:40px;
    }

`
export const Subtitle = styled.p`
    color: #1F2936;
    font-size:20px;
    line-height:30px;
    width:100%;
    max-width:540px;
    font-weight: 300;
    padding: 40px 0;
    @media screen and (max-width: 960px) {
        font-size: 20px;
    }
    @media screen and (max-width: 768px) {
        font-size: 16px;
        padding: 20px 0;

    }
`
export const SignUpText = styled.p`
        color: #000;
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

export const ImgWrapper = styled.div`
    display:flex;
    justify-content:'flex-end';


`
export const Image = styled.img`
    width:100%;
    max-width: 517px;
    height:auto;
    @media screen and (max-width: 768px) {
        width:248px;
    }
`


export const ObjectMain = styled.img`
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

export const Button = styled.button`
    width: 292px;
    height:48px;
    border-radius: 6px;
    color: #fff;
    background-color: #28B8A7;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid transparent;
    text-align: center;
    cursor:pointer;
    &:hover {
            background:#DCF8F4;
            color: #28B8A7;
        }
    @media screen and (max-width:678px) {
        width: 327px;
        height:40px;
    }
`