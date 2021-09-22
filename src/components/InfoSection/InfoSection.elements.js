import styled,{keyframes} from 'styled-components';

const move = keyframes`
    0% { transform:translateY(-5px)}
    50% { transform:translateY(10px)}
    100% { transform:translateY(-5px)}

`

export const InfoSec = styled.div`
    color:#fff;
    padding: 10px 0px;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#1F2936')};
    border-radius: 100%/0 0 30px 30px;
    box-shadow: 0px 150px 0px white;
   
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

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom:60px;

    @media screen and (max-width:768px){
        padding-bottom:65px;
    }
`


export const Heading = styled.h1`
    color: ${({lightText}) => (lightText ? '#fff' : '#000')};
    font-size:64px;
    line-height:1.1;
    margin-bottom:24px;
    font-family:'Kanit', sans-serif;
    
    @media screen and (max-width:768px) {
        font-size:36px;
        font-family:'Lexend', sans-serif;

    }

`
export const Subtitle = styled.p`
    color: ${({lightTextDesc}) => (lightTextDesc ? '#fff' : '#000')};
    font-size:18px;
    line-height:24px;
    margin-bottom:35px;
    max-width:440px;
    font-family:'Inter', sans-serif;


`
export const SignUpText = styled.p`
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

export const ImgWrapper = styled.div`
    max-width:750px;
    display:flex;
    justify-content:${({start}) => (start ? 'flex-start' : 'flex-end')};
    animation: ${move} 3s ease infinite;


`
export const Image = styled.img`
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