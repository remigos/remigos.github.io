import React from 'react';
import Forms from './Form'
import skydiver from '../images/skydiver.png'
import styled,{keyframes} from 'styled-components'

const move = keyframes`
    0% { transform:translateY(-5px)}
    50% { transform:translateY(35px)}
    100% { transform:translateY(-5px)}

`
const Contactsection = styled.div`
    padding: 250px 0 250px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    background: #fff;
`
const MainContent = styled.div`
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
const ImageContainer = styled.div`
    justify-content:center;
    align-items:center;
    margin-bottom:-20px;
`
const SkydiverImage = styled.img`
    max-width:100%;
    vertical-align:middle;
    display:inline-block;
    position:absolute;
    max-height:300px;
    margin-top:-30%;
    right:0;
    animation: ${move} 4.5s ease infinite;

    @media screen and (max-width:1100px) {
        margin-top:-30%;

    }
    @media screen and (max-width:768px) {
        margin-top:-100%;

    }
    @media screen and (min-width:4000px) {
        margin-top:-10%;
        right:300px;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin: 0 auto;

    span {
          color:#C90000;
        }
    @media screen and (max-width: 768px) {
        margin: 0 30px;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
`
const Title = styled.h1`
    color: #000;
    font-size:48px;
    line-height:1.1;
    margin-bottom:24px;
    font-family:'Kanit', sans-serif;
    
    @media screen and (max-width:768px) {
        font-size:36px;
        font-family:'Lexend', sans-serif;
        color:#1f2936;
    }

`
const Text = styled.p`
    color: #000;
    font-size:22px;
    line-height:24px;
    margin-bottom:35px;
    max-width:550px;
    font-weight:bold;
    font-family:'Inter', sans-serif;
    text-align:center;
    @media screen and (max-width:768px) {
        font-size:16px;
        font-weight:400;
        font-family:'Roboto', sans-serif;
        color:#1f2936;
    }
`
const SubText = styled.p`
    color: #000;
    font-size:16px;
    font-weight:bold;
    line-height:24px;
    margin-bottom:35px;
    max-width:440px;
    font-family:'Inter', sans-serif;
    text-align:center;
    span {
        color:#28B8A7;
    }
    @media screen and (max-width:768px) {
        font-size:14px;
        font-family:'Roboto', sans-serif;
        color:#1f2936;
    }
`

const FormSection = styled.div`
    p {
        color:#C90000;
    }

`
const ContactUs = () => {

    return (
    <Contactsection>
      <MainContent>
          <ImageContainer>
                <SkydiverImage src={skydiver} alt="skydiver png" width='400' height='400'/>
          </ImageContainer>
          <TextContainer>
                  <Title>Coming soon!</Title>
                  <Text>Reimaging the way Agents, Buyers, and Sellers communicate about and share Real Estate</Text>
                  <SubText>SIGN UP FOR RELEASE DATES AND UPDATES.</SubText>
                  <FormSection>
                    <Forms/>
                  </FormSection>
            </TextContainer>
      </MainContent>
  </Contactsection>
    );  
}

export default ContactUs;