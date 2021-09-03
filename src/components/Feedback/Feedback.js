import React from 'react'
import {FeedbackSection, FeedbackWrapper, FeedbackHeading, FeedbackText,ImageContainer,Image,ImageFeedbackWait,SecondText,Subtitle,Text,SecondColumn} from './Feedback.elements'
import feedback from '../../assets/Feedback.png'
import feedbackWaiting1 from '../../assets/feedbackWait1.png'
import feedbackWaiting2 from '../../assets/feedbackWait2.png'
import feedbackWaiting3 from '../../assets/feedbackWait3.png'

const Feedback = () => {
    return (
        <FeedbackSection>
            <FeedbackWrapper>
                <FeedbackHeading>Consolidate Feedback</FeedbackHeading>
                <FeedbackText>Consolidate client feedback and property notes in one easy to use platform. Stop wasting time digging through emails for conversations that happened weeks ago.</FeedbackText>
                <ImageContainer>
                    <Image src={feedback} alt='feedback'/>
                </ImageContainer>
                <ImageContainer>
                    <ImageFeedbackWait src={feedbackWaiting1} alt='feedback-wait'/>
                </ImageContainer>
                <ImageContainer>
                    <ImageFeedbackWait src={feedbackWaiting2} alt='feedback-wait'/>
                </ImageContainer>
                <ImageContainer>
                    <ImageFeedbackWait src={feedbackWaiting3} alt='feedback-wait'/>
                </ImageContainer>
            </FeedbackWrapper>
            <SecondColumn>
                <SecondText>
                    <Subtitle>Coming Late 2021</Subtitle>
                    <Text>Remigo is a real estate focused communication tool designed to help home buyers, sellers and realtors exchange information, properties and feedback in a concise and convenient method. Make faster decisions with more confidence by having a single conversation on a single platform rather than hunting through texts and emails. </Text>
                    <Text>Improving communication makes the home shopping experience better, faster and more enjoyable for all parties. Real time notifications, time stamped conversations and feedback with context makes real estate communication smoother by avoiding misunderstandings, missed notes, and confusing language. Communicate with confidence centralized around specific houses.</Text>    
                </SecondText>
            </SecondColumn>
        </FeedbackSection>
    )
}

export default Feedback
