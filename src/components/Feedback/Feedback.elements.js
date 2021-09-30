import styled from 'styled-components'

export const FeedbackSection = styled.div`
    padding: 200px 0px 50px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    background: #00AEEF;
    @media screen and (max-width:768px){
        padding: 150px 0 50px;

    }
`

export const FeedbackWrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        margin: 0 10px;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
`

export const FeedbackHeading = styled.h1`
    color: #fff;
    font-size: 28px;
    line-height:1.1;
    margin-bottom:24px;
    font-family:'Roboto', sans-serif;

    @media screen and (max-width:768px){
        font-family:'Lexend', sans-serif;
        text-align:center;
    }
`
export const FeedbackText = styled.p`
    color: #fff;
    font-size:18px;
    line-height:24px;
    margin-bottom:35px;
    font-family:'Roboto', sans-serif;
    max-width:900px;
    text-align:center;
    @media screen and (max-width:768px){
        font-size:16px;
    }
`

export const ImageContainer = styled.div`
    justify-content:center;
    align-items:center;
    margin-bottom:-10px;
    
`

export const Image = styled.img`
    max-width:100%;
    vertical-align:middle;
    display:inline-block;
    max-height:700px;
`
export const ImageFeedbackWait = styled.img`
    max-width:100%;
    vertical-align:middle;
    display:inline-block;
    max-height:167px;
`
export const SecondColumn = styled.div`
    padding: 70px 0px ;
    padding-left:100px;
    padding-right:15px;
    max-width: 100%;
    
    @media screen and (min-width:4000px){
        margin-left:auto;
        margin-right:auto;
    }
    @media screen and (max-width: 768px) {
        max-width:100%;
        flex-basis:100%;
        padding-left:15px;
        display:flex;
        justify-content:center;
        
    }
`
export const SecondText = styled.div`
    max-width: 2000px;
    padding-top: 0;
    padding-bottom:60px;

    @media screen and (max-width:768px){
        padding-bottom:65px;
    }
`
export const Subtitle = styled.h2`
    color: #fff;
    font-size:28px;
    line-height:1.1;
    margin-bottom:24px;
    font-family:'Inter', sans-serif;

    @media screen and (max-width:768px){
        font-family:'Lexend', sans-serif;
        text-align:center;
    }

`
export const Text = styled.p`
    color: #fff;
    font-size:16px;
    line-height:32px;
    margin-bottom:35px;
    max-width:1600px;
    font-family:'Inter', sans-serif;
    @media screen and (max-width:768px){
        font-family:'Roboto', sans-serif;
        text-align:center;

    }
`
export const ObjectMain = styled.img`
    max-width: 100%;
    width:135px;
    z-index: 1000;
    height:auto;
    position:relative;
    left:1150px;
    top:150px;
    @media screen and (max-width: 768px) {
        display:none;
    }
`