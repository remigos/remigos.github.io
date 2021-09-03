import styled from 'styled-components'

export const Contactsection = styled.div`
    padding: 250px 0 250px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    background: #fff;
`
export const MainContent = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        margin: 0 30px;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
`
export const ImageContainer = styled.div`
    justify-content:center;
    align-items:center;
    margin-bottom:-20px;
`
export const SkydiverImage = styled.img`
    max-width:100%;
    vertical-align:middle;
    display:inline-block;
    position:absolute;
    max-height:300px;
    margin-top:-30%;
    right:0;

    @media screen and (max-width:1100px) {
        margin-top:-30%;

    }
    @media screen and (max-width:768px) {
        margin-top:-100%;

    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        margin: 0 30px;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
`
export const Title = styled.h1`
    color: #000;
    font-size:48px;
    line-height:1.1;
    margin-bottom:24px;
    font-family:'Kanit', sans-serif;
    
    @media screen and (max-width:768px) {
        font-size:36px;
        font-family:'Lexend', sans-serif;

    }

`
export const Text = styled.p`
    color: #000;
    font-size:22px;
    line-height:24px;
    margin-bottom:35px;
    max-width:550px;
    font-weight:bold;
    font-family:'Inter', sans-serif;
    text-align:center;
`
export const SubText = styled.p`
    color: #000;
    font-size:16px;
    font-weight:bold;
    line-height:24px;
    margin-bottom:35px;
    max-width:440px;
    font-family:'Inter', sans-serif;
    text-align:center;

`
