import styled from 'styled-components'

export const FeedbackSection = styled.div`
    padding: 100px 0 50px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    background: #00AEEF;
`

export const FeedbackWrapper = styled.div`
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

export const FeedbackHeading = styled.h1`
    color: #fff;
    font-size: 28px;
    line-height:1.1;
    margin-bottom:24px;
    font-family:'Roboto', sans-serif;

`
export const FeedbackText = styled.p`
    color: #fff;
    font-size:18px;
    line-height:24px;
    margin-bottom:35px;
    font-family:'Roboto', sans-serif;
    max-width:900px;
    text-align:center;
`

export const ImageContainer = styled.div`
    justify-content:center;
    align-items:center;
    margin-bottom:-20px;
    
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
    margin-bottom: 15px;
    padding-left:100px;
    padding-right:15px;

    max-width: 100%;
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

`
export const Text = styled.p`
    color: #fff;
    font-size:16px;
    line-height:24px;
    margin-bottom:35px;
    max-width:1600px;
    font-family:'Inter', sans-serif;


`