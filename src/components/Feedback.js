import React from 'react'
import Objects from '../images/Object.png'
import styled from 'styled-components'
import FeedbackDesign from './FeedbackDesign'


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

const FeedbackSection = styled.div`
    padding: 200px 0px 50px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    background: #00AEEF;
    @media screen and (max-width:768px){
        padding: 150px 0 50px;

    }
`

const FeedbackWrapper = styled.div`
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

const FeedbackHeading = styled.h1`
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
const FeedbackText = styled.p`
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

const SecondColumn = styled.div`
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
const SecondText = styled.div`
    max-width: 2000px;
    padding-top: 0;
    padding-bottom:60px;

    @media screen and (max-width:768px){
        padding-bottom:65px;
    }
`
const Subtitle = styled.h2`
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
const Text = styled.p`
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
const ObjectMain = styled.img`
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

const Feedback = () => {
    return (
        <FeedbackSection>
            <Container>
                <ObjectMain src={Objects} alt="object png"/>
                <FeedbackWrapper>
                    <FeedbackHeading>Consolidate Feedback</FeedbackHeading>
                    <FeedbackText>Consolidate client feedback and property notes in one easy to use platform. Stop wasting time digging through emails for conversations that happened weeks ago.</FeedbackText>
                    <FeedbackDesign/>
                </FeedbackWrapper>
                <SecondColumn>
                    <SecondText>
                        <Subtitle>Coming Late 2021</Subtitle>
                        <Text>Remigo is a real estate focused communication tool designed to help home buyers, sellers and realtors exchange information, properties and feedback in a concise and convenient method. Make faster decisions with more confidence by having a single conversation on a single platform rather than hunting through texts and emails.</Text>
                        <Text>Improving communication makes the home shopping experience better, faster and more enjoyable for all parties. Real time notifications, time stamped conversations and feedback with context makes real estate communication smoother by avoiding misunderstandings, missed notes, and confusing language. Focus your communication on the few properties that matter instead of the dozens that don’t.</Text>    
                    </SecondText>
                </SecondColumn>
            </Container>
        </FeedbackSection>
    )
}

export default Feedback